(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_logger_login_login_module_ts"], {
    /***/
    55986:
    /*!******************************************************!*\
      !*** ./src/app/logger/login/login-routing.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      93667);

      var routes = [{
        path: "",
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    91535:
    /*!**********************************************!*\
      !*** ./src/app/logger/login/login.module.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      55986);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      93667);

      var _LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    93667:
    /*!********************************************!*\
      !*** ./src/app/logger/login/login.page.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      24120);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      71820);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/payment.service */
      51863);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(menu, router, auth, generalts, navCtrl, activatedrouted, alertController, payService) {
          _classCallCheck(this, LoginPage);

          this.menu = menu;
          this.router = router;
          this.auth = auth;
          this.generalts = generalts;
          this.navCtrl = navCtrl;
          this.activatedrouted = activatedrouted;
          this.alertController = alertController;
          this.payService = payService;
          this.user = "";
          this.password = "";
          this.show = false;
          this.Institution = [];
        }

        _createClass(LoginPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log("ionViewWillEnter");
            this.page = this.activatedrouted.snapshot.paramMap.get("page");

            if (['', null, undefined].indexOf(this.page) > -1) {
              this.page = 'login_parents'; // this.page = 'login_staff';
            } // this.getInstitute()
            //this.page="login_parents";


            console.log(this.page, "page");
            this.menu.enable(false);
            this.menu.swipeGesture(false);
            this.menu.close();
            this.error = "";
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            console.log("ionViewWillLeave");
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log("ionViewDidLeave");
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log("ionViewDidEnter");
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.error = "";
            console.log(this.user, this.password, "login()");
            var data = {
              username: this.user,
              password: this.password
            };

            if ([null, "", undefined].indexOf(this.user) > -1 || [null, "", undefined].indexOf(this.password) > -1) {
              this.error = "Please enter Login credentials";
            } else {
              this.generalts.loadingPresent(); // const load = await this.generalts.loading("Loading ...");
              // await load.present();

              var faculty = undefined;

              if (this.page == "login_staff") {
                console.log(this.page, "page");
                faculty = "base_path_faculty";
              } else if (this.page == "login_parents") {
                console.log(this.page, "page");
                faculty = undefined;
              }

              this.auth.postt(data, "login", faculty).subscribe(function (response) {
                console.log(response, "response111", response.token);

                if (response.token) {
                  _this.generalts.loadingDismiss(); // load.dismiss();


                  localStorage.setItem("pas_tok", response.token);
                  localStorage.setItem("*/", _this.user); //this.eregister(response, this.password)

                  _this.menu.enable(true);

                  _this.menu.swipeGesture(true); // location.reload();


                  _this.navCtrl.navigateRoot("/home");
                } else if (response.access_token) {
                  // load.dismiss();
                  _this.generalts.loadingDismiss();

                  console.log(response, "response111 access_token", response.access_token);

                  _this.menu.enable(true);

                  _this.menu.swipeGesture(true);

                  localStorage.setItem("pas_faculty", response.access_token); // location.reload();

                  _this.navCtrl.navigateRoot("/dashboard");

                  console.log(response.access_token, "access_token_faculty");
                }
              }, function (error) {
                // load.dismiss();
                _this.generalts.loadingDismiss();

                console.error("Error!", error, "status_code", error.status_code);

                if (error.status_code == 400) {
                  _this.error = error.message;
                  console.error("Error!", error.status_code, error.message);
                }

                if (error.message == 'Login Failed') {
                  _this.error = 'User Not Found';
                } // else if (error.status == 401) {
                //   this.error = "Invalid Credentials. Please Enter valid Details";
                //   //error.statusText
                //   console.error("Error!", error.status_code, error.message);
                // }

              });
            }
          }
        }, {
          key: "signup",
          value: function signup() {
            this.router.navigate(["/signup", {
              p: "register"
            }]);
          }
        }, {
          key: "pass",
          value: function pass() {
            this.show = !this.show;
          }
        }, {
          key: "forgot",
          value: function forgot() {
            this.router.navigate(["/signup", {
              p: "forgot-password"
            }]);
            console.log("dsfad");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.login_check();
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['opem']);
          }
        }, {
          key: "eregister",
          value: function eregister(resp, password) {
            var _this2 = this;

            var parentLogin = resp.parentLogin;
            var parentDetails = resp.parentDetails;
            var token = resp.token;

            if (parentLogin.ewallet_access_status === 0) {
              //eWallet Registration
              var data = {
                names: parentDetails.name,
                contact: parentDetails.mobile,
                email: parentDetails.email,
                password: password
              };
              console.log(data, 'as');
              var access_status = {
                id: parentLogin.id,
                ewallet_access_status: 1,
                username: parentDetails.mobile
              };
              console.log(access_status);
              this.payService.switch_to_ewallet_api('register-to-ewallet', data).subscribe(function (resp) {
                console.log(resp);

                if (!resp.error) {
                  //parent eWallet access status Updated
                  var faculty = undefined;
                  var _access_status = {
                    id: parentLogin.id,
                    ewallet_access_status: 1,
                    username: parentDetails.mobile
                  };

                  _this2.auth.g_postt(_access_status, "ewallet-access-status", token).subscribe(function (resps) {
                    console.log(resps);

                    if (resps.message === 'Ewallet Access Status Updated') {
                      _this2.elogin(parentDetails.mobile, password);
                    }
                  });
                }
              });
            } else {
              this.elogin(parentDetails.mobile, password);
            }
          }
        }, {
          key: "elogin",
          value: function elogin(mobile, password) {
            //eWallet Login 
            var login_data = {
              contact: mobile,
              password: password
            };
            this.payService.switch_to_ewallet_api('switch-to-payment', login_data).subscribe(function (r) {
              console.log(r, 'sfsd');
              localStorage.setItem("e_token", r.token);
              localStorage.setItem("e_user", JSON.stringify(r.user));
            });
          }
        }, {
          key: "login_check",
          value: function login_check() {
            var pass_faculty = localStorage.getItem('pas_faculty');
            var pass_parent = localStorage.getItem('pas_tok'); // const load = await this.generalts.loading("Loading ...");
            // await load.present();

            this.generalts.loadingPresent();

            if (pass_faculty) {
              this.menu.enable(true);
              this.menu.swipeGesture(true);
              localStorage.setItem("pas_faculty", pass_faculty); // load.dismiss();

              this.generalts.loadingDismiss();
              this.navCtrl.navigateRoot("/dashboard");
            }

            if (pass_parent) {
              localStorage.setItem("pas_tok", pass_parent);
              this.menu.enable(true);
              this.menu.swipeGesture(true); // load.dismiss();

              this.navCtrl.navigateRoot("/home");
            } // load.dismiss();


            this.generalts.loadingDismiss();
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _services_payment_service__WEBPACK_IMPORTED_MODULE_4__.PaymentService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    51863:
    /*!*********************************************!*\
      !*** ./src/app/services/payment.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentService": function PaymentService() {
          return (
            /* binding */
            _PaymentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _PaymentService = /*#__PURE__*/function () {
        function PaymentService(router, platform, toastCtrl, http, alertController) {
          _classCallCheck(this, PaymentService);

          this.router = router;
          this.platform = platform;
          this.toastCtrl = toastCtrl;
          this.http = http;
          this.alertController = alertController;
          this.base_path = "https://dev.pacifyca.com/ewallet/api/v1/";
          this.api_key = "1b656406-cad5-40e4-8f14-19fef71f7a3b";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              "Content-Type": "application/json",
              "API-KEY": this.api_key
            })
          };
        }

        _createClass(PaymentService, [{
          key: "switch_to_ewallet_api",
          value: function switch_to_ewallet_api(page, item) {
            console.log(page);
            return this.http.post(this.base_path + page, JSON.stringify(item), this.httpOptions);
          }
        }, {
          key: "get_data",
          value: function get_data(page, token) {
            var f = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "API-KEY": this.api_key
              }).set("Authorization", token)
            };
            return this.http.get(this.base_path + page, f);
          }
        }, {
          key: "post_data",
          value: function post_data(page, token, item) {
            var f = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "API-KEY": this.api_key
              }).set("Authorization", token)
            };
            console.log(page);
            return this.http.post(this.base_path + page, JSON.stringify(item), f);
          }
        }]);

        return PaymentService;
      }();

      _PaymentService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _PaymentService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _PaymentService);
      /***/
    },

    /***/
    71820:
    /*!**********************************************!*\
      !*** ./src/app/logger/login/login.page.scss ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back {\n  padding: 6px 0px;\n  text-decoration: underline;\n  position: absolute;\n  left: 10px;\n  top: 17px;\n  font-size: 18px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.78);\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  box-shadow: 0px 2px 4px #585858;\n}\n\nion-item {\n  margin: 0 30px !important;\n  font-size: 14px !important;\n}\n\nh3 {\n  font-size: 21px;\n}\n\n.login_container {\n  background-size: cover;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n#Form_input5 {\n  background: #fff;\n  border-radius: 30px;\n  padding: 10px 10px 10px 40px;\n  width: 100%;\n  box-shadow: 0 2px 5px 0 rgba(5, 1, 1, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n#Form-pass5 {\n  background: #fff;\n  border-radius: 30px;\n  padding: 10px 10px 10px 40px;\n  width: 85%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.lblLogin {\n  margin-left: 30px;\n  font-size: 13px !important;\n}\n\n.list-ios[inset] .item {\n  border-bottom: 0px !important;\n}\n\nion-item.login-row {\n  background: none;\n}\n\n.login-row.item-inner {\n  border: 0px !important;\n}\n\n.btn-rounded {\n  background: #fff;\n  border-radius: 30px;\n  color: #000;\n  width: 50%;\n  margin-left: 25%;\n  margin-top: -10px;\n}\n\n.login-btn {\n  margin: 0 auto;\n  width: 70%;\n}\n\n.footer-login.mx-5.pt-3.mb-1 {\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 2% 0 0 0;\n}\n\n.footer > img {\n  margin-left: 45%;\n}\n\n.footer > p {\n  margin-left: 25%;\n}\n\n.label-md[stacked],\n.label-md[floating] {\n  margin-left: 15px !important;\n}\n\n.list-md.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.alert.alert-danger {\n  color: red;\n  font-size: 11px;\n  padding: 4px 10px;\n  text-align: center;\n}\n\n.scroll-content {\n  overflow-y: scroll;\n}\n\n.showPassword {\n  background: none;\n  font-size: small;\n  margin-left: 10px;\n}\n\nion-checkbox.checkPassword.checkbox.checkbox-md.checkbox-md-secondary,\nion-checkbox.checkPassword.checkbox.checkbox-ios.checkbox-ios-secondary {\n  margin: 0px;\n}\n\n.login-block {\n  display: block;\n  border: 1px solid #6b1a0d;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.52);\n  margin: 0 auto;\n  width: 80%;\n  padding: 14px 0;\n}\n\n/*----------Login Block Faculty--------------*/\n\n.login-block-faculty {\n  display: block;\n  border: 1px solid #271e67;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.52);\n  height: auto;\n  margin: 0% 3% 0% 3%;\n  padding: 14px;\n}\n\n/*--------------end Login Block Faculty ----------*/\n\n.btn.btn-block {\n  background: -webkit-linear-gradient(-8deg, #152453 0%, #152453 100%);\n  color: #fff;\n  margin: 0 auto;\n}\n\nimg.img-fluid {\n  width: 100%;\n}\n\n.lang-select {\n  padding: 0px;\n  width: 150px;\n  margin: 0 0 0 180px;\n  background: #271e67;\n  color: #fff;\n  border-radius: 40px;\n}\n\n.login-text {\n  padding: 0px;\n  margin: 0;\n}\n\nion-select.lang-text.select.select-md.ng-pristine.ng-valid.ng-touched {\n  padding: 13px 2px 10px 32px;\n}\n\n.select-user {\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 35px;\n  margin: -60px 0 15px 0;\n}\n\n.login-text {\n  text-align: center;\n  font-weight: 500;\n}\n\nion-icon.icon.icon-md.ion-md-person {\n  color: #5702e9;\n  margin: 0px 10px;\n}\n\nform {\n  padding-top: 0px;\n}\n\n.alert-danger {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.list-ios[inset] {\n  margin: 0px;\n}\n\n.ion-ios-person {\n  color: #5702e9;\n  padding: 0px 10px;\n}\n\n.item-ios.item-label-stacked .text-input,\n.item-ios.item-label-floating .text-input {\n  margin-left: 0;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: calc(100% - 8px);\n  padding: 0px 0px 0px 15px;\n}\n\n.checkbox-ios .checkbox-icon {\n  border-radius: 5%;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #000000;\n  background-color: #fff;\n}\n\nbutton.profile-icon.disable-hover.button.button-md.button-clear.button-clear-md {\n  margin-left: 10%;\n}\n\n.register {\n  color: #106ee2;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.btmText {\n  text-align: center;\n}\n\n.passwd {\n  top: 35px;\n  color: #271e67;\n  left: 20px;\n  margin: 0px 10px;\n}\n\n.item-label-floating.sc-ion-input-md-h,\n.item-label-floating .sc-ion-input-md-h,\n.item-label-stacked.sc-ion-input-md-h,\n.item-label-stacked .sc-ion-input-md-h {\n  position: relative;\n  top: 14px;\n}\n\n.label-floating.sc-ion-label-md-h {\n  position: relative !important;\n  top: 10px !important;\n}\n\n.sh_pass {\n  font-size: 13px;\n  position: relative;\n  bottom: 3px;\n}\n\n.back {\n  padding: 10px 0px;\n  text-decoration: underline;\n  position: absolute;\n  left: 10px;\n  top: 15px;\n  font-size: 18px;\n  color: white;\n  background: #41232d;\n  border-radius: 50px;\n  height: 35px;\n  width: 35px;\n  text-align: center;\n  box-shadow: 0px 2px 4px #585858;\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQXBCRjs7QUFzQkE7RUFDRSxrQkFBQTtBQW5CRjs7QUFxQkE7RUFDRSxTQUFBO0VBR0EsY0FBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF3QkE7Ozs7RUFJRSxrQkFBQTtFQUNBLFNBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBcEJGOztBQXNCQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFDQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBckJGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcclxuICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHRvcDogMTdweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzU4NTg1ODtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luOiAwIDMwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gIC8vIGhlaWdodDogODAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWdzL2xvZ2luX2JnLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNGb3JtX2lucHV0NSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSg1LCAxLCAxLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbiNGb3JtLXBhc3M1IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4vLyAuZm9ybS1jb250YWluZXJ7IHBhZGRpbmctdG9wOiA4MHB4OyB9XHJcblxyXG4ubGJsTG9naW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1pb3NbaW5zZXRdIC5pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ubG9naW4tcm93IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5sb2dpbi1yb3cuaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXJvdW5kZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBjb2xvcjogIzAwMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmxvZ2luLWJ0biB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmZvb3Rlci1sb2dpbi5teC01LnB0LTMubWItMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBtYXJnaW46IDIlIDAgMCAwO1xyXG4gIC8vIGJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5mb290ZXIgPiBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbn1cclxuLmZvb3RlciA+IHAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuLmxhYmVsLW1kW3N0YWNrZWRdLFxyXG4ubGFiZWwtbWRbZmxvYXRpbmddIHtcclxuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICAvL21hcmdpbjogNXB4IDAgMCAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6ICA0cHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7IC8vaGlkZGVuO1xyXG59XHJcblxyXG4vLyAuaXRlbS1tZCAuaXRlbS1pbnB1dC5pdGVtLWlubmVyIHtcclxuLy8gICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAgICR0ZXh0LWlucHV0LW1kLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB0cmFuc3BhcmVudDtcclxuLy8gICAkdGV4dC1pbnB1dC1tZC1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICR0ZXh0LWlucHV0LW1kLXNob3ctaW52YWxpZC1oaWdobGlnaHQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICR0ZXh0LWlucHV0LW1kLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgJHRleHQtaW5wdXQtbWQtc2hvdy12YWxpZC1oaWdobGlnaHQ6IHRyYW5zcGFyZW50O1xyXG5cclxuLy8gLml0ZW0taW5uZXIge1xyXG4vLyAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubGlzdC1tZFxyXG4vLyAgIC5pdGVtLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cyk6bGFzdC1jaGlsZCxcclxuLy8gLmxpc3QtbWQgLml0ZW0taW5wdXQuaXRlbS1pbnB1dC1oYXMtZm9jdXM6bGFzdC1jaGlsZCxcclxuLy8gLmxpc3QtbWQgLml0ZW0taW5wdXQuaW5wdXQtaGFzLWZvY3VzOmxhc3QtY2hpbGQsXHJcbi8vIC5saXN0LW1kXHJcbi8vICAgLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpOmxhc3QtY2hpbGQsXHJcbi8vIC5saXN0LW1kXHJcbi8vICAgLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKTpsYXN0LWNoaWxkIHtcclxuLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0tbGFiZWwtc3RhY2tlZCAudGV4dC1pbnB1dC1tZCxcclxuLy8gLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnRleHQtaW5wdXQtbWQge1xyXG4vLyAgIG1hcmdpbjogMTFweCAwcHggN3B4IDEwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLnNob3dQYXNzd29yZCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmlvbi1jaGVja2JveC5jaGVja1Bhc3N3b3JkLmNoZWNrYm94LmNoZWNrYm94LW1kLmNoZWNrYm94LW1kLXNlY29uZGFyeSxcclxuaW9uLWNoZWNrYm94LmNoZWNrUGFzc3dvcmQuY2hlY2tib3guY2hlY2tib3gtaW9zLmNoZWNrYm94LWlvcy1zZWNvbmRhcnkge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi8vIGlvbi1pdGVtLnNob3dQYXNzd29yZC5pdGVtLml0ZW0tYmxvY2suaXRlbS1pb3MuaXRlbS1jaGVja2JveCB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbi8vIH1cclxuLmxvZ2luLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNmIxYTBkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxud2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcblxyXG4gIC8vIG1hcmdpbjogOTAlIDAgMCAwO1xyXG59XHJcbi8qLS0tLS0tLS0tLUxvZ2luIEJsb2NrIEZhY3VsdHktLS0tLS0tLS0tLS0tLSovXHJcbi5sb2dpbi1ibG9jay1mYWN1bHR5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjcxZTY3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyKTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwJSAzJSAwJSAzJTtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS1lbmQgTG9naW4gQmxvY2sgRmFjdWx0eSAtLS0tLS0tLS0tKi9cclxuLmJ0bi5idG4tYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC04ZGVnLCAjMTUyNDUzIDAlLCAjMTUyNDUzIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmltZy5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1hcmdpbjogMCAwIDc1cHggMDtcclxufVxyXG4ubGFuZy1zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxODBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjcxZTY3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuLmxvZ2luLXRleHQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLXNlbGVjdC5sYW5nLXRleHQuc2VsZWN0LnNlbGVjdC1tZC5uZy1wcmlzdGluZS5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuICBwYWRkaW5nOiAxM3B4IDJweCAxMHB4IDMycHg7XHJcbn1cclxuLy8gaW9uLXNlbGVjdCB7XHJcbi8vICAgbWF4LXdpZHRoOiA3MiU7XHJcbi8vIH1cclxuLnNlbGVjdC11c2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBtYXJnaW46IC02MHB4IDAgMTVweCAwO1xyXG59XHJcbi5sb2dpbi10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pb24taWNvbi5pY29uLmljb24tbWQuaW9uLW1kLXBlcnNvbiB7XHJcbiAgY29sb3I6ICM1NzAyZTk7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5saXN0LWlvc1tpbnNldF0ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5pb24taW9zLXBlcnNvbiB7XHJcbiAgY29sb3I6ICM1NzAyZTk7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuLml0ZW0taW9zLml0ZW0tbGFiZWwtc3RhY2tlZCAudGV4dC1pbnB1dCxcclxuLml0ZW0taW9zLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnRleHQtaW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTVweDtcclxufVxyXG4uY2hlY2tib3gtaW9zIC5jaGVja2JveC1pY29uIHtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuYnV0dG9uLnByb2ZpbGUtaWNvbi5kaXNhYmxlLWhvdmVyLmJ1dHRvbi5idXR0b24tbWQuYnV0dG9uLWNsZWFyLmJ1dHRvbi1jbGVhci1tZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4vLyAubG9naW5Gb3JtIHtcclxuLy8gICBtYXJnaW4tdG9wOiA3NSU7XHJcbi8vIH1cclxuLnJlZ2lzdGVyIHtcclxuICBjb2xvcjogIzEwNmVlMjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnRtVGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wYXNzd2Qge1xyXG4gIHRvcDogMzVweDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjMjcxZTY3O1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuLy8gLi4uLi4uLi4uLi4uLi4uLi5pdGVtIHN0eWxlc1xyXG4uaXRlbS1sYWJlbC1mbG9hdGluZy5zYy1pb24taW5wdXQtbWQtaCxcclxuLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNjLWlvbi1pbnB1dC1tZC1oLFxyXG4uaXRlbS1sYWJlbC1zdGFja2VkLnNjLWlvbi1pbnB1dC1tZC1oLFxyXG4uaXRlbS1sYWJlbC1zdGFja2VkIC5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTRweDtcclxufVxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC4uLi4uLi5cclxuLnNoX3Bhc3N7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDNweDtcclxufVxyXG4uYmFjayB7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgIzQxMjMyZDsgXHJcbiAgLy8gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjNTg1ODU4O1xyXG59Il19 */";
      /***/
    },

    /***/
    24120:
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logger/login/login.page.html ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"login_container\">\n  <span (click)=\"back()\" class=\"back\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </span>\n  <!-- NEW Design-->\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n\n  <!-- Start Parent Form -->\n  <div class=\"login-block loginForm\">\n    <h3 class=\"login-text\" *ngIf=\"page=='login_parents'\">Parent Login</h3>\n\n    <h3 class=\"login-text\" *ngIf=\"page=='login_staff'\">Faculty Login</h3>\n\n\n    <!-- <ion-item *ngIf=\"page=='login_staff'\">\n      <ion-label>Institution Id*</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option *ngFor=\"let ins of Institution\" [value]=\"id\">{{ins.name}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n\n    <ion-item color=\"transparent\" class=\"ion-no-padding ion-margin-bottom\">\n      <ion-label position=\"floating\" *ngIf=\"page=='login_parents'\">Mobile No / Email Id</ion-label>\n      <ion-label position=\"floating\" *ngIf=\"page=='login_staff'\">User Name</ion-label>\n      <ion-input [(ngModel)]=\"user\" style=\"color: ffff;\"></ion-input>\n    </ion-item>\n    <ion-item color=\"transparent\" class=\"ion-no-padding ion-margin-bottom\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"password\" clearOnEdit=\"false\" color=\"dark\">\n      </ion-input>\n    </ion-item>\n\n    <div (click)=\"pass()\" style=\" margin:15px 0 10px 30px\">\n      <ion-checkbox class=\"checkPassword\" slot=\"start\" style=\"margin-right: 5px;\" (click)=\"pass()\" color=\"medium\"\n        [(ngModel)]=\"show\"></ion-checkbox>\n      <span class=\"sh_pass\">\n        Show Password\n      </span>\n    </div>\n\n\n\n    <div *ngIf=\"error\" class=\"alert alert-danger \">\n      {{ error }}\n    </div>\n    <div class=\"ion-text-center ion-margin-bottom\">\n      <ion-button (click)=\"login()\" shape=\"round\" color=\"tertiary\">Login</ion-button>\n    </div>\n\n    <div class=\"btmText\" *ngIf=\"page=='login_parents'\">\n      New User!! Click here to\n      <span class=\"register\" (click)=\"signup()\">Register</span><br />\n      <span class=\"register\" (click)=\"forgot()\"> Forgot Password</span>\n    </div>\n  </div>\n\n  <!-- <div>\n    <span routerLink=\"/opem\" class=\"back\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </span>\n  </div> -->\n  <!-- End of Parent Form -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_logger_login_login_module_ts-es5.js.map