(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");





var routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    },
    {
        path: 'appointments',
        component: _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"signature\">\n  <a href=\"https://jcirizar.com\" mat-button color=\"accent\" title=\"Juan C. Irizar\">Juan C. Irizar</a>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ji-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slot/slot.component */ "./src/app/slot/slot.component.ts");
/* harmony import */ var _name_phone_name_phone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./name-phone/name-phone.component */ "./src/app/name-phone/name-phone.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _phone_number_formatter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phone-number-formatter.directive */ "./src/app/phone-number-formatter.directive.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsComponent"],
                _slot_slot_component__WEBPACK_IMPORTED_MODULE_9__["SlotComponent"],
                _name_phone_name_phone_component__WEBPACK_IMPORTED_MODULE_10__["NamePhoneComponent"],
                _phone_number_formatter_directive__WEBPACK_IMPORTED_MODULE_12__["PhoneNumberFormatterDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _name_phone_name_phone_component__WEBPACK_IMPORTED_MODULE_10__["NamePhoneComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointments/appointments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"header\">\n\n    <button [routerLink]=\"['/']\" mat-icon-button color=\"primary\">\n      <mat-icon aria-label=\"Go Home\">chevron_left</mat-icon>\n    </button>\n\n    <mat-form-field appearance=\"outline\" class=\"no-padding\" color=\"primary\">\n      <mat-label>Choose a date</mat-label>\n      <input matInput [matDatepicker]=\"mp\" [value]=\"date\" (dateChange)=\"onDateChange($event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"mp\"></mat-datepicker-toggle>\n      <mat-datepicker #mp disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n  </div>\n\n  <div class=\"slots\">\n\n    <ji-slot *ngFor=\"let appointment of appointments; let i = index\"\n             (click)=\"openDialog(appointment, i)\"\n             [booked]=\"appointment.booked\"\n             [time]=\"appointment.time\">\n    </ji-slot>\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/appointments/appointments.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/appointments/appointments.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.content {\n  width: 100%;\n  flex: 1;\n  height: 100%;\n  overflow: auto; }\n\n.header {\n  padding: 1rem;\n  background-color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem; }\n\n.slots {\n  margin: 0 auto;\n  max-width: 90%; }\n\n.slots ji-slot {\n    display: block;\n    margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsaS9EZXZlbG9wbWVudC9hZ2VuZGEtY2xpZW50L3NyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsMENBQXlDO0VBQ3pDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUEwQixFQUFBOztBQUc1QjtFQUNFLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRmhCO0lBS0ksY0FBYztJQUNkLG1CQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy90aGVtZS92YXJpYWJsZXNcIjtcbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAkcGFkZGluZyAvMjtcbn1cblxuLnNsb3RzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuXG4gIGppLXNsb3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nIC8yO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/appointments/appointments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/appointments/appointments.component.ts ***!
  \********************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-helpers.service */ "./src/app/time-helpers.service.ts");
/* harmony import */ var _name_phone_name_phone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../name-phone/name-phone.component */ "./src/app/name-phone/name-phone.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(time, dialog) {
        this.time = time;
        this.dialog = dialog;
        this.date = new Date();
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.drawAppointments();
        console.log('|=> AppointmentsComponent.ngOnInit() this.appointments', this.appointments);
    };
    AppointmentsComponent.prototype.openDialog = function (appointment, index) {
        var _this = this;
        var dialogRef = this.dialog.open(_name_phone_name_phone_component__WEBPACK_IMPORTED_MODULE_3__["NamePhoneComponent"], {
            width: '80%',
            panelClass: 'no-background',
            backdropClass: 'darker-backdrop',
            data: { appointment: appointment }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            if (!result) {
                console.log('Dialog cancelled');
            }
            if (result) {
                var newAppointments = _this.appointments.map(function (app, i) {
                    if (index === i) {
                        return result;
                    }
                    return app;
                });
                _this.appointments = newAppointments;
                _this.setAppointmentsWithDate(_this.date, newAppointments);
            }
        });
    };
    AppointmentsComponent.prototype.onDateChange = function ($event) {
        this.date = $event.value;
        this.drawAppointments();
    };
    AppointmentsComponent.prototype.formatAsKeyDate = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(date, 'M/d/yyyy');
    };
    AppointmentsComponent.prototype.getAppointmentsWithDate = function (date) {
        var appointments;
        try {
            appointments = JSON.parse(localStorage.getItem(this.formatAsKeyDate(date)));
        }
        catch (e) {
            appointments = null;
        }
        return appointments;
    };
    AppointmentsComponent.prototype.setAppointmentsWithDate = function (date, appointments) {
        localStorage.setItem(this.formatAsKeyDate(date), JSON.stringify(appointments));
    };
    AppointmentsComponent.prototype.drawAppointments = function () {
        var dateData = this.getAppointmentsWithDate(this.date);
        if (dateData) {
            this.appointments = dateData;
        }
        else {
            this.appointments = this.time
                .getSlotsIntervals(this.date, '9:00', 9, '60')
                .map(function (time) {
                return {
                    booked: false,
                    time: time
                };
            });
        }
    };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ji-appointments',
            template: __webpack_require__(/*! ./appointments.component.html */ "./src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.scss */ "./src/app/appointments/appointments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_time_helpers_service__WEBPACK_IMPORTED_MODULE_2__["TimeHelpersService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-display-2\">Welcome to my Agenda Application</h1>\n<button [routerLink]=\"['/appointments']\" mat-flat-button color=\"primary\">Create Appointment</button>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 2rem; }\n\nh1 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsaS9EZXZlbG9wbWVudC9hZ2VuZGEtY2xpZW50L3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9jYXJsaS9EZXZlbG9wbWVudC9hZ2VuZGEtY2xpZW50L3NyYy9zdHlsZXMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQ0hZLEVBQUE7O0FETWQ7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdGhlbWUvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHBhZGRpbmc6IDJyZW07XG4kaDEtc2l6ZTogMi42cmVtO1xuIl19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ji-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/name-phone/name-phone.component.html":
/*!******************************************************!*\
  !*** ./src/app/name-phone/name-phone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form [formGroup]=\"namePhoneForm\" novalidate (ngSubmit)=\"formSubmit()\">\n\n    <mat-card-title>\n      {{variableText}} {{appointment?.time | date:'short'}}\n    </mat-card-title>\n\n    <mat-card-content>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\">\n        <mat-icon matSuffix>mode_edit</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Phone Number</mat-label>\n        <input type=\"tel\" matInput jiPhoneNumberFormatter formControlName=\"phone\">\n        <mat-icon matSuffix>mode_edit</mat-icon>\n      </mat-form-field>\n\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button type=\"submit\"\n              [disabled]=\"namePhoneForm.pristine || namePhoneForm.invalid\"\n              mat-button mat-raised-button color=\"primary\">{{variableText}}</button>\n      <button (click)=\"cancelDialog($event)\"\n              mat-button color=\"warn\">Cancel\n      </button>\n    </mat-card-actions>\n\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/name-phone/name-phone.component.scss":
/*!******************************************************!*\
  !*** ./src/app/name-phone/name-phone.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  margin-bottom: 2rem; }\n\nmat-form-field {\n  width: 100%; }\n\nmat-card-actions {\n  text-align: right;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsaS9EZXZlbG9wbWVudC9hZ2VuZGEtY2xpZW50L3NyYy9hcHAvbmFtZS1waG9uZS9uYW1lLXBob25lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2NhcmxpL0RldmVsb3BtZW50L2FnZW5kYS1jbGllbnQvc3JjL3N0eWxlcy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0hZLEVBQUE7O0FES2Q7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYW1lLXBob25lL25hbWUtcGhvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdGhlbWUvdmFyaWFibGVzXCI7XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmc7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4iLCIkcGFkZGluZzogMnJlbTtcbiRoMS1zaXplOiAyLjZyZW07XG4iXX0= */"

/***/ }),

/***/ "./src/app/name-phone/name-phone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/name-phone/name-phone.component.ts ***!
  \****************************************************/
/*! exports provided: NamePhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePhoneComponent", function() { return NamePhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var NamePhoneComponent = /** @class */ (function () {
    function NamePhoneComponent(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.appointment = data.appointment;
        this.variableText = this.appointment.booked ? 'Modify' : 'Book';
    }
    NamePhoneComponent.prototype.ngOnInit = function () {
        this.namePhoneForm = this.fb.group({
            name: [this.appointment.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phone: [this.appointment.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    NamePhoneComponent.prototype.cancelDialog = function ($event) {
        $event.preventDefault();
        this.dialogRef.close();
    };
    NamePhoneComponent.prototype.formSubmit = function () {
        var data = Object.assign({}, this.appointment, this.namePhoneForm.getRawValue(), { booked: true });
        this.dialogRef.close(data);
    };
    NamePhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ji-name-phone',
            template: __webpack_require__(/*! ./name-phone.component.html */ "./src/app/name-phone/name-phone.component.html"),
            styles: [__webpack_require__(/*! ./name-phone.component.scss */ "./src/app/name-phone/name-phone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], NamePhoneComponent);
    return NamePhoneComponent;
}());



/***/ }),

/***/ "./src/app/phone-number-formatter.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/phone-number-formatter.directive.ts ***!
  \*****************************************************/
/*! exports provided: PhoneNumberFormatterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberFormatterDirective", function() { return PhoneNumberFormatterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PhoneNumberFormatterDirective = /** @class */ (function () {
    function PhoneNumberFormatterDirective(el) {
        var _this = this;
        this.el = el;
        this.alive = true;
        this.number = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.pnu = google_libphonenumber__WEBPACK_IMPORTED_MODULE_1__["PhoneNumberUtil"].getInstance();
        this.number.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) { return typeof val !== 'undefined'; }))
            .subscribe(function (value) {
            if (value === '') {
                return;
            }
            var numbersFilteredJoined = value.split('')
                .map(function (st) {
                if (st && /^\d$/.test(st)) {
                    return st;
                }
            })
                .filter(function (v) { return !!v; })
                .join('');
            var final;
            try {
                var parsed = _this.pnu.parseAndKeepRawInput(numbersFilteredJoined, 'US');
                final = _this.pnu.format(parsed, google_libphonenumber__WEBPACK_IMPORTED_MODULE_1__["PhoneNumberFormat"].NATIONAL);
            }
            catch (e) {
                final = numbersFilteredJoined;
            }
            _this.el.nativeElement.value = final;
        });
    }
    PhoneNumberFormatterDirective.prototype.onChange = function () {
        var input = this.el.nativeElement.value;
        this.number.next(input);
    };
    PhoneNumberFormatterDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PhoneNumberFormatterDirective.prototype, "onChange", null);
    PhoneNumberFormatterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[jiPhoneNumberFormatter]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], PhoneNumberFormatterDirective);
    return PhoneNumberFormatterDirective;
}());



/***/ }),

/***/ "./src/app/slot/slot.component.html":
/*!******************************************!*\
  !*** ./src/app/slot/slot.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [class.booked]=\"booked\">\n  <mat-card-title>\n    {{time | date:'shortTime'}}\n  </mat-card-title>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/slot/slot.component.scss":
/*!******************************************!*\
  !*** ./src/app/slot/slot.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".booked {\n  background-color: #ffdcdc;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsaS9EZXZlbG9wbWVudC9hZ2VuZGEtY2xpZW50L3NyYy9hcHAvc2xvdC9zbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQW9DO0VBQ3BDLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nsb3Qvc2xvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjAsIDIyMCk7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/slot/slot.component.ts":
/*!****************************************!*\
  !*** ./src/app/slot/slot.component.ts ***!
  \****************************************/
/*! exports provided: SlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotComponent", function() { return SlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlotComponent = /** @class */ (function () {
    function SlotComponent() {
    }
    SlotComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], SlotComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SlotComponent.prototype, "booked", void 0);
    SlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ji-slot',
            template: __webpack_require__(/*! ./slot.component.html */ "./src/app/slot/slot.component.html"),
            styles: [__webpack_require__(/*! ./slot.component.scss */ "./src/app/slot/slot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlotComponent);
    return SlotComponent;
}());



/***/ }),

/***/ "./src/app/time-helpers.service.ts":
/*!*****************************************!*\
  !*** ./src/app/time-helpers.service.ts ***!
  \*****************************************/
/*! exports provided: TimeHelpersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeHelpersService", function() { return TimeHelpersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



var twenty4HoursClock = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
var TimeHelpersService = /** @class */ (function () {
    function TimeHelpersService() {
    }
    TimeHelpersService.prototype.getSlotsIntervals = function (date, start, shiftLength, appointmentsDuration) {
        if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isDate"])(date)) {
            throw new Error('date should be a proper Date instance');
        }
        if (typeof start !== 'string' || !twenty4HoursClock.test(start)) {
            throw new Error('start must be a valid 24 hours format string. Example: 19:12');
        }
        if (typeof shiftLength !== 'number' || shiftLength > 24 || shiftLength < 1) {
            throw new Error('shiftLength must be a number from 1 to 23 inclusive');
        }
        var _a = start.split(':'), hour = _a[0], minutes = _a[1];
        var hourSet = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["setHours"])(date, +hour);
        var minutesSet = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["setMinutes"])(hourSet, +minutes);
        var startOfDayWork = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfMinute"])(minutesSet);
        // for simplicity lets assume meetings always start at even hours (9:00, 10:00, etc) then we will add the intervals
        // sub a min to avoid starting at 10 if 9:00 is the starting point
        var firstAppointment = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfHour"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(minutesSet, 1), 1));
        var appointments = [];
        var timeAgregator = function (time) {
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addMinutes"])(time, +appointmentsDuration);
        };
        // Assuming is always 8 hours shift, could add an end of the day param too.
        var endOfDayWork = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(startOfDayWork, shiftLength);
        var lastAppointment = firstAppointment;
        while (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(lastAppointment, endOfDayWork)) {
            appointments.push(lastAppointment);
            lastAppointment = timeAgregator(lastAppointment);
        }
        return appointments;
    };
    TimeHelpersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeHelpersService);
    return TimeHelpersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carli/Development/agenda-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map