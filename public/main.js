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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Welcome to Cirrus</h1>\n  <p>Cirrus is a site that .... </p>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");





var routes = [
    { path: '', component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    background-color: rgb(48, 48, 48);\r\n    text-align: center;\r\n    height: 6em;\r\n    color: white;\r\n}\r\n\r\nh1 {\r\n    padding-top: .5em;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: center;\r\n}\r\n\r\nli {\r\n    padding-right: .5em;\r\n    padding-left: .5em;\r\n}\r\n\r\na {\r\n    color: rgb(130, 224, 228);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41ZW07XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHJnYigxMzAsIDIyNCwgMjI4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>{{ title }}</h1>\n  <nav>\n    <ul>\n      <li><a routerLink=\"\">Home</a></li>\n      <p> | </p>\n      <li><a routerLink=\"/about\">About</a></li>\n    </ul>\n  </nav>\n</header>\n<section>\n  <router-outlet></router-outlet>\n</section>\n"

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
        this.title = 'C I R R U S';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAHLP_fT5_nlMnzwhgHWQ1oWdoaI6z0Fv8'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* basic positioning */\r\n.legend {\r\n    list-style: none;\r\n    padding-bottom: .5em;\r\n    padding-top: .5em;\r\n}\r\n.legend li {\r\n    display: inline-block;\r\n}\r\n.legend span {\r\n    float: left;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 2px;\r\n    border-radius: 80%;\r\n}\r\nli {\r\n    padding-right: 2em;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n\r\n}\r\nli:nth-child(1) {\r\n  -webkit-text-decoration-color: green;\r\n          text-decoration-color: green;\r\n}\r\nli:nth-child(2) {\r\n  -webkit-text-decoration-color: yellow;\r\n          text-decoration-color: yellow;\r\n}\r\nli:nth-child(3) {\r\n  -webkit-text-decoration-color: orange;\r\n          text-decoration-color: orange;\r\n}\r\nli:nth-child(4) {\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n}\r\n/* colors */\r\n.legend .faster {\r\n    background-image: url('http://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png');\r\n}\r\n.legend .all-elements {\r\n    background-image: url('http://www.google.com/intl/en_us/mapfiles/ms/micons/yellow-dot.png');\r\n}\r\n.legend .reachable {\r\n    background-image: url('http://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png');\r\n}\r\n.legend .DNS-AAAA {\r\n    background-image: url('http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png');\r\n}\r\nagm-map {\r\n    height: 700px;\r\n}\r\nagm-info-window {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzRUFBc0U7O0FBRTFFO0FBRUE7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCO0FBRUEsV0FBVztBQUNYO0lBQ0ksMEZBQTBGO0FBQzlGO0FBRUE7SUFDSSwyRkFBMkY7QUFDL0Y7QUFFQTtJQUNJLDJGQUEyRjtBQUMvRjtBQUVBO0lBQ0ksd0ZBQXdGO0FBQzVGO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYmFzaWMgcG9zaXRpb25pbmcgKi9cclxuLmxlZ2VuZCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxufVxyXG5cclxuLmxlZ2VuZCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sZWdlbmQgc3BhbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcblxyXG59XHJcblxyXG5saTpudGgtY2hpbGQoMSkge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCgyKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCgzKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbmxpOm50aC1jaGlsZCg0KSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIGNvbG9ycyAqL1xyXG4ubGVnZW5kIC5mYXN0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vd3d3Lmdvb2dsZS5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9tcy9taWNvbnMvZ3JlZW4tZG90LnBuZycpO1xyXG59XHJcblxyXG4ubGVnZW5kIC5hbGwtZWxlbWVudHMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vd3d3Lmdvb2dsZS5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9tcy9taWNvbnMveWVsbG93LWRvdC5wbmcnKTtcclxufVxyXG5cclxuLmxlZ2VuZCAucmVhY2hhYmxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3d3dy5nb29nbGUuY29tL2ludGwvZW5fdXMvbWFwZmlsZXMvbXMvbWljb25zL29yYW5nZS1kb3QucG5nJyk7XHJcbn1cclxuXHJcbi5sZWdlbmQgLkROUy1BQUFBIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3d3dy5nb29nbGUuY29tL2ludGwvZW5fdXMvbWFwZmlsZXMvbXMvbWljb25zL3JlZC1kb3QucG5nJyk7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuYWdtLWluZm8td2luZG93IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <ul class=\"legend\">\n    <li><span class=\"faster\"></span>IPv6 Load Time &le; IPv4</li>\n    <li><span class=\"all-elements\"></span>Fully IPv6 Accessible</li>\n    <li><span class=\"reachable\"></span>DNS AAA Record</li>\n    <li><span class=\"DNS-AAAA\"></span>Not IPv6 Accessible</li>\n  </ul>\n\n  <agm-map id=\"map\" [latitude]=\"startLat\" [zoom]=\"zoom\" [longitude]=\"startLng\">\n    <agm-marker *ngFor=\"let school of schools; let i = index\"\n      [latitude]=\"school.lat\" [longitude]=\"school.long\" [iconUrl]=\"getIcon(school)\">\n      <agm-info-window>\n        <h4>{{ school.name }}</h4>\n        <p>lat: {{ school.lat }}</p>\n        <p>long: {{ school.long }}</p>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../school.service */ "./src/app/school.service.ts");



var MapComponent = /** @class */ (function () {
    function MapComponent(schoolService) {
        this.schoolService = schoolService;
        this.startLat = 35.782169;
        this.startLng = -80.793457;
        this.zoom = 7;
        this.greenMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png';
        this.yellowMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/yellow-dot.png';
        this.redMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png';
        this.orangeMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png';
        this.schools = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.getSchools();
        this.getIcon(this.school);
    };
    MapComponent.prototype.getSchools = function () {
        var _this = this;
        this.schoolService.getSchools()
            .subscribe(function (schoolList) {
            _this.schools = schoolList;
            console.log(_this.schools);
        });
    };
    MapComponent.prototype.getIcon = function (school) {
        if (school) {
            if (school.marker === 1) {
                return this.greenMarker;
            }
            else if (school.marker === 2) {
                return this.yellowMarker;
            }
            else if (school.marker === 3) {
                return this.redMarker;
            }
            else if (school.marker === 4) {
                return this.orangeMarker;
            }
        }
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/school.service.ts":
/*!***********************************!*\
  !*** ./src/app/school.service.ts ***!
  \***********************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SchoolService = /** @class */ (function () {
    function SchoolService(http) {
        this.http = http;
    }
    SchoolService.prototype.getSchools = function () {
        return this.http.get('/get');
    };
    SchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cpick\WebApps\CirrusApp\Cirrus2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map