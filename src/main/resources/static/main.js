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



var routes = [];
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

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,body {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 400;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.58;\r\n  color: #333;\r\n  background-color: #f4f4f4;\r\n  height: 100%;\r\n}\r\n\r\nbody:before {\r\n  height: 50%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: #128ff2;\r\n  content: \"\";\r\n  z-index: 0;\r\n}\r\n\r\n.clearfix:after {\r\n  display: block;\r\n  content: \"\";\r\n  clear: both;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.form-control {\r\n  width: 100%;\r\n  min-height: 38px;\r\n  font-size: 15px;\r\n  border: 1px solid #c8c8c8;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 15px;\r\n}\r\n\r\ninput {\r\n  padding-left: 10px;\r\n  outline: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.7em;\r\n}\r\n\r\na {\r\n  color: #128ff2;\r\n}\r\n\r\nbutton {\r\n  box-shadow: none;\r\n  border: 1px solid transparent;\r\n  font-size: 14px;\r\n  outline: none;\r\n  line-height: 100%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  padding: 0.6rem 1rem;\r\n  border-radius: 2px;\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n  min-height: 38px;\r\n}\r\n\r\nbutton.default {\r\n  background-color: #e8e8e8;\r\n  color: #333;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nbutton.primary {\r\n  background-color: #128ff2;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\nbutton.accent {\r\n  background-color: #ff4743;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\n#username-page {\r\n  text-align: center;\r\n}\r\n\r\n.username-page-container {\r\n  background: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  border-radius: 2px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  display: inline-block;\r\n  margin-top: 42px;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  padding: 35px 55px 35px;\r\n  min-height: 250px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  margin-top: -160px;\r\n}\r\n\r\n.chat-history-container {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  margin-top: 30px;\r\n  height: 600px;\r\n  position: relative;\r\n}\r\n\r\n.username-page-container .username-submit {\r\n  margin-top: 10px;\r\n}\r\n\r\n#chat-page {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.chat-container {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  margin-top: 30px;\r\n  height: 500px;\r\n  position: relative;\r\n}\r\n\r\n#chat-page ul {\r\n  list-style-type: none;\r\n  background-color: #FFF;\r\n  margin: 0;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  padding: 0 20px 0px 20px;\r\n  height: calc(100% - 150px);\r\n}\r\n\r\n#chat-history-page ul {\r\n  list-style-type: none;\r\n  background-color: #FFF;\r\n  margin: 0;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  padding: 0 20px 0px 20px;\r\n  height: calc(100% - 150px);\r\n}\r\n\r\n#chat-page #messageForm {\r\n  padding: 20px;\r\n}\r\n\r\n#chat-page ul li {\r\n  line-height: 1.5rem;\r\n  padding: 10px 20px;\r\n  margin: 0;\r\n  border-bottom: 1px solid #f4f4f4;\r\n}\r\n\r\n#chat-page ul li p {\r\n  margin: 0;\r\n}\r\n\r\n#chat-page .event-message {\r\n  width: 100%;\r\n  text-align: center;\r\n  clear: both;\r\n}\r\n\r\n#chat-page .event-message p {\r\n  color: #777;\r\n  font-size: 14px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n#chat-page .chat-message {\r\n  padding-left: 68px;\r\n  position: relative;\r\n}\r\n\r\n#chat-page .chat-message i {\r\n  position: absolute;\r\n  width: 42px;\r\n  height: 42px;\r\n  overflow: hidden;\r\n  left: 10px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  font-size: 18px;\r\n  line-height: 42px;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  font-style: normal;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#chat-page .chat-message span {\r\n  color: #333;\r\n  font-weight: 600;\r\n}\r\n\r\n#chat-page .chat-message p {\r\n  color: #43464b;\r\n}\r\n\r\n#messageForm .input-group input {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n#messageForm .input-group button {\r\n  float: left;\r\n  width: auto;\r\n  height: 38px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.chat-header {\r\n  text-align: center;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\n.chat-header h2 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\n.connecting {\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  color: #777;\r\n  position: absolute;\r\n  top: 65px;\r\n  width: 100%;\r\n}\r\n\r\n#chat-history-box {\r\n  border-style:solid;\r\n   border-color: #777;\r\n   border-width:0.5px;\r\n   padding-top:5px;\r\n   padding-bottom:5px;\r\n   padding-right:5px;\r\n   padding-left:5px;\r\n   margin-top:5px;\r\n   margin-bottom:5px;\r\n   margin-right:5px;\r\n   margin-left:5px;\r\n   border-radius: 15px;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.sender {\r\n font-family: verdana;\r\n font-style: italic;\r\n font-size: 12px;\r\n color: #777;\r\n}\r\n\r\n.content {\r\n font-family: comic sans ms;\r\n font-size: 15px;\r\n padding-left:15px;\r\n}\r\n\r\n.date {\r\n text-align: right;\r\n font-family: Times New Roman;\r\n font-size: 15px;\r\n color: #777;\r\n padding-right:8px;\r\n}\r\n\r\n#chat-history-control {\r\n  align-content: center;\r\n  text-align: center;\r\n  margin-left: 50px;\r\n  margin-left: 30%;;\r\n  margin-right: 30%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsMkRBQTJEO0VBQzNELGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLFdBQVc7QUFD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RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41ODtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keTpiZWZvcmUge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjMTI4ZmYyO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzEyOGZmMjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbmJ1dHRvbi5wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4ZmYyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY2NlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ3NDM7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3VzZXJuYW1lLXBhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXJuYW1lLXBhZ2UtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNDJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzNXB4IDU1cHggMzVweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAtMTYwcHg7XHJcbn1cclxuXHJcbi5jaGF0LWhpc3RvcnktY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udXNlcm5hbWUtcGFnZS1jb250YWluZXIgLnVzZXJuYW1lLXN1Ym1pdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbiNjaGF0LXBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbiNjaGF0LXBhZ2UgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMCAyMHB4IDBweCAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG59XHJcblxyXG4jY2hhdC1oaXN0b3J5LXBhZ2UgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMCAyMHB4IDBweCAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG59XHJcblxyXG5cclxuXHJcbiNjaGF0LXBhZ2UgI21lc3NhZ2VGb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIHVsIGxpIHtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbn1cclxuXHJcbiNjaGF0LXBhZ2UgdWwgbGkgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbiNjaGF0LXBhZ2UgLmV2ZW50LW1lc3NhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuI2NoYXQtcGFnZSAuZXZlbnQtbWVzc2FnZSBwIHtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5cclxuI2NoYXQtcGFnZSAuY2hhdC1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDY4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNjaGF0LXBhZ2UgLmNoYXQtbWVzc2FnZSBzcGFuIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgcCB7XHJcbiAgY29sb3I6ICM0MzQ2NGI7XHJcbn1cclxuXHJcbiNtZXNzYWdlRm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNtZXNzYWdlRm9ybSAuaW5wdXQtZ3JvdXAgYnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvbm5lY3Rpbmcge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjaGF0LWhpc3RvcnktYm94IHtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgIGJvcmRlci1jb2xvcjogIzc3NztcclxuICAgYm9yZGVyLXdpZHRoOjAuNXB4O1xyXG4gICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uc2VuZGVyIHtcclxuIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuIGZvbnQtZmFtaWx5OiBjb21pYyBzYW5zIG1zO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG4gcGFkZGluZy1sZWZ0OjE1cHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbjtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxuIGNvbG9yOiAjNzc3O1xyXG4gcGFkZGluZy1yaWdodDo4cHg7XHJcbn1cclxuXHJcbiNjaGF0LWhpc3RvcnktY29udHJvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlOztcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title>{{title}}</title>\n</head>\n\n<body>\n    <alert type=\"danger\" *ngIf=\"!isValidationOk\" style=\"text-align: center\">Please fill the name to enter</alert>\n    <!--Login Division-->\n    <div id=\"username-page\" *ngIf=\"isUserNameScreen\">\n        <div class=\"username-page-container\">\n            <h1 class=\"title\">{{applicationName}}</h1>\n            <form id=\"usernameForm\" name=\"usernameForm\">\n                <div class=\"form-group\">\n                    <input [(ngModel)]=\"name\" id=\"name\" placeholder=\"Enter your name to start chat\" name=\"username\"\n                        class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" (click)=\"login($event)\" class=\"accent username-submit\">Start Chatting</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!--Chat Division-->\n    <div id=\"chat-page\" *ngIf=\"isChatScreen\">\n        <div class=\"chat-container\">\n            <div class=\"chat-header\">\n                <h2>{{applicationName}}</h2>\n            </div>\n            <div class=\"connecting\" *ngIf=\"!isConnected\">\n                Connecting...\n            </div>\n            <ul id=\"messageArea\">\n\n            </ul>\n            <form id=\"messageForm\" name=\"messageForm\" nameForm=\"messageForm\">\n                <div class=\"form-group\">\n                    <div class=\"input-group clearfix\">\n                        <input [(ngModel)]=\"message\" id=\"message\" placeholder=\"Type a message...\" name=\"message\"\n                            class=\"form-control\" />\n                        <button type=\"submit\" (click)=\"sendMessage($event)\" class=\"primary\">Send</button>\n                        <button type=\"button\" (click)=\"publishHistory($event)\" class=\"accent\">Chat History</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n    <div id=\"chat-history-page\" *ngIf=\"isHistoryScreen\">\n        <div class=\"chat-history-container\">\n            <div class=\"chat-header\">\n                <h2>Chat History</h2>\n            </div>\n            <ul>\n                <li *ngFor=\"let chat of chatHistoryList\">\n                    <div id=\"chat-history-box\">\n                        <div class=\"sender\">\n                            <span>{{chat.sender}}</span>\n                        </div>\n                        <div class=\"content\">\n                            <span>{{chat.content}}</span>\n                        </div>\n                        <div class=\"date\">\n                            <span>{{chat.timestamp}}</span>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div id=\"chat-history-control\">\n                <button type=\"button\" (click)=\"backToChat($event)\" class=\"primary\">Back to Chat</button>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <router-outlet></router-outlet>\n</body>\n\n</html>"

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
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_chatapp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/chatapp.service */ "./src/app/services/chatapp.service.ts");
/* harmony import */ var _models_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Config */ "./src/app/models/Config.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(chatAppService) {
        this.name = "";
        this.message = "";
        this.applicationName = "Chat Application";
        this.isUserNameScreen = true;
        this.isChatScreen = false;
        this.isValidationOk = true;
        this.isConnected = false;
        this.isHistoryScreen = false;
        this.chatHistoryList = [];
        this.title = 'ng-chat-app';
        this.chatAppService = chatAppService;
    }
    AppComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(_models_Config__WEBPACK_IMPORTED_MODULE_5__["Config"].serverWebSocketURL);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.isConnected = true;
            that.stompClient.subscribe('/topic/public', function (payload) {
                that.onMessageReceived(payload);
            });
            that.sendJoinMessage();
        });
    };
    AppComponent.prototype.sendJoinMessage = function () {
        console.log("sending join message");
        var chatMessage = new _models_Config__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"];
        chatMessage.sender = this.name;
        chatMessage.content = '';
        chatMessage.type = 'JOIN';
        this.isUserNameScreen = false;
        this.isChatScreen = true;
        this.isHistoryScreen = false;
        this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
    };
    /**
     * Extract details from the payload
     */
    AppComponent.prototype.onMessageReceived = function (payload) {
        console.log("message received");
        var message = JSON.parse(payload.body);
        var messageElement = window.document.createElement('li');
        messageElement.style.lineHeight = '1.5rem';
        messageElement.style.padding = '5px 5px';
        messageElement.style.margin = '0';
        messageElement.style.borderBottom = '1px solid #f4f4f4';
        if (message.type === 'JOIN') {
            //style join message
            messageElement.style.width = '100%';
            messageElement.style.textAlign = 'center';
            messageElement.style.clear = 'both';
            messageElement.style.color = '#777';
            messageElement.style.fontSize = '14px';
            messageElement.style.wordWrap = 'break-word';
            message.content = message.sender + ' joined!';
        }
        else if (message.type === 'LEAVE') {
            message.content = message.sender + ' left!';
        }
        else {
            //style message element
            messageElement.style.paddingLeft = '68px';
            messageElement.style.position = 'relative';
            var avatarElement = window.document.createElement('i');
            //style avtar
            avatarElement = this.styeElementAvtar(avatarElement);
            var avatarText = window.document.createTextNode(message.sender[0]);
            avatarElement.appendChild(avatarText);
            avatarElement.style.backgroundColor = this.getAvatarColor(message.sender);
            messageElement.appendChild(avatarElement);
            var usernameElement = window.document.createElement('span');
            usernameElement.style.color = '#333';
            usernameElement.style.fontWeight = '600';
            var usernameText = window.document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);
        }
        var textElement = window.document.createElement('p');
        var messageText = window.document.createTextNode(message.content);
        textElement.appendChild(messageText);
        messageElement.appendChild(textElement);
        var messageArea = window.document.getElementById("messageArea");
        messageArea.appendChild(messageElement);
    };
    AppComponent.prototype.getAvatarColor = function (messageSender) {
        var hash = 0;
        for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        var index = Math.abs(hash % _models_Config__WEBPACK_IMPORTED_MODULE_5__["Config"].colors.length);
        return _models_Config__WEBPACK_IMPORTED_MODULE_5__["Config"].colors[index];
    };
    /**
     * Send message to socket
     */
    AppComponent.prototype.sendMessage = function (event) {
        console.log("sending message :" + this.message);
        var messageContent = this.message.trim();
        if (messageContent && this.stompClient) {
            var chatMessage = new _models_Config__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"];
            chatMessage.sender = this.name;
            chatMessage.content = this.message;
            chatMessage.type = 'CHAT';
        }
        this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
        //clear the message input
        this.message = "";
    };
    /**
     * get chat history
     */
    AppComponent.prototype.publishHistory = function (event) {
        var _this = this;
        console.log("fetching history");
        this.isChatScreen = false;
        this.isUserNameScreen = false;
        this.isHistoryScreen = true;
        this.chatAppService.getChatHistory().subscribe(function (resp) {
            _this.chatHistoryList = []; //clean the list
            _this.chatHistoryList = resp;
        }, function (error) {
            _this.errorMessage = "Error in fetching the history";
        });
    };
    /**
     * Login and initialize web socket
     */
    AppComponent.prototype.login = function (event) {
        console.log("logged in: " + this.name);
        if (this.name.trim().length != 0) {
            this.initializeWebSocketConnection();
            this.isValidationOk = true;
        }
        else {
            this.isValidationOk = false;
        }
    };
    /**
     * function called when back button on the chat history is triggered
     */
    AppComponent.prototype.backToChat = function () {
        this.isChatScreen = true;
        this.isHistoryScreen = false;
        this.isUserNameScreen = false;
    };
    /**
     * Styling for avtar element
     */
    AppComponent.prototype.styeElementAvtar = function (avatarElement) {
        avatarElement.style.position = 'absolute';
        avatarElement.style.width = '42px';
        avatarElement.style.height = '42px';
        avatarElement.style.overflow = 'hidden';
        avatarElement.style.left = '10px';
        avatarElement.style.display = 'inline-block';
        avatarElement.style.verticalAlign = 'middle';
        avatarElement.style.fontSize = '18px';
        avatarElement.style.lineHeight = '42px';
        avatarElement.style.color = '#fff';
        avatarElement.style.textAlign = 'center';
        avatarElement.style.borderRadius = '50%';
        avatarElement.style.fontStyle = 'normal';
        avatarElement.style.textTransform = 'uppercase';
        return avatarElement;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_chatapp_service__WEBPACK_IMPORTED_MODULE_4__["ChatappService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /**
         * Application component
         * @author Tayab Hussain
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chatapp_service__WEBPACK_IMPORTED_MODULE_4__["ChatappService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/Config.ts":
/*!**********************************!*\
  !*** ./src/app/models/Config.ts ***!
  \**********************************/
/*! exports provided: Config, ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/**
 * Class contains the common proerties
 * @author Tayab Hussain
 */
var Config = /** @class */ (function () {
    function Config() {
    }
    /**
     * color codes for avtar
     */
    Config.colors = [
        '#2196F3', '#32c787', '#00BCD4', '#ff5652',
        '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
    ];
    /**
     * Web socket server URL
     */
    Config.serverWebSocketURL = "http://localhost:8080/ws";
    Config.apiBaseURL = "http://localhost:8080/";
    Config.endPointChatHistory = "chat/history";
    return Config;
}());

/**
 * Chat message class
 */
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/services/chatapp.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chatapp.service.ts ***!
  \*********************************************/
/*! exports provided: ChatappService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatappService", function() { return ChatappService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Config */ "./src/app/models/Config.ts");




/**
 * Angular service to interect with the API
 * @author Tayab Hussain
 */
var ChatappService = /** @class */ (function () {
    function ChatappService(_http) {
        this._http = _http;
    }
    ;
    ChatappService.prototype.getChatHistory = function () {
        return this._http.get(_models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiBaseURL + _models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].endPointChatHistory);
    };
    ChatappService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatappService);
    return ChatappService;
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

module.exports = __webpack_require__(/*! D:\workspace\ng-chat-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map