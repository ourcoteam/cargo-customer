(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~new-order-new-order-module~notifications-notifications-module"],{

/***/ "./node_modules/ngx-paypal/fesm2015/ngx-paypal.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-paypal/fesm2015/ngx-paypal.js ***!
  \********************************************************/
/*! exports provided: NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScriptService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ScriptService = /** @class */ (() => {
    class ScriptService {
        /**
         * @param {?} zone
         */
        constructor(zone) {
            this.zone = zone;
        }
        /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @return {?}
         */
        registerScript(url, globalVar, onReady) {
            /** @type {?} */
            const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
            if (existingGlobalVar) {
                // global variable is present = script was already loaded
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(existingGlobalVar);
                }));
                return;
            }
            // prepare script elem
            /** @type {?} */
            const scriptElem = document.createElement('script');
            scriptElem.id = this.getElemId(globalVar);
            scriptElem.innerHTML = '';
            scriptElem.onload = (/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(((/** @type {?} */ (window)))[globalVar]);
                }));
            });
            scriptElem.src = url;
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        }
        /**
         * @param {?} globalVar
         * @return {?}
         */
        cleanup(globalVar) {
            // remove script from DOM
            /** @type {?} */
            const scriptElem = document.getElementById(this.getElemId(globalVar));
            if (scriptElem) {
                scriptElem.remove();
            }
        }
        /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        getElemId(globalVar) {
            return `ngx-paypal-script-elem-${globalVar}`;
        }
    }
    ScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
    return ScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/paypal-script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PayPalScriptService = /** @class */ (() => {
    class PayPalScriptService {
        /**
         * @param {?} scriptService
         */
        constructor(scriptService) {
            this.scriptService = scriptService;
            this.paypalWindowName = 'paypal';
        }
        /**
         * @param {?} config
         * @param {?} onReady
         * @return {?}
         */
        registerPayPalScript(config, onReady) {
            this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
        }
        /**
         * @return {?}
         */
        destroyPayPalScript() {
            this.scriptService.cleanup(this.paypalWindowName);
        }
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        getUrlForConfig(config) {
            /** @type {?} */
            const params = [
                {
                    name: 'client-id',
                    value: config.clientId
                }
            ];
            if (config.currency) {
                params.push({
                    name: 'currency',
                    value: config.currency
                });
            }
            if (config.commit) {
                params.push({
                    name: 'commit',
                    value: config.commit
                });
            }
            if (config.vault) {
                params.push({
                    name: 'vault',
                    value: config.vault
                });
            }
            if (config.extraParams) {
                params.push(...config.extraParams);
            }
            return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
        }
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        getQueryString(queryParams) {
            /** @type {?} */
            let queryString = '';
            for (let i = 0; i < queryParams.length; i++) {
                /** @type {?} */
                const queryParam = queryParams[i];
                if (i === 0) {
                    queryString += '?';
                }
                else {
                    queryString += '&';
                }
                queryString += `${queryParam.name}=${queryParam.value}`;
            }
            return queryString;
        }
    }
    PayPalScriptService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    PayPalScriptService.ctorParameters = () => [
        { type: ScriptService }
    ];
    return PayPalScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/paypal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPaypalComponent = /** @class */ (() => {
    class NgxPaypalComponent {
        /**
         * @param {?} paypalScriptService
         * @param {?} cdr
         * @param {?} ngZone
         */
        constructor(paypalScriptService, cdr, ngZone) {
            this.paypalScriptService = paypalScriptService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            /**
             * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
             * sharing base configuration. In such a case only a single component may register script.
             */
            this.registerScript = true;
            /**
             * Emitted when paypal script is loaded
             */
            this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
             */
            this.initializePayPal = true;
        }
        /**
         * @param {?} content
         * @return {?}
         */
        set payPalButtonContainer(content) {
            this.payPalButtonContainerElem = content;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            if (!this.payPalButtonContainerId) {
                this.payPalButtonContainerId = this.generateElementId();
            }
            // first time config setup
            /** @type {?} */
            const config = this.config;
            if (changes.config.isFirstChange()) {
                if (config && this.registerScript) {
                    this.initPayPalScript(config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
            }
            // changes to config
            if (!changes.config.isFirstChange()) {
                this.reinitialize(config);
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.paypalScriptService.destroyPayPalScript();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            this.doPayPalCheck();
        }
        /**
         * @param {?} payPal
         * @return {?}
         */
        customInit(payPal) {
            this.payPal = payPal;
            this.doPayPalCheck();
        }
        /**
         * @param {?} config
         * @return {?}
         */
        reinitialize(config) {
            this.config = config;
            this.payPal = undefined;
            this.paypalScriptService.destroyPayPalScript();
            this.payPalButtonContainerId = this.generateElementId();
            this.initializePayPal = true;
            if (this.payPalButtonContainerElem) {
                while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                    this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
                }
            }
            this.cdr.detectChanges();
            if (this.config) {
                if (!this.payPal) {
                    this.initPayPalScript(this.config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
                else {
                    this.doPayPalCheck();
                }
            }
        }
        /**
         * @private
         * @return {?}
         */
        doPayPalCheck() {
            if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
                // make sure that id is also set
                if (this.payPalButtonContainerElem.nativeElement.id) {
                    this.initializePayPal = false;
                    this.initPayPal(this.config, this.payPal);
                }
            }
        }
        /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        initPayPalScript(config, initPayPal) {
            this.paypalScriptService.registerPayPalScript({
                clientId: config.clientId,
                commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
                currency: config.currency,
                vault: config.vault,
                extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
            }, (/**
             * @param {?} paypal
             * @return {?}
             */
            (paypal) => {
                this.scriptLoaded.next(paypal);
                initPayPal(paypal);
            }));
        }
        /**
         * @private
         * @return {?}
         */
        generateElementId() {
            return `ngx-captcha-id-${new Date().valueOf()}`;
        }
        /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        initPayPal(config, paypal) {
            // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
                /** @type {?} */
                const createOrder = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                    Please choose one or the other.`);
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                    Please define one of these to create order.`);
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error(`Invalid state for 'createOrder'.`);
                    }));
                });
                /** @type {?} */
                const createSubscription = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createSubscription) {
                            return config.createSubscription(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const onShippingChange = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        return this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onApprove) {
                                config.onApprove(data, actions);
                            }
                            // capture on server
                            if (config.authorizeOnServer) {
                                return config.authorizeOnServer(data, actions);
                            }
                            // capture on client
                            /** @type {?} */
                            const onClientAuthorization = config.onClientAuthorization;
                            if (onClientAuthorization) {
                                actions.order.capture().then((/**
                                 * @param {?} details
                                 * @return {?}
                                 */
                                (details) => {
                                    this.ngZone.run((/**
                                     * @return {?}
                                     */
                                    () => {
                                        onClientAuthorization(details);
                                    }));
                                }));
                                return;
                            }
                        }));
                    }), onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onError) {
                                config.onError(error);
                            }
                        }));
                    }), onCancel: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onCancel) {
                                config.onCancel(data, actions);
                            }
                        }));
                    }), onClick: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onClick) {
                                config.onClick(data, actions);
                            }
                        }));
                    }), onInit: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onInit) {
                                config.onInit(data, actions);
                            }
                        }));
                    }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder })), (config.createSubscription && { createSubscription })), (config.onShippingChange && { onShippingChange }));
                paypal.Buttons(buttonsConfig).render(`#${this.payPalButtonContainerId}`);
            }));
        }
    }
    NgxPaypalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    selector: 'ngx-paypal',
                    template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
                }] }
    ];
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = () => [
        { type: PayPalScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
    return NgxPaypalComponent;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-paypal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPayPalModule = /** @class */ (() => {
    class NgxPayPalModule {
    }
    NgxPayPalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        NgxPaypalComponent,
                    ],
                    exports: [
                        NgxPaypalComponent,
                    ],
                    providers: [
                        ScriptService,
                        PayPalScriptService
                    ]
                },] }
    ];
    return NgxPayPalModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paypal-models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPayPalConfig() { }
if (false) {}
/**
 * @record
 */
function IPayPalUrlConfig() { }
if (false) {}
/**
 * @record
 */
function IOrderDetails() { }
if (false) {}
/**
 * @record
 */
function IClientAuthorizeCallbackData() { }
if (false) {}
/**
 * @record
 */
function ILinkDescription() { }
if (false) {}
/**
 * @record
 */
function IQueryParam() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeData() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeActions() { }
if (false) {}
/**
 * @record
 */
function IAdvancedConfiguration() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackData() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICancelCallbackData() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IOnInitCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IInitCallbackData() { }
/**
 * @record
 */
function ICreateSubscriptionCallbackData() { }
/**
 * @record
 */
function IOnClickCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IPayPalButtonStyle() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderRequest() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionRequest() { }
if (false) {}
/**
 * @record
 */
function IPayer() { }
if (false) {}
/**
 * @record
 */
function IApplicationContext() { }
if (false) {}
/**
 * @record
 */
function IPaymentMethod() { }
if (false) {}
/**
 * @record
 */
function IPhone() { }
if (false) {}
/**
 * @record
 */
function ITaxInfo() { }
if (false) {}
/**
 * @record
 */
function IPhoneNumber() { }
if (false) {}
/**
 * @record
 */
function IPurchaseUnit() { }
if (false) {}
/**
 * @record
 */
function IPayee() { }
if (false) {}
/**
 * @record
 */
function IPaymentInstructions() { }
if (false) {}
/**
 * @record
 */
function IPlatformFee() { }
if (false) {}
/**
 * @record
 */
function ITransactionItem() { }
if (false) {}
/**
 * @record
 */
function ITax() { }
if (false) {}
/**
 * @record
 */
function IUnitAmount() { }
if (false) {}
/**
 * @record
 */
function IMoney() { }
if (false) {}
/**
 * @record
 */
function IUnitBreakdown() { }
if (false) {}
/**
 * @record
 */
function IPartyName() { }
if (false) {}
/**
 * @record
 */
function IAddressPortable() { }
if (false) {}
/**
 * @record
 */
function IShipping() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-paypal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-paypal.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-address/new-address.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-address/new-address.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            {{ _translate.instant('new_address.add_new_address') }}\n        </ion-title>\n        <ion-button (click)=\"closeModal()\" fill=\"clear\" slot=\"end\">\n            <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"white\">\n        <div class=\"form-holder register-form\">\n            <form [formGroup]=\"addressInfoForm\">\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.address_name') }}\n                        <ion-text> * </ion-text>\n                    </ion-label>\n                    <ion-input formControlName=\"address_name\" type=\"text\"> </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.country') }}\n                        <ion-text> * </ion-text>\n                    </ion-label>\n                    <ion-select formControlName=\"country_id\" placeholder=\"Select Country\" interface=\"action-sheet\" (ionChange)=\"getRegions()\" [disabled]=\"!countries\">\n                        <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.id\">{{ country.name }}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.state_region') }}\n                        <ion-text> * </ion-text>\n                    </ion-label>\n                    <ion-select formControlName=\"state_id\" placeholder=\"Select State/Region\" interface=\"action-sheet\" (ionChange)=\"getCities()\" [disabled]=\"!regions\">\n                        <ion-select-option *ngFor=\"let region of regions\" [value]=\"region.id\">{{ region.name }}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.city') }}\n                        <ion-text> * </ion-text>\n                    </ion-label>\n                    <ion-select formControlName=\"city_id\" placeholder=\"Select City\" interface=\"action-sheet\" (ionChange)=\"getAreas()\" [disabled]=\"!cities\">\n                        <ion-select-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{ city.name }}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.area') }}\n                    </ion-label>\n                    <ion-select formControlName=\"area_id\" placeholder=\"Select Area\" interface=\"action-sheet\" [disabled]=\"!areas\">\n                        <ion-select-option *ngFor=\"let area of areas\" [value]=\"area.id\">{{ area.name }}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"medium\">\n                        {{ _translate.instant('general.postal_code') }}\n                    </ion-label>\n                    <ion-input formControlName=\"postal_code\" type=\"num\"> </ion-input>\n                </ion-item>\n            </form>\n        </div>\n        <div id=\"map_canvas\" #map_canvas>\n            <ion-button color=\"dark\" (click)=\"getCurrentLocation()\" class=\"map-btn\">\n                <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n                {{ _translate.instant('general.my_current_location') }}\n            </ion-button>\n            <!-- <ion-button ion-button (click)=\"onButtonClick()\">Demo</ion-button> -->\n            <ion-img src=\"/assets/img/marker.svg\" [ngClass]=\"mapDragging ? 'map-marker dragging' : 'map-marker'\" id=\"DummyMarker\"></ion-img>\n        </div>\n    </div>\n</ion-content>\n<ion-footer class=\"has-action\">\n    <ion-button class=\"btn-full btn-gradient\" expand=\"block\" round strong [disabled]=\"!addressInfoForm.valid || !(lat && lng)\" (click)=\"addNewAddress()\">\n        {{ _translate.instant('new_address.add_new_address') }}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-receiver/new-receiver.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-receiver/new-receiver.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg-header\">\n    <ion-toolbar>\n        <ion-title>{{ _translate.instant('new_receiver.new_receiver') }}</ion-title>\n        <ion-button (click)=\"closeModal()\" fill=\"clear\" slot=\"end\" color=\"light\">\n            <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"form-holder register-form\">\n        <form [formGroup]=\"userForm\">\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">\n                    {{ _translate.instant('general.name') }}\n                    <ion-text> * </ion-text>\n                </ion-label>\n                <ion-input formControlName=\"name\" type=\"text\"> </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">\n                    {{ _translate.instant('general.mobile') }}\n                    <ion-text> * </ion-text>\n                </ion-label>\n                <ion-input formControlName=\"mobile\" type=\"tel\"> </ion-input>\n            </ion-item>\n        </form>\n    </div>\n</ion-content>\n<ion-footer class=\"has-action\">\n    <ion-button class=\"btn-full btn-gradient\" expand=\"block\" round strong [disabled]=\"!userForm.valid\" (click)=\"addUser()\">\n        {{ _translate.instant('new_receiver.add_new_receiver') }}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment-card/payment-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment-card/payment-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg-header\">\n  <ion-toolbar>\n      <ion-title>{{ _translate.instant('general.shipment_payment_details') }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let payment of view\">\n      <ion-label color=\"medium\">{{ _translate.instant(payment.name) }} </ion-label>\n      <p>{{ payment.amount }} {{shipment.currency_id.currency_symbol}}</p>\n    </ion-col>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-label color=\"medium\">{{ _translate.instant('general.total_amount') }} </ion-label>\n      <p>{{ totalAmount }} {{shipment.currency_id.currency_symbol}}</p>\n    </ion-col>\n    <!-- <ion-col size=\"6\">\n      <ion-button (click)=\"doPay()\">{{ _translate.instant('general.pay') }}</ion-button>\n    </ion-col> -->\n  </ion-row>\n  <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-details/shipment-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-details/shipment-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg-header\">\n    <ion-toolbar>\n        <ion-title>{{ _translate.instant('general.shipment_details') }}</ion-title>\n        <ion-button (click)=\"closeModal()\" fill=\"clear\" slot=\"end\" color=\"light\">\n            <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"data-grid\">\n        <h4>{{ _translate.instant('general.shipment_info') }}</h4>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.shipment_number') }}\n                </ion-label>\n                <p>{{ shData?.number }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.shipment_type') }}\n                </ion-label>\n                <p [innerHtml]=\"\n            shData?.type == 1\n              ? _translate.instant('general.send')\n              : _translate.instant('general.receive')\n          \"></p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.package_type') }}\n                </ion-label>\n                <p>{{ shData?.packaging.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.status') }}\n                </ion-label>\n                <p>{{ shData?.status }}</p>\n            </ion-col>\n            <!-- <ion-col size=\"6\">\n                <ion-label color=\"medium\">Payment Type</ion-label>\n                <p [innerHTML]=\"shData?.payment_type == 1 ? 'Postpaid' : 'Prepaid'\"></p>\n            </ion-col> -->\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.currency') }}\n                </ion-label>\n                <p>{{ shData?.currency_id.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.office') }}\n                </ion-label>\n                <p>{{ shData?.office.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.delivery_date') }}\n                </ion-label>\n                <p>{{ shData?.delivery_date }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.delivery_time') }}\n                </ion-label>\n                <p>{{ shData?.delivery_time }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.created_at') }}\n                </ion-label>\n                <p>{{ shData?.created_at }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.updated_at') }}\n                </ion-label>\n                <p>{{ shData?.updated_at }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"data-grid\">\n        <h4>{{ _translate.instant('general.shipment_details') }}</h4>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.payment_type') }}\n                </ion-label>\n                <p [innerHtml]=\"\n            shData?.payment_type == 1\n              ?_translate.instant('general.postpaid')\n              : _translate.instant('general.prepaid')\n          \"></p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.currency') }}\n                </ion-label>\n                <p>{{ shData?.currency_id.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.courier\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.courier') }}\n                </ion-label>\n                <p>{{ shData?.courier }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.courier_fees') }}\n                </ion-label>\n                <p>{{ shData?.courier_fee }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.customs_value') }}\n                </ion-label>\n                <p>{{ shData?.customs_value }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.package_fee\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.package_fees') }}\n                </ion-label>\n                <p>{{ shData?.package_fee }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.return_courier_fee\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.return_courier_fees') }}\n                </ion-label>\n                <p>{{ shData?.return_courier_fee }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.return_defray\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.return_defray') }}\n                </ion-label>\n                <p>{{ shData?.return_defray }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.return_package_fee\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.return_package_fee') }}\n                </ion-label>\n                <p>{{ shData?.return_package_fee }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.tax != 0\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.tax') }}\n                </ion-label>\n                <p>{{ shData?.tax }}</p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"shData?.mode && shData?.mode != 0\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.mode') }}\n                </ion-label>\n                <p>{{ shData?.mode }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"data-grid\">\n        <h4>{{ _translate.instant('general.sender_details') }}</h4>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.name') }}\n                </ion-label>\n                <p>{{ shData?.sender.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.mobile') }}\n                </ion-label>\n                <p>{{ shData?.sender.mobile }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.sender_address') }}\n                </ion-label>\n                <p>{{ shData?.sender_address.address }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"data-grid\" *ngIf=\"shData?.receiver\">\n        <h4>{{ _translate.instant('general.receiver_details') }}</h4>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.name') }}\n                </ion-label>\n                <p *ngIf=\"shData && shData.Received_By\">{{ shData.Received_By }}</p>\n                <p *ngIf=\"shData && !shData.Received_By\">{{ shData.receiver.name }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.mobile') }}\n                </ion-label>\n                <p>{{ shData?.receiver.mobile }}</p>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.receiver_address') }}\n                </ion-label>\n                <p>{{ shData?.receiver_address.address }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"data-grid\" *ngIf=\"shData?.notes\">\n        <h4>\n            {{ _translate.instant('general.notes') }} ({{ shData?.notes.length }})\n        </h4>\n        <ion-row *ngFor=\"let note of shData?.notes\">\n            <ion-col size=\"12\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.by') }} {{ note.user }} - {{ note.date.date | date: 'short' }}\n                </ion-label>\n                <p>{{ note.note }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"data-grid\" *ngIf=\"shData?.history\">\n        <h4>\n            {{ _translate.instant('general.history') }} ({{ shData?.history.length }})\n        </h4>\n        <ion-row *ngFor=\"let note of shData?.history\">\n            <ion-col size=\"12\">\n                <ion-label color=\"medium\">{{ _translate.instant('general.by') }} {{ note.user }} - {{ note.date.date | date: 'short' }}\n                </ion-label>\n                <p>{{ note.note }}</p>\n            </ion-col>\n        </ion-row>\n    </div>\n\n\n    <!-- <div id=\"map_canvas\" #map_canvas>\n        <ion-img src=\"/assets/img/marker.svg\" id=\"DummyMarker\"></ion-img>\n    </div> -->\n\n</ion-content>\n<ion-footer *ngIf=\"amount && amount != 0\">\n    <ion-button (click)=\"payForShipment()\">\n        <ion-icon name=\"receipt\"></ion-icon>\n        <ion-label>{{_translate.instant('general.payForShipment')  }}</ion-label>\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/services/ui/loading.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ui/loading.service.ts ***!
  \************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    simpleLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                translucent: true
            });
            yield loading.present();
        });
    }
    loadingDismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoadingService);



/***/ }),

/***/ "./src/app/shared/new-address/new-address.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/new-address/new-address.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 20vh;\n  border-radius: 15px;\n  z-index: 999999;\n}\n#map_canvas ion-img.map-marker {\n  max-width: 60px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n  transition: all 0.2s;\n}\n#map_canvas ion-img.map-marker.dragging {\n  transform: translate(-50%, -50%) scale(1.1);\n  opacity: 0.5;\n}\n#map_canvas ion-button.map-btn {\n  position: absolute;\n  z-index: 2;\n  border-radius: 15px;\n  --border-radius: 15px;\n}\nion-backdrop {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcG90bGF5ZXIvRG93bmxvYWRzL2NhcmdvLWN1c3RvbWVyL3NyYy9hcHAvc2hhcmVkL25ldy1hZGRyZXNzL25ldy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmV3LWFkZHJlc3MvbmV3LWFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0VSO0FERFE7RUFDSSwyQ0FBQTtFQUNBLFlBQUE7QUNHWjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0VSO0FERUE7RUFDSSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25ldy1hZGRyZXNzL25ldy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBpb24taW1nLm1hcC1tYXJrZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgJi5kcmFnZ2luZyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b24ubWFwLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIH1cbn1cblxuaW9uLWJhY2tkcm9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG4jbWFwX2NhbnZhcyBpb24taW1nLm1hcC1tYXJrZXIge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbiNtYXBfY2FudmFzIGlvbi1pbWcubWFwLW1hcmtlci5kcmFnZ2luZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiNtYXBfY2FudmFzIGlvbi1idXR0b24ubWFwLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/new-address/new-address.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/new-address/new-address.component.ts ***!
  \*************************************************************/
/*! exports provided: NewAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAddressComponent", function() { return NewAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let NewAddressComponent = class NewAddressComponent {
    constructor(modalController, platform, loadingCtrl, toastCtrl, apiService, formBuilder, navCtrl, authService, navParams, _translate) {
        this.modalController = modalController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this._translate = _translate;
        this.mapDragging = false;
        this.addressInfoForm = formBuilder.group({
            address_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            area_id: [null],
            postal_code: [null]
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.platform.ready();
            this.getCountries();
            this.type = this.navParams.get('type');
            this.receiverID = this.navParams.get('receiverID');
            // console.log(this.type);
            // console.log(this.receiverID);
            this.dummyMarker = document.getElementById('DummyMarker');
        });
    }
    ngOnDestroy() {
        const nodeList = document.querySelectorAll('._gmaps_cdv_');
        for (let k = 0; k < nodeList.length; ++k) {
            nodeList.item(k).classList.remove('_gmaps_cdv_');
        }
    }
    createLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: this._translate.instant('general.please_wait')
            });
            loader.present();
            return loader;
        });
    }
    getCountries() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.createLoader();
            this.apiService.getCountries()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loader.dismiss()))
                .subscribe((countries) => {
                this.countries = countries;
            });
        });
    }
    getRegions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.createLoader();
            this.apiService
                .getRegions(this.addressInfoForm.get('country_id').value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loader.dismiss()))
                .subscribe((regions) => {
                this.regions = regions;
            });
        });
    }
    getCities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.createLoader();
            this.apiService
                .getCities(this.addressInfoForm.get('state_id').value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loader.dismiss()))
                .subscribe((cities) => {
                this.cities = cities;
            });
        });
    }
    getAreas() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.createLoader();
            this.getAddressCenter();
            this.apiService
                .getAreas(this.addressInfoForm.get('city_id').value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loader.dismiss()))
                .subscribe((areas) => {
                this.areas = areas;
            });
        });
    }
    searchForName(itemID, arrayItems) {
        const res = arrayItems.filter(item => item.id === itemID);
        // console.log(res);
        return res[0].name;
    }
    ionViewDidEnter() {
        this.loadMap();
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss(null, 'cancel');
        });
    }
    loadMap() {
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
            API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs',
            API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs'
        });
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapCanvas.nativeElement, {
            camera: {
                target: {
                    lat: 31.032260599999997,
                    lng: 31.36069329999998
                },
                zoom: 5
            }
        });
        this.map.getMyLocation().then((location) => {
            // console.log(JSON.stringify(location, null, 2));
            // Move the map camera to the location with animation
            this.map.animateCamera({
                target: location.latLng,
                zoom: 5
            });
        });
        this.map
            .addEventListener(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].CAMERA_MOVE_START)
            .subscribe(data => {
            this.mapDragging = true;
            this.dummyMarker.classList.add('dragging');
            // console.log('Dragging');
        });
        this.map
            .addEventListener(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].CAMERA_MOVE_END)
            .subscribe(data => {
            // console.log(data);
            this.mapDragging = false;
            this.dummyMarker.classList.remove('dragging');
            // console.log(this.map.getCameraTarget());
            const location = this.map.getCameraTarget();
            this.lat = location.lat;
            this.lng = location.lng;
            // console.log(this.lat);
            // console.log(this.lng);
        });
    }
    getAddressCenter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const addressArray = {
                country: this.searchForName(this.addressInfoForm.get('country_id').value, this.countries),
                region: this.searchForName(this.addressInfoForm.get('state_id').value, this.regions),
                city: this.searchForName(this.addressInfoForm.get('city_id').value, this.cities)
                // area: this.searchForName(
                //   this.addressInfoForm.get('area_id').value,
                //   this.areas
                // )
            };
            const addressText = `${addressArray.city} ${addressArray.region} ${addressArray.country}`;
            this.loading = yield this.loadingCtrl.create({
                message: this._translate.instant('general.please_wait')
            });
            yield this.loading.present();
            if (this.map)
                this.map.clear();
            // Address -> latitude,longitude
            // const searchAddress = `${this.addressInfoForm.get('')}`
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
                address: addressText
            }).then((results) => {
                // console.log(results);
                this.loading.dismiss();
                if (results.length > 0) {
                    this.map.animateCamera({
                        target: results[0].position,
                        zoom: 15
                    });
                    this.lat = results[0].position.lat;
                    this.lng = results[0].position.lng;
                    // console.log(this.lat);
                    // console.log(this.lng);
                }
                else {
                    alert('Not found');
                }
            });
        });
    }
    getCurrentLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.map)
                this.map.clear();
            this.loading = yield this.loadingCtrl.create({
                message: this._translate.instant('general.please_wait')
            });
            yield this.loading.present();
            // Get the location of you
            this.map
                .getMyLocation()
                .then((location) => {
                this.loading.dismiss();
                // console.log(JSON.stringify(location, null, 2));
                // Move the map camera to the location with animation
                this.map.animateCamera({
                    target: location.latLng,
                    zoom: 17,
                    tilt: 30
                });
            })
                .catch(err => {
                this.loading.dismiss();
                // console.log(err.error_message);
            });
        });
    }
    showToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    showCustomToast(message, msgColor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                color: msgColor,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    addNewAddress() {
        let desiredUser = this.authService.userData.id;
        if (this.type === 'receiver' && this.receiverID) {
            desiredUser = this.receiverID;
        }
        const addressData = {
            data: this.addressInfoForm.value,
            lat: this.lat,
            lng: this.lng
        };
        this.apiService
            .addSenderAddress(this.authService.userToken, desiredUser, addressData)
            .subscribe((res) => {
            this.showCustomToast(`${this._translate.instant('new_address.new_address')} ( ${res.name} ) ${this._translate.instant('general.has_been_added')}`, 'success');
            let addressFor;
            if (this.type === 'receiver') {
                addressFor = 'receiver';
            }
            else {
                addressFor = 'sender';
            }
            res.for = addressFor;
            console.log(res);
            this.modalController.dismiss(res, 'done');
        }, error => {
            this.showCustomToast(error, 'danger');
        });
    }
};
NewAddressComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map_canvas', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NewAddressComponent.prototype, "mapCanvas", void 0);
NewAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-address/new-address.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-address.component.scss */ "./src/app/shared/new-address/new-address.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], NewAddressComponent);



/***/ }),

/***/ "./src/app/shared/new-receiver/new-receiver.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/new-receiver/new-receiver.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uZXctcmVjZWl2ZXIvbmV3LXJlY2VpdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/new-receiver/new-receiver.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/new-receiver/new-receiver.component.ts ***!
  \***************************************************************/
/*! exports provided: NewReceiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReceiverComponent", function() { return NewReceiverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui/loading.service */ "./src/app/services/ui/loading.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let NewReceiverComponent = class NewReceiverComponent {
    constructor(modalController, platform, loadingCtrl, toastCtrl, apiService, formBuilder, navCtrl, authService, navParams, loadingUI, _translate) {
        this.modalController = modalController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.loadingUI = loadingUI;
        this._translate = _translate;
        this.userForm = formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9)]]
        });
    }
    ngOnInit() { }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss(null, 'cancel');
        });
    }
    showToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    showCustomToast(message, msgColor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast2 = yield this.toastCtrl.create({
                message,
                color: msgColor,
                duration: 2000,
                position: 'bottom'
            });
            toast2.present();
        });
    }
    addUser() {
        this.loadingUI.simpleLoading();
        this.apiService
            .addNewReceiver(this.authService.userToken, this.userForm.value)
            .subscribe((newRec) => {
            this.loadingUI.loadingDismiss();
            // console.log(newRec);
            this.showCustomToast(`${this._translate.instant('new_receiver.new_receiver')} ( ${newRec.name} ) ${this._translate.instant('general.has_been_added')}`, 'success');
            this.modalController.dismiss(newRec, 'done');
        }, error => {
            this.loadingUI.loadingDismiss();
            // console.log(error);
            this.showCustomToast(`${this._translate.instant('error.mobile_taken')}`, 'danger');
        });
    }
};
NewReceiverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
NewReceiverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-receiver',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-receiver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/new-receiver/new-receiver.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-receiver.component.scss */ "./src/app/shared/new-receiver/new-receiver.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], NewReceiverComponent);



/***/ }),

/***/ "./src/app/shared/payment-card/payment-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/payment-card/payment-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYXltZW50LWNhcmQvcGF5bWVudC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/payment-card/payment-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/payment-card/payment-card.component.ts ***!
  \***************************************************************/
/*! exports provided: PaymentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCardComponent", function() { return PaymentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");


// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';





let PaymentCardComponent = class PaymentCardComponent {
    constructor(
    // private payPal: PayPal,
    navParams, _translate, apiService, authService, modalCtrl, alertCtrl, loadingCtrl) {
        this.navParams = navParams;
        this._translate = _translate;
        this.apiService = apiService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    doPay() {
        this.payPalConfig = {
            currency: 'USD',
            clientId: "sb",
            createOrderOnClient: (data) => ({
                intent: 'CAPTURE',
                application_context: {
                    return_url: "http://localhost:8100/tabs/home",
                    payment_method: {
                        "payee_preferred": "UNRESTRICTED"
                    },
                },
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: '' + this.totalAmount,
                            breakdown: {
                                item_total: {
                                    currency_code: 'USD',
                                    value: '' + this.totalAmount
                                }
                            }
                        },
                    }
                ]
            }),
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                this.errorPayment(this._translate.instant('general.paymentNoAuth'));
            },
            onClientAuthorization: (data) => {
                this.paymentSuccess();
            },
            onError: err => {
                console.log('OnError', err);
                this.errorPayment(this._translate.instant('general.errorPayment'));
            },
        };
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: this._translate.instant('general.loading')
            });
            yield loading.present();
        });
    }
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingCtrl.dismiss();
        });
    }
    ngOnInit() {
        this.view = this.navParams.get('view');
        this.shipment = this.navParams.get('shipment');
        this.totalAmount = this.navParams.get('amount');
        this.doPay();
    }
    paymentSuccess() {
        this.showLoading();
        let params = {
            token: this.authService.userToken,
            id: this.shipment.id,
            paymant_method: 'paypal',
            tax: (this.shipment.tax * +this.shipment.courier_fee_amount) / 100,
            insurance: (this.shipment.insurance * +this.shipment.courier_fee_amount) / 100,
            custom_value: +this.shipment.customs_value.substr(this.shipment.currency_id.currency_symbol.length),
            return_courier_fee: +this.shipment.return_courier_fee_amount,
            courier_fee: +this.shipment.courier_fee_amount,
            package_fee: +this.shipment.package_fee_amount
        };
        this.apiService.payShipmentOrder(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.hideLoading()))
            .subscribe(r => {
            this.alertCtrl.create({
                message: this._translate.instant('general.requestIsSent'),
                buttons: [this._translate.instant('general.gotcha')]
            }).then(a => {
                a.present();
                a.onDidDismiss().then(() => {
                    this.modalCtrl.dismiss('', '', 'payShipment');
                });
            });
            console.log('payShipmentOrder', r);
        });
    }
    errorPayment(message) {
        this.alertCtrl.create({
            buttons: [this._translate.instant("general.gotcha")]
        });
    }
};
PaymentCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
PaymentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/payment-card/payment-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-card.component.scss */ "./src/app/shared/payment-card/payment-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], PaymentCardComponent);

/*
token
id or number for shipment
custom_value
tax
insurance
return_courier_fee
courier_fee
package_fee
paymant_method  دي بحالتنا الحالية ثابتة القيمة لازم تحطها  paypal


*/
/*



this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AWt7Zerxyd4Z2qvEprql2XgA5yl1oJv6TwucfZUdCogciyCzNJrfPwCp2-cbYEmkoZRoXTigFIbZ59l3'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        
        // let payment = new PayPalPayment(''+amount, this.shData.currency_id.currency_symbol, 'Description', 'sale');
        let payment = new PayPalPayment(''+this.totalAmount, 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          console.log('uccessfully paid')
          this.paymentSuccess()
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (e) => {
          alert(' Error or render' + e)
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
        alert('Error in configuration')
      });
    }, () => {
      alert("Error in initialization, maybe PayPal isn't supported or something else")
      // Error in initialization, maybe PayPal isn't supported or something else
    });


*/ 


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/new-address/new-address.component */ "./src/app/shared/new-address/new-address.component.ts");
/* harmony import */ var _shared_new_receiver_new_receiver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/new-receiver/new-receiver.component */ "./src/app/shared/new-receiver/new-receiver.component.ts");
/* harmony import */ var _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shipment-details/shipment-details.component */ "./src/app/shared/shipment-details/shipment-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-card/payment-card.component */ "./src/app/shared/payment-card/payment-card.component.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm2015/ngx-paypal.js");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shared_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_4__["NewAddressComponent"],
            _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsComponent"],
            _shared_new_receiver_new_receiver_component__WEBPACK_IMPORTED_MODULE_5__["NewReceiverComponent"],
            _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_8__["PaymentCardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_9__["NgxPayPalModule"]
        ],
        exports: [
            _shared_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_4__["NewAddressComponent"],
            _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsComponent"],
            _shared_new_receiver_new_receiver_component__WEBPACK_IMPORTED_MODULE_5__["NewReceiverComponent"],
            _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_8__["PaymentCardComponent"]
        ],
        entryComponents: [
            _shared_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_4__["NewAddressComponent"],
            _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsComponent"],
            _shared_new_receiver_new_receiver_component__WEBPACK_IMPORTED_MODULE_5__["NewReceiverComponent"],
            _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_8__["PaymentCardComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/shipment-details/shipment-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/shipment-details/shipment-details.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".data-grid {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.data-grid h4 {\n  color: var(--ion-color-primary);\n}\n.data-grid ion-label {\n  text-transform: uppercase;\n}\n.data-grid p span.dimmed {\n  color: var(--ion-color-medium);\n}\nion-footer ion-button {\n  display: block;\n  margin: 0;\n  border-radius: 0;\n  --border-radius: 0;\n  height: 45px;\n  --height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcG90bGF5ZXIvRG93bmxvYWRzL2NhcmdvLWN1c3RvbWVyL3NyYy9hcHAvc2hhcmVkL3NoaXBtZW50LWRldGFpbHMvc2hpcG1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoaXBtZW50LWRldGFpbHMvc2hpcG1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsK0JBQUE7QUNFSjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBRENJO0VBQ0UsOEJBQUE7QUNDTjtBREtFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGlwbWVudC1kZXRhaWxzL3NoaXBtZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlkIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIHAge1xuICAgIHNwYW4uZGltbWVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn0iLCIuZGF0YS1ncmlkIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kYXRhLWdyaWQgaDQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmRhdGEtZ3JpZCBpb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhdGEtZ3JpZCBwIHNwYW4uZGltbWVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNDVweDtcbiAgLS1oZWlnaHQ6IDQ1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/shipment-details/shipment-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/shipment-details/shipment-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShipmentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentDetailsComponent", function() { return ShipmentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../payment-card/payment-card.component */ "./src/app/shared/payment-card/payment-card.component.ts");








// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
let ShipmentDetailsComponent = class ShipmentDetailsComponent {
    constructor(navParams, modalController, authService, apiService, _translate, loadingCtrl, alertCtrl
    // private payPal:PayPal
    // private pusherService:PusherService
    ) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.authService = authService;
        this.apiService = apiService;
        this._translate = _translate;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.messegeEvent = {
            message: function (msg) {
                console.log(msg.message);
            }
        };
        this.amount = 100;
    }
    ionViewWillLeave() {
        // this.pusherService.pubnub.removeListener(this.messegeEvent);
    }
    openPaymentModal(amount, view) {
        console.log(view);
        console.log(amount);
        this.amount = amount;
        this.view = view;
        // this.alertCtrl.create({
        //   message:this._translate.instant('general.shipmentNeedPayment'),
        //   buttons:[
        //     {
        //       text:this._translate.instant('actions.pay'),
        //       handler:() => {
        //         this.modalController.create({
        //           component:PaymentCardComponent,
        //           backdropDismiss:true,
        //           id:'payShipment',
        //           componentProps:{
        //             amount:amount.toFixed(2),view,shipment:this.shData
        //           }
        //         }).then(m => m.present() )
        //       }
        //     },
        //     {
        //       text:this._translate.instant('actions.cancel'),
        //       role:'cancel'
        //     }
        //   ]
        // }).then(a => a.present())
    }
    payForShipment() {
        // this.alertCtrl.create({
        //   message:this._translate.instant('general.shipmentNeedPayment'),
        //   buttons:[
        //     {
        //       text:this._translate.instant('actions.pay'),
        //       handler:() => {
        //         this.modalController.create({
        //           component:PaymentCardComponent,
        //           backdropDismiss:true,
        //           id:'payShipment',
        //           componentProps:{
        //             amount:this.amount.toFixed(2),view:this.view,shipment:this.shData
        //           }
        //         }).then(m => m.present() )
        //       }
        //     },
        //     {
        //       text:this._translate.instant('actions.cancel'),
        //       role:'cancel'
        //     }
        //   ]
        // }).then(a => a.present())
        this.modalController.create({
            component: _payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_7__["PaymentCardComponent"],
            backdropDismiss: true,
            id: 'payShipment',
            componentProps: {
                amount: this.amount.toFixed(2), view: this.view, shipment: this.shData
            }
        }).then(m => m.present());
    }
    ngOnInit() {
        // show payment modal if requested ==  "Approved" && payment_type == 2
        console.log(this.authService.userData);
        this.showLoading();
        this.shipmentID = this.navParams.get('shipment_id');
        this.userToken = this.navParams.get('userToken');
        // console.log(this.shipmentID);
        this.apiService
            .getShipmentDetails(this.shipmentID, this.authService.userToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => this.hideLoading()))
            .subscribe((shipment) => {
            this.shData = shipment;
            // this.openPaymentModal(100,[{ name:'general.customs_value', amount:100 }])
            console.log(shipment.paymentstatus, this.shData);
            if (shipment.paymentstatus == false) {
                let tax = (shipment.tax * +shipment.courier_fee_amount) / 100, insurance = (shipment.insurance * +shipment.courier_fee_amount) / 100, customs_value = +shipment.customs_value.substr(shipment.currency_id.currency_symbol.length), amount = tax + insurance + +shipment.courier_fee_amount + customs_value;
                let paymentView = [];
                if (tax)
                    paymentView.push({ name: 'general.tax', amount: tax });
                if (insurance)
                    paymentView.push({ name: 'general.insurance', amount: insurance });
                if (+shipment.courier_fee_amount)
                    paymentView.push({ name: 'general.courier_fee_amount', amount: +shipment.courier_fee_amount });
                if (customs_value)
                    paymentView.push({ name: 'general.customs_value', amount: customs_value });
                var status = [1, 9, 3, 4];
                if (status.includes(shipment.requested) && shipment.payment_type == 2) {
                    // prepaid
                    console.log('prepaid');
                    if (shipment.return_package_fee == 2 && shipment.sender.id == this.authService.userData.id) {
                        paymentView.push({ name: 'general.return_courier_fee', amount: +shipment.return_courier_fee_amount });
                        this.openPaymentModal(amount + +shipment.return_courier_fee_amount, paymentView);
                    }
                    else if (+shipment.return_package_fee == 1 && shipment.receiver.id == this.authService.userData.id) {
                        paymentView = [
                            { name: 'general.package_fee', amount: +shipment.package_fee_amount },
                            { name: 'general.return_courier_fee', amount: +shipment.return_courier_fee_amount }
                        ];
                        this.openPaymentModal(+shipment.package_fee_amount + +shipment.return_courier_fee_amount, paymentView);
                    }
                    else {
                        this.openPaymentModal(amount, paymentView);
                    }
                    // postpaid
                }
                else if (shipment.requested === 4 && shipment.payment_type == 1) {
                    console.log('postpaid');
                    if (shipment.return_defray == 1 && shipment.receiver.id === this.authService.userData.id) {
                        paymentView.push({ name: 'general.package_fee', amount: +shipment.package_fee_amount });
                        this.openPaymentModal(amount + +shipment.package_fee_amount, paymentView);
                    }
                    else if (shipment.return_package_fee == 1 && shipment.receiver.id === this.authService.userData.id) {
                        paymentView.push({ name: 'general.package_fee', amount: +shipment.package_fee_amount }, { name: 'general.return_courier_fee', amount: shipment.return_courier_fee_amount });
                        this.openPaymentModal(amount + +shipment.package_fee_amount + +shipment.return_courier_fee_amount, paymentView);
                    }
                    else if (shipment.return_package_fee == 2 && shipment.sender.id == this.authService.userData.id) {
                        paymentView = [
                            { name: 'general.return_courier_fee', amount: +shipment.return_courier_fee_amount }
                        ];
                        this.openPaymentModal(+shipment.return_courier_fee_amount, paymentView);
                    }
                    else {
                        this.openPaymentModal(amount, paymentView);
                    }
                }
            }
            // this.openPaymentModal()
            // if(this.shData.assigned && this.shData.assigned.id) {
            //   this.pusherService.pubnub.subscribe({
            //     channels: [this.shData.assigned.id]
            //   });
            //   this.pusherService.pubnub.addListener(this.messegeEvent)
            // }
            /*
                    setInterval(() => {
                      this.pusherService.uploadPusher.trigger('location' + this.shData.assigned.id, 'client-updateLocation', {lat:'d', lngl:''})
            
                      // let x = this.pusherService.pusher.send_event('client-updateLocation',  {lat:'d', lngl:''} , 'location'+this.shData.assigned.id )
                      // console.log('send eeveen', x)
                    }, 1000)
            
            
                    console.log(this.shData.assigned.id, this.pusherService.pusher);
            
                    this.locationStream = this.pusherService.pusher.subscribe( 'location' + this.shData.assigned.id);
                    this.locationStream.trigger('client-updateLocation', {lat:'d', lngl:''})
            
                    console.log(this.locationStream)
                    this.locationStream.bind('client-updateLocation', (Data) =>{
                      console.log('Data pusher', Data);
                    });
                    this.pusherService.pusher.bind('client-updateLocation', (Data) =>{
                      console.log('Data pusher', Data);
                    });
                    
                    this.pusherService.pusher.bind('error', (Data) =>{
                      console.log('Data pusher', Data);
                    });*/
        });
        this.dummyMarker = document.getElementById('DummyMarker');
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: this._translate.instant('general.loading')
            });
            yield loading.present();
        });
    }
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingCtrl.dismiss();
        });
    }
};
ShipmentDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ShipmentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipment-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipment-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-details/shipment-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipment-details.component.scss */ "./src/app/shared/shipment-details/shipment-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        // private payPal:PayPal
        // private pusherService:PusherService
    ])
], ShipmentDetailsComponent);

/*

prepaid


$amount = tax + insurance + custom value + curiour fee

if (return_package_fee == 2) //sender
$amount = $amount + return_courier_fee




when shipment was received the receiver should pay

$amount = package_fee

if (return_package_fee == 1)
$amount = $amount + return_courier_fee



*/
/*



postpaid



// reciever
$amount = tax + insurance + custom value + curiour fee

if(return_defray = 1)
  $amount = amount +  package_fee



if (return_package_fee == 1)
  $amount =amount + return_courier_fee   + package_fee




when returned value was received the sender should pay



&


// sender

if (return_package_fee == 2)


$amount = return_courier_fee

*/ 


/***/ })

}]);
//# sourceMappingURL=default~home-home-module~new-order-new-order-module~notifications-notifications-module-es2015.js.map