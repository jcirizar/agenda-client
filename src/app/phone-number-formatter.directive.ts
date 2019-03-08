import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';

import {Directive, ElementRef, HostListener, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, filter, takeWhile} from 'rxjs/operators';

@Directive({
  selector: '[jiPhoneNumberFormatter]'
})
export class PhoneNumberFormatterDirective implements OnDestroy {
  alive = true;
  private pnu: PhoneNumberUtil;
  private number = new BehaviorSubject('');

  @HostListener('keyup', ['$event'])
  onChange() {
    const input = this.el.nativeElement.value;
    this.number.next(input);
  }

  constructor(private el: ElementRef) {
    this.pnu = PhoneNumberUtil.getInstance();
    this.number.asObservable()
      .pipe(
        takeWhile(() => this.alive),
        distinctUntilChanged(),
        filter((val) => typeof val !== 'undefined')
      )
      .subscribe((value) => {
        if (value === '') {
          return;
        }

        const numbersFilteredJoined = value.split('')
          .map((st) => {
            if (st && /^\d$/.test(st)) {
              return st;
            }
          })
          .filter((v) => !!v)
          .join('');

        let final;

        try {

          const parsed = this.pnu.parseAndKeepRawInput(numbersFilteredJoined, 'US');
          final = this.pnu.format(parsed, PhoneNumberFormat.NATIONAL);
        } catch (e) {
          final = numbersFilteredJoined;
        }
        this.el.nativeElement.value = final;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
