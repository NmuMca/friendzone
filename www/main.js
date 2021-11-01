(self["webpackChunkfriendZone"] = self["webpackChunkfriendZone"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-registration/user-registration.component */ 68);
/* harmony import */ var _user_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/feed/feed.component */ 629);
/* harmony import */ var _user_postmaker_postmaker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/postmaker/postmaker.component */ 9119);
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/profile/profile.component */ 9080);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ 9099);









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'UserRegistration', component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_1__.UserRegistrationComponent },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__.UserComponent,
        children: [
            { path: 'feed', component: _user_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__.FeedComponent },
            { path: 'profile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent },
            { path: 'post', component: _user_postmaker_postmaker_component__WEBPACK_IMPORTED_MODULE_3__.PostmakerComponent },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration/user-registration.component */ 68);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ 9099);
/* harmony import */ var _user_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/navbar/navbar.component */ 2713);
/* harmony import */ var _user_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/tabs/tabs.component */ 9958);
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/profile/profile.component */ 9080);
/* harmony import */ var _user_postmaker_postmaker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/postmaker/postmaker.component */ 9119);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 2880);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__.UserRegistrationComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent, _user_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _user_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__.TabsComponent, _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, _user_postmaker_postmaker_component__WEBPACK_IMPORTED_MODULE_8__.PostmakerComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy }, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__.ImagePicker],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.component.html */ 2266);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 5133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration/user-registration.component */ 68);






let HomeComponent = class HomeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    showModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__.UserRegistrationComponent
            });
            return yield modal.present();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeComponent);



/***/ }),

/***/ 68:
/*!******************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationComponent": () => (/* binding */ UserRegistrationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_registration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-registration.component.html */ 4343);
/* harmony import */ var _user_registration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-registration.component.scss */ 8780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);






let UserRegistrationComponent = class UserRegistrationComponent {
    constructor(modalCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.http = http;
    }
    ngOnInit() { }
    onSubmit(data) {
        let headers = new Headers();
        headers.append('Contetn-Type', 'application/json');
        this.http.post('http://127.0.0.1:8000/people', JSON.stringify(data))
            .subscribe((result) => {
            console.log(result);
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
UserRegistrationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UserRegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-registration',
        template: _raw_loader_user_registration_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_registration_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserRegistrationComponent);



/***/ }),

/***/ 629:
/*!*********************************************!*\
  !*** ./src/app/user/feed/feed.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedComponent": () => (/* binding */ FeedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_feed_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./feed.component.html */ 7645);
/* harmony import */ var _feed_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.component.scss */ 1846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FeedComponent = class FeedComponent {
    constructor() { }
    ngOnInit() { }
};
FeedComponent.ctorParameters = () => [];
FeedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-feed',
        template: _raw_loader_feed_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_feed_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FeedComponent);



/***/ }),

/***/ 2713:
/*!*************************************************!*\
  !*** ./src/app/user/navbar/navbar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./navbar.component.html */ 1239);
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ 9239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() { }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavbarComponent);



/***/ }),

/***/ 9119:
/*!*******************************************************!*\
  !*** ./src/app/user/postmaker/postmaker.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostmakerComponent": () => (/* binding */ PostmakerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postmaker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postmaker.component.html */ 5474);
/* harmony import */ var _postmaker_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postmaker.component.css */ 3568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 2880);





let PostmakerComponent = class PostmakerComponent {
    constructor(picker) {
        this.picker = picker;
        this.images = [];
    }
    ngOnInit() {
        this.picker.hasReadPermission().then((val) => {
            if (val == false) {
                this.picker.hasReadPermission();
            }
        }, (err) => {
            this.picker.requestReadPermission();
        });
    }
    pickImages() {
        let options = {
            maximumImagesCount: 10,
            outputType: 1
        };
        this.picker.getPictures(options).then((res) => {
            for (var i = 0; i < res.lenght; i++) {
                let base64image = "data:image/png;base64,"
                    + res[i];
                this.images.push(base64image);
            }
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
};
PostmakerComponent.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__.ImagePicker }
];
PostmakerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-postmaker',
        template: _raw_loader_postmaker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postmaker_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostmakerComponent);



/***/ }),

/***/ 9080:
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 1255);
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.css */ 744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileComponent);



/***/ }),

/***/ 9958:
/*!*********************************************!*\
  !*** ./src/app/user/tabs/tabs.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.component.html */ 5425);
/* harmony import */ var _tabs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss */ 7477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabsComponent = class TabsComponent {
    constructor() { }
    ngOnInit() { }
    feed() {
        alert('hello');
    }
};
TabsComponent.ctorParameters = () => [];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsComponent);



/***/ }),

/***/ 9099:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user.component.html */ 487);
/* harmony import */ var _user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component.scss */ 4625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() { }
};
UserComponent.ctorParameters = () => [];
UserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3568:
/*!********************************************************!*\
  !*** ./src/app/user/postmaker/postmaker.component.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0bWFrZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 744:
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form1 {\n  margin-top: 3rem;\n  /* input[type=text] {\n       color:black;\n       height:2.3rem;\n       width: 80%;\n       border: 1.5px solid black;\n       font-size: 14px;\n       font-weight: bold;\n       font-family: 'Times New Roman', Times, serif;\n       text-align: center;\n   }\n\n   input[type=password] {\n       color:black;\n       width: 80%;\n       height: 2rem;\n       height: 2.3rem;\n       text-align: center;\n       color: black;\n       font-weight: bold;\n       font-family: 'Times New Roman', Times, serif;\n       text-align: center;\n       border: 1.5px solid black;\n   }*/\n}\n.form1 input {\n  color: black;\n  border: 1.5 px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLGdCQUFBO0VBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTtBQVlIO0FBaEJJO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0FBa0JSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtMXtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxLjUgcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgIC8qIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGhlaWdodDoyLjNyZW07XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfSovXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5133:
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form1 {\n  margin-top: 3rem;\n  /* input[type=text] {\n       color:black;\n       height:2.3rem;\n       width: 80%;\n       border: 1.5px solid black;\n       font-size: 14px;\n       font-weight: bold;\n       font-family: 'Times New Roman', Times, serif;\n       text-align: center;\n   }\n\n   input[type=password] {\n       color:black;\n       width: 80%;\n       height: 2rem;\n       height: 2.3rem;\n       text-align: center;\n       color: black;\n       font-weight: bold;\n       font-family: 'Times New Roman', Times, serif;\n       text-align: center;\n       border: 1.5px solid black;\n   }*/\n}\n.form1 input {\n  color: black;\n  border: 1.5 px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxnQkFBQTtFQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFZSDtBQWhCSTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtBQWtCUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm0xe1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IDEuNSBweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgLyogaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OjIuM3JlbTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICB9Ki9cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8780:
/*!********************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  font-size: 2rem;\n  font-weight: 2rem;\n  font-family: \"Times New Roman\", Times, serif;\n  text-shadow: 2px 1px 5px black;\n}\n\ninput {\n  border: 1.5px solid black;\n  text-align: left;\n  width: 97%;\n  height: 2.3rem;\n}\n\nlabel {\n  font-size: 0.9rem;\n  font-weight: normal;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFFQSw4QkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJ1c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCA1cHggYmxhY2s7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBoZWlnaHQ6IDIuM3JlbTtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 1846:
/*!***********************************************!*\
  !*** ./src/app/user/feed/feed.component.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 9239:
/*!***************************************************!*\
  !*** ./src/app/user/navbar/navbar.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7477:
/*!***********************************************!*\
  !*** ./src/app/user/tabs/tabs.component.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 4625:
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 1.5rem;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    <router-outlet></router-outlet>\r\n\r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 2266:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"bg-warning container-fluid\" style=\"height: 100%;width:100%;margin-bottom: auto;\">\r\n  <div class=\"row\" style=\"height: auto;\">\r\n    <div class=\"col-sm-8\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"container-fluid text-center\">\r\n            <img src=\"assets/image/logo.png\" alt=\"image logo\" style=\"margin-top:3rem;height: 200px;width: auto;\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n\r\n          <form class=\"text-center container-fluid p-2 shadow-lg\" style=\"border: 0.2rem solid white;\">\r\n            <div class=\"row text-center\" style=\"margin-top: 4rem;\">\r\n              <div class=\"col-12\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"userName\" style=\"border: 1.5px solid black;color: black;text-align: center;\">\r\n                <br>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"\" style=\"border: 1.5px solid black;color: black;text-align: center;\">\r\n                <br>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <a href=\"user/feed\">\r\n                  <input type=\"button\" class=\"btn btn-sm shadow-sm\" value=\"Login\" style=\"background-color: black;color:yellow;width:6rem;\">\r\n\r\n                </a>\r\n              </div>\r\n              <div class=\"col-12 text-right g-success m-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n\r\n\r\n                  </div>\r\n                  <div (click)=\"showModal()\" class=\"col-6 btn btn-md\" style=\"border-radius: 15px 0px 0px 15px;background-color: black;color: yellow;\">\r\n                    Singup>>  \r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n          </div>\r\n              \r\n      \r\n        </form>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n         \r\n          \r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ 4343:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-registration/user-registration.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content class=\"\">\r\n\r\n    <div class=\"bg-warning\" style=\"height: 100%;border:1.5px solid black;border-radius: 30px 30px 15px 15px;margin-top: 5rem;\">\r\n        <div class=\"row m-4\">\r\n            <div class=\"col-12\">\r\n                <ion-icon name='close-circle' (click)='dismiss()' style=\"float: right;padding-right:0px;font-size: 20px;\"></ion-icon>\r\n            </div>\r\n            <div class=\"col-12 text-center\">\r\n                <h1>\r\n                    User Registration\r\n                </h1>\r\n            </div>\r\n        </div>\r\n\r\n        <form  #people=\"ngForm\" (ngSubmit)=\"onSubmit(people.value)\">\r\n           <ion-grid>\r\n               <ion-row>\r\n                   <ion-col size=\"6\">\r\n                    <div>\r\n                        <label for=\"\">\r\n                        Fname\r\n                    </label>\r\n                        <input type=\"text\" name=\"fname\" placeholder=\"first name\" id=\"\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n                   <ion-col size=\"6\">\r\n                    <div>\r\n                        <label for=\"\">Lname</label>\r\n                        <input type=\"text\" name=\"lname\" id=\"\" placeholder=\"last name\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n\r\n\r\n                   <ion-col size=\"12\">\r\n                    <div>\r\n                        <label for=\"\">Mail</label>\r\n                        <input type=\"email\" name=\"gmail\" id=\"\" placeholder=\"e-mail\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n\r\n                   <ion-col size=\"12\">\r\n                    <div>\r\n                        <label for=\"\">Mobile</label>\r\n                        <input type=\"number\" name=\"mobile\" id=\"\" placeholder=\"mobile number\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n\r\n\r\n\r\n                   <ion-col size=\"12\">\r\n                    <div>\r\n                        <label for=\"\">DOB</label>\r\n                        <input type=\"date\" name=\"DOB\" id=\"\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n\r\n                   <ion-col size=\"12\">\r\n                    <div>\r\n                        <label for=\"\">password</label>\r\n                        <input type=\"password\" name=\"password\" id=\"\" placeholder=\"password\" ngModel>\r\n                    </div>\r\n                   </ion-col>\r\n\r\n                   <ion-col size=\"12\">\r\n                    <div class=\"text-center\">\r\n\r\n                        <input type=\"submit\" class=\"btn btn-sm\" value=\"SingUp\" style=\"color: yellow;width: 6rem;background-color: black;text-align: center;\">\r\n                    </div>\r\n                   </ion-col>\r\n\r\n               </ion-row>\r\n\r\n           </ion-grid>\r\n       </form>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7645:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/feed/feed.component.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<div class=\"container-fluid bg-white shadow-sm fixed-top\" style=\"height: 2.6rem;\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <ion-icon name=\"chatbox-outline\" style=\"font-size: 2rem;float: left;\"></ion-icon>\n        </div>\n        <div class=\"col-auto\">\n         <span class=\"text-center\" style=\"font-size: larger;font-weight: bold;font-family: 'Times New Roman', Times, serif;\">FriendZone</span> \n        </div>\n        <div class=\"col\">\n          <span class=\"text-right\">\n            <ion-icon name=\"caret-forward-circle-outline\" style=\"font-size: 2rem;float: right;\"></ion-icon>\n        \n          </span>\n          \n        </div>\n      </div>\n</div>\n<br>\n<br>\n<ion-content>\n    <ion-content>\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content\n            pullingIcon=\"chevron-down-circle-outline\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n        </ion-refresher>\n    <div class=\"container-fluid bg-white shadow-sm\">\n        <div class=\"row\" style=\"height: auto;\">\n            <div class=\"col-12\">\n                \n            </div>\n        </div>\n\n        <div class=\"row\">            \n                <div class=\"col-12 shadow-lg\" tyle=\"border-bottom: 1px solid black;border-top: 1px solid black;\">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                          <small>pachora,424201</small>\n                      </div>\n                      <div class=\"col-12 bg-dark\">\n                          <img src=\"assets\\image\\logo.png\" class=\"img-fluid\">\n                      </div>\n                      <div class=\"col-12\">\n                          <div class=\"row m-1\">\n                              <div class=\"col-6 text-center\">\n                                  <ion-icon name=\"heart-outline\"></ion-icon>\n                              </div>\n                              <div class=\"col-6 text-center\">\n                                  <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n                              </div>\n                              <div class=\"col-12\">\n                                  <small>caption</small>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n\n\n\n\n              <div class=\"col-12 shadow-lg\" tyle=\"border-bottom: 1px solid black;border-top: 1px solid black;\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <small>pachora,424201</small>\n                    </div>\n                    <div class=\"col-12 bg-dark\">\n                        <img src=\"assets\\image\\logo.png\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"row m-1\">\n                            <div class=\"col-6 text-center\">\n                                <ion-icon name=\"heart-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-6 text-center\">\n                                <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-12\">\n                                <small>caption</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> <div class=\"col-12 shadow-lg\" tyle=\"border-bottom: 1px solid black;border-top: 1px solid black;\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <small>pachora,424201</small>\n                    </div>\n                    <div class=\"col-12 bg-dark\">\n                        <img src=\"assets\\image\\logo.png\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"row m-1\">\n                            <div class=\"col-6 text-center\">\n                                <ion-icon name=\"heart-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-6 text-center\">\n                                <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-12\">\n                                <small>caption</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n      </div>\n</ion-content>\n");

/***/ }),

/***/ 1239:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/navbar/navbar.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"container-fluid bg-warning shadow-sm\" style=\"height: 2.4rem;\">\n    \n  <div class=\"row\">\n    <div class=\"col\">\n        <ion-icon name=\"chatbox-outline\" style=\"font-size: 2rem;float: left;\"></ion-icon>\n      </div>\n      <div class=\"col-auto\">\n       <span class=\"text-center\" style=\"font-size: larger;font-weight: bold;font-family: 'Times New Roman', Times, serif;\">FriendZone</span> \n      </div>\n      <div class=\"col\">\n        <span class=\"text-right\">\n          <ion-icon name=\"caret-forward-circle-outline\" style=\"font-size: 2rem;float: right;\"></ion-icon>\n        </span>\n      </div>\n    </div>\n  </div>\n\n\n\n<!--\n<nav class=\"navbar navbar-dark bg-warning\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item active\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size: 2rem;\"></ion-icon>\n    </li>\n    <li class=\"nav-item\">\n      FriendZone\n    </li>\n    <li class=\"nav-item\">\n      <ion-icon name=\"caret-forward-circle-outline\" style=\"font-size: 2rem;\"></ion-icon>\n    </li>\n  </ul>\n</nav>\n\n-->\n  \n");

/***/ }),

/***/ 5474:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/postmaker/postmaker.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-button (click)=\"pickImages()\">pick Images</ion-button>\n</ion-content>\n<div class=\"row\">\n\n    <div *ngFor=\"let image of images\" class=\"col-1\">\n        <img [src]=\"image\" />\n\n    </div>\n</div>");

/***/ }),

/***/ 1255:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container-fluid bg-white shadow-lg border border-secondary\">\n    <div class=\"row\">\n        <div class=\"col-auto\">\n            <div class=\"bg-dark\" style=\"border-radius:25px;height: 80px;width: 80px;\">\n              \n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col-6 text-center\">\n                    followers\n                    \n                    <b>20</b>\n                </div>\n                <div class=\"col-6 text-center\">\n                    following\n            \n                    <b>20</b>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <b>Name</b>\n            <small>bio</small>\n        </div>\n    </div>\n</div>\n<ion-content>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n\n\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n\n\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n            <div class=\"col-4 border border-secondary\" style=\"height: 90px;width:90px;\">\n\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ 5425:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/tabs/tabs.component.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs> \n  <ion-tab-bar slot=\"bottom\" class=\"bottom-tab-bar\">\n    <ion-tab-button tab=\"feed\">\n      <ion-icon name=\"map\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"post\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n    \n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n    </ion-tab-button>\n\n\n    \n    \n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 487:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [scrollEvents]=\"true\">\n    <!--<app-navbar></app-navbar> -->\n\n    <router-outlet>\n\n    </router-outlet>\n\n</ion-content>\n<app-tabs>\n</app-tabs>\n<!-- \n\n\n-->\n\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map