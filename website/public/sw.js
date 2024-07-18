/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/workbox-core/_private/Deferred.js":
/*!*********************************************************!*\
  !*** ../node_modules/workbox-core/_private/Deferred.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "../node_modules/workbox-core/_private/WorkboxError.js":
/*!*************************************************************!*\
  !*** ../node_modules/workbox-core/_private/WorkboxError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "../node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "../node_modules/workbox-core/_private/assert.js":
/*!*******************************************************!*\
  !*** ../node_modules/workbox-core/_private/assert.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!***********************************************************************!*\
  !*** ../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "../node_modules/workbox-core/_private/cacheNames.js":
/*!***********************************************************!*\
  !*** ../node_modules/workbox-core/_private/cacheNames.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!***************************************************************************!*\
  !*** ../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "../node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "../node_modules/workbox-core/_private/getFriendlyURL.js":
/*!***************************************************************!*\
  !*** ../node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "../node_modules/workbox-core/_private/logger.js":
/*!*******************************************************!*\
  !*** ../node_modules/workbox-core/_private/logger.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "../node_modules/workbox-core/_private/timeout.js":
/*!********************************************************!*\
  !*** ../node_modules/workbox-core/_private/timeout.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "../node_modules/workbox-core/_private/waitUntil.js":
/*!**********************************************************!*\
  !*** ../node_modules/workbox-core/_private/waitUntil.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "../node_modules/workbox-core/_version.js":
/*!************************************************!*\
  !*** ../node_modules/workbox-core/_version.js ***!
  \************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "../node_modules/workbox-core/copyResponse.js":
/*!****************************************************!*\
  !*** ../node_modules/workbox-core/copyResponse.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "../node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "../node_modules/workbox-core/models/messages/messageGenerator.js":
/*!************************************************************************!*\
  !*** ../node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "../node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "../node_modules/workbox-core/models/messages/messages.js":
/*!****************************************************************!*\
  !*** ../node_modules/workbox-core/models/messages/messages.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "../node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!******************************************************************!*\
  !*** ../node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "../node_modules/workbox-precaching/PrecacheController.js":
/*!****************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheController.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "../node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "../node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "../node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "../node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "../node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!********************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "../node_modules/workbox-precaching/PrecacheRoute.js":
/*!***********************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheRoute.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "../node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "../node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "../node_modules/workbox-precaching/PrecacheStrategy.js":
/*!**************************************************************!*\
  !*** ../node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "../node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "../node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "../node_modules/workbox-precaching/_types.js":
/*!****************************************************!*\
  !*** ../node_modules/workbox-precaching/_types.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "../node_modules/workbox-precaching/_version.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/_version.js ***!
  \******************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "../node_modules/workbox-precaching/addPlugins.js":
/*!********************************************************!*\
  !*** ../node_modules/workbox-precaching/addPlugins.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/addRoute.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/addRoute.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "../node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!*******************************************************************!*\
  !*** ../node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "../node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!*********************************************************************!*\
  !*** ../node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!***************************************************************!*\
  !*** ../node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/index.js":
/*!***************************************************!*\
  !*** ../node_modules/workbox-precaching/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "../node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "../node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "../node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "../node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "../node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "../node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "../node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "../node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "../node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "../node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "../node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "../node_modules/workbox-precaching/matchPrecache.js":
/*!***********************************************************!*\
  !*** ../node_modules/workbox-precaching/matchPrecache.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/precache.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-precaching/precache.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/precacheAndRoute.js":
/*!**************************************************************!*\
  !*** ../node_modules/workbox-precaching/precacheAndRoute.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "../node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "../node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!**************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "../node_modules/workbox-precaching/utils/createCacheKey.js":
/*!******************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "../node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!*************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "../node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "../node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!***********************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!***********************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "../node_modules/workbox-routing/RegExpRoute.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-routing/RegExpRoute.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "../node_modules/workbox-routing/Route.js":
/*!************************************************!*\
  !*** ../node_modules/workbox-routing/Route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "../node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "../node_modules/workbox-routing/Router.js":
/*!*************************************************!*\
  !*** ../node_modules/workbox-routing/Router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "../node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "../node_modules/workbox-routing/_version.js":
/*!***************************************************!*\
  !*** ../node_modules/workbox-routing/_version.js ***!
  \***************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "../node_modules/workbox-routing/registerRoute.js":
/*!********************************************************!*\
  !*** ../node_modules/workbox-routing/registerRoute.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "../node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "../node_modules/workbox-routing/utils/constants.js":
/*!**********************************************************!*\
  !*** ../node_modules/workbox-routing/utils/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!*************************************************************************!*\
  !*** ../node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "../node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "../node_modules/workbox-routing/utils/normalizeHandler.js":
/*!*****************************************************************!*\
  !*** ../node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "../node_modules/workbox-strategies/Strategy.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-strategies/Strategy.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "../node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "../node_modules/workbox-strategies/StrategyHandler.js":
/*!*************************************************************!*\
  !*** ../node_modules/workbox-strategies/StrategyHandler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "../node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "../node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "../node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "../node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "../node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "../node_modules/workbox-strategies/_version.js":
/*!******************************************************!*\
  !*** ../node_modules/workbox-strategies/_version.js ***!
  \******************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "../node_modules/workbox-precaching/index.mjs":
/*!****************************************************!*\
  !*** ../node_modules/workbox-precaching/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************!*\
  !*** ../node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "../node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"c2bf5259b0ef3de699f288b05038467d","url":"404.html"},{"revision":"6206e7547e55d73d6207d3d34bc73b6f","url":"assets/css/styles.63a3b17c.css"},{"revision":"08280bf42f0f604afd6ad1c079dbe978","url":"assets/js/00e40d3e.b412341d.js"},{"revision":"8902a29b80642f793fc117ac5b392b22","url":"assets/js/020a6fd9.7776ddc3.js"},{"revision":"0dcb32a21b722ee59e5cdaf75f1e9262","url":"assets/js/02710638.2d75e218.js"},{"revision":"f3412fb15d13826a0499c8e7125e1a96","url":"assets/js/02a196d9.fa4edaed.js"},{"revision":"ccd62a5bde10a232d4052f1bd4eb1ec7","url":"assets/js/02b8afdd.1b7dc582.js"},{"revision":"a2f37d591adfcbd2f96fa0577881c73a","url":"assets/js/03ba5158.7fab52fd.js"},{"revision":"198e1d39334710e9402f7daf5a6df05e","url":"assets/js/042ee644.f77537b8.js"},{"revision":"08c52600bb91c47a962e509f83672d31","url":"assets/js/04677469.9b50b224.js"},{"revision":"6024153392c8accbdc6662e175e3c59e","url":"assets/js/04ed7a3f.7afb7648.js"},{"revision":"aad822a72dcd31f5d5513f009a0ea8dd","url":"assets/js/06889510.a9bf44dc.js"},{"revision":"b2a622e1a2a40b6ef8c3b5c160ee035b","url":"assets/js/07dfd1e8.91d7b52b.js"},{"revision":"b2fd48f22260c30cf29e3cb4233fef4d","url":"assets/js/087ccb7b.80902206.js"},{"revision":"49f324734624955ac42ee36791c4fbf2","url":"assets/js/08bce98d.354351f1.js"},{"revision":"c49c17ccdbafcae530c0da403dddfe6e","url":"assets/js/09113a4f.67522379.js"},{"revision":"1dae3686243b14a4dd01864b55949e70","url":"assets/js/0a5ecd2a.c7e59099.js"},{"revision":"38a7275124aeb96f555169e7573f4c95","url":"assets/js/0abc42d5.b812941f.js"},{"revision":"34b44911dba838471bfb945cfc390604","url":"assets/js/0e7b5d04.37b08df0.js"},{"revision":"f34a62e66a099711bb8b79efb8847d3c","url":"assets/js/0ec29c0b.6f98ee1e.js"},{"revision":"f65183e525e47a6ef53d8038c3fcee51","url":"assets/js/0ed175d7.a4ab43de.js"},{"revision":"da89fbfe892624e56576536f244539a9","url":"assets/js/0ef20cf8.798101ce.js"},{"revision":"a2cee3b00ccb0d4523a968d4c583286f","url":"assets/js/10d422cb.945b667b.js"},{"revision":"c5a1e96878714c1fc43e090af9b1a903","url":"assets/js/11e9b75c.d7a115e9.js"},{"revision":"f6d3b1e732d8ebcedae9d32831876ce5","url":"assets/js/137e134d.26e113cb.js"},{"revision":"bc3720c4612a6e5c696c5f67aeb8d197","url":"assets/js/13f4f44f.2e6bfc64.js"},{"revision":"1390593c8778cb0d874efa463bad8661","url":"assets/js/149224b9.097c266d.js"},{"revision":"2d77f0db5184b5e9a10bfa44f89189d3","url":"assets/js/1613e956.28599f7b.js"},{"revision":"6c99445bb04570abe272d98f1acbc23c","url":"assets/js/16b8c99a.d991683b.js"},{"revision":"4421aaa8329c2c4326e8aacddb5b57f0","url":"assets/js/17896441.364df82d.js"},{"revision":"8237ecf49fc2439476bcf84acb7b22d0","url":"assets/js/1859e6b2.cdb1c021.js"},{"revision":"5d0ca94e431860f124fdf853c05f04b7","url":"assets/js/1a4e3797.231d2297.js"},{"revision":"1e8ffe093299b684227d90ff5f8d05e4","url":"assets/js/1aeeeb52.5b783af0.js"},{"revision":"9c746fe585ccbb64d92b7312b8eddc04","url":"assets/js/1b06c562.b63ec0be.js"},{"revision":"4f625431194cd39ed6981087bcb1100a","url":"assets/js/1b827cb5.e6c8ebdd.js"},{"revision":"3f18e04bdca9ea21acad600d388e3816","url":"assets/js/1cadf512.66e3b6c0.js"},{"revision":"fbef8ffe1394fc99513df46458c3b011","url":"assets/js/1d1c36ca.32df1075.js"},{"revision":"eba21ee28fcaebcec32608c80ba873c4","url":"assets/js/1e36f046.3a60a7cf.js"},{"revision":"adb7c918cf6f778613d99c8f4fc091ac","url":"assets/js/1f8183b6.5306b47c.js"},{"revision":"133c24bc68bb093a706368aa006d87ba","url":"assets/js/2066ac67.9efa4e14.js"},{"revision":"3df437a1e0c6f93d54161fe78b8eaf0d","url":"assets/js/20b77499.42b1ed73.js"},{"revision":"435d24afef2835f69c8d09428ccf5152","url":"assets/js/250693e9.5e762d16.js"},{"revision":"bee94ced0467681f7c02f6dbe3f87ee5","url":"assets/js/2528e00e.931837f2.js"},{"revision":"0513ef47fa57a64a738f40a36ba74959","url":"assets/js/259f20ce.19c072fa.js"},{"revision":"86fb8668369ebda207ccbbc4d47c208c","url":"assets/js/263.8d4e1a5f.js"},{"revision":"882a5e1e91ba3e32d9aee811be11f1f6","url":"assets/js/269b2c78.ef508836.js"},{"revision":"bd1c7ca0fcd5d5a71d0288cb16f510c3","url":"assets/js/290b8273.8987ed82.js"},{"revision":"7f66a9693763167b4b558f9234713ba6","url":"assets/js/29e5ae2e.be3266c6.js"},{"revision":"75aa1cbe6859c03a6c4ffe269d3366fa","url":"assets/js/2a504789.23b58964.js"},{"revision":"5f482e9d7c2fd5cfa6670859096de7c3","url":"assets/js/2c475c27.7e25c73b.js"},{"revision":"b204f008dbea41eba8934b1f94540090","url":"assets/js/2c82a5f0.8d055015.js"},{"revision":"7f862df6a6e083530425ad43b7da668b","url":"assets/js/2cdb574f.f258cd63.js"},{"revision":"f836b1bded90e4d4e8c0696f973848ed","url":"assets/js/2eebceee.a1121fd8.js"},{"revision":"57dd75835d5cfff95739a56f8346e1d3","url":"assets/js/2f9636d2.2fc41b71.js"},{"revision":"ba78610d78f614c319cc0a81c2180cf6","url":"assets/js/2fac90f7.a530ee12.js"},{"revision":"8222fbf7a65843bffe92e10cc1d15753","url":"assets/js/2fbad281.e5160310.js"},{"revision":"e0e709b9da3e9511e5013bccf4cd538c","url":"assets/js/3048.aeab99ec.js"},{"revision":"dc51769705f861b4fb20b33b5a915db8","url":"assets/js/30d905a3.754039cb.js"},{"revision":"40617d5d7c1a2e87f0e64a0792545d02","url":"assets/js/314883c7.a1735f17.js"},{"revision":"3ccd37434dcacd0f057326b473de1a5e","url":"assets/js/320bb689.d8a45667.js"},{"revision":"db74f653840fdf58a4e51950ca8ef99e","url":"assets/js/32fa5cfa.b2c52f66.js"},{"revision":"f8a96ca835f63de11f39ba541b2fbedc","url":"assets/js/337a6d96.63c05633.js"},{"revision":"5fd1c1651708d1c46cbb68188ca951b9","url":"assets/js/33821884.6fc5ab2c.js"},{"revision":"5cd13e7b06165c5daf5ab33a9564fcc4","url":"assets/js/33d72df8.62256fa5.js"},{"revision":"daf0330394e8a47b2ea4b956773daa6b","url":"assets/js/3431.44cd82fc.js"},{"revision":"abfa6af26fe61b94e07a2676ddfc83b6","url":"assets/js/34369e2d.d36785a8.js"},{"revision":"a29b59216667ccc49bdaa6f24b058483","url":"assets/js/344cd46a.26eecd49.js"},{"revision":"f9813ee6b90654df77fc818ab86ee384","url":"assets/js/34cb5b8c.9116d858.js"},{"revision":"f8dede60d8dd6be0d211a0bdbb64ede5","url":"assets/js/35ae9c6c.e5255431.js"},{"revision":"fd54bca388cd3c269760629cf2b8cee8","url":"assets/js/36056f81.03571daf.js"},{"revision":"c71c1dfba4ecd9925e79a56babef19ce","url":"assets/js/365c42a1.9add84a6.js"},{"revision":"9ff801474ede5af32fea21469c4004ce","url":"assets/js/3720c009.f8e837e7.js"},{"revision":"538899bdba6f0768f72f36a36133cae0","url":"assets/js/384aa1ac.6ee23acb.js"},{"revision":"34c1901043a9cddd3c69051d7305e41a","url":"assets/js/3a5d178e.bd372665.js"},{"revision":"b02e3ed3813930f5ea25fc35e1e881bc","url":"assets/js/3b0b0cc5.0afd5013.js"},{"revision":"1d33a98a32cdeaf45a785ae5ceafa107","url":"assets/js/3b5b99cf.ca722c06.js"},{"revision":"7a10d74ab727accb06be79ea66f2d84c","url":"assets/js/3e1bd67c.bb77c70b.js"},{"revision":"d6d8b6a338bd3c55b3d0c2290f402a12","url":"assets/js/3e1c3bb2.e3d12c32.js"},{"revision":"289fffff210345a2641bd2d42380df1b","url":"assets/js/3e75b676.50ec3649.js"},{"revision":"2f1ee71312945789672421b4d52c593a","url":"assets/js/3f6ea036.f1c4e7e7.js"},{"revision":"b0006b1374cb4f5fa0b61bd67c41a557","url":"assets/js/3fdbd490.66c5cd28.js"},{"revision":"e2af3a1a1c21059fc79b6e82a5a921ba","url":"assets/js/40e91d1b.7aa002de.js"},{"revision":"4a3c734d910b7625293d87cc9709639b","url":"assets/js/41356171.c1923e1c.js"},{"revision":"c8056a17af4e284de86858cafe3aa656","url":"assets/js/4181026e.54bd8ec2.js"},{"revision":"1015f3ba5baf8caacae03b33589dd0ff","url":"assets/js/420ad248.567c2fb3.js"},{"revision":"474e776674d168bb70841efcb81c738c","url":"assets/js/427889ee.8332d68c.js"},{"revision":"dfa2c234bbfc63ba4cd92d3e12434c7e","url":"assets/js/42aa4b94.8a15a488.js"},{"revision":"2fd4a1a0ca3801dc78b57db30e0f1405","url":"assets/js/4346b73b.4e676fcc.js"},{"revision":"5c81cbe71514dc863142b8d7436e1228","url":"assets/js/43ee0ec6.47533d6a.js"},{"revision":"b22526f911dcb4ef7f206ba280de15be","url":"assets/js/44291122.9dbca3b3.js"},{"revision":"ff024dbfdae3ff3bb9c0b8e230271d12","url":"assets/js/44302d94.0b46f709.js"},{"revision":"0c0e0b7ed3695b244304a1f60ee9116f","url":"assets/js/444cd64f.b83644d9.js"},{"revision":"cecfb9835ba9390ae5820c9dd2714003","url":"assets/js/44a9ded8.5aa476f4.js"},{"revision":"760f0f21b09af6aa9dcea5aca7bcda52","url":"assets/js/44d7c9ee.30140a7f.js"},{"revision":"a7e92333ab3229aaf085b972cd83506d","url":"assets/js/4619c3c1.3399bcdb.js"},{"revision":"bf564d2d857ae7d521deb1d1c199d64d","url":"assets/js/467d720e.b5126d38.js"},{"revision":"11b2e89a4cb2184229daad5effd89493","url":"assets/js/46e94554.e5aa40a1.js"},{"revision":"cde4d86301b212312bd8248376f5193e","url":"assets/js/4846df04.2d33d30a.js"},{"revision":"da4c5a381c466ad6bd48e51c2eb31dfd","url":"assets/js/48540756.251dfe89.js"},{"revision":"4bc4bc4dde812a26e3839937611ee9ff","url":"assets/js/4a3c2994.b9113a51.js"},{"revision":"9f28bb169aa6a5281e3b474b9bb113c7","url":"assets/js/4ae0beba.015f05a0.js"},{"revision":"5846d8abf4e390a009a01d2b2c4682d7","url":"assets/js/4b4404cb.89fb3802.js"},{"revision":"fd0700fe5a11e187b4407017d0d062db","url":"assets/js/4ccb888a.9124f39d.js"},{"revision":"cc1e57e1109043bfa5a2acb5db6d5920","url":"assets/js/4cf9c751.6386eb45.js"},{"revision":"1c2d775b6706dd6841a471c0741b4772","url":"assets/js/4ee11f01.12a5bb2c.js"},{"revision":"9011db7debf09dc0397ac8c5a03d7d11","url":"assets/js/4f386e99.2abaf538.js"},{"revision":"9b3676f80cbaa731ce48d018178713f6","url":"assets/js/51b81f87.2f746475.js"},{"revision":"5c6c80b4bfeaa3478d88306a2bb50d34","url":"assets/js/54947562.9ed4a416.js"},{"revision":"195060af73f94f4672b74a6966ef3068","url":"assets/js/555626c4.16b578a0.js"},{"revision":"979d33e6f201f539ca19ee8d264a268d","url":"assets/js/557350c5.8535c230.js"},{"revision":"7fd9863d5af93288a2c8bcf6b24747ed","url":"assets/js/568f27f4.5fddfb3f.js"},{"revision":"aa4c4101be05a6f6ad1a2551d3a253c4","url":"assets/js/571079b2.53235130.js"},{"revision":"082f726ec9e2209642974b007fcf807c","url":"assets/js/57966ca6.56814ab0.js"},{"revision":"8edc3911669cc2ec59c3f9889057476e","url":"assets/js/581a8a7c.660f94eb.js"},{"revision":"08ef8d20759c15f30ae633162301117a","url":"assets/js/5882.5f2994e5.js"},{"revision":"9c7d3de8a4852b86d2e4f77662e57445","url":"assets/js/5a12f2c4.fc74d93f.js"},{"revision":"4082980714c3200a1c0f43914207ec78","url":"assets/js/5c2cf2e2.031dcb53.js"},{"revision":"cc6d520648b94ab7ce0c7af8868506a9","url":"assets/js/5e95c892.653170e2.js"},{"revision":"8fe360baa4aa80710deff5a9c8a2dae9","url":"assets/js/60712a34.5a60b02b.js"},{"revision":"f72a03c93ab06ccaf32a6233a7007ec8","url":"assets/js/6172eb6b.385146e2.js"},{"revision":"6b9a0050d4d13c298053c9c548869775","url":"assets/js/61e2f911.fc0f5297.js"},{"revision":"bc5a967c0172451fd273334aa06e28d5","url":"assets/js/61efaba3.16e79d38.js"},{"revision":"cc82001ed9d3ddaff9942ff665627431","url":"assets/js/620acee3.0823edee.js"},{"revision":"5c4b44cf0d99049e5608c5f636d6f0fd","url":"assets/js/62585b57.5601542c.js"},{"revision":"3a38711828c546f15ff2daff16b4bbb6","url":"assets/js/627dd03f.c375fb19.js"},{"revision":"06d9931f85fa504af395e54494a7ebef","url":"assets/js/627f4852.0b0d97e5.js"},{"revision":"0529b3c7c8cc1f946f6b47d9957023db","url":"assets/js/6396a9fc.92344ce5.js"},{"revision":"0129c491385bde5ecf9c0fb920347d9b","url":"assets/js/6453c47a.660ecd8a.js"},{"revision":"abfdbb4123030be877883452f86e794b","url":"assets/js/6497b1f4.a84d31ce.js"},{"revision":"415953b91aad94f7353eddc6d38aaf5a","url":"assets/js/64b255d7.0c68e242.js"},{"revision":"e455d997346781ac9c8383714e36da9f","url":"assets/js/64e5ebdf.23b89a75.js"},{"revision":"8669c0128434fc49cf4fa1ba3a821069","url":"assets/js/65a04b30.10e37616.js"},{"revision":"cacd1be0027c2f3a66d3aa5936860271","url":"assets/js/65dcebb4.6b60ccd2.js"},{"revision":"8e70bf9ed9d0a0833f206e6582f13e85","url":"assets/js/662d8eda.5c4f2825.js"},{"revision":"be8715cde2af30a1b39226516deabe3e","url":"assets/js/6668d4e5.3d6e7f2b.js"},{"revision":"036484d9d4d3e8183c39208757dcc9ae","url":"assets/js/667c6c67.7d7dcdb3.js"},{"revision":"11cc4a994170dd18bcb590a152be19ce","url":"assets/js/671871bc.d4697bf6.js"},{"revision":"908a23786241995a5de57e1f8dcd7c5a","url":"assets/js/676e406e.06a0bcc7.js"},{"revision":"3b936739275345f2652832ae60d0ab01","url":"assets/js/68787235.2db9b1ac.js"},{"revision":"5600c6126485042fa37e76e3113e9d54","url":"assets/js/69049058.98843375.js"},{"revision":"3511096ff1e2e984966bfbcfc50788a7","url":"assets/js/697f0490.4c0bc48e.js"},{"revision":"88a9e7d5e01e66f91948b1662b079e98","url":"assets/js/69a753cc.0482bc26.js"},{"revision":"78a231e67e1677dd02eb2d02b565bed8","url":"assets/js/6a5f131e.e2213eea.js"},{"revision":"9aa650846af2936332b7803117135dda","url":"assets/js/6b371b0d.9ade0918.js"},{"revision":"e3c7a25be1b64b8d4f0e142bc0e90860","url":"assets/js/6ca5660e.a5cbf2d1.js"},{"revision":"555c4d44f7b8bfd720b61bfa6d16cdf3","url":"assets/js/6cc8c566.7ece6cdb.js"},{"revision":"6137414165e30043d14efbe44086c8d7","url":"assets/js/6ffcf541.f7ad01da.js"},{"revision":"1fb61569dfef773a7b62c2b983e25a22","url":"assets/js/70c4d1ec.2a958d35.js"},{"revision":"720c67ed1914b1bb0f7c603dadcfebbf","url":"assets/js/71c57425.8a9eb661.js"},{"revision":"525d0e090f582981594a0dbdc25ac758","url":"assets/js/724321e2.6d0fa83a.js"},{"revision":"f22d2c1eb856d334ed9fbdb8e8f4a32a","url":"assets/js/72cbdec1.4c444f1f.js"},{"revision":"c4a6554c677a8f0abcfdec003adf2a89","url":"assets/js/751be0ed.b4c7d38f.js"},{"revision":"76cb75793d1fd7461d670b078eb28925","url":"assets/js/7573d4e7.c21781c3.js"},{"revision":"366dec6c5981a5e8604dd3a55d8f76be","url":"assets/js/7745d3cd.555168c4.js"},{"revision":"88a461390ddba3830858ecf29c6c2449","url":"assets/js/775e700f.2cec0852.js"},{"revision":"3b0625a7e435fe89fcb88fece715b805","url":"assets/js/7b71b73b.c76ebbae.js"},{"revision":"c32ef11d6500982d8e5c724de58c8e75","url":"assets/js/7c2a4d0e.a0e29b7f.js"},{"revision":"574dd3a0eab1dc4fd5349843e1706f58","url":"assets/js/7cdbb865.66c95d71.js"},{"revision":"409554ce53518dfbcca8fbb06e62e9ab","url":"assets/js/7cf46d0f.d9639007.js"},{"revision":"68848eb326db9dcbd292e3901739e417","url":"assets/js/7dd31365.31531172.js"},{"revision":"98171b4555e5e302976304f73a150239","url":"assets/js/7e04d2ba.2b8dafbe.js"},{"revision":"79d1c73ef03c5a32fd276c1efa1fe3fe","url":"assets/js/7f621682.405dd632.js"},{"revision":"92b06cb3dd05097fc875cbec5ac85c67","url":"assets/js/8004293a.56ebc476.js"},{"revision":"331234af00aab706b33b12fdf2ebd125","url":"assets/js/82bd90ab.f1f15938.js"},{"revision":"32737c998d858adb3388f9b4efbb9d7a","url":"assets/js/831d1f2e.5d889648.js"},{"revision":"785e955c95a441d5ae49a5225fc826b0","url":"assets/js/83454d45.70b0086f.js"},{"revision":"15eefbb52c2ab6fda0de7c88366195ac","url":"assets/js/83946c6f.c4e54fde.js"},{"revision":"a8d4d53af13b762768142b071fc43aee","url":"assets/js/83d8e812.cd4aee50.js"},{"revision":"8d00577d48eb6158754f8bcad1918b4f","url":"assets/js/841a20d4.129fcecf.js"},{"revision":"3514157ce3cef10e22d4afd100b4d0fe","url":"assets/js/8443e99f.3ab93f95.js"},{"revision":"95767c0524964b0a68f3e7c625e71549","url":"assets/js/85887073.8df22739.js"},{"revision":"0c529b026c996d8289a81909ba2655a6","url":"assets/js/86a76ec4.90c968b6.js"},{"revision":"1c050843c87e4058a4dbd310e6bf1572","url":"assets/js/86ac4fd3.fa15140a.js"},{"revision":"752600ab3cb17d260a8c87f84cd00714","url":"assets/js/874758f9.af0a0ae3.js"},{"revision":"b13df580a19c239c77b26641406c85ab","url":"assets/js/8752.57f003fe.js"},{"revision":"470d590c20001637aa791194804122fb","url":"assets/js/88049b92.bebcc6ac.js"},{"revision":"032fa894a9556a2d2c2f9b7e4fea43e7","url":"assets/js/88b5fa3e.54c1b405.js"},{"revision":"9c5c9df62d74fd78d6e5b442be66a1f6","url":"assets/js/894efa65.29b3ced6.js"},{"revision":"984e49b933c6ea35ce31277ab7250bef","url":"assets/js/8973.f940c411.js"},{"revision":"59d2e56a5702d4f657c2d658d0ea7274","url":"assets/js/8aa3c640.52264bce.js"},{"revision":"100e318858ac68a04639aa94417a3f89","url":"assets/js/8b5d48fd.3300bd9f.js"},{"revision":"155d73064730b6c26989dd231438033f","url":"assets/js/8cd0442b.b119a616.js"},{"revision":"aa1d456a0da54372fad382c5b203387a","url":"assets/js/8d38e1fe.5a9b4eb7.js"},{"revision":"c7f62a198b90c957d28e3970f5bad6fd","url":"assets/js/8d3aa213.ceb9174e.js"},{"revision":"b75e089c9f542da05bf853a4d72d9649","url":"assets/js/8deca1c2.b1108289.js"},{"revision":"91086cafda5b1893b211caf7f18c1330","url":"assets/js/8eeee735.1dcab4dc.js"},{"revision":"ed25ef74eb0e081831ae5a878ae65d65","url":"assets/js/9074.a89871a3.js"},{"revision":"9534fbbbe6161ec45394adee9c03bd2a","url":"assets/js/90bfc720.71a36662.js"},{"revision":"e135e35f69e021f0a07d4fec941e6379","url":"assets/js/910f0d2c.e1ad0303.js"},{"revision":"6579e2f60bfc848faa3180fd53d6a6c1","url":"assets/js/91ad9b65.688672db.js"},{"revision":"958d4979e642fd72887ede0d37776a96","url":"assets/js/91c6bc5a.b654995b.js"},{"revision":"4fe88d0bb9779a8f4f8043d4df8fc726","url":"assets/js/9221ee1d.08abf6dd.js"},{"revision":"c8c92aedb8341e668bfe670cf04cbeb1","url":"assets/js/931491e7.94738bcb.js"},{"revision":"49560a13316bc416eab6788a9787637a","url":"assets/js/93671beb.d20a25ac.js"},{"revision":"3e5a3926a52d7191efab32d7884cc41b","url":"assets/js/93d3c514.c747a388.js"},{"revision":"4864660caa7949cb3a6a991bd7e6ee04","url":"assets/js/94770abb.394662ba.js"},{"revision":"a5f6b93245928c5b0341e9230e2d6f4e","url":"assets/js/953e87be.9cd82ebc.js"},{"revision":"84883efa653d56bc5adaf80f3856e1b0","url":"assets/js/956.1e4e3d16.js"},{"revision":"9914ef52ac2ba384548a69b284b8dcac","url":"assets/js/95eddc2f.17fb8e4e.js"},{"revision":"c6fa1c27970a78f7616798e20f519892","url":"assets/js/95fa4a14.89b9fe75.js"},{"revision":"165539aaabdadf7af5112745093e3016","url":"assets/js/98553113.4f044a00.js"},{"revision":"4c1c12d6f91af66b10c4c126d7bfcc8b","url":"assets/js/98f8c02e.fcd8736a.js"},{"revision":"f762c0d919d2579db9322a22d837a2da","url":"assets/js/9a46a276.9ef7458e.js"},{"revision":"23e1ac0dfc1120777b3ba539bfc8d7f4","url":"assets/js/9a86afaa.4b28b5c8.js"},{"revision":"1c2327094ce0e209bb783991daadb82f","url":"assets/js/9af61681.c13cf605.js"},{"revision":"fb78439263c501d63ccce77b58edf8f8","url":"assets/js/9c6ffd38.ca746f2c.js"},{"revision":"029050e5580e8936fe9ae3cdacdae37e","url":"assets/js/9d33d70e.266a709d.js"},{"revision":"82fa9798a96faf92aa48a88416ff602a","url":"assets/js/9dd8a0d2.e6cb8f12.js"},{"revision":"98dc768f8a0f0475479667ac8c42c529","url":"assets/js/9e0aaa9f.c37eaa85.js"},{"revision":"c83b99171c0a8bca7c0c5274c4d2cfb9","url":"assets/js/9e849582.94a6daa2.js"},{"revision":"6e23e0587b00fbd54dad455405f05f3e","url":"assets/js/a005c6da.c0e4bfe0.js"},{"revision":"07c1938651143a7dfd626bf91d2ff26e","url":"assets/js/a00c9671.9b7eb9c7.js"},{"revision":"8b6b0bbfb9c9d7d97f8b368e1fd9dcfb","url":"assets/js/a0e44dd4.0705f6a1.js"},{"revision":"e4d99d777ab9c569a484c5ce984ca1f5","url":"assets/js/a1ad4efe.99e24c91.js"},{"revision":"bff018a39e12cfd6606284af80092dbc","url":"assets/js/a33f0476.43e351dc.js"},{"revision":"414bdb4f657eeebbc49d083615663ff4","url":"assets/js/a48ffce7.cef30cf3.js"},{"revision":"77774b2121cde1107794cf2cb891cb5d","url":"assets/js/a7456010.2ec2f6c0.js"},{"revision":"b53e5a8a93463cda713cc9f01c107fd0","url":"assets/js/a7bd4aaa.7a5643d5.js"},{"revision":"ae0e90a28ac122177ed1160edcd717b1","url":"assets/js/a89dc2f9.f7f35f21.js"},{"revision":"9d6b611d548e44fecce798f7ebb99635","url":"assets/js/a8b4eb63.2a080593.js"},{"revision":"7a08ace1877d079ad23336f553f0740d","url":"assets/js/a9294651.4cc32888.js"},{"revision":"275e6dc5aac706cfd320363e41a7674d","url":"assets/js/a936edc5.c1b58ec6.js"},{"revision":"9e36b60a9203bdbdc6dece1ed2667788","url":"assets/js/a94703ab.bb9b2a4e.js"},{"revision":"9219fa274a52d1e68593a586c391efc0","url":"assets/js/a99c379f.58d99150.js"},{"revision":"b40e97cccb0b05872fcf9deb5b6f279c","url":"assets/js/aa61852d.d11b7c00.js"},{"revision":"66ae2cd9aa9f64eca0e4b7ba9a8d4524","url":"assets/js/aab8cb18.a612814d.js"},{"revision":"47b2f3949421a72c881eeafdb16fd75c","url":"assets/js/aba21aa0.a48c4f75.js"},{"revision":"089e39fa94f72bfff9ecbaf647d3c016","url":"assets/js/ac212fd2.2681c4a6.js"},{"revision":"47ac198c8b28116644a57ffcd7263a77","url":"assets/js/acc195f2.f43683d1.js"},{"revision":"fec4c85a3ed1e9fdb324a03fadbbf160","url":"assets/js/ad428b0f.58aaaf7d.js"},{"revision":"8aae77d04c68dd7db48e3b0299e76cea","url":"assets/js/ad7a9963.ce59c325.js"},{"revision":"fac8f63d177891a871ea149bcc2d6509","url":"assets/js/ae41541d.e7189b57.js"},{"revision":"e4e53bc553f39d7799adc2a052e64630","url":"assets/js/aeabdf0c.022db4bd.js"},{"revision":"d032fb4e126936d79647e79d5457e6a0","url":"assets/js/aef35090.b52731fb.js"},{"revision":"8769a9e44f143a6d57c8e70e854e4fd3","url":"assets/js/af022ff6.cc693f18.js"},{"revision":"8614cf93a9dcd9da034b8695e4a64b59","url":"assets/js/af2a2f5a.9d13d1c1.js"},{"revision":"c1aaa0263ae5b18ae10e468b64e5902f","url":"assets/js/afd582bb.0029d072.js"},{"revision":"baec1ec5a2c6e532eff9859e7af18132","url":"assets/js/b1d3324f.c25d96db.js"},{"revision":"43cf80959b2287fcec55ad9051aeb60f","url":"assets/js/b1f01abc.e34ee1df.js"},{"revision":"08f9b2ea530df4264be492dae653e81f","url":"assets/js/b202b488.cce149d1.js"},{"revision":"56b8a259aa9e68d3509baac19430df87","url":"assets/js/b3c9d2ee.58b94107.js"},{"revision":"9eec744608959cdeba3554f098c9a3f4","url":"assets/js/b3f00dda.6dc681b7.js"},{"revision":"75af6964f6db6ee5e3718b88c8197723","url":"assets/js/b48d86be.f0d5e7d4.js"},{"revision":"79dc7d2bfefabea3f42032ec715c602c","url":"assets/js/b4994260.4be729e1.js"},{"revision":"93c794ccd4e64b129e8ae56d9ec67bf5","url":"assets/js/b619e4d2.c7559773.js"},{"revision":"587967f587e7a19e1733b472e22764fe","url":"assets/js/b73142a4.c175e5c3.js"},{"revision":"b5a6f46be9c4b36585893cbe82db5354","url":"assets/js/b817c1a4.c69427f9.js"},{"revision":"6b4068bde8657e11f8188d5869c7a44a","url":"assets/js/b846ff4a.f6c874c5.js"},{"revision":"91a2dc4c9283a77c9c67d215070ba688","url":"assets/js/b9357a37.7863f0b5.js"},{"revision":"215e0014e67970b28c05c3e9c6df4d52","url":"assets/js/bbb7a1d8.7de79332.js"},{"revision":"bd85b18ceee3d085a9a5c17e2f77fbd0","url":"assets/js/bbcb0b23.12aaf4bd.js"},{"revision":"b44bce06c2101bebeebfcb6ada69e0f6","url":"assets/js/bd623d92.50ee22a7.js"},{"revision":"e21504492301bda0c0b32e2b7f84ea9a","url":"assets/js/bfa00e90.02c33265.js"},{"revision":"a8c15a1e79d9435cc8e1bcedbf992f4f","url":"assets/js/c0e7d5d7.790a6105.js"},{"revision":"2d17a07bd21fe923b74feeb8e622cb68","url":"assets/js/c141421f.3b940a8d.js"},{"revision":"5f24d3b51db142a114332936ea9937c6","url":"assets/js/c5123512.011009d4.js"},{"revision":"b38c3b33d89aa3e29bd835efa66b527a","url":"assets/js/c65a42a7.3e276716.js"},{"revision":"596bfce2f8d5911426be6f8258f57323","url":"assets/js/c77ac16d.fdcfc8d0.js"},{"revision":"9cbc60d50ad0c1d16607c1b793a9f200","url":"assets/js/c7fcb3eb.80d5ff7b.js"},{"revision":"3de93210448cfeb6eae2d36112bb436b","url":"assets/js/c9589266.2a435acf.js"},{"revision":"91d107e3616e18f5c25c10fe0c5dc4e6","url":"assets/js/c98d4e7b.7aacdb33.js"},{"revision":"9e1f772a0888540bd906eb400ffe951e","url":"assets/js/cace9b2f.0b8f81ab.js"},{"revision":"da009353f31f4e9457c72f98c4c0aafa","url":"assets/js/cb24da11.b5d505c6.js"},{"revision":"7eb4a683f62f7587532684961909b5b5","url":"assets/js/cd661a6b.d9759276.js"},{"revision":"5c71bcea5ba635158f9d3366474021f2","url":"assets/js/cd9f8d4c.be0b649c.js"},{"revision":"08fa570823128c1132eef564e56cc46d","url":"assets/js/cdc14cb0.b2493696.js"},{"revision":"81d93e9bc4c1968059342432dea0cc93","url":"assets/js/cdd1e1ab.f5de38bc.js"},{"revision":"ef0f8c4ca59efb48d176454483d1d507","url":"assets/js/ce5bab5a.e1e836c2.js"},{"revision":"ca193040dafe38ff42bd5163dee99937","url":"assets/js/ce80b0dd.0c815d1e.js"},{"revision":"93209ea357ab2058820a85314daa85af","url":"assets/js/d08acf34.ff8233cd.js"},{"revision":"fa32aca88d1f1099b9fcce1aadf9b7e5","url":"assets/js/d1187996.48756752.js"},{"revision":"0e2d01c970b573a1476fb4187e27f06a","url":"assets/js/d1a1a0f7.7c062b56.js"},{"revision":"25b72240b6f5b1f39c1ca0dc9a35e5d1","url":"assets/js/d2176e15.d5453c30.js"},{"revision":"a34a570a304d47e8bca4e54e0ab188c3","url":"assets/js/d2687e37.c7226efd.js"},{"revision":"4dfb4e683bee4bed7bafee72ec5aeea4","url":"assets/js/d2cec89c.543303ad.js"},{"revision":"6653365258ce939a717530800603276c","url":"assets/js/d36ceb07.1084bc73.js"},{"revision":"af1f704f728ffcdbbe2ecd764715ef42","url":"assets/js/d47b6162.1e7806ea.js"},{"revision":"a7b905e25c95b6ccf45a6ab378d0cd83","url":"assets/js/d4b34704.7d7515da.js"},{"revision":"44bab68c8cc744277efa7279ff3236f9","url":"assets/js/d4d6be57.0c0d810c.js"},{"revision":"bc415ddc15155695c7678ba00a7a5e27","url":"assets/js/d52dcdeb.70ab6b6e.js"},{"revision":"794d6e7e3e15d59df8ec9801a4649295","url":"assets/js/d6049c31.f7839afa.js"},{"revision":"b637d9a1e5e5eeabab51cdf983ca3770","url":"assets/js/d630d584.9e81a6d8.js"},{"revision":"7809bc6b01eebc5b5d58be99f3583729","url":"assets/js/d67c0c4a.c772ab6c.js"},{"revision":"6fe31bfd139d3ab3a1b8742b6af9ce37","url":"assets/js/d68d27b7.571ac86e.js"},{"revision":"1d9e922f8c095b8dd0c5bb1e436dd87c","url":"assets/js/d7c21256.68526d09.js"},{"revision":"772889b0a036eb3d7c94e32f49f788f1","url":"assets/js/d8c65120.2502ce7e.js"},{"revision":"85e0113c5f38adfa6bcad8cefab5196c","url":"assets/js/d91f1b34.a29bdd89.js"},{"revision":"d1da040ce8c4b8878d06e750f6ffa7d1","url":"assets/js/d9ca3985.bbb0da72.js"},{"revision":"bdf906a6cb3b0c202c36909315e712f0","url":"assets/js/daa503e2.0ceb6a81.js"},{"revision":"4578c6093502cdd45f0496b4f4acdadc","url":"assets/js/db9e10a1.6c06e9d8.js"},{"revision":"4856252d37a08f54ac4614ff1ea90b75","url":"assets/js/dc4dab28.0b19ffd1.js"},{"revision":"155c71438cd06c9f2cd8e90f2adb3014","url":"assets/js/dc5995ba.6f753ab3.js"},{"revision":"7beb4ca46f4c1c6b936d31ef89af34dd","url":"assets/js/dc7fc4f4.cc61062d.js"},{"revision":"352f0ed30a51aee1485590902ec67594","url":"assets/js/ddf7f629.8dca8fde.js"},{"revision":"d0f28eade4287b9500d2f106b2441b88","url":"assets/js/de7368e0.05af0017.js"},{"revision":"3bee984836a449f04d8fb76113748878","url":"assets/js/dec655cf.7007e8b7.js"},{"revision":"336a57f6a86175fa858b7d7bb6cb2108","url":"assets/js/deef6824.f416a5a3.js"},{"revision":"9202a07604a95e394d693b0421c22af0","url":"assets/js/df203c0f.82e44c4b.js"},{"revision":"7b544f95dff0ff414c9d610f3c815768","url":"assets/js/df7e7d1f.07fde3c0.js"},{"revision":"aa43e595a878086f978a104ec13dfa44","url":"assets/js/e0aff436.fa798d4c.js"},{"revision":"56d07682923cd93721470447e0f4eac9","url":"assets/js/e11fd2ad.0c076d9d.js"},{"revision":"689f5355f7a8092af90b51b18b5760b5","url":"assets/js/e1468977.792f72da.js"},{"revision":"887ba8af850d341ea15194f1375055bb","url":"assets/js/e25c07ec.4086803b.js"},{"revision":"5f1c8b5917876773fcefe2051963f700","url":"assets/js/e350836c.59592948.js"},{"revision":"fdcebe81f92e0fec84c33ca5e19f7e1c","url":"assets/js/e6f9b1b7.b384e5ad.js"},{"revision":"32e42f1dd96adbe9c2ace9e5afdfa245","url":"assets/js/e7955bda.27141457.js"},{"revision":"2226d10447f41cf9096d0fad911e9069","url":"assets/js/e826b14c.68e9b2b8.js"},{"revision":"9a8e53a2724100086965af44d6b7fc9d","url":"assets/js/e9186e02.02bd3139.js"},{"revision":"20844e20b3d1f8f937f6a62265a4fcb5","url":"assets/js/ea41d44d.3b04ac52.js"},{"revision":"83aca9928bd055a35f1cfa8b306f98b6","url":"assets/js/ea494604.949fad06.js"},{"revision":"7a3fb31a42d25c7e788325fe49d118bb","url":"assets/js/eb218a78.aade1e75.js"},{"revision":"e0cb64fc423bf45708dee7120e5b831b","url":"assets/js/eb576a16.3c99d1c7.js"},{"revision":"1ee12b972e37ca5522af40764580d2e5","url":"assets/js/eb9f4e1f.71c36775.js"},{"revision":"08c79867dfe979ca53550d140de2a1fa","url":"assets/js/ec429a9d.653b1246.js"},{"revision":"3b82a0e76cdc7ed35cf38f9f5b7b106a","url":"assets/js/ef579a25.3479f3b8.js"},{"revision":"d9d9ae63af8debf2d234a3624cb50206","url":"assets/js/effff073.097c48e6.js"},{"revision":"b52c136f6f392e7965022a59ff061b45","url":"assets/js/f09cd4a8.ee873ec3.js"},{"revision":"0a68b430421c18778312f25c2768304c","url":"assets/js/f0bed7a3.7568be18.js"},{"revision":"b3ca6ef0868f7d15229f8c457535ddaa","url":"assets/js/f1d640ee.a17bfda5.js"},{"revision":"ae82d831caf64da86ea6f7a431c31039","url":"assets/js/f21ed8c0.2f698427.js"},{"revision":"96f672676a25ef582df6af086e140731","url":"assets/js/f376fb40.80bfc949.js"},{"revision":"753570c5b031f7ee80cac1c6f3833ea1","url":"assets/js/f416ab70.12fbb3c5.js"},{"revision":"c47029148658561b2f3c6912da2c5852","url":"assets/js/f4348ad3.4d82295d.js"},{"revision":"988ff15381dd240ed27d8c7f21b027b5","url":"assets/js/f54c0bf9.1fcf893b.js"},{"revision":"0a3064b642730c2987c204d260a54f91","url":"assets/js/f58a7eaa.92e242d4.js"},{"revision":"617058938f41574cc73a3f4e28016ab7","url":"assets/js/f62c5ad4.bd3c3de9.js"},{"revision":"f13311d0f26b033f3ff3b719a1b0fae5","url":"assets/js/f670e3e0.9e9fa52a.js"},{"revision":"38e3c745d15e0f40ee29b7910c322432","url":"assets/js/f7016988.b850f6e0.js"},{"revision":"ccb81788124f7747668832deae9e24aa","url":"assets/js/f7619c20.469126f3.js"},{"revision":"f745fb569a454a7dcc1c924b7485a403","url":"assets/js/f9021431.71ae8279.js"},{"revision":"f147f8faa971f1c905ee831a658419aa","url":"assets/js/f95de593.e233eb71.js"},{"revision":"d458da7c071356dfe8338a888e544bf7","url":"assets/js/fbdee31b.b479ae03.js"},{"revision":"5566f7fb3823a07ec54b8fc8ade74090","url":"assets/js/fc191c3e.fdfc08c2.js"},{"revision":"2f2a8ee254def4faf982704d051b96cf","url":"assets/js/fe2f8dad.48877ac0.js"},{"revision":"1ab86669e0799ed785231e144c801343","url":"assets/js/fe6ddbb4.968819f3.js"},{"revision":"349996830bf7f8ec9c143420cfcfd0ae","url":"assets/js/fec6b1e2.5d81b0cb.js"},{"revision":"29f30c22de0aea604627f6589c080551","url":"assets/js/fed1c90e.2eaa5a35.js"},{"revision":"3e7ca399376abca9d3129c85779bcc40","url":"assets/js/main.ded1c8d7.js"},{"revision":"4bbb2f01640ea628dfc7d9e097c19225","url":"assets/js/runtime~main.1ac308c3.js"},{"revision":"e45bcd827b56df9ca3949bae5844f8cd","url":"docs/apidoclinks.html"},{"revision":"367b7a758bfbc711131341d6eacb7926","url":"docs/associatecodecommits.html"},{"revision":"94648e0153d97a8b03ccc34349483bfe","url":"docs/authenticateintegratedapp.html"},{"revision":"f7c4c2637140dee6fddffa0bd27a00f2","url":"docs/BaselinePages/baseline-glossary.html"},{"revision":"b4dec8c1b883fb917de03433ff4865fb","url":"docs/BaselinePages/baseline-overview.html"},{"revision":"dd9d22677202bf7fe385f419cfe11964","url":"docs/BaselinePages/baseline-review-approval-workflow.html"},{"revision":"c61032d56e44b3123c9f74d08eac07f8","url":"docs/BaselinePages/baseline-settings.html"},{"revision":"d67d2b9d3fbfef3d048667d6951ae14e","url":"docs/BaselinePages/binary-repo-caching.html"},{"revision":"25d1ba3360f9f24be50251ea2a930ec9","url":"docs/BaselinePages/compare-baselines.html"},{"revision":"ee7974f928d5714aeff86192ca505063","url":"docs/BaselinePages/create-baseline-def.html"},{"revision":"580cf1bd428eedd806d967e2cba3ebb6","url":"docs/BaselinePages/create-baseline.html"},{"revision":"a6dba15752b2bfc4d0f335cfd5136029","url":"docs/BaselinePages/create-project-baseline.html"},{"revision":"3a9bb94273cbbd2a06d245b0d2e7b6d7","url":"docs/BaselinePages/delete-baselines.html"},{"revision":"384c3b47cf941b02748ab51c77e07990","url":"docs/BaselinePages/edit-baseline-def.html"},{"revision":"e3be6a0df96b76205ae1509934a362af","url":"docs/BaselinePages/edit-baseline.html"},{"revision":"2ca82542a7949c37e5e205049b42be75","url":"docs/BaselinePages/generate-baseline-package.html"},{"revision":"b0ae46dae855dc659566e87ac9baaa78","url":"docs/BaselinePages/project-baseline-definition.html"},{"revision":"6eecf8127667d1a40053d32f0512c1dd","url":"docs/BaselinePages/search-baseline.html"},{"revision":"f7946524a6c283db42d675b87ea60404","url":"docs/checkcommandhistory.html"},{"revision":"e4a66c71e45c3e44c913cc810f4f6830","url":"docs/checkoutcode.html"},{"revision":"747401c5b9132ed257b549ad7a9d368e","url":"docs/codereviewpolicy.html"},{"revision":"0be884c1e9ec87a90e532c29cf5f757a","url":"docs/createasourcecoderepository.html"},{"revision":"5ee5f46e49e0a3363526a2f9285f8b16","url":"docs/deletesourcecoderepository.html"},{"revision":"5b3abf8f81095203d4e16a965543a6d7","url":"docs/documents.html"},{"revision":"74d93f9c3f3a85386a26104318fb5f86","url":"docs/getcode.html"},{"revision":"e6b8467b387ad976bf71e8a5b90ec466","url":"docs/getstarted-adduserstoproject.html"},{"revision":"71358f1418978049d9e4518fb6685328","url":"docs/gitoverview.html"},{"revision":"d28ef10cd3e05fc24b16e83e8f267dd6","url":"docs/gitreference.html"},{"revision":"a244ac1cb4a9408b06315bdfd5ab8a4e","url":"docs/identityinfo.html"},{"revision":"a25e118c429d8675eb487eafbfd6fb9e","url":"docs/import-git-repo.html"},{"revision":"24b9ff8016e33cfe95bdde93822e0150","url":"docs/installpages/allinoneserver_rhel_centos.html"},{"revision":"75e5f20d6346f545e007abd59ddbaa64","url":"docs/installpages/dbdm-on-nonctfmanaged-postgresserver.html"},{"revision":"d90343e4fec89e6db280ac0610d43c93","url":"docs/installpages/distributed_install_rhel_centos.html"},{"revision":"8b0f2924495ee3ffe634307848dee0da","url":"docs/installpages/install_teamforge_with_oracle.html"},{"revision":"61512a2eac0342794179a83e9baeef28","url":"docs/installpages/plan_your_installation_upgrade.html"},{"revision":"5651c46e9c2f676c8cff45915d4c70c5","url":"docs/installpages/requirements.html"},{"revision":"825b05663c6641538cffc8030a549b9d","url":"docs/IntegrationPages/iaf-binaries-add.html"},{"revision":"107bc588b53a37f96a4aad880e78208e","url":"docs/IntegrationPages/installnexus.html"},{"revision":"127f43c2a4be811eea62d5eb744a0afe","url":"docs/IntegrationPages/installnexusplugin.html"},{"revision":"b7bf81f3c346eee2318b1fe8f2e33af6","url":"docs/IntegrationPages/managebinaries.html"},{"revision":"55841fbeb41b77d3e75f7bfbe6a77a2f","url":"docs/IntegrationPages/managebinaryrepos.html"},{"revision":"817f1725d775fc6a60a902a864c215d5","url":"docs/internalcodebrowser.html"},{"revision":"1c7980275b7e1d52aef645dcc6d3b567","url":"docs/ldap-authentication.html"},{"revision":"20fb51e85049cf179e6d1cef10b835ff","url":"docs/linkifycustomobjectids.html"},{"revision":"d5c84032a571398fae5ce3862bbe7ec4","url":"docs/loadbalancing.html"},{"revision":"44d64e2cec52295e603a5a7d0fba7637","url":"docs/mass-repo-policy-settings.html"},{"revision":"08ecb62966e021bd90b5c825094d663a","url":"docs/next/apidoclinks.html"},{"revision":"932ebf201a3b13675581b3165eb90b77","url":"docs/next/associatecodecommits.html"},{"revision":"f698b0710fb37731f2a12abdc71ed5ec","url":"docs/next/authenticateintegratedapp.html"},{"revision":"6e9388db5b6008773c3f39477c5b7d38","url":"docs/next/BaselinePages/baseline-glossary.html"},{"revision":"f5e0759ea373ed5c3298181a26b6645d","url":"docs/next/BaselinePages/baseline-overview.html"},{"revision":"17af53583e18d6c04d88157d541801ef","url":"docs/next/BaselinePages/baseline-review-approval-workflow.html"},{"revision":"9bf8fcfc8ba7075fb0151c7968106a54","url":"docs/next/BaselinePages/baseline-settings.html"},{"revision":"1ebbe20b0236c4fe0c9f3d551431f7dd","url":"docs/next/BaselinePages/binary-repo-caching.html"},{"revision":"4f76f7e75166cd209f49202fbdcc2ee1","url":"docs/next/BaselinePages/compare-baselines.html"},{"revision":"449832b0b5e7d9d0bbe3296d7f9e2581","url":"docs/next/BaselinePages/create-baseline-def.html"},{"revision":"5ecc9c70629b4bb86ecacd2d6e1a50e2","url":"docs/next/BaselinePages/create-baseline.html"},{"revision":"35f8ba551f7515c690a324f9e67b173a","url":"docs/next/BaselinePages/create-project-baseline.html"},{"revision":"0800fd6c4bc087abcdbb590f51bacbd9","url":"docs/next/BaselinePages/delete-baselines.html"},{"revision":"d57dddd76efb3347b74c5d7690021b67","url":"docs/next/BaselinePages/edit-baseline-def.html"},{"revision":"11d81c72bf1bbd51cbb47ecee34e7e4d","url":"docs/next/BaselinePages/edit-baseline.html"},{"revision":"295e7806933fa56cf7766bde52619cca","url":"docs/next/BaselinePages/generate-baseline-package.html"},{"revision":"105479535b1c49d709ce742f68511808","url":"docs/next/BaselinePages/project-baseline-definition.html"},{"revision":"2a91e8ae4dd3a058acce53e8349a3aa0","url":"docs/next/BaselinePages/search-baseline.html"},{"revision":"0a0b7f1eaeb4a0070c60fac0caf09c20","url":"docs/next/checkcommandhistory.html"},{"revision":"2aa322b675fc22a1163bf04f3e804b14","url":"docs/next/checkoutcode.html"},{"revision":"cab074dc8349ea2bc30a7a9fe0f37d26","url":"docs/next/codereviewpolicy.html"},{"revision":"c68d8bbbb9c9e429ffdb8f61f4da054b","url":"docs/next/createasourcecoderepository.html"},{"revision":"703598197296686be89b31048fdfdde6","url":"docs/next/deletesourcecoderepository.html"},{"revision":"3852669e07331133b6cb31f6fcbe1c57","url":"docs/next/documents.html"},{"revision":"51399b3f2c9bae8021cff3dca8fbab15","url":"docs/next/getcode.html"},{"revision":"4972acbdb26c5fb3db6347774c988506","url":"docs/next/getstarted-adduserstoproject.html"},{"revision":"037fab5f3b363dcd45bdd25988260cf6","url":"docs/next/gitoverview.html"},{"revision":"adcc1e88140dce65a263cd9abc30c204","url":"docs/next/gitreference.html"},{"revision":"5748361b0f048189bd7358b8d9caf056","url":"docs/next/identityinfo.html"},{"revision":"06b69ecc537694a834eef63b67abaa77","url":"docs/next/import-git-repo.html"},{"revision":"c2b428889f0750ce273f7d8cfc169c10","url":"docs/next/installpages/allinoneserver_rhel_centos.html"},{"revision":"30e7497c12ea92a5db4d6ee07afc0470","url":"docs/next/installpages/dbdm-on-nonctfmanaged-postgresserver.html"},{"revision":"a7af84b059cb86495c82a2527310077b","url":"docs/next/installpages/distributed_install_rhel_centos.html"},{"revision":"f6901f65c6aef7c4d6d8ff639777bcd0","url":"docs/next/installpages/install_teamforge_with_oracle.html"},{"revision":"d4e03ce510e50f042cf2c1507d805180","url":"docs/next/installpages/plan_your_installation_upgrade.html"},{"revision":"bf9004c33b727306ff0430cc16b69587","url":"docs/next/installpages/requirements.html"},{"revision":"a453733ec03d1772c8300c330942af9d","url":"docs/next/IntegrationPages/iaf-binaries-add.html"},{"revision":"e12b035acc1968740c7ab8bb8ec26939","url":"docs/next/IntegrationPages/installnexus.html"},{"revision":"9a556e9c71e0e9493ded3bbd3e81a4cf","url":"docs/next/IntegrationPages/installnexusplugin.html"},{"revision":"666b0c71e9eddb52ba9d7c1071dbfbf6","url":"docs/next/IntegrationPages/managebinaries.html"},{"revision":"c36e9f5a02ab572e08338223c68532bc","url":"docs/next/IntegrationPages/managebinaryrepos.html"},{"revision":"02e7887c0b4e58847c33d2fee01cc0d1","url":"docs/next/internalcodebrowser.html"},{"revision":"6acad96bc382f8422a2a375491044714","url":"docs/next/ldap-authentication.html"},{"revision":"2604e0672600ed0284580336a71b54aa","url":"docs/next/linkifycustomobjectids.html"},{"revision":"6b0189431186b486043c861008922ba3","url":"docs/next/loadbalancing.html"},{"revision":"a84d574ded7e96c1badc1195a3220ce2","url":"docs/next/mass-repo-policy-settings.html"},{"revision":"6e57cfa83c976d14ecaf5b31be8c6448","url":"docs/next/pullrequest.html"},{"revision":"c2c1a84e5b98a4fba5630820a050f925","url":"docs/next/qualitygates.html"},{"revision":"bfcdb057cfe8b981c90b2a9ae881762f","url":"docs/next/release-notes/apichangelog.html"},{"revision":"dc75761d346d598c3b842ba4d5d856e9","url":"docs/next/release-notes/siteoptionschangelog.html"},{"revision":"f74a22d7f92eb94603ec280c1c824bf2","url":"docs/next/release-notes/teamforge-fixedissues.html"},{"revision":"4c583eb9e5851d09deb3872c1c310632","url":"docs/next/release-notes/teamforge-known.html"},{"revision":"b7402398413c8f3c3e276903af509bdc","url":"docs/next/release-notes/teamforge-new.html"},{"revision":"10fb428fd6ddd616b4f2b1dd2489b16c","url":"docs/next/releases.html"},{"revision":"d4eeb9209140202b42045659952c8223","url":"docs/next/replicatearepository.html"},{"revision":"2af49089f001442e6999f4fb4486ef73","url":"docs/next/saml-ldap-authentication.html"},{"revision":"f498deecfdbe6d0ae1e62d4a641c1044","url":"docs/next/saml.html"},{"revision":"4e66fe1d49cdd8eca51bfdc98398a016","url":"docs/next/scm-gerrit-slack-integration.html"},{"revision":"54a093f4c8f0e3f31528ec3f14457656","url":"docs/next/scripts/backup-rb-data-py.html"},{"revision":"a3e9dca5478fcf33ef39573fb995a1e6","url":"docs/next/scripts/create_webhook_event_py.html"},{"revision":"65268ea98f8e95384fbb78e7fc765f3a","url":"docs/next/scripts/db_py.html"},{"revision":"5abdaa3cf20d5083b3b8333462371908","url":"docs/next/scripts/doc-update-fieldvalues-py.html"},{"revision":"a21ea82390e2eb49ab2ba03f699e8dca","url":"docs/next/scripts/domain_change_db_py.html"},{"revision":"50a9eae12daef0649e203aaf286a24d4","url":"docs/next/scripts/domain_change_webr_py.html"},{"revision":"9414ea6e5461e074aeffdf19d4cca261","url":"docs/next/scripts/etl_client_py.html"},{"revision":"8796d721cd85cf453eaf043371c62801","url":"docs/next/scripts/logger-db-query.html"},{"revision":"21762e3c108ace8a4151555436d61752","url":"docs/next/scripts/passwordutil.html"},{"revision":"74e3c2801a7599275e5cb6a01956f5e9","url":"docs/next/scripts/psql-reporting-wrapper.html"},{"revision":"0935d9c8cbd20dfdf6be8be1d3b0c573","url":"docs/next/scripts/psql-wrapper.html"},{"revision":"f39492047f4fe8402e69f420f585980d","url":"docs/next/scripts/restore-data-py.html"},{"revision":"f51e47cb121e7012cfe32dbebdd52609","url":"docs/next/scripts/restore-rb-data-py.html"},{"revision":"2a4b66b86d03d7417668ef88aa850257","url":"docs/next/scripts/searchreindex-py.html"},{"revision":"70751aa9dacfc68dfcc3a14fd3b5f384","url":"docs/next/scripts/task-data-export-py.html"},{"revision":"382d42a5ef5a0210151077ea04f8faec","url":"docs/next/scripts/teamforgescript.html"},{"revision":"eef1ccf64940485723ff7f52188e26c4","url":"docs/next/scripts/update_artifact_textflex_carriage_return_py.html"},{"revision":"9c3215b8d1fe2f5c840364e459622da4","url":"docs/next/search-keyword.html"},{"revision":"b6032099db30dd990f5fa7e1cb3764c0","url":"docs/next/searchcode.html"},{"revision":"617be3e4a74978e605c3d2308af8512a","url":"docs/next/setupgitreplica.html"},{"revision":"d403d65398a3eb55d01a42b2f453b92d","url":"docs/next/setuplfs.html"},{"revision":"a8967e98c6b653f8baddd6f150e22096","url":"docs/next/swagger-diff-200-201/apichanges.html"},{"revision":"c5f433674fe73d2710f5aeef02f8df88","url":"docs/next/tags.html"},{"revision":"d8fb8103cd968a322166f0cf365f6eba","url":"docs/next/tags/api-docs.html"},{"revision":"e9cf32cb61849384c1bbfec105fffbf5","url":"docs/next/tags/associations.html"},{"revision":"8c6755c24935dde48d2dd65b2f2f3b6d","url":"docs/next/tags/authentication.html"},{"revision":"c894f7bc5ea830547ba70c35a53eb6d3","url":"docs/next/tags/backup-restore.html"},{"revision":"a63f13d3d0def87d82735edff04e8c36","url":"docs/next/tags/baseline.html"},{"revision":"34a0cc18b4919a4400d6d721b6dc8274","url":"docs/next/tags/binaries.html"},{"revision":"33300024d65d9cf62f6b3d9c7373a238","url":"docs/next/tags/code-review.html"},{"revision":"1ddcc4d2f02576371d5d6d1075f0a9fe","url":"docs/next/tags/config-files.html"},{"revision":"102461847de7f70ab7898f9ed74b12df","url":"docs/next/tags/ctf-18-2.html"},{"revision":"d3bbd8e795a8f0aee7d7727097f172da","url":"docs/next/tags/ctf-18-3-ctf-19-0.html"},{"revision":"e62c5936c040fba1237ce5e3f702efc8","url":"docs/next/tags/ctf-18-3.html"},{"revision":"9103dc4f00773ae98dbda2cb5e52644b","url":"docs/next/tags/ctf-19-0.html"},{"revision":"93ae0e022e79a535b13265ddcf365dc0","url":"docs/next/tags/ctf-19-1.html"},{"revision":"c26f71c632b5a6f38c6d5a7e3f90e656","url":"docs/next/tags/ctf-19-2.html"},{"revision":"6cd598156cadeadc613921de57982987","url":"docs/next/tags/ctf-19-3.html"},{"revision":"a7943ada2f9f9784041b1782f37aa823","url":"docs/next/tags/ctf-20-0.html"},{"revision":"3b1b7bedd5e8909c6d5657d158f0eefb","url":"docs/next/tags/ctf-20-1.html"},{"revision":"9eb8fdffcdd5569de034c711e7bc6955","url":"docs/next/tags/ctf-20-2.html"},{"revision":"34f90df28144394936d66be1b094cb66","url":"docs/next/tags/ctf-20-3.html"},{"revision":"8f074fd707347aba2c553fbec5e3974b","url":"docs/next/tags/ctf-21-0.html"},{"revision":"fbd451572e3aa80583aec61833f855e6","url":"docs/next/tags/ctf-21-1.html"},{"revision":"bfc7afc513e0cebfba0a2fa216f65f90","url":"docs/next/tags/ctf-21-3.html"},{"revision":"bc386c050fc67ca5b6b5ffb155f1edc1","url":"docs/next/tags/ctf-22-0.html"},{"revision":"1e8e15c0f8ccc7efadfbbd1cb6748008","url":"docs/next/tags/ctf-22-1.html"},{"revision":"23794b82657ce161abff77677fb8f1ba","url":"docs/next/tags/ctf-23-0.html"},{"revision":"fe7354c6306078c5fda8049a65feba82","url":"docs/next/tags/datamart.html"},{"revision":"8b93fd5119995b19fffa90bc46e3367b","url":"docs/next/tags/documents.html"},{"revision":"dd3070c95c7c4a35d269f9c1fdd886b8","url":"docs/next/tags/etl.html"},{"revision":"a3f2c0af704f1a2d3b6f3190bdba4217","url":"docs/next/tags/event-broker.html"},{"revision":"db0e54522fccc80dbe234c786b2f2d01","url":"docs/next/tags/extend-teamforge.html"},{"revision":"4e15aca0ac1d84e3065a39ae8a71d7be","url":"docs/next/tags/file-releases.html"},{"revision":"b3c1380e8fd2d04135e107c66cb9fac5","url":"docs/next/tags/frs.html"},{"revision":"1a7731b3868d436c2f5aaec06764b876","url":"docs/next/tags/getting-started.html"},{"revision":"4ac27868fdf4089e7c7c779d8764b9c8","url":"docs/next/tags/git-gerrit.html"},{"revision":"479b10f3976e0d6ec6825e0135bfb84d","url":"docs/next/tags/git-large-file-storage.html"},{"revision":"938b09667225226ceab0ac84d1064c8a","url":"docs/next/tags/installation.html"},{"revision":"54c28c0c2cc6c819dedec05545196754","url":"docs/next/tags/integration.html"},{"revision":"529c0c27344ba9c0518d194f437ad569","url":"docs/next/tags/internal-code-browser.html"},{"revision":"bdd404e6fb3fc7b096d2698a00a46059","url":"docs/next/tags/ldap.html"},{"revision":"a857003edad831da3f434a7a66a4d05f","url":"docs/next/tags/license.html"},{"revision":"d53f862d3b242a3e14a7003f0e1ca777","url":"docs/next/tags/logs.html"},{"revision":"9364d8ab335ad9eb9c258b5c093e95ce","url":"docs/next/tags/oauth.html"},{"revision":"8c10259b858da681e47fb2a099b8adc4","url":"docs/next/tags/oracle.html"},{"revision":"f3c368e2c8eefd8f07c2273eed8991cf","url":"docs/next/tags/path-based-permission.html"},{"revision":"b9af01928206a67063241a27ebb258fa","url":"docs/next/tags/postgres.html"},{"revision":"eeab45b12dad7b950fea09865e67eb97","url":"docs/next/tags/project-admin-tasks.html"},{"revision":"c88d615e7cc1aa90c51b8ef101a12e1c","url":"docs/next/tags/project-member-tasks.html"},{"revision":"8f28ac98fbd0700c30778f904cbb9b43","url":"docs/next/tags/projects.html"},{"revision":"6f4a549343157ae5176062db43cc7a15","url":"docs/next/tags/pull-request.html"},{"revision":"f79d9f7862ee2d10bef29896465b67e9","url":"docs/next/tags/release-notes.html"},{"revision":"7da938ae760853b90495a0567ed2e71a","url":"docs/next/tags/replica.html"},{"revision":"937008dddf743326651a2e58ab970d52","url":"docs/next/tags/rest.html"},{"revision":"079da7ed0cc298d08e1a15f5f3f1f499","url":"docs/next/tags/review-board.html"},{"revision":"67156c51ee564a923abbc780ace569dd","url":"docs/next/tags/role-based-access-control.html"},{"revision":"b3e289295f92af1f46aa10e20c4087cd","url":"docs/next/tags/saml.html"},{"revision":"f5a7bce7cee91081752f5e324c9af153","url":"docs/next/tags/scm.html"},{"revision":"4515633665dfc1237f66a24f9fc9b3ee","url":"docs/next/tags/scripts.html"},{"revision":"3623dc98f7df6bd65c08be7c4608b000","url":"docs/next/tags/search-filter-sort.html"},{"revision":"8718c9267abdeb453f29263a5b97c763","url":"docs/next/tags/site-admin-tasks.html"},{"revision":"ed85e685b2617ed664743e76e13fb010","url":"docs/next/tags/site-options-conf.html"},{"revision":"40db1c6dd8bfbb59a0e0aefc1741ed1a","url":"docs/next/tags/soap.html"},{"revision":"d5bb40813a24b76be19dd403030809bc","url":"docs/next/tags/source-code.html"},{"revision":"159e5f1739078e83bce81f32be13cae0","url":"docs/next/tags/sso.html"},{"revision":"cc9e500c09a3b4d2707180e3afa235f6","url":"docs/next/tags/subversion.html"},{"revision":"b0d5ba405cc77edd1864afe9cdee2ee1","url":"docs/next/tags/system-admin-tasks.html"},{"revision":"7f16732b96cbf272716b837a519c43f9","url":"docs/next/tags/tf-19-3.html"},{"revision":"8aa7098db614f902cf5ce6c121e87778","url":"docs/next/tags/upgrade.html"},{"revision":"51f297a942fb4283b55a6616cdd051cb","url":"docs/next/tags/users.html"},{"revision":"3c2d3c1dd49304726b60f2b60a24107b","url":"docs/next/tags/webhooks.html"},{"revision":"079f6b32e83312d291b4b93712c001a1","url":"docs/next/teamforge-integrating-with-identity-service.html"},{"revision":"d13cf0ad1d7bda1b61ff2ae2c913b701","url":"docs/next/teamforge-overview.html"},{"revision":"c0535ea6d2065fb9427cc2dc48ebb5ef","url":"docs/next/teamforgeoauth.html"},{"revision":"9b470f914e4801c9ee9ca6d88b77d0f5","url":"docs/next/teamforgesoapapiref.html"},{"revision":"ebf8368a6c59ea705d599c35a6902578","url":"docs/next/userfilterremoval.html"},{"revision":"9e032a6be15b03a189ffbf6851c75573","url":"docs/next/viewcodecommits.html"},{"revision":"ccddd54b351ec7646afff3fd2bd496fe","url":"docs/pullrequest.html"},{"revision":"e6aea48281e29050bcb6a13396a6470e","url":"docs/qualitygates.html"},{"revision":"400f1ec229cf77693e6a1872a4c14979","url":"docs/release-notes/apichangelog.html"},{"revision":"ce9b2caee0c1cf7a8c5d763122b2793e","url":"docs/release-notes/siteoptionschangelog.html"},{"revision":"7562ef5e0c15ab6b9c85d53fc04ff3cc","url":"docs/release-notes/teamforge-23_1-update1.html"},{"revision":"043f9d1cef369ebb11091c29e820d113","url":"docs/release-notes/teamforge-fixedissues.html"},{"revision":"14045d02c35f78d122b203d525bed474","url":"docs/release-notes/teamforge-known.html"},{"revision":"4a742f389ed067ddc56906adc7fd9ca4","url":"docs/release-notes/teamforge-new.html"},{"revision":"a0bfcfc8f207eaedd6935995e187f246","url":"docs/releases.html"},{"revision":"71a14375f5370ad6dcb679712190ce1b","url":"docs/replicatearepository.html"},{"revision":"d86145e5e5bd0321adfa195b550531c9","url":"docs/saml-ldap-authentication.html"},{"revision":"03bb100ea43985261d534c556eeeac72","url":"docs/saml.html"},{"revision":"5333638b63e26cb5b41347d2c706d865","url":"docs/scm-gerrit-slack-integration.html"},{"revision":"71a002f97d274a4946b55b037700de6a","url":"docs/scripts/backup-rb-data-py.html"},{"revision":"94b17f23372993ea4c6f2e02f5bfefed","url":"docs/scripts/create_webhook_event_py.html"},{"revision":"bd038f621784295b13112fb9f60aed9b","url":"docs/scripts/db_py.html"},{"revision":"74315c3d4c22fea100bc7bfcc69ee837","url":"docs/scripts/doc-update-fieldvalues-py.html"},{"revision":"cb4f7bc052d0a6f23281cff0193dd659","url":"docs/scripts/domain_change_db_py.html"},{"revision":"b4a611c16f2ae47a7bf56b70bb36ebfd","url":"docs/scripts/domain_change_webr_py.html"},{"revision":"d5f37de65ed58861fa5fb55cce2bfcfd","url":"docs/scripts/etl_client_py.html"},{"revision":"37b7ebba431107ccb7a58abaf6f2ff43","url":"docs/scripts/logger-db-query.html"},{"revision":"1320ef09d2a8e164e568b5d6abb08f7e","url":"docs/scripts/passwordutil.html"},{"revision":"66abfeddf2641553b32921ad494f45cc","url":"docs/scripts/psql-reporting-wrapper.html"},{"revision":"569daccc8ec3c4059969c1fb9bc5eee5","url":"docs/scripts/psql-wrapper.html"},{"revision":"d2747ce8ecfabf3bed48adea00dc40f4","url":"docs/scripts/restore-data-py.html"},{"revision":"219c4e9607534aca27841187041ca1a2","url":"docs/scripts/restore-rb-data-py.html"},{"revision":"7fed43e1e336d687c2795ce3a200f6ce","url":"docs/scripts/searchreindex-py.html"},{"revision":"6ee2a0c73d6411c07958950fa2263fc4","url":"docs/scripts/task-data-export-py.html"},{"revision":"a41125daf4adad7c86691d8577f48594","url":"docs/scripts/teamforgescript.html"},{"revision":"3d1a0828b95134ef3be1652396b6c328","url":"docs/scripts/update_artifact_textflex_carriage_return_py.html"},{"revision":"e879e822b6a16992dc0e1bd9b44cefd2","url":"docs/search-keyword.html"},{"revision":"e313fe444f8ef45a713124daefe94ee3","url":"docs/searchcode.html"},{"revision":"57127e6d9421644188806ec96e4a4c06","url":"docs/setupgitreplica.html"},{"revision":"ae8ea7636ed940ca64f9874d09893c5c","url":"docs/setuplfs.html"},{"revision":"04cd5de8655422da968eea28d302c573","url":"docs/swagger-diff-200-201/apichanges.html"},{"revision":"31eed7afb547e20369f98fae6ae8b80a","url":"docs/tags.html"},{"revision":"0c7ce4f271566bda4e72b14e820c9583","url":"docs/tags/api-docs.html"},{"revision":"3db67b21a51c6e3434e331ee78a0d5f6","url":"docs/tags/associations.html"},{"revision":"fdc36fde09cca498b3f7ac5abd18207f","url":"docs/tags/authentication.html"},{"revision":"6d0cb3e049d9b7ef8d87914ae2a0f35d","url":"docs/tags/backup-restore.html"},{"revision":"55ddedc1105c15273ca3638ce4ed418c","url":"docs/tags/baseline.html"},{"revision":"87b7a57eb68710c885a82a72a3060228","url":"docs/tags/binaries.html"},{"revision":"aa9368a963c85489012db925356c4326","url":"docs/tags/code-review.html"},{"revision":"530cbb3cf08fa2208e093038bdfc240e","url":"docs/tags/config-files.html"},{"revision":"3a423505cf5f0a18e0df08bc6e1b362e","url":"docs/tags/ctf-18-2.html"},{"revision":"2744b351c5d86cda4e2bacd3cb0f20db","url":"docs/tags/ctf-18-3-ctf-19-0.html"},{"revision":"fd07cc78937e2e99ab031b17fff6c622","url":"docs/tags/ctf-18-3.html"},{"revision":"702e85371827ddb456ab3c488c6204a3","url":"docs/tags/ctf-19-0.html"},{"revision":"5dac6140b9ca3150f05ee72294d72b3f","url":"docs/tags/ctf-19-1.html"},{"revision":"849b0161c9559c351194e5a863940640","url":"docs/tags/ctf-19-2.html"},{"revision":"b56e947ecb0a7b8ad79f653348c4d56c","url":"docs/tags/ctf-19-3.html"},{"revision":"161b4489c50eac1c2f119a7e8c4af826","url":"docs/tags/ctf-20-0.html"},{"revision":"104ff3271da042b04987489d3a14beb4","url":"docs/tags/ctf-20-1.html"},{"revision":"2dd05d69e8b3f423ff57b2469f2c5d3a","url":"docs/tags/ctf-20-2.html"},{"revision":"be39267b630707897370cfac11fab93d","url":"docs/tags/ctf-20-3.html"},{"revision":"44c771ff3a82923205be994e0a50effa","url":"docs/tags/ctf-21-0.html"},{"revision":"d18aadef67fcb516d36006297ac4b9cf","url":"docs/tags/ctf-21-1.html"},{"revision":"caaea2f0b74ca223547ca708780ee2ef","url":"docs/tags/ctf-21-3.html"},{"revision":"00b399c379b6a3a8c2b0ece273703ba2","url":"docs/tags/ctf-22-0.html"},{"revision":"e2d9aec2b4a627bac7289c65add83a62","url":"docs/tags/ctf-22-1.html"},{"revision":"227f757a1c9760396ce3345eb71321da","url":"docs/tags/ctf-23-0.html"},{"revision":"338b2c74b3228133a84be548dcf5a4f3","url":"docs/tags/ctf-23-1.html"},{"revision":"52862dc99024e7f91dee7861399951d0","url":"docs/tags/datamart.html"},{"revision":"d30ffc1db44ce7c2521920d7a77935a1","url":"docs/tags/documents.html"},{"revision":"bc1457de15d833b0b0836b7b4fd53c26","url":"docs/tags/etl.html"},{"revision":"dec88f0a84fea78e8d1cc026cf7714b5","url":"docs/tags/event-broker.html"},{"revision":"b066ce2603add7a949b3bbdbc39942bb","url":"docs/tags/extend-teamforge.html"},{"revision":"4b13d24b9d44235cd8109cb0c609be42","url":"docs/tags/file-releases.html"},{"revision":"ecf89a641c815ba8c23d16073a0804af","url":"docs/tags/frs.html"},{"revision":"789a8b64852c46bef11e161caf35c47f","url":"docs/tags/getting-started.html"},{"revision":"2fb2bc67cdf122eae94d3d7c04746e40","url":"docs/tags/git-gerrit.html"},{"revision":"a45a5ce02b8cc60dec4ebf9980a80d3c","url":"docs/tags/git-large-file-storage.html"},{"revision":"844f15d1329d6ca7eaa797f17bc8545f","url":"docs/tags/installation.html"},{"revision":"dddd5ba646f22582b16ec1369ce936b8","url":"docs/tags/integration.html"},{"revision":"d64f0ef05ef49db3f20c4295916c083c","url":"docs/tags/internal-code-browser.html"},{"revision":"60ca82a4e7d71a6921dd2e76b7baf83e","url":"docs/tags/ldap.html"},{"revision":"16c0ac2b0ccd9bf663e1840cfd2eead4","url":"docs/tags/license.html"},{"revision":"3af002ceecfb4e1e450a1ddd03a11e77","url":"docs/tags/logs.html"},{"revision":"4efcb439c57045c218c1c49faef20dd4","url":"docs/tags/oauth.html"},{"revision":"cc2d3a675ddf1dc2ef3cb0cc4bcf1370","url":"docs/tags/oracle.html"},{"revision":"fe87e7f0721c30e3355f9b60f346d36d","url":"docs/tags/path-based-permission.html"},{"revision":"e29d5c683385c526e76837878baa69d0","url":"docs/tags/postgres.html"},{"revision":"8e9bc1a090da3328b5536f14464a52ae","url":"docs/tags/project-admin-tasks.html"},{"revision":"f3f53c023594162692f038111829e686","url":"docs/tags/project-member-tasks.html"},{"revision":"e7520cdb9f9a483b740442eb2442cafb","url":"docs/tags/projects.html"},{"revision":"32374f4a511160cdd38dbbd73fb3b228","url":"docs/tags/pull-request.html"},{"revision":"c88210e233ee7307176424cd47284bf2","url":"docs/tags/release-notes.html"},{"revision":"1ff42cfacfce0498f4bd887a6747d1b2","url":"docs/tags/replica.html"},{"revision":"9df203d240fe1fa4ddfa51bec96b793e","url":"docs/tags/rest.html"},{"revision":"ed7dcd3cd4eb029fbefb3ba1caeed15d","url":"docs/tags/review-board.html"},{"revision":"375ebacf274e57d59dfb359c344ad855","url":"docs/tags/role-based-access-control.html"},{"revision":"f5d53568efdfba27e3902b25d446e96c","url":"docs/tags/saml.html"},{"revision":"07f29b19831965072211b1dcea81088b","url":"docs/tags/scm.html"},{"revision":"16da4cdbe402691a7d8fe19499b1b126","url":"docs/tags/scripts.html"},{"revision":"815267dbfc53f239c405b032d97ec780","url":"docs/tags/search-filter-sort.html"},{"revision":"d21fdf460cf7d40342348514d165d4ee","url":"docs/tags/site-admin-tasks.html"},{"revision":"dbd47a2c1c7b6dedfe0c5298e07460e7","url":"docs/tags/site-options-conf.html"},{"revision":"5cc0e7258b8f3a64eee9ea63e65fe6cc","url":"docs/tags/soap.html"},{"revision":"cef53749b9880e27075a91761eacca97","url":"docs/tags/source-code.html"},{"revision":"9c36428bd44b57dbc744ab6991ee039c","url":"docs/tags/sso.html"},{"revision":"9087f228ca63830706a3e4cf79b5f19a","url":"docs/tags/subversion.html"},{"revision":"c7ce315ef65639652f6f60155fa9b3a1","url":"docs/tags/system-admin-tasks.html"},{"revision":"985c359608d81f651204f7c5249188dc","url":"docs/tags/tf-19-3.html"},{"revision":"177df39f06ae77f4f4d37eb526861cd1","url":"docs/tags/upgrade.html"},{"revision":"f4ac1d6ae9bc41ae2455a8c8b75b456c","url":"docs/tags/users.html"},{"revision":"c3e49cd3d5579661be19134e1efb713b","url":"docs/tags/webhooks.html"},{"revision":"9dcd5ea8d713b096efcb749b2b06b894","url":"docs/teamforge-integrating-with-identity-service.html"},{"revision":"66ff2120686f6f66b5dc7328056e56cb","url":"docs/teamforge-overview.html"},{"revision":"b088450aa34dc325968a2ff008f01c47","url":"docs/teamforgeoauth.html"},{"revision":"b59c61ade8a746583ebad6ad68166b6a","url":"docs/teamforgesoapapiref.html"},{"revision":"546478f0b29d8009f7044da515fba153","url":"docs/userfilterremoval.html"},{"revision":"b93de6e38e49179cdad07fce1c59d22c","url":"docs/viewcodecommits.html"},{"revision":"5ee3ee2daebc6a28db2fcbb54b6efb27","url":"index.html"},{"revision":"d98c76a9fda0c2bde4d48315938a715b","url":"search.html"},{"revision":"5deaef7144be791e6c56d1dfe76a962c","url":"assets/images/1610_cherrypick1-da85c19660fe660e6658da641ecee5ff.png"},{"revision":"eae02b5966153beca67690465d7d7166","url":"assets/images/167_commenting01-dd98feecc8f903c45fee70048abf655a.png"},{"revision":"ead741904a7dea94d774f8231f781882","url":"assets/images/167_commenting02-18794a68f81d86d0961f49c7ff48f536.png"},{"revision":"002c410bda3aa82c98b3ff76a4445237","url":"assets/images/167_massdeleteresurrect01-ddfea43ecac3b68dc165f4f52bddb668.png"},{"revision":"9fe83cd2fc19c2194d4c71a49176f7a4","url":"assets/images/167_md-16f64b5bbd9e30be0fcc16e7d4ebecb2.png"},{"revision":"a04ce2e1fb1c0dc634287fb1bd03a19e","url":"assets/images/167massdeleteresurrect-dedd3e0db1dbc8bcfb425be4f7df685c.png"},{"revision":"9a696d41097d01f4534f23035e6fa2ae","url":"assets/images/17-8-federation-tab-f861ff0a5faff9163033b06c529ec898.png"},{"revision":"72bffac0838a0e17b8004159234fc245","url":"assets/images/17-8-SAML-Process-Flow-52627169233d20bc87f7f7f6646fc3c3.png"},{"revision":"fb363cd94bc42263ef0aecf2e75fb8e2","url":"assets/images/17-8-SAML-tab-d5c0ffaafa95f35da138948552138d80.png"},{"revision":"fcc71cc5995cfb1924b6ae9ecdce8e43","url":"assets/images/171_codebrowser-354e8f111f9031c1a897cec78618307a.png"},{"revision":"e7e05561bd6771de128fc7e9439d5e42","url":"assets/images/171_gitinlineedit01-952d5b67073718543b4dc6a31f0e1357.png"},{"revision":"beed7a6655bef024a3119bc232d52a13","url":"assets/images/171_gitinlineedit02-439eaf32b5e0738fed4013d1163459ea.png"},{"revision":"2cb79f74cdb915980e0296b0e952c434","url":"assets/images/171_gittags01-d7e0f48a618eef3989b059c6b0aef8a8.png"},{"revision":"e5d0613b0abe4c9e4c8cc23858852315","url":"assets/images/171_inlinedit01-95cd0765811d64d20e17963fdebfc2b4.png"},{"revision":"9d13bcb49a0ae3df43696432eec735be","url":"assets/images/171_reviews-d3b4a2f1eefa1969e31b0d69bf68cc24.png"},{"revision":"30a605b5c78ea6d3c4e8ba77ef5359c4","url":"assets/images/171_scm_01-8289ab8e12e86a553964c81038c70ddf.png"},{"revision":"2c4cc907d36e195c904145748f462a5e","url":"assets/images/171_submitwholetopic-c9a91081516a4810106502598a668cfc.png"},{"revision":"e82a037142459ea6dc1a40fa01ee76c8","url":"assets/images/171_tags01-bf1ea81dc4afbf66e761a03d4c86af96.png"},{"revision":"8e141c2ab3579c310c35e1b7bf9b8d54","url":"assets/images/171_tags02-42a2cd616589b5ef8369be99168548db.png"},{"revision":"76d108b52339e8ff5332dbab73fe834f","url":"assets/images/1711-custom-objectid-links-2d73f6581953d328a0b2872007347a19.png"},{"revision":"93d04dc06352f6eb11d34f18ecb73cc0","url":"assets/images/174_addclient01-9a3846b2793331e67029164ea0bcfd52.png"},{"revision":"4c95ce0e8b09da064be0f6461a73dbe0","url":"assets/images/174_oauth_01-d4fbc67987c1d7c926674be97cbc0afe.png"},{"revision":"3d42e3fdd59b322b7dee3b620b696807","url":"assets/images/174_oauth_02-40472d40e79deb995883d1dceadc104a.png"},{"revision":"fddf33bf00e71eaa316f85d6aabb6f43","url":"assets/images/174_oauth_03-1e945ab98305f5afe5a33c3df180043a.png"},{"revision":"1a45aa35c4f2454f31bf9830d1093e19","url":"assets/images/174_oauth_04-1178147c15d59cdc7e2775dfc6913d1d.png"},{"revision":"753efb7f3a00e12e7b9a6d64471c8dd6","url":"assets/images/174_oauth_05-666320b7e7b5a9ac5771d231bef5d43d.png"},{"revision":"0ec654ce4f7df8c30920a1a55237fd5a","url":"assets/images/178-deleteabandonedreviews-eaba9e5bd9ec58f51e02dc60eddddd72.png"},{"revision":"aff2d97bbe7905d6ea0482f17f973670","url":"assets/images/18-2-custom-object-ids-lifecycle-b4ccc596b4be6778da4f06368fc29d43.png"},{"revision":"441d9827c7fc33a40f0aabbe9263a127","url":"assets/images/19-1_mass-repo-policy-config-529bf61772e43d3fbe2b1a8438eccd87.png"},{"revision":"c9213c556117963d78994d49d24735d4","url":"assets/images/190_baselinedef_button-4e5fc6ae234865ca4d6e5d38147cf354.png"},{"revision":"82217f68e3620c63013dd2c56e17bc33","url":"assets/images/190_create_definition-bc4a95d008684a5acdb48629ccd45031.png"},{"revision":"fa368852c005572f9ecef447ece1251c","url":"assets/images/190-girreplicas-4bb09a9dc45a12c42217fa53926d8837.png"},{"revision":"c33d6aafc1a5a06d14be48c9c2efa26c","url":"assets/images/190-markfilesreviewd-8e7f9ea4d529e5bc65f5c63e35a1ba40.png"},{"revision":"98f07a0c8b23018e950290128d1ca39f","url":"assets/images/190-privatereviews-0dc16da1c51fc8e54babd04188ebc790.png"},{"revision":"d0ec02d07513b3e83f59c118f1562315","url":"assets/images/190-replytocomments-204e0a1e6f822741e339bd99d38c7660.png"},{"revision":"ea98fa6d311c1b095e8ce6e09530acb3","url":"assets/images/190-viewentirediff-a97452bbdf73dbbff6af4e4c97fb4a64.png"},{"revision":"c596e566173c037659e5cd6caab00a32","url":"assets/images/20.0-scm-settingstoggle-f2ac33a524e2076721fae9515b149adc.png"},{"revision":"2affca4f6b7280a9f9b10356f85d76a6","url":"assets/images/20.0-scm-settingstoggle01-3c8d47c5fe77292d491075b283b00b93.png"},{"revision":"86dc90a7fda8a618b8dc059440b67aaf","url":"assets/images/20.0-scm-settingstoggle02-d57b37ca6bf8e3111ea2330f93658942.png"},{"revision":"2eecb3e06f69e4ff79507fc3c457fc40","url":"assets/images/201-advanced-doc-search-01-9ed9204c3f27353dd520dcf9c51cd393.png"},{"revision":"f670575463c43b6f14311af3d0112d3a","url":"assets/images/201-advanced-doc-search-02-cd60fa44fb91290f690ea7dd276e5d01.png"},{"revision":"a61ddc5a91db3e83349f5f9a812951a1","url":"assets/images/201-deleteb-01-d3f90ce920c59b54f06ae944ab92c803.png"},{"revision":"30f67a22d85ea5db6ee5cc50898e63e7","url":"assets/images/201-deleteb-02-9bfbb3b7c83f1d51470aca2328ce8b86.png"},{"revision":"68bfb7d6c0178db65c3cd713784cd9e8","url":"assets/images/201-deletedocs-01-4abb079dc7fea324cb53581674b1467b.png"},{"revision":"43ec4de29ae10a2e28720b2842c3b385","url":"assets/images/201-deletedocs-02-4e1888e4d53c87bc53cd72b829892337.png"},{"revision":"9828abe60e914baaf01f9b909655aa74","url":"assets/images/201-deletedocs-03-be791fe8f12d1849c09a5927edac8116.png"},{"revision":"9972204491cb87d9c8e6bf2afdf74999","url":"assets/images/201-qualitygates-01-14f070f6ca507159ad0709d7b25c048d.png"},{"revision":"5d4c5f58efe3871d5b1cc88cf6cbf37e","url":"assets/images/201-qualitygates-02-58fd08cc9541d746311dbdb9e34067e0.png"},{"revision":"cee76eaa132f21ed5653a6f3c4137afa","url":"assets/images/201-qualitygates-03-230f6d509a10408b63ce1983cd8b39bb.png"},{"revision":"57670b992d3bca8360389aa3e7259e2e","url":"assets/images/201-qualitygates-04-f29fad0fb754cde9c82754383114bd0b.png"},{"revision":"b2be77b8cfccf3332d5cc7edfc0489ba","url":"assets/images/201-qualitygates-05-cdca7e3bed28ace55d15aacd8ee4daa5.png"},{"revision":"c448406e041881be1d060c691f174e16","url":"assets/images/201-qualitygates-06-168fc67be1b171fc4d09a7ea608e6bcc.png"},{"revision":"f6e3141e55a6bb3903378782ca6658dc","url":"assets/images/201-userfilterremoval-d5fdd7098937219364f64770b598ddfe.png"},{"revision":"12979a87d384d48348c97b71b818e16d","url":"assets/images/201-wholewordsearch-01-f7779f2f00f3749c45fdf1e8f956c181.png"},{"revision":"7703136c79f067c59d14a728f843479a","url":"assets/images/202-add-binary-to-projects-02-46837fe8ee264fde68785d7a796e0f88.png"},{"revision":"6b72dbffda318ec6c2d466d69707cc8e","url":"assets/images/202-add-binary-to-projects-e89ffaf8680d2feb34758d87cc7e4712.png"},{"revision":"283834646a06a44f371f515c706c2edf","url":"assets/images/202-newdocbutton-7ae9dc37ab0a27d87715c2096297defc.png"},{"revision":"a3199c3540f75502913922a4860c2a0f","url":"assets/images/202-scm-02-bbfcf50b0fe0050cf46e9de0e6c41678.png"},{"revision":"cfd8bf7242d11e6603b52a4ea85f1b34","url":"assets/images/202-scm-03-955a3dc8d565451432382bbe8a8b48a1.png"},{"revision":"f4e7ea142b4dc13111a4f1d55c1fe7f0","url":"assets/images/203-deletedef-01-31d89fbd686189673ef4387d1918ac0b.png"},{"revision":"7c98112bcc52515a70a755afea4136f8","url":"assets/images/203-deletedef-02-dbfe0ca26a0db403e125c21cefb97c9c.png"},{"revision":"2f8c7ffd495f56f77ddc2b2f852347cc","url":"assets/images/203-view-baseline-def-3ac8eec738eb52c5634f9edb29b8c575.png"},{"revision":"d5d6984ccea55e235c7a6705af545d1e","url":"assets/images/210-glob-binaries-01-77043bf9b11996cd61d259a2cbdc629d.png"},{"revision":"0921af1e24a8d6361278a288a76523d0","url":"assets/images/22.0-git-replica-01-db38de1a86541cededa4bde190e79d1d.png"},{"revision":"922d6589e160185363adb0372fb986ef","url":"assets/images/23.0-scm-repo-categories-7db2b36b1924462f1407f347dab8df1c.png"},{"revision":"e3ff3eaafc3ce7023309c447cd89dd70","url":"assets/images/231-u1-soap-server-637f35693bef77feda769b9e7e9e8219.png"},{"revision":"e82fcd57f9d73a27e062e35836491a40","url":"assets/images/active-review-rules-c7bedf3170f58e2771d43f546f81b8a3.png"},{"revision":"d6fc667f6ce991ef503e328bb0bb50fd","url":"assets/images/add-files-to-gitrepo-2-8dfc2dae714a688cf9d48cff195a21cf.png"},{"revision":"5dbe5707560d874770b6d45e134088a3","url":"assets/images/add-files-to-gitrepo-3-b79037626d79a3d1085888eda2006e83.png"},{"revision":"23a7326fa878d81d6610a233a169b53c","url":"assets/images/add-files-to-gitrepo-4-280f8538f77bfe50250243b79c8ce208.png"},{"revision":"be128b1ff3a26667134f942c743ffcab","url":"assets/images/Animated-GIF-Repository-Policies-Short-36726473516bdfc22a7dbcb1f5832870.gif"},{"revision":"7b10741462b0f5c10f4eac9c98f76616","url":"assets/images/app-create-1-c8efd128771a3c8c216004e4ba75c86c.png"},{"revision":"1e1e7382d6c6d5772530ea69bca15bc3","url":"assets/images/app-create-2-22fc0bb2231d73e291ff4033e8ef6f60.png"},{"revision":"d36735dc553c7e945911aee545051869","url":"assets/images/app-create-3-c5de97bce263ffe958f23c42a429cdb2.png"},{"revision":"07ff119ad1b54ef1bdf0671f1642da9b","url":"assets/images/baseline-admin-add-transition-046d628863094fd08a22c57e1546542e.png"},{"revision":"84e179b7915d667fd66d97a8b0d9cb91","url":"assets/images/baseline-admin-status-button-db66eea76d4e81f45191477ab5a9303b.png"},{"revision":"41eb6074bbd6e30a27187275149c93ae","url":"assets/images/baseline-admin-workflow-1ca421b38e1540b5b67c7913ae3d6237.png"},{"revision":"bb305953d65df70a17b8950a48b10a20","url":"assets/images/baseline-comments-52061388f9353848e11ef5c3be1c1b9e.png"},{"revision":"8f8fd78812a8495858ea383b74567470","url":"assets/images/baseline-comments-only-b50160cd72a3269d1658b3c54b9c745b.png"},{"revision":"7588853ace0cddb326325c3ba3509e7b","url":"assets/images/baseline-comments-showall-188e12905fdcd99ad62660e7ec07440b.png"},{"revision":"11edb9c95f0dd1e15ad65ce6fa329b40","url":"assets/images/baseline-definition-list-5412ecdb82df4582baea0f5f4f9f8f07.png"},{"revision":"cb91f7cf0bfb1f27475014ceaef6bea5","url":"assets/images/baseline-documents-preview-c836c4d42127b28ea4b9d193d42d64b9.png"},{"revision":"57e0b0a19f3605eae08eca610c2b2be6","url":"assets/images/baseline-filerelease-preview-4ded261d3c63c8925e19494213ed8cf5.png"},{"revision":"55efbdfcee4ca1ff73e9b1e9ef06eff3","url":"assets/images/baseline-generate-package-1ff3e10910eff9f752e7442ee367c919.png"},{"revision":"42b26a638400e30fe802af279a158d1f","url":"assets/images/baseline-in-projectadmin-2f5358deb05aff56410cce7aa2f801ed.png"},{"revision":"f4a82946492e2e69348da9ece3189a73","url":"assets/images/baseline-list-b56fb777c75f6f3a2a689521e845264e.png"},{"revision":"f2f8c9f9e254151ec21d74d52270e393","url":"assets/images/baseline-new-c10a07beb9a572400b6bd331cb550ad3.png"},{"revision":"30e0e7a953d7a6e5ca467164b95236d7","url":"assets/images/baseline-package-20158106db98832d29e4817b53603d10.png"},{"revision":"aa91c549875f4afecb16022605e9d7e1","url":"assets/images/baseline-planning-folder-filter-2-8a1bf89aa3ea5f74574fe6b288a4bcd7.png"},{"revision":"2440b460652fe6a2e4915661aa744aa8","url":"assets/images/baseline-preview-fe49fe8f1760086f61494bf8e7cab383.png"},{"revision":"c1742abc382cab1246e7c13af36dba98","url":"assets/images/baseline-scm-view-tag-bff9c3f9066ea041b97ecb28e34607f9.png"},{"revision":"f05af70484efbc3bb015f4140098017d","url":"assets/images/baseline-tracker-artifacts-preview-d61291259e1575656150ff65b65574fd.png"},{"revision":"ba8aabca110b8dceefff0d2d37f928d5","url":"assets/images/baseline-tracker-type-0c7306420439dce481ecd593295835f4.png"},{"revision":"0b193229c6843ce987c52274410158c2","url":"assets/images/baseline-tracker-type-add-condition-71d7a2b7018b28a63857aa9a710101a2.png"},{"revision":"4c278baaf9754fcd49ccb6f024578363","url":"assets/images/baseline-workflow-2-9e1d1a2f20cac1fbdca3b4729b4399b1.png"},{"revision":"95550adf4f162381c47702dca1e07521","url":"assets/images/channel-add-1-1c9476a89a27481947040f262199eb8d.png"},{"revision":"8ea844111629caaee40e5218d7844565","url":"assets/images/channel-add-2-5e565a5b4b476aae2d62e4cd909c870f.png"},{"revision":"828e963c7c191ff8f6826d3a6186c016","url":"assets/images/channel-add-3-f035f52ec9357463843ef2b02eedf259.png"},{"revision":"70f3d3eb25c3c0d52ccb22c392618a77","url":"assets/images/channel-add-4-b9008d97cc245a8e16735b091d9d854e.png"},{"revision":"292e4d3952b64b1301e1afe5753a380a","url":"assets/images/coauthor02-a43711d0fbad2c1f393f3f00306d4994.png"},{"revision":"7f0e93f8494368bd76e433a620f378fa","url":"assets/images/coauthor03-dcc19d803a5c3277fc27083b466dcd9a.png"},{"revision":"06a44d3ee91276b4b43623946aedfe73","url":"assets/images/codesearch01-862611b2eae83ec8d2b20225a7f2ead0.png"},{"revision":"f594e7ecd2f72ee81cb8c0c71f61ad52","url":"assets/images/codesearch02-68abf982eb14e743064f4d7a66816222.png"},{"revision":"22eb86176e0c76cc8daaf5fc2ea1763c","url":"assets/images/codesearch03-0864201c1d7758859355f6bd55c76d6c.png"},{"revision":"d5768482e4e0931d93a682f9ef808545","url":"assets/images/compare-baseline-defs-results-98c87ffe1523fa688e867b97cbb3144a.png"},{"revision":"afdaa7d97b7e46aa2d82cf5c6999767e","url":"assets/images/compare-baselines-af95d52625c4c2b1ba26ac994cc2bc2e.png"},{"revision":"efa07598fc675b899b719809f1e8b4d2","url":"assets/images/compare-baselines-button-39ba7b84e9b1b159daf10da922f7eedc.png"},{"revision":"f8654ab8cde3cd8e2d10f65c17ec9bf3","url":"assets/images/compare-baselines-results-e559af5e4b9de3b6000b4dfbcfab5f13.png"},{"revision":"c49501f8aba98d83ed9465adfa8e2386","url":"assets/images/compare-baselines-search-eb69ce069031b88094a94b68a4d80ad8.png"},{"revision":"b6851026f70d5f291cb2b65098e0f1d1","url":"assets/images/configure-multiple-ldaps-0d26e41bb87a283c035ec2e1bad9efbf.png"},{"revision":"65c75ef4634ddb4e1cf9f86f44036664","url":"assets/images/create-baseline-47b8a5cb88f025d73260d841f243cf2e.png"},{"revision":"9e6417bd27dd978710df5154f4ebfa1b","url":"assets/images/create-baseline-from-appbaseline-7cfe295c25d7c0087da2e146700442db.png"},{"revision":"5daf4f2c08ef967eb556013048ab8475","url":"assets/images/create-project-baseline-8dac80500592776e39a36ea47c3df630.png"},{"revision":"a7c08c84b025dc337067410db17450f0","url":"assets/images/create-project-baseline-def-4691bc4e9c474b3fe650b8f3dfad01ec.png"},{"revision":"0ef253b82204ef2ec87f88398c3ccdb3","url":"assets/images/create-project-from-pbl-9561ddbe3b6a3ea6b73912941e4c934f.png"},{"revision":"b3f4761e32fc4057b7ec032b083966f0","url":"assets/images/create-teamforge-acct-2f683e1d293850de242569262a2a048a.png"},{"revision":"a00ff6aa13c4fbd992c33a0cb6952949","url":"assets/images/curl-verify-1-dc63a1d185a3bed3ffd9597799bb32df.png"},{"revision":"6e88498d84f7182f97981189fd45996e","url":"assets/images/curl-verify-2-9880e95487901828eb987208417e60ca.png"},{"revision":"b9c511aeec2d253eb3d0f4c65aa97412","url":"assets/images/custom-attributes-21c336e7087fca7f91981bc6f98027b0.png"},{"revision":"b9ee1f7b6a7ac10875423b9ded3bb90f","url":"assets/images/custom-review-new-3922242796327e5e5be97c7b9d4e4ac8.png"},{"revision":"8e0dbd01b658c66a87c7499305645b1a","url":"assets/images/default-protected-branch-d471319d2dc6cbbd7d0fd3221e9b7840.png"},{"revision":"86f9b59367f7af13fa8bbcc765bd8bdb","url":"assets/images/default-review-new-877d1a7fa17c0bc04c487c6c3a09b399.png"},{"revision":"db765aef45d15e81a4a5329b462b4f98","url":"assets/images/defaultuser-intermediatelogin-f3209f79bdb7c7d3cb77564dcd22fb36.png"},{"revision":"dc4256397db080c73eeb87317cc4fe15","url":"assets/images/delete-custom-status-6cae0cd9b2f882e833697bd16a1f934b.png"},{"revision":"21b6922adfe3e984dc80e40618e46d95","url":"assets/images/delete-user-from-monitoring-list-b6e0d4c3e47a91b42ff0c782d43bca52.png"},{"revision":"9b94f5d9213c8b9e5cea02140104effb","url":"assets/images/doc-search-results-68e839622c4b8704c203b1718751416b.png"},{"revision":"3a7e120f7da9fed9e40f194d461c7964","url":"assets/images/docs-set-as-favorites-557d0977920e14cb48050a4f51841a52.png"},{"revision":"521698977fff92cbfb1ed258d753be54","url":"assets/images/document-column-configuration-915a02af545cf85b47d3c98ecef8575b.png"},{"revision":"03f5861e2537b6a5a0aab3c2c344f2ce","url":"assets/images/document-destination-project-d43ee9dcedeaa43ad06dbe1a175916c2.png"},{"revision":"762ce0797b56cbc6ed0effbf7f0b0379","url":"assets/images/document-renamed-db47f5280080177ed501d8f39e720982.png"},{"revision":"35a4400c323c430ee284d909dc6ba7ec","url":"assets/images/documents-apply-column-config-1b09af3fe3a9448bd2390736cb395629.png"},{"revision":"1c7b1ab7a96bec7f4f09d075aace738a","url":"assets/images/documents-column-config-dialog-90711add0e0033392bdac94ce6bfc6e0.png"},{"revision":"054597f52b9792309b14f1e9af5031d9","url":"assets/images/documents-download-inprogress-8a8b6ccbcce151e646b3f50053c94f72.png"},{"revision":"d51bb6779bfa831c1aa7b3ca34127159","url":"assets/images/documents-existing-list-page-429691141007e0a5e6a70b13dcd952d5.png"},{"revision":"dbce0d21d9aeee6705e14f3b7451bd91","url":"assets/images/documents-favorites-list-73e4a598315d2ad726717aae4684c3b5.png"},{"revision":"08dcf6cda7b16df632075e4411b85872","url":"assets/images/documents-monitoring-user-icon-1044a09dc8f0eb9819d32290184c3c01.png"},{"revision":"3c172a38283bb7e8b52d843a37b8b6eb","url":"assets/images/documents-monitoring-users-list-f5812e9eddcc564dcb31f2ce7d192311.png"},{"revision":"c05866bcee15de088ec0860237e99857","url":"assets/images/documents-name-id-separate-a192c31d652d5173be5f53f5f69d3359.png"},{"revision":"b06d362a5b2e96690156238db0c24b15","url":"assets/images/documents-name-id-single-ef1293d7b8083072244a342e109148aa.png"},{"revision":"ea1e5e48b512e73bb110a83d79c3f413","url":"assets/images/documents-new-list-page-2ce8ddffe2ebf494aa7a749389053d0b.png"},{"revision":"e54f0503639b336ab88c24ae2e5c412b","url":"assets/images/documents-newfolder-name-a2ba107bf225aca1d4fa3d371e0fe2e0.png"},{"revision":"7e8e300d6c5f3aaca85392fa8ad2f558","url":"assets/images/documents-newsubfolder-b3911be67f6147310260ce792d49506c.png"},{"revision":"6be451a186dbb23706b3571f9efb58d3","url":"assets/images/documents-reorder-fields-b465ba1bf5a753d8e4841d1693289686.png"},{"revision":"abeb541f26e372d40315c9d50a915874","url":"assets/images/documents-saved-column-config-1213d206bc4a80bbf21454a62fd79518.png"},{"revision":"500c4b15f36d4e27f2913603e044d829","url":"assets/images/documents-select-project-be371afabbefb040f1975d6764a9659a.png"},{"revision":"7d0d3e9d05e1f53316467814cde30dcd","url":"assets/images/documents-target-project-docfolder-2cb3f280d938ec6b560a3926ba4a9be9.png"},{"revision":"4503e09aeb6f9d7035c56afea91e5b53","url":"assets/images/downloaded-zip-file-with-lfs-data-542dcaab7ab41a59673f153fe4ad9315.png"},{"revision":"78d408c6913358171fc4a4dbac117450","url":"assets/images/draft-baselines-dea3b51940ac7fb65cac899f1502e368.png"},{"revision":"6d458bd5814efe6eb04c12171d4fdaeb","url":"assets/images/edit-baseline-1-346184430f6d662e692c2a8c233b67d8.png"},{"revision":"657c7d780040475e2b3beecb2a4cacf3","url":"assets/images/edit-baseline-53cd145cfa01a41d6680b19dfd7d211d.png"},{"revision":"0e0dcbe6ffcd3772b8959432967f434a","url":"assets/images/edit-baseline-def-395eff3d007993b6ce1e8badb9f5b298.png"},{"revision":"6991e79566108688a218fb7bb8f1f613","url":"assets/images/edit-custom-status-6b2e81298acb31807453335300430bd3.png"},{"revision":"0f17b492dd37db6741a47a96ccc560b4","url":"assets/images/edit-project-baseline-def-889003a7c45ead32c685a76a253bf78f.png"},{"revision":"c6ce9238a31111779086d57e0b1545c1","url":"assets/images/editrepo1-d5d054263ae003af9a0dcd322c5a9caf.png"},{"revision":"82f63086666bc6807cee6ddf62971fea","url":"assets/images/enable-baseline-b7e59361163015d5348a4bbd5dc3f529.png"},{"revision":"96bc71c96751072b710e42b86ce12414","url":"assets/images/enable-wh-1-58f75bfe96eea363b07b59ab54684eb8.png"},{"revision":"f035dfb73001ddc5ff9b3881a039ab76","url":"assets/images/enable-wh-2-cc3b5fb65bc8a6ff96b1a8071cd7383c.png"},{"revision":"a61863ef53e32d618d29ecae1bc9f563","url":"assets/images/enable-wh-3-a9d1f9d9e0950fb18a2fdddedea299a8.png"},{"revision":"e4cbedf82859c2c9b09d5c28a30ffe80","url":"assets/images/enable-wh-4-2b9d9b98e796ada5e8d59183034d2ed2.png"},{"revision":"d880550218cb8c499e75fcde7b63dbd9","url":"assets/images/enable-wh-5-ece2f759fbf0b427c9edb377c6692e0b.png"},{"revision":"3078a686284d0f6af4faa6a78893addf","url":"assets/images/export-appbaseline-to-excel-0432ea1d7f4ccd863497fc32e1537e96.png"},{"revision":"d0c7eabbbd9b3d4ae77bdd9c1c69af98","url":"assets/images/export-appprojbaseline-to-excel-5025a130f525ffcdfc65393fe434fc19.png"},{"revision":"f9d8dd60050b408cdc03d667eb759bdd","url":"assets/images/export-to-excel-button-db70202bd0d46e72576c69cb213e174e.png"},{"revision":"b6b840cb7971b190a06235a0cbf5aab3","url":"assets/images/export-to-excel-message-c0d10560820e99c3894835e0cae4604c.png"},{"revision":"263634db5105d6325cab726e7168c55d","url":"assets/images/external-baseline-artifact-827bf992770e3903da6bb79e9b7925a9.png"},{"revision":"c9493f1604a3c6c962dcda2b434bd3e2","url":"assets/images/external-baseline-in-new-project-3ae0516195de33bc11d069f9e1b065a4.png"},{"revision":"71a7a6d87b10d960a68dc020aed2224a","url":"assets/images/external-baseline-in-package-50d12a42ed7acb832ab8e0cbc68f2816.png"},{"revision":"c8368a07042b888fba0be92a83e9cf6d","url":"assets/images/external-baseline-tar-6efab9808607c4e693cadd2cbe49c5a8.png"},{"revision":"6dc8a9118b3616e5cab18d59676c95f5","url":"assets/images/external-baselines-b0fdfe9df7fd975c9e391fdb5bc5d10f.png"},{"revision":"2e3169eea4a6e714225e436f09a9fa37","url":"assets/images/file-release-obsolete-status-4023b1e1ab926affef13d7cc43760761.png"},{"revision":"ad5bce47d521d65295317cdd210f1433","url":"assets/images/filerelease_changelog-41432254fb0ce33dcecfa80bce50ef41.png"},{"revision":"066a217803b73272f0299c116e2869b9","url":"assets/images/gerrit-config-1-4af2a0c0742e9d9c6c30b2dcfe2441d6.png"},{"revision":"5324b331f8ded553a6a1358fc6fb4880","url":"assets/images/gerrit-config-2-2fdaf6c0fa07efb07556bf407c50219b.png"},{"revision":"9bdb6df7b43bf02d3fbd66a395b0636d","url":"assets/images/gerrit-config-3-8f3e39048a4e962abd13e89c26060cd4.png"},{"revision":"cd97b8aa7c3360e939d95d5c12929b72","url":"assets/images/gerrit-linkedapp-80-1-317a65f93d6a9b02d6884037c389de74.png"},{"revision":"422a492ca33fb6cece8b7dce3b06ee7b","url":"assets/images/gerrit-linkedapp-80-f0dc5dec37efa83eca0208a2e16f8218.png"},{"revision":"5db36f693d4d3f7fd41e824a130dfbe5","url":"assets/images/gerrit183-download-button-495d594b56a9712749678df21f305baa.png"},{"revision":"aa2ce724d96fc0376bda94a300d49f87","url":"assets/images/gerrit183-view-images-e17a7052581b1ce65ac66cf8698b91f1.png"},{"revision":"b70f0e26b70b229be9a103ac55cddf2d","url":"assets/images/gerrit183-view-pdf-files-ea1fdfbafa2c6a6068a009bc8c9ef29a.png"},{"revision":"5188dbacdc42c5718003430d1580f639","url":"assets/images/git-browse-branch-adfc735de22ea2330c8c7d79f72a2861.png"},{"revision":"d5a33c35bbc8add9ed739ae4afc4c21d","url":"assets/images/git-clone-https-curl-77ef4ecd40d389a6128c488006a04d85.png"},{"revision":"6ee5fff13568b4e9cefc5791616af636","url":"assets/images/git-clone-https-scp-0fc632dc1d63c52f7d703962fc58d097.png"},{"revision":"985fb4c933f40b2ade51701170b9185f","url":"assets/images/git-clone-ssh-curl-4efd40e62fcfc8acea1bca031029ac71.png"},{"revision":"44bf61d593cb2056b9c08a38b3b27042","url":"assets/images/git-clone-ssh-scp-44e281cef269071ffa55c33b49de1bdf.png"},{"revision":"a7e303bd2b1c08cac7e8e8000194327f","url":"assets/images/git-fetch-commands-8c109a5fb60b4dcdf09f44f479a62cd4.png"},{"revision":"1b41e4f872b6ff2bd559d08117d6b446","url":"assets/images/git-host-9a15b953a51742a3476adc8e2f2825af.png"},{"revision":"d46397011178b4c5ff87886b257406e6","url":"assets/images/git-project-branch-830cdf7e27552a491d0d65293a4426c9.png"},{"revision":"910aa342981a51fedb46e4c87a161b08","url":"assets/images/git-projects-list-4cd3f8fa0b2bb5600deeeed7fb922909.png"},{"revision":"79c27a44dd2f302f1fcb4a4e1c44a266","url":"assets/images/git-tf-projects-dddbf0c6e1e4314678d468d4c1845602.png"},{"revision":"dff0589b7f0b2fb52cdb6647976833e5","url":"assets/images/ignore-colors-disabled-b4b1f193d41d890c05240b13331a32f5.png"},{"revision":"82e73007c0a456c1873b532b40e6e79a","url":"assets/images/ignore-colors-enabled-8edff5681dbaf4585fdda2c6cb51d27b.png"},{"revision":"2dae83e95083a5be546fd5f68b18bdd9","url":"assets/images/ignore-colors-transparent-mode-enabled-4666dfb45d2975caabc4ae6854f7817e.png"},{"revision":"6e567a6807e7a79941198bbca3847536","url":"assets/images/ignore-whitespace-disabled-fd7b531218a7734a4248aca0965617ab.png"},{"revision":"89bacc225927e117b309d80aeb7442e6","url":"assets/images/ignore-whitespace-enabled-c643f6d47c75350c61ff733daf63bb41.png"},{"revision":"c64723b2e6c1045f3bccbdb4db0ca351","url":"assets/images/image-opacity-center-533a7469eccbf4915177db2a9d911e9a.png"},{"revision":"c2ede586347b767566d88748295c6090","url":"assets/images/image-opacity-left-ec3dcf5f764c117392412ee8ef9431dd.png"},{"revision":"33b8684cba6158b8018a6ad043c56776","url":"assets/images/image-opacity-right-d4c7d0412a1248c7e8c58a6652f89f2d.png"},{"revision":"af0723928ee6708a4447c846feb8bbf5","url":"assets/images/import-gitrepo-tab-5ed967ec6ab5eeb5683346c59a53cf15.png"},{"revision":"2ba661ea87bf96a9f6e08a2da5da450e","url":"assets/images/include_scm_binary_repos-52c365a71e73d9226b43621517b5a3fc.png"},{"revision":"6d86049315cb1514926b9bca5539f36b","url":"assets/images/include-document-fields-61c96eb2f0cdffcaa217fce2a97755d7.png"},{"revision":"053e3a50652b717cba3b809c4d8e8830","url":"assets/images/include-tracker-fields-610ff138292b6485dcb03442917f9de0.png"},{"revision":"ce31f237ad40b12ef07fc347818ce706","url":"assets/images/index_pdf_html_files-37f3092af5150fd68748486d0c0575ef.png"},{"revision":"9f4f8a26bcaa641a713eecb816d93225","url":"assets/images/ldap-configuration-498949dd4ed076ac3d838d19f88dd23d.png"},{"revision":"ff95bacc34486456bdce8b559ffa8f68","url":"assets/images/ldap-idp-69a4f0c3b2affd819d01b283c814b2d2.png"},{"revision":"4423ae33c6917d87b6da0e3b75d632fc","url":"assets/images/lfs-01-25dbce66120239834686eb46094ab991.png"},{"revision":"9fd16b9f89ce82753f0a17a32651864d","url":"assets/images/lfs02-fcf36223befc25a6ea7a20f136631645.png"},{"revision":"334673ad1964bb937db36c7880be170d","url":"assets/images/lfs03-606b758dbc9041ae7732e03530686625.png"},{"revision":"22c63317e463aeaae28f88595c0b1ec7","url":"assets/images/lfs05-89f938abde96209ef5e2af2e6fc16665.png"},{"revision":"3100042ea1e39405a3f20515b3d3ba72","url":"assets/images/lifecycle-workitem-link-957493b87cd226ac8a845adbd56eb360.png"},{"revision":"fad662decc1ed43cd6f250c8c2fc50df","url":"assets/images/mandatory-review-new-5a03be2f709022e131aaa24575321948.png"},{"revision":"08eface80078d60178591012b838bccd","url":"assets/images/monitored-document-folder-ac8e0c4ec56c8bf16b8cd45787ca02d2.png"},{"revision":"6c558c3f881527a4a2a82a8eaa61de86","url":"assets/images/move-copy-documents-a64ab84301a1fd0800d015e7c5257c9a.png"},{"revision":"411f23c1c1c4754e01001f51cefd5c0b","url":"assets/images/move-doc-folder-1421729f1769ffaaba03ecb286ea400d.png"},{"revision":"9a4c2e334c02c958dcb3b312b8526140","url":"assets/images/nexus-3-authentication-2-7400a8fc4cc492d2ef1687fc2370c098.png"},{"revision":"621579b182413fa482885fb8187e9025","url":"assets/images/nexus-3-authentication-4acdb90a5dcf8bf5fbcf484b769ac1aa.png"},{"revision":"e81a2e6a0fb9a08def02cac360aedde3","url":"assets/images/oauth1-168e19b4d05e47f5b7ab4e5b5c8837b2.png"},{"revision":"d0dcd681d51ef9ae77c7da45c0c1d856","url":"assets/images/oauth2-100b3dbf7ac3ecd283973609d68d2730.png"},{"revision":"85da5a402bfadca9a5d07adec48bef42","url":"assets/images/oauth3-b7560d139c053381bdb2a40eb1138860.png"},{"revision":"f0c1c918112d42f97fbcd0cac84e7047","url":"assets/images/oauth4-abd397b2d52e054aef8e76d9945ce429.png"},{"revision":"6224de200d935d8809f3f554f48709c0","url":"assets/images/optional-review-new-df4f1bc748d3081d360552bd23403852.png"},{"revision":"264242ff28cf981caa50eb0e1155b02d","url":"assets/images/package-download-204b4b72833df3ef7aaf0415c5ffaadd.png"},{"revision":"d01b7eaad58ea4ce186621a1aba7015e","url":"assets/images/package-list-4b674d2fb96e7b0cf0a0db86134d072a.png"},{"revision":"39f0641351f53a1131f3dd1580d5cf48","url":"assets/images/package-structure-a43652b6dbe742ef1eea2b04b5d6e176.png"},{"revision":"38ab1d481dcf9dad870c23315d4d1b71","url":"assets/images/pbl-in-create-project-page-a3800973b5f9e026f4c0a6629bd69fd7.png"},{"revision":"6ae6174916995f5648c517502147db4a","url":"assets/images/pr01-8aedad022d48a81a0b86a4f935d5a977.png"},{"revision":"9b2237cc670c76ea5a4ecbc1a357a75c","url":"assets/images/preview-project-baseline-1d824fe05576f166e1de54de3ddaeb76.png"},{"revision":"fecc0225bf4775e6dd8c2fa489294390","url":"assets/images/pull-request-review-fd8c1f1e9971e5791bd627a6aee8e47e.png"},{"revision":"4d2befdf3c57fbdfb051b6624d469925","url":"assets/images/qualitygates-for-protectbranches-1ed3f8c6a69141b1fef1ad019c2f167c.png"},{"revision":"8f55be9aebe994d2667a990e81675d12","url":"assets/images/recent-document-files-1bb3d66bde431a14f9dd63641ebc35c0.png"},{"revision":"8df35bbde5346ed377c011e392a9c5fd","url":"assets/images/refresh-baseline-status-92e2a5898d7a0b951f09bae8c5c9f190.png"},{"revision":"42264e8aae21ec895be6b3b013ff8eff","url":"assets/images/refresh-package-status-c03d4b24f2d04e4905a6c574a955a35a.png"},{"revision":"62f6f5649d212e28fee2e68131177799","url":"assets/images/relative-file-path-content-e739b5a6f8889f23e4da44f55127fc24.png"},{"revision":"4c56491eda0914d55c6f0da7d91dc7a5","url":"assets/images/relative-file-path-link-35d016c69d5c422d779b56f3757da943.png"},{"revision":"8ce06ce1dc0a2592d68cae63221ad796","url":"assets/images/relative-folder-path-contents-e4c408c2b3b16306dd617ec27ba4391b.png"},{"revision":"cd9d9040239c4bc41476fe5768e4c87a","url":"assets/images/relative-folder-path-link-c5651045015fe3242e0a9f891492b51f.png"},{"revision":"642c26ff5dc671784612a7b761bdf7a8","url":"assets/images/relative-path-to-image-990f1733b2ead847ae2f416baa4e06ff.png"},{"revision":"9f17644eb45905156b726225e77d5e85","url":"assets/images/release_baselines_tab-20209940d464238e54eb0a4182235486.png"},{"revision":"0f2cf6fdac53881893fa1ca576448fe8","url":"assets/images/rendered-image-by-relative-path-aef232c74e7ed5bdab3e2d4db1e49240.png"},{"revision":"0e2438404bbaf0b053db8db670e74aa3","url":"assets/images/replicatab-fe7199168abc67b6bb93182eae67072c.png"},{"revision":"dac68b4872a26793a9bec35f5b0de03c","url":"assets/images/replicatab01-c307003ae9d059c6d7e963f02d64cfcb.png"},{"revision":"84963d546a99dfdc3acad9a0b0cb7f94","url":"assets/images/replicatesvnrepo-d8d0c2ae4fdf80629be7ff3e6119bf88.png"},{"revision":"1adcdffb61632bb0846e601bf107c897","url":"assets/images/repo-download-zip-folder-0563ffe2db4ecb7c8d59fac0c8e1207f.png"},{"revision":"d04a688dff2e30180b409dbe981c0908","url":"assets/images/repocommandhistory-07847c263a900934640f1ebb0601fa1c.png"},{"revision":"d343dc9da59dd541d3e20d84df7d03af","url":"assets/images/repofolder-download-zip-folder-481e59376e7a80d4bb90ffe0ceac2a5a.png"},{"revision":"5d986fa7d599bf40b8a47b9a50d64245","url":"assets/images/review-baseline-3477963c6996f85d80dc0edf13540e09.png"},{"revision":"bf7c8bd0d3ee1c920bf4b57a16466971","url":"assets/images/review-mass-repo-policy-settings-9b988ca5ab60b7b2052774846892b2a0.png"},{"revision":"4feac88393e0dc0b24d024cdcf9bee9f","url":"assets/images/review-rules-desc-tooltip-6942f28acdc004d721309d914eab0058.png"},{"revision":"e9fd8b03047d9df764f1301510db9499","url":"assets/images/reviewpendingbaselines-b6ace0065a52970101bcd977d19ec6cb.png"},{"revision":"e63f8e70895d2adbc54fbb7dc17e91ea","url":"assets/images/saml-ldap-719d78e85262a49e8cad38d121b2d877.png"},{"revision":"c5ef64f48eed42030b22a0cf434d8ad0","url":"assets/images/save-as-def-name-alert-5c0b5bea3b29450997f7c5843b72c954.png"},{"revision":"3af1a678ba229c4612a42d39be231b52","url":"assets/images/save-as-draft-button-ad52737eafb619332c64490ca6876234.png"},{"revision":"1dcbe11d0dfdadefe0838e5483339329","url":"assets/images/scale-images-fit-frame-b59558d2f7c0bf2117c34f8810a74bf9.png"},{"revision":"3f92eca0150b5452a7c03939bc74f6c4","url":"assets/images/SCM-checkout-306798a7a8dbb3f2bcf0c035304c0b54.png"},{"revision":"1d3c5701c37157f891d88dd67e33c68a","url":"assets/images/SCM-comments_only-11a89e4461d36b9f53b0e658a486989f.png"},{"revision":"c1341508692ec5bc42cbf9739edd610c","url":"assets/images/SCM-link_to_line-35652d2f89c0f369e81e1a542342b4db.png"},{"revision":"cf6a3fb3e831d3c7af3c08a2cb22b77d","url":"assets/images/SCM-link_to_range-03668c683e682a79135f665ad34ef87d.png"},{"revision":"ef5a9f0b0356acf949423641421b74f1","url":"assets/images/SCM-recurse_submodules-bec54c1db08fc4181ec71d6eddbb7b04.png"},{"revision":"a225beb1239d593172a5e6bc468748d2","url":"assets/images/SCM-same_project_association-011f215b07f88c484b5e45e41d8c6cac.png"},{"revision":"0331ba7426cb66a940a7f58574e354f5","url":"assets/images/SCM-toggle_comment_visibility-c73949578a513d74b293c84fb8bc2b01.png"},{"revision":"b7128dced52b515d5c31f169ad8b2afc","url":"assets/images/scm183-01-9547e323d552b84cd82baeb3b1fae441.png"},{"revision":"b9fd96e968f0bcdb1cf928a74f14093e","url":"assets/images/scm183-02-a6bfa2cd3bb30f449c7db1cb04e692b3.png"},{"revision":"8872fbfd743d2e265e4b42353f76266a","url":"assets/images/scm183-03-5f5ebab833efe6be08d18225963852ff.png"},{"revision":"a2492fc98f7360e1ea07e329b10a73b4","url":"assets/images/scm183-04-0aba5f3f2a059c79df954912f6658d3f.png"},{"revision":"0089aa6dc7517e26b7e3d539a9c616e0","url":"assets/images/scm183-05-09942cf7b8bc7d5becee933109885e65.png"},{"revision":"4e1b67c168498016fefe345e776fe8f9","url":"assets/images/scm183-06-ac5a288eeef95fdf050d11435db00fca.png"},{"revision":"8cfa09ae273e4ab4f387b7ed07a47dd3","url":"assets/images/scm183-07-dc67a88a7e89a00179561137dc6e2027.png"},{"revision":"bdca55e082982f7489d92d6413b2d83a","url":"assets/images/scm183-08-75620f8c4b107c4cef7d5519154a4763.png"},{"revision":"60ae65813365487229256963bda238f1","url":"assets/images/scm183-09-3ee21b8c9b289d7154dc12b675202ddf.png"},{"revision":"5195a2acb83557b06726a690186503da","url":"assets/images/search-baseline-category-cdd9515c8ba3db07a4b8f6e0f8af31f1.png"},{"revision":"f57d92c93bdd5e936b82f5b7c4243358","url":"assets/images/search-baseline-name-e7da7cd3aa07cd47d22d41f760f6b147.png"},{"revision":"9fe81d95389133625bd87ade4658ab7c","url":"assets/images/search-baseline-user-a1145d9a46fe4b428f29511f1eb8a4c9.png"},{"revision":"efd00046b5ec184a906a1e266c7109a3","url":"assets/images/search-docs-folders-c846d32032bb54728323113561f0ec7f.png"},{"revision":"5d4684d1bdf2cf26401cd578eabd8125","url":"assets/images/set-multiple-docs-as-favorites-31b4dea02bff7b43ee654ff9b3c7f9f4.png"},{"revision":"dda9370d3708b1f77c676698981cff2b","url":"assets/images/set-single-doc-as-favorite-b29c00177719f4961e368c346c7f9696.png"},{"revision":"de1dd8bc09d2506213b12823d00df844","url":"assets/images/setupgitreplicaserver01-290e98be4b734de5dac7a458dc8c979f.png"},{"revision":"4af85a6fa9f2fbf1f8c12a1050cf2d7f","url":"assets/images/setupgitreplicaserver02-b8bd09c0537b8963a5260c90cf88c8c4.png"},{"revision":"4f16288411d587e2a9f03321580a88c1","url":"assets/images/sign-in-1-e4f828f5bc928cca68b8fa1d90852b07.png"},{"revision":"2a91c07ed23094cb94d402732ef7ed0d","url":"assets/images/sign-in-2-9a381b36f7053a93fff90375b5734b94.png"},{"revision":"3672e7ba6a1f4709083d244b81f704b0","url":"assets/images/sign-in-3-3fd1c011aba106ba6ba196882e89206b.png"},{"revision":"b35522f7a58b9501a836f5224e61d6f0","url":"assets/images/sign-in-4-a865b550e08ebce22c792b7bde9bce80.png"},{"revision":"5bce494a2ff9ee6367750d9c41451f8d","url":"assets/images/sourcecode-ed6e9e7e49111ab7f19effaf84509ce3.png"},{"revision":"7bf5f0f2dee97c6a53b6d8206526e5f6","url":"assets/images/tagclouds01-8ea7dbb1811146f3e9d5c3f1c6797361.png"},{"revision":"47600108ce0ee16d9ac4dbe1bd795cec","url":"assets/images/teamforge-git-overview-f43d4c134494c63d2e2cf0b79dee6460.png"},{"revision":"d35a07353296a2df36951f94ede7eabe","url":"assets/images/teamforgegerritmappings-file-e0c8a735b9c6f7baa4e0f3fa3745fe3c.png"},{"revision":"93843828841a531159f37c586ffc7fd1","url":"assets/images/tfgerritcomm01-5ee95b029d38692f13a99941c96c86ae.png"},{"revision":"56cdc7756faeb94d6d225ac567e21860","url":"assets/images/tfgerritcomm02-f90dfc10bd249339a76aaded0a67abe9.png"},{"revision":"acca51cd0c906e4b0dabe722aab714d6","url":"assets/images/tfgerritcomm03-6ff51162d4665c02b7fa6545daed1c95.png"},{"revision":"752e8a1813125c3bacbd6529455b4603","url":"assets/images/tracker-type-add-filter-4c5ca0379055195037961204ed461dfe.png"},{"revision":"e02fa1b06f8078d718c3d8313166472a","url":"assets/images/treeview-gittags-34450e730d4c76756086cda1d93d337a.png"},{"revision":"7a7c0ff710b370051b51b1229edfbce2","url":"assets/images/unmonitored-folder-document-ba080b4d4e6701e86dddcd460725c358.png"},{"revision":"982c3826b15a06971622e9fc2677bd0b","url":"assets/images/upload-file-to-gitrepo-413c1b86626615b1abee989a6762c3e9.png"},{"revision":"566300a82e9ca9767dfb51fb9263ed05","url":"assets/images/user_defined_pull_req_master-2fcdd6bd97f6f60f5b472441be6e909e.png"},{"revision":"910f407c2afaa9eedd6f00ce5ad7bff6","url":"assets/images/user-defined-pull-request-new-7b14641ea6c2a424e9c988686eecbf7f.png"},{"revision":"e99b8480ef749ee022e3d6f5fe5586b1","url":"assets/images/user-defined-review-ce8a8fe0581234e8af73e46c80d2e53f.png"},{"revision":"bc511dad11e891ba316e1faafc7614ff","url":"assets/images/view-approved-baseline-8445ee9c0a4a4920e95653e81c0bb938.png"},{"revision":"42e7e7b5f75565e58ba190db3b2126d9","url":"assets/images/view-baseline-def-8ceea155d38598fb86e6ade285559a25.png"},{"revision":"7081ad26a8696d7df8d80dc47949d37e","url":"assets/images/view-externalbaseline-d022a5e807247265da3e77ce06ec7691.png"},{"revision":"90f4b66b328177ffdcebe79ab502873a","url":"brand/digitalai/Digital_ai-FC-Reverse-RGB-Lrg.png"},{"revision":"513dfd3c34248766ef5e5b8332a7cda3","url":"brand/digitalai/Digital_ai-FC-Reverse-RGB.svg"},{"revision":"497b19971a616b5722862575f073f923","url":"brand/digitalai/Digital_ai-FC-RGB-Lrg.png"},{"revision":"98e5944eed8fdfff50b9349a63924356","url":"brand/digitalai/Digital_ai-FC-RGB.svg"},{"revision":"317d0c8378a75172ffcf289617f573e3","url":"brand/digitalai/Favicon-FC-.svg"},{"revision":"78d1a62cbebfa482e4c8579f6181b224","url":"brand/digitalai/Favicon-FC-Reverse-.svg"},{"revision":"60faac6757718e52301415bf71bbfb19","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-1c-dark-RGB-lg.png"},{"revision":"4f9a0aa3f6f953b18571dfad4922bfbb","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-1c-light-RGB-lg.png"},{"revision":"dea455a2de1f966eaf5c33c76833338f","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-fc-dark-RGB-lg.png"},{"revision":"ec77362fcf4d4697527658c0cb303ac5","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-fc-light-RGB-lg.png"},{"revision":"a82bc9f672367124a2b69080d72ed4d8","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"09a1fe7ea1c7aa9dfc110de679e61227","url":"brand/products/Agility-RGB/Agility/PNG/Large/_main brand lockups/digital.ai-agility-no-echo-greyscale-light-RGB-lg.png"},{"revision":"703fca647936ff0ffedea6872371a8f8","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"0921c037ee43c2d6232e2f1486e2851f","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"f4778bd326f35a61842025dd675ea43c","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"0c8e7a0f86f97f2255335c4172c9a64d","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"759e9f9cb411619430d853f46c666c6a","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-icon-no-echo-slate-light-RGB-lg.png"},{"revision":"1104c41accd32547b5eb7bbf9f26d073","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-logo-1c-dark-RGB-lg.png"},{"revision":"ea03f65b36d14224e18b14a0746d7a55","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-logo-1c-light-RGB-lg.png"},{"revision":"c82bca6bebdf14a97588ee7773d91c45","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-logo-fc-dark-RGB-lg.png"},{"revision":"9265dc0f27a4e2ad246f08e98e5a2a95","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-logo-fc-light-RGB-lg.png"},{"revision":"6c7280117c66b86ea3dd7cfd49ee8e10","url":"brand/products/Agility-RGB/Agility/PNG/Large/agility-logo-greyscale-dark-RGB-lg.png"},{"revision":"b75edb09fd7156bd1d27aa65db5e5303","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-1c-dark-RGB-md.png"},{"revision":"3a073a3e25583cb1bb340badfb67e497","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-1c-light-RGB-md.png"},{"revision":"498ad0bdd987e58a06be7e4a3ecc6ca0","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-fc-dark-RGB-md.png"},{"revision":"b48cda920a0bf1897c6d09b889ef1622","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-fc-light-RGB-md.png"},{"revision":"5ae55a52ae7086e62733df072948d7c4","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-greyscale-dark-RGB-md.png"},{"revision":"8ff1b78a68ee83b3d535d015f6570ed1","url":"brand/products/Agility-RGB/Agility/PNG/Medium/_main brand lockups/digital.ai-agility-no-echo-greyscale-light-RGB-md.png"},{"revision":"7f3b76ec066186e228c5d6d8a429ed43","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"94a6dd4b9b3d89d667ee0b1300ae6993","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-icon-no-echo-1c-light-RGB-md.png"},{"revision":"5eb18c63c3cc2c3e0fa070eee63c79b0","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"b642a1041b5518cb0769ff7c4f56faa4","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"b81409b3612e6ab576ef484b1c3820e9","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-icon-no-echo-slate-light-RGB-md.png"},{"revision":"e1ffdcecd441dd804aa5127a645873af","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-logo-1c-dark-RGB-md.png"},{"revision":"679148da2560e0f2f7fd5224a30d147e","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-logo-1c-light-RGB-md.png"},{"revision":"0421aa9bd6dfc7c0ca21f80e06c4aafb","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-logo-fc-dark-RGB-md.png"},{"revision":"5759cca513c971554abfb0c4a6aed972","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-logo-fc-light-RGB-md.png"},{"revision":"4727de31a94f912797eb753f97a2b3f3","url":"brand/products/Agility-RGB/Agility/PNG/Medium/agility-logo-greyscale-dark-RGB-md.png"},{"revision":"3a8a7e9d3e3cbc6e3ee2d2717a753590","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-1c-dark-RGB-sm.png"},{"revision":"8dae11fb5604d20f00c96937ce65f0c9","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-1c-light-RGB-sm.png"},{"revision":"1ac123962217bf846e68026e07834603","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-fc-dark-RGB-sm.png"},{"revision":"00e9d60456f5c386d3f28c4fe8e6d65f","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-fc-light-RGB-sm.png"},{"revision":"88d0b3c8fa03c15572cdb93e79dbbb69","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"53f3f064e35416000ab81d832e1f8c7e","url":"brand/products/Agility-RGB/Agility/PNG/Small/_main brand lockups/digital.ai-agility-no-echo-greyscale-light-RGB-sm.png"},{"revision":"509eaa382a43c2a6aeb2c94bab563d53","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"a40897400c1e7b4a94ae72e1e5b928df","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"29a1e686ba8e1d3e36d3a5ba2a41fe1b","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"c9cf068c76ed3e51379f531c34ac114c","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"c3ff52d7fe1d65ffed442a7e3efcc7ec","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-icon-no-echo-slate-light-RGB-sm.png"},{"revision":"f925c4c5f20942944d5a0a87da935acf","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-logo-1c-dark-RGB-sm.png"},{"revision":"820e920da9974c884669c05481eb88b0","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-logo-1c-light-RGB-sm.png"},{"revision":"a5a877381dcc92ec0beced347ea3c502","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-logo-fc-dark-RGB-sm.png"},{"revision":"e012019ce2781d6a0b00c91e9f36a8f8","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-logo-fc-light-RGB-sm.png"},{"revision":"c0faec80c93ead2ef55608e75fa9f5d3","url":"brand/products/Agility-RGB/Agility/PNG/Small/agility-logo-greyscale-dark-RGB-sm.png"},{"revision":"62a3df4d2b162ac24f24d856c07bf18a","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-1c-dark.svg"},{"revision":"77d5b3fc7913baa716ee414e465432a3","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-1c-light.svg"},{"revision":"5cc193685e5054440ca3ef66bbe6c8d9","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-fc-dark.svg"},{"revision":"c942b1596b326da5017ba636bf93d994","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-fc-light.svg"},{"revision":"edf1807da6f20218268524eff4f86a80","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-greyscale-dark.svg"},{"revision":"a974461381cc6dcd8cad9b79f747d374","url":"brand/products/Agility-RGB/Agility/SVG/_main brand lockups/digital.ai-agility-no-echo-greyscale-light.svg"},{"revision":"0f9954ecfcd144afa43644f22b15e2d0","url":"brand/products/Agility-RGB/Agility/SVG/agility-icon-no-echo-1c-dark.svg"},{"revision":"c344ca04d9c573cb9c38a89218610b45","url":"brand/products/Agility-RGB/Agility/SVG/agility-icon-no-echo-1c-light.svg"},{"revision":"9284f13553180dd86a996f63e40d4073","url":"brand/products/Agility-RGB/Agility/SVG/agility-icon-no-echo-fc-dark.svg"},{"revision":"cd3c04630852e6be785eba140a15ca43","url":"brand/products/Agility-RGB/Agility/SVG/agility-icon-no-echo-greyscale-dark.svg"},{"revision":"7ce617e1859ca3044e7518f18eb2e72d","url":"brand/products/Agility-RGB/Agility/SVG/agility-icon-no-echo-slate-light.svg"},{"revision":"94794929f9b8fcc55e3bc5512092fbba","url":"brand/products/Agility-RGB/Agility/SVG/agility-logo-1c-dark.svg"},{"revision":"f4d8b9901341beb2f7a4115fe2f133ea","url":"brand/products/Agility-RGB/Agility/SVG/agility-logo-1c-light.svg"},{"revision":"3eb6b626d23c4762f7ba491dca002172","url":"brand/products/Agility-RGB/Agility/SVG/agility-logo-fc-dark.svg"},{"revision":"f57d3a4af584fac0f1e71303fcc1a5f0","url":"brand/products/Agility-RGB/Agility/SVG/agility-logo-fc-light.svg"},{"revision":"ec9acbf581c8ee618a83b964c3699d58","url":"brand/products/Agility-RGB/Agility/SVG/agility-logo-greyscale-dark.svg"},{"revision":"684db55f7087c609c9b3ace08241524a","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-1c-dark-RGB-lg.png"},{"revision":"61db94f0c50396b5f53a1ec4d1990944","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-1c-light-RGB-lg.png"},{"revision":"3046311e06328bd899ea9da92a10bd00","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-fc-dark-RGB-lg.png"},{"revision":"5eab04fcfd374da7016c0b8cf9f57836","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-fc-light-RGB-lg.png"},{"revision":"80f2c2311bae0fb0acfbe3d6226fbd7a","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"90725b53ec6f8f146fc8316b9cd2cd36","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-light-RGB-lg.png"},{"revision":"c16cd518f338e024d30aa18b9599b20a","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-icon-no-echo- 1c-dark-RGB-lg.png"},{"revision":"459d90605d5e0117fb39f9e9e470f6ba","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-icon-no-echo- 1c-light-RGB-lg.png"},{"revision":"c724dacaea570b07666129214a3d73d5","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-icon-no-echo- fc-dark-RGB-lg.png"},{"revision":"85545e6e98ad9f5506e24d4132cf8e24","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-icon-no-echo- greyscale-dark-RGB-lg.png"},{"revision":"83557e3ed2ab35b09ee0cd70537d490b","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-icon-no-echo- slate-light-RGB-lg.png"},{"revision":"e2961fac6e9cff03f2939bf40e56244e","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-logo-no-echo- 1c-dark-RGB-lg.png"},{"revision":"777393cc53e20ecd43946e5f595f2273","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-logo-no-echo- 1c-light-RGB-lg.png"},{"revision":"a0270790ff50f43e7628e0314fb3e3be","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-logo-no-echo- fc-light-RGB-lg.png"},{"revision":"6603a47796d389349b06a394728ebe4d","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-logo-no-echo- greyscale-dark-RGB-lg.png"},{"revision":"4bcc17e5f9e98f90922c09d882d36dc0","url":"brand/products/App_Aware-RGB/App Aware/PNG/Large/app-aware-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"73cc3e301e7d4037c513b9abea54ece5","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-1c-dark-RGB-md.png"},{"revision":"01dba106b97b6669a9db4d0f5f800fef","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-1c-light-RGB-md.png"},{"revision":"2cf239b244e242b21b23543069eba4ae","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-fc-dark-RGB-md.png"},{"revision":"663c2ec898b23398695ab707cf6e815f","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-fc-light-RGB-md.png"},{"revision":"e1d189cdca068d86231ac47557712472","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-dark-RGB-md.png"},{"revision":"055593da831c60dd56b09a79690547cf","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-light-RGB-md.png"},{"revision":"e3954bc87eb050bec4c3bce55aa202a3","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-icon-no-echo- 1c-dark-RGB-md.png"},{"revision":"1ef302737ae6ec00755853bc2c0db76d","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-icon-no-echo- 1c-light-RGB-md.png"},{"revision":"7601d1a9706eb4704ba21cc9da4b4572","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-icon-no-echo- fc-dark-RGB-md.png"},{"revision":"6d892e02da9ad7a220f204dcf06a5bf6","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-icon-no-echo- greyscale-dark-RGB-md.png"},{"revision":"2a9f038284b340792146597a98df1298","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-icon-no-echo- slate-light-RGB-md.png"},{"revision":"ac9b2d925b210c2693c11ca73d738580","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-logo-no-echo- 1c-dark-RGB-md.png"},{"revision":"55bcef6fc594396b9633ce0f48f4e096","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-logo-no-echo- 1c-light-RGB-md.png"},{"revision":"0a916a2817af4b3fdd1a13c066fc394f","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-logo-no-echo- fc-light-RGB-md.png"},{"revision":"5f21d53d46f02507d76a3c645e0007b8","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-logo-no-echo- greyscale-dark-RGB-md.png"},{"revision":"2e533473803f3df3fda25de179dc0114","url":"brand/products/App_Aware-RGB/App Aware/PNG/Medium/app-aware-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"fb087cb886fe2de88bdbb0c427be6b69","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-1c-dark-RGB-sm.png"},{"revision":"947cd4b8047651b9557b19f20642f8a5","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-1c-light-RGB-sm.png"},{"revision":"27ec04df4686f8fd20ab15f8d18c85df","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-fc-dark-RGB-sm.png"},{"revision":"b7a383027394f33de6eba6dbcdac2300","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-fc-light-RGB-sm.png"},{"revision":"bc5a97e962aae09bddb9cc9f23edc45d","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"48cba2ad8986bab3896c8a69c33f3101","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-light-RGB-sm.png"},{"revision":"60dcf4c09324f611e39dd931574945e8","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-icon-no-echo- 1c-dark-RGB-sm.png"},{"revision":"a88c17d9ba5839fb34b1fab9b0ba1b0a","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-icon-no-echo- 1c-light-RGB-sm.png"},{"revision":"e5936eb6446344b294b5e6c30c0d8103","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-icon-no-echo- fc-dark-RGB-sm.png"},{"revision":"82327ea666d39c153bb9556c08103268","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-icon-no-echo- greyscale-dark-RGB-sm.png"},{"revision":"506e30b202baee3e08c31bf52a7d9a4f","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-icon-no-echo- slate-light-RGB-sm.png"},{"revision":"35d92f95ba491024370c9dadba89e051","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-logo-no-echo- 1c-dark-RGB-sm.png"},{"revision":"09f8f30c28a0f40d09f7ff511557de2b","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-logo-no-echo- 1c-light-RGB-sm.png"},{"revision":"4e4bf78a91b26ba42405799ba72286bb","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-logo-no-echo- fc-light-RGB-sm.png"},{"revision":"862f406446576938d28ac1da0cf771f7","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-logo-no-echo- greyscale-dark-RGB-sm.png"},{"revision":"00c08b7e4758263778ef442954f15ff1","url":"brand/products/App_Aware-RGB/App Aware/PNG/Small/app-aware-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"31db0a931db2105e385017d9fd56d429","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-1c-dark.svg"},{"revision":"d19e3e0f4975d928bff311c3944ee0ee","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-1c-light.svg"},{"revision":"3940db50dcf8de16ec9c830082483548","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-fc-dark.svg"},{"revision":"d931b10e6b51504642bca334eb54d232","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-fc-light.svg"},{"revision":"9e768c0ccbd756d9bf09394f5f9651ae","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-dark.svg"},{"revision":"a40c476338b2068432eaf2586f67c856","url":"brand/products/App_Aware-RGB/App Aware/SVG/_main brand lockups/digital.ai-app-aware-no-echo-greyscale-light.svg"},{"revision":"f72d7d340bea4152b08e6172a9f455ef","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-icon-no-echo- 1c-dark.svg"},{"revision":"78672e1fe67944baaf97da1a38b52a55","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-icon-no-echo- 1c-light.svg"},{"revision":"6c8babfa7789c0bfff66ddcb28e7e3d9","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-icon-no-echo- fc-dark.svg"},{"revision":"09c52fd2c844991ec76bb934324b2ded","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-icon-no-echo- greyscale-dark.svg"},{"revision":"cc0ae1b47a664ec9343e8ad1bab164fb","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-icon-no-echo- slate-light.svg"},{"revision":"e44650eea563f312ffffa511752c5082","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-logo-no-echo- 1c-dark.svg"},{"revision":"edcb50d5e8a288cfda445e486a504bbb","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-logo-no-echo- 1c-light.svg"},{"revision":"6fac0af6d3b1c1c3dee9e66a120a9ac3","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-logo-no-echo- fc-light.svg"},{"revision":"50f2bb7bd822cd06db6975e2269afbd5","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-logo-no-echo- greyscale-dark.svg"},{"revision":"4d066ca259049b325a70fceb67173f47","url":"brand/products/App_Aware-RGB/App Aware/SVG/app-aware-logo-no-echo-fc-dark.svg"},{"revision":"a4cfc88a02bd4c57303e9e73c6ec2cfa","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-dark-RGB-lg.png"},{"revision":"29ba022136e09df9e2965e6b2506cbf5","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-light-RGB-lg.png"},{"revision":"9bdf8ae6a2069219baf3b9ffc4fc95cf","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-dark-RGB-lg.png"},{"revision":"364a55625b91cc54058d718b367cd706","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-light-RGB-lg.png"},{"revision":"42c668c8ec79e9e26346a92d8cba0be2","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"ee37f49f159dc10c44583270609dd321","url":"brand/products/App_Management-RGB/App Management/PNG/Large/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-light-RGB-lg.png"},{"revision":"e74ddf584c0cdf7ba9670488c6c1b137","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"d4b884adc9dc146224336ba3a32dba6a","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"5305d5c71572e0621182a10d0087bd8f","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"11d4d1f6c7d024d8a24c8f05ed21a65d","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-grey-dark-RGB-lg.png"},{"revision":"c2fd9b5939fa85502fd044e940e8d899","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-icon-no-echo-slate-RGB-lg.png"},{"revision":"9e1a2b353ae65d1d998b05facbc081f9","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"57416f55ddb8d26285b229aee3532bab","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"8d675b6507f9c3e4939005ec8eb224f9","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"84accb041f2171ac25d4603a28d47aff","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"961eda0788fb877d97bcadfaf49c05af","url":"brand/products/App_Management-RGB/App Management/PNG/Large/app-mgmt-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"c847e14aad7a52b8eae9cfdd862894bb","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-dark-RGB-md.png"},{"revision":"496fc42dd4f9dbce52b6ef39c633ea65","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-light-RGB-md.png"},{"revision":"63129e8c6962ebacedf858f8d35dfe93","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-dark-RGB-md.png"},{"revision":"aafb87c6828778d7a85747f92e14a006","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-light-RGB-md.png"},{"revision":"3899e44383ee3a807b702d7eac77f1a8","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-dark-RGB-md.png"},{"revision":"02dd268a8db1c902f0e5b5042bad52e0","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-light-RGB-md.png"},{"revision":"212944f8647bb8c83e14b9a1c249369d","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"9c34f0aa48940fb27a34ab86ec853855","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-icon-no-echo-1c-light-RGB-md.png"},{"revision":"c8e618682a3d7a7edda1500ad6a65d58","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"6c8a7d7712e14e7fd64d6af3518768fd","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-icon-no-echo-grey-dark-RGB-md.png"},{"revision":"a76eb31cf8ee2db5ccfcf5ffc3d54180","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-icon-no-echo-slate-RGB-md.png"},{"revision":"18f13a6fda678344cb446e2cd55f9e6b","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"4a8be6c4587a3d6452d66ed5444adae4","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-logo-no-echo-1c-light-RGB-md.png"},{"revision":"bdf4c2744bfb4c81e5c31cc81857d552","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"492e76f457e939da11808fc7e130fee0","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-logo-no-echo-fc-light-RGB-md.png"},{"revision":"6a7af517f2c42dd4beee69c28b96b913","url":"brand/products/App_Management-RGB/App Management/PNG/Medium/app-mgmt-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"85cf4d38d3b7785778a15cc5ef06d4cf","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-dark-RGB-sm.png"},{"revision":"4f89df0ca90d0d1d4aa6ee14b919e41d","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-light-RGB-sm.png"},{"revision":"9a8558c4c0e982df60480ffc80b69d5c","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-dark-RGB-sm.png"},{"revision":"1845b14063ce55c7b6bdc08f56f25a00","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-light-RGB-sm.png"},{"revision":"2d628d1e73e61d51927ab6e21e8355ae","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"85cebdcd7a181a9e1a609ae93fd291f5","url":"brand/products/App_Management-RGB/App Management/PNG/Small/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-light-RGB-sm.png"},{"revision":"c6c6086b6842751725eaf2be798352e9","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"a4eb313eb76a63a2db9ad236a62adec8","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"c6e49889538dbcb0508093f9f02b1eb2","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"174a9c9a53669b57f37af9e73df0918a","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-icon-no-echo-grey-dark-RGB-sm.png"},{"revision":"143c8894b906d65e57e698ae81886953","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-icon-no-echo-slate-RGB-sm.png"},{"revision":"0da242c9095d8826a68926612ab681df","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"0b3545864aad20821fb3844e64dd7360","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"a023064757956a635827b4c2fa3f1aed","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"08590116d153398abdc151ac52c57800","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"6e4dd575350efdc852abbf3522e2dc2d","url":"brand/products/App_Management-RGB/App Management/PNG/Small/app-mgmt-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"d2cd0f4bc069920d136b32bab27d74ec","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-dark.svg"},{"revision":"395e632c8466d3274e99312370c12fa3","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-1c-light.svg"},{"revision":"6ce232c573662adb0544f38302b1f05c","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-dark.svg"},{"revision":"c44cc8d3143dac2e3300c06fbf57495d","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-fc-light.svg"},{"revision":"dfddcc8a9de2db924660c888727b50ac","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-dark.svg"},{"revision":"35aa2ae4b9c6e8378f3deac411b8ffac","url":"brand/products/App_Management-RGB/App Management/SVG/_main brand lockups/digital.ai-app-mgmt-no-echo-greyscale-light.svg"},{"revision":"c281b5feb08165c828794aa3fbba4ab5","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-icon-no-echo-1c-dark.svg"},{"revision":"3f66e8ba54a747c73c2391a7e949ff11","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-icon-no-echo-1c-light.svg"},{"revision":"fb6c1734454e0a3ed5be35b213b4e911","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-icon-no-echo-fc-dark.svg"},{"revision":"d59e2e8847fa1bf3d343e7d4c0e7a126","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-icon-no-echo-grey-dark.svg"},{"revision":"36612d15e43f252765eefbd301bfdaa5","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-icon-no-echo-slate.svg"},{"revision":"330c7efae511c33d1c0735778860a18d","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-logo-no-echo-1c-dark.svg"},{"revision":"a00c9d90691191cc097b97be6318c023","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-logo-no-echo-1c-light.svg"},{"revision":"14008a086b8dd804f558c8805062b87b","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-logo-no-echo-fc-dark.svg"},{"revision":"8779b2864650daeb8f64419b10c51957","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-logo-no-echo-fc-light.svg"},{"revision":"a20013f00bbc478045d90921e3e09d30","url":"brand/products/App_Management-RGB/App Management/SVG/app-mgmt-logo-no-echo-greyscale-dark.svg"},{"revision":"72e7d88568051f9fd6ed8e585f68f876","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-dark-RGB-lg.png"},{"revision":"23983a4a6dcbeab7498779272129a4f2","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-light-RGB-lg.png"},{"revision":"edc3400ed8bee7b65b1d36145db84b61","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-dark-RGB-lg.png"},{"revision":"c18235289a4e8d943d7923eb94f75b6f","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-light-RGB-lg.png"},{"revision":"743763fd68f41fe3b8999808c0efcf61","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"a82245e20129bdda6657988d96b0fda2","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-light-RGB-lg.png"},{"revision":"60cbe55b0d1bad1ea7e20c3053ac7757","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"4492619dca94075d3165db1a2c26ed9f","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"2a6600df9f04acd3f45a43ff52859feb","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"6ad2acf77dd1e6f5981866c6f6b4dd0b","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"c8f2814cbc614263680659d56f6597f5","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-icon-no-echo-solid-slate-RGB-lg.png"},{"revision":"19a6276bde6d48b6631b07877f8ffe05","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"057417cd1a02fe7be38d128397c024bd","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"c09dd50bda1e5c0714c59e70562a869f","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"ffba02fc8bf94f4655560a7d5fd675cc","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"83cd1461bd16ecee69280f4a239f89de","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Large/continuous-testing-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"c92e77586ff374fb9b858e48fe1c72b1","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-dark-RGB-md.png"},{"revision":"a36ca5eea68daa300e4c0eb88440048e","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-light-RGB-md.png"},{"revision":"7c68c99627a756e226d3429f2ec45cec","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-dark-RGB-md.png"},{"revision":"582e75c4c370df3b87c5338c966860d3","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-light-RGB-md.png"},{"revision":"47beaf6045fed8dcb7059fd2a020d92a","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-dark-RGB-md.png"},{"revision":"61de3572660b6de2bd1322031be3487c","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-light-RGB-md.png"},{"revision":"a0f10198b7d939ce4091c6822a9a10b8","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"4773653f1873d35c5fdf6637b184f9b7","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-icon-no-echo-1c-light-RGB-md.png"},{"revision":"16b71b9c8f366712071e461abebc4111","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"fea9c4ae578283a7fe76079a15ee2613","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"3334fcc98ae62022a6d30f528a00a159","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-icon-no-echo-solid-slate-RGB-md.png"},{"revision":"32b00438282e6cc5b829d83d5cd492a1","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"7efd9f62a1305561b914a2ffe34fbcd0","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-logo-no-echo-1c-light-RGB-md.png"},{"revision":"683905e49f75310619f2b7a9dcfb0f00","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"5c572fe6779c907fbef4828e09c1302a","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-logo-no-echo-fc-light-RGB-md.png"},{"revision":"7faa613e59e2d4b3bacfb33d135c8048","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Medium/continuous-testing-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"645b4b4c796574aeb101ae080cf70799","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-dark-RGB-sm.png"},{"revision":"53c4ca55d04f0adcb2f572bd05aa3d55","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-light-RGB-sm.png"},{"revision":"f9e5e64efbac2cbb8a99c5af76ed82d8","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-dark-RGB-sm.png"},{"revision":"23ba236b7d947927bd9e36d5652e4ed5","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-light-RGB-sm.png"},{"revision":"484f668398db7d867c40505269b9cbd7","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"5f635be1834425d3f7969bdb889f26f9","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-light-RGB-sm.png"},{"revision":"2f53c9c5b4ac0a372b807a8d356c6244","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"6f2de3a03b4ce26454b649ebb62ba54a","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"0070285e667a5f7ec08c2b10334096fb","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"1c1254a663230fccff626ad16b34eadf","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"10a2f281f478fa336bb374737f31a900","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-icon-no-echo-solid-slate-RGB-sm.png"},{"revision":"ec8f3c73f7b74e65654069c6fffa5c32","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"a02ad1b493f102af4376ce8b61b465d4","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"4e0701e74b4a95477bda42f108ccd84d","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"89dc98e0be07a35f2c67b3c054e9bf89","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"77a54b0fc3c2c86e783d91cd79c6976d","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/PNG/Small/continuous-testing-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"38272225ccb74b7826db156b2bf5db80","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-dark.svg"},{"revision":"ea3d6abd9981b7e752c871cb2ff69c57","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-1c-light.svg"},{"revision":"3ca273d3eecbc3f367dcbd910bd4ea25","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-dark.svg"},{"revision":"47f7916312ac253ee01cce6a786eef9b","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-fc-light.svg"},{"revision":"1cde8e63c2c613d9cd4cd34226bbe42f","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-dark.svg"},{"revision":"b9d9f4f9efe37d5dd8b6fde5429544f5","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/_main brand lockups/digital.ai-continuous-testing-no-echo-greyscale-light.svg"},{"revision":"a451c00795ee8f1ede449063af0a7026","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-icon-no-echo-1c-dark.svg"},{"revision":"597a4ea32eaf0c5bb17c6820b63e3252","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-icon-no-echo-1c-light.svg"},{"revision":"928a3b49186c43e97748185e01dcf600","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-icon-no-echo-fc-dark.svg"},{"revision":"de6d4a9ae1431a1900ef8e0455cd0e4c","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-icon-no-echo-greyscale-dark.svg"},{"revision":"83988bc48a87d35dc339dd0167f63e9f","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-icon-no-echo-solid-slate.svg"},{"revision":"767c696f1fca9b85d32342491a357db5","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-logo-no-echo-1c-dark.svg"},{"revision":"2fd32ae6e23bbb88dd37eefe67c0c455","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-logo-no-echo-1c-light.svg"},{"revision":"d6a6703476f572fab8fa162cf9db6321","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-logo-no-echo-fc-dark.svg"},{"revision":"9da50c6955076634db227b05af1b4d8c","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-logo-no-echo-fc-light.svg"},{"revision":"0d72968ee4379ea509a7816d6eb862ec","url":"brand/products/Continuous_Testing-RGB/Continuous Testing-RGB/SVG/continuous-testing-logo-no-echo-greyscale-dark.svg"},{"revision":"c31e2fd5a8bab460b40b696764354f77","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-1c-dark-RGB-lg.png"},{"revision":"0e892937fbe51f01005a1cda58a47608","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-1c-light-RGB-lg.png"},{"revision":"57ad45e319dd1bcd56fa45468740a3cd","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-fc-dark-RGB-lg.png"},{"revision":"46cffa683e23e5e511a691b6bf8d0b4e","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-fc-light-RGB-lg.png"},{"revision":"867427143a406cb5c6aa5dc7d5314378","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"3e75d042bf137b9311c554ca02be18ed","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/_main brand lockups/digital.ai-deploy-no-echo-greyscale-light-RGB-lg.png"},{"revision":"0cfb2b192203b40a8a949c78306bf7fe","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-icon-no-echo-#279FEA-RGB-lg.png"},{"revision":"09dbedd416aa667dd3dde850bff65435","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"caf1c724cc18b1aa4375febc263fd1af","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"ea26c81f1ff33870d8b295f32ad73ecb","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"2adf5a7920de6678a3aea6056ef006d5","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-icon-no-echo-greyscale-light-RGB-lg.png"},{"revision":"eedd242c1b251675005ddb17389b4ea1","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"7d6a3a6211bfb694813b940b26fa4ac5","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"fb938c244a047398a486ccbc06205491","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"8c0522627841751353035fba57b8042c","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"c987ad2f1078cf289a3880e10dc3ee77","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Large/deploy-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"0326fc8eb81669d04e57baae38883188","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-1c-dark-RGB-md.png"},{"revision":"8a8619eea2f7020d8e84ad69c0ff868a","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-1c-light-RGB-md.png"},{"revision":"1bb49e29d2feee104eaa28345eab2be7","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-fc-dark-RGB-md.png"},{"revision":"2a741d633ceaffba28a8cf9a86c251eb","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-fc-light-RGB-md.png"},{"revision":"9c8bcc17e804697f615b7650dc279e48","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-greyscale-dark-RGB-md.png"},{"revision":"952a5cd8c9cf57fb509acb71eedf5bb8","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/_main brand lockups/digital.ai-deploy-no-echo-greyscale-light-RGB-md.png"},{"revision":"83639dd02f9404a8076546e52c557f78","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-icon-no-echo-#279FEA-RGB-md.png"},{"revision":"93040816855bfe15efe637ad633e89b3","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"9a70d85894ae264931ca5d1a21f4859c","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-icon-no-echo-1c-light-RGB-md.png"},{"revision":"c0c69baac96aa2fd29724f7bbfcfd285","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"d0a1b807f1ec0aaba4dfd47d54d3c370","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-icon-no-echo-greyscale-light-RGB-md.png"},{"revision":"341325e5140e40660be445f3368c0deb","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"480bbc7d0f94958629c35d564172294a","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-logo-no-echo-1c-light-RGB-md.png"},{"revision":"347e7c0979246eb12995386f50583010","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"ad8c488d2242e2ae8d6ca0f7754efd86","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-logo-no-echo-fc-light-RGB-md.png"},{"revision":"6fc3c60bd36c8997889838ebb2909799","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Medium/deploy-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"6b73628fae84cc25201df64f01a2f22d","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-1c-dark-RGB-sm.png"},{"revision":"0f05705d4b99192bd93fb2f4fef34b84","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-1c-light-RGB-sm.png"},{"revision":"83335a66dc4c048cd52517cdb627c940","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-fc-dark-RGB-sm.png"},{"revision":"e94e58de68fc13c97037265076488f00","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-fc-light-RGB-sm.png"},{"revision":"ea818b62889c921cc67303a2a248ceef","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"0422118e40c673669795b577a4921fb3","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/_main brand lockups/digital.ai-deploy-no-echo-greyscale-light-RGB-sm.png"},{"revision":"3d742d468012a7ea58b57ccd6c8c9352","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-icon-no-echo-#279FEA-RGB-sm.png"},{"revision":"47dfe1d4779060565fabb56499aa4a69","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"571780e39396a29baae6fa9f528ed50a","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"e8de82b09546753a3893e62e2b88a25a","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"587c694fae3bc58d95bda43c10d0cf9d","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-icon-no-echo-greyscale-light-RGB-sm.png"},{"revision":"8b385bde36689e9cec7b8be07a57495c","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"158c6fbcba7bfbd818f86d9457d09190","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"8854b623f791fc6bae15505ccfd16166","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"58571e8073d828e394fff2eefd295b11","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"f199b9d2944fbf8a8dc58b6c9feab7b6","url":"brand/products/Deploy-RGB/Deploy-RGB/PNG/Small/deploy-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"f632a92aa8ed90409a6da973729e0580","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-1c-dark.svg"},{"revision":"9f64a220f3e1e517ddb671c0ad036943","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-1c-light.svg"},{"revision":"443ba44bfbade2bf9610176b39db23cb","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-fc-dark.svg"},{"revision":"5494b01dd7acea4d4aecff8d64d1de14","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-fc-light.svg"},{"revision":"8fa402f8b34e8e768463b16031251441","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-greyscale-dark.svg"},{"revision":"5cc1f60f440c4d21e824df79e1b2c0b8","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/_main brand lockups/digital.ai-deploy-no-echo-greyscale-light.svg"},{"revision":"7c6ae79e0537ec3e0c0c2777fec1027a","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-icon-no-echo-#279FEA.svg"},{"revision":"dda82996975be69c38e9bba38d24b281","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-icon-no-echo-1c-dark.svg"},{"revision":"1d2841cfbeadabc7bb78d04f5d8c48bd","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-icon-no-echo-1c-light.svg"},{"revision":"b7670d9a9501b551e1e923a7dcd5c52e","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-icon-no-echo-greyscale-dark.svg"},{"revision":"ef2f43f38a01ee20ea35585f4b83d90a","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-icon-no-echo-greyscale-light.svg"},{"revision":"ba97988bf6581ff9e286cdbeeac9f51c","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-logo-no-echo-1c-dark.svg"},{"revision":"11a358fc82e5987daf8658a453bc7e7b","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-logo-no-echo-1c-light.svg"},{"revision":"151139fa7ddd084c41e9872e6eac643e","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-logo-no-echo-fc-dark.svg"},{"revision":"742a5e47ae22a8014ceeefa7719ec88c","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-logo-no-echo-fc-light.svg"},{"revision":"69270edf937742355c8a49984204e0ba","url":"brand/products/Deploy-RGB/Deploy-RGB/SVG/deploy-logo-no-echo-greyscale-dark.svg"},{"revision":"fd8a34c517683f6e2d565dd6a7bc778c","url":"brand/products/Digital.ai_App_Security_Logo.svg"},{"revision":"880fa3ea7b79d774480f9d1998b4105f","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-lockup-fc-dark-RGB-lg.png"},{"revision":"7a977ee0a7e7c84b3c1d676628a29882","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-no-echo-1c-dark-RGB-lg.png"},{"revision":"d64fc2738894bad91eb187b79d02f159","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-no-echo-1c-light-RGB-lg.png"},{"revision":"df874da56e56b4afb89915d5c0f96f8a","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-no-echo-fc-light-RGB-lg.png"},{"revision":"981416c6f3eb0205a4fddfda6570d3b9","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"7e93dcda790f375729f9dced8ac06a60","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-light-RGB-lg.png"},{"revision":"4edaef909e526c970159684159d40157","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-icon-greyscale-light-RGB-lg.png"},{"revision":"3b7bd639c548357fe4a27f044b399f80","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"69b207e9e8dc2fff7f9df13faa466a16","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"c33886d179a9fc2802d7b2c2db5fcfd9","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"9f0bb6f01958c2f8d28f36b767a22b97","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"3d5e91e02e17181ef0a56a2097cbb73f","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"3e5bdf61bc3b874a907b028f68987d41","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"568d921914e3f7ea8f9bf1b7d43d92bc","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"a6f3e917e78826724cb35f52cd9be168","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"38d2fb6914e8ca7e6cec6c2698f81f76","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Large/essential-app-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"9152f19598aaa92c47310a76e0b49712","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-lockup-fc-dark-RGB-md.png"},{"revision":"b360b4ae1a903dba19f08db992c59fcf","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-no-echo-1c-dark-RGB-md.png"},{"revision":"d1c27d9466fecaafe32c541b384aaa2b","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-no-echo-1c-light-RGB-md.png"},{"revision":"ebfab5a0c4112d1f01d7c02077069a0b","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-no-echo-fc-light-RGB-md.png"},{"revision":"1f21d3f7247ba867338f79adbe2860d8","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-dark-RGB-md.png"},{"revision":"1adf5099f30657970d671ca9c5fcd869","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-light-RGB-md.png"},{"revision":"dd5d2ac57fe23fb0e2e04285d08b7ad5","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-icon-greyscale-light-RGB-md.png"},{"revision":"e34db35a8f2969d4d929de29b460d203","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"2ecdc0a5a472ab1436ec500666e8fcc5","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-icon-no-echo-1c-light-RGB-md.png"},{"revision":"feb69875d6128f279d802273216922a5","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"eefffc3c2276e3d81c8e3d2225a25744","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"10cd047cca48bbbb88b4906effc96c1f","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"a1ab6ad2a5969af6f868ca15bf4554fa","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-logo-no-echo-1c-light-RGB-md.png"},{"revision":"ef67a1e5e1c9e2bedee912f57a47a04c","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"abeec1b11654ccd87d6443d5886ce67c","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-logo-no-echo-fc-light-RGB-md.png"},{"revision":"a11ec4d6e6681337d7f57a6a1aff4081","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Medium/essential-app-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"2d6d9c1edab035acf8111a268d7bbdb9","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-lockup-fc-dark-RGB-sm.png"},{"revision":"a521cc3582ff0a365e85fd3b8a599526","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-no-echo-1c-dark-RGB-sm.png"},{"revision":"a1b5cfca6fe594a4da693440dd36a9d9","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-no-echo-1c-light-RGB-sm.png"},{"revision":"4e75dd4ad795f63438ad969ec3588ffb","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-no-echo-fc-light-RGB-sm.png"},{"revision":"dac0a8fa72dbeb5941928de18496a83d","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"b2261d5702759df0bae0222add7fad85","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/_main brand lockups/digital.ai-essential-app-no-echo-greyscale-light-RGB-sm.png"},{"revision":"28cdfb52acc2293ad8d403d2310101de","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-icon-greyscale-light-RGB-sm.png"},{"revision":"4559c8ca57d7cff4bc22aa37203e2a0a","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"80a6ff9c6a2e06bb3de65d2e13d458e2","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"94277230cae91198e41b8104bc907810","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"687b9ae732f04db63fe458887bfefa04","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"b887bce6dc7c71d078ff59d3652837b1","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"07441070998246baf7853404c919f78c","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"ff4d0858a2d77118e3455e9ef7e0e6f6","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"39ff73d372205ba527cd312754906ca8","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"d599b2bf0bfd546658f3525433a6aa57","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/PNG/Small/essential-app-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"18ba09014d2361b1904e59143ebedd04","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/_main brand lockups/essential-app-logo-no-echo-1c-dark.svg"},{"revision":"18decfa6511341c86729dc10ba569f70","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/_main brand lockups/essential-app-logo-no-echo-1c-light.svg"},{"revision":"8edb034c772402bd63d2b925fa06ab15","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/_main brand lockups/essential-app-logo-no-echo-fc-dark.svg"},{"revision":"78341cb28b0fb28e572d180793888821","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/_main brand lockups/essential-app-logo-no-echo-fc-light.svg"},{"revision":"990848edff44395875734c47a80af920","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/_main brand lockups/essential-app-logo-no-echo-greyscale-dark.svg"},{"revision":"5e90e79d5cba25bab02c0f9619012e9c","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-lockup-fc-dark.svg"},{"revision":"e74941f3c6b9083e273e175ccaf7250f","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-no-echo-1c-dark.svg"},{"revision":"e4bf1354856ebbb9c0f4d541e932e705","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-no-echo-1c-light.svg"},{"revision":"74b0c2ce470402b98c1b8861d3012fec","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-no-echo-fc-light.svg"},{"revision":"62505cf20739f4be538a4aff4bf21488","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-no-echo-greyscale-dark.svg"},{"revision":"17d13cf8a77a1b3c4b2c8d30a8a2ca04","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/digital.ai-essential-app-no-echo-greyscale-light.svg"},{"revision":"3a443c944789056aea32b2c65bbf5f1b","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/essential-app-icon-greyscale-light.svg"},{"revision":"425cd36ca6ce09fd843474330da6e230","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/essential-app-icon-no-echo-1c-dark.svg"},{"revision":"b741edc25546c13f09dccbe065260dab","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/essential-app-icon-no-echo-1c-light.svg"},{"revision":"883efb7f5ec894b79f8dfdd3297e1952","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/essential-app-icon-no-echo-fc-dark.svg"},{"revision":"7ce1853503478bbe74ce789f752f6b2d","url":"brand/products/Essential_App_Protection-RGB/Essential App Protection-RGB/SVG/essential-app-icon-no-echo-greyscale-dark.svg"},{"revision":"92f8033819c7ec5d8b8251f953c5bacf","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-1c-dark-RGB-lg.png"},{"revision":"f0bc31533a15cd23f7000a4b187d000c","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-1c-light-RGB-lg.png"},{"revision":"45f4f6e845d4b1bb1a9ca704e289b9ec","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-fc-dark-RGB-lg.png"},{"revision":"66577112ebfa0e635c093823bcfd6299","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-fc-light-RGB-lg.png"},{"revision":"57ee6b11117e11e83dafaba089d27df4","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"feb4c243dde19e36980b56a4033cfb9c","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-light-RGB-lg.png"},{"revision":"1aa3744549694dcbb55e16ad9c58a509","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"3ae27ca8d904f7bd74e0b5499a775373","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"c2ec5936c036ed4299516af898433761","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"8038278428000e65d02b4751f854bf51","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"f0a70fb2a4c02794ec8c7ce76e4facf4","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-icon-no-echo-slate-RGB-lg.png"},{"revision":"3375f77844db9248b03a09141c4615c0","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-logo-fc-dark-RGB-lg.png"},{"revision":"ac51b14c4685f4455d9a2eb9da8b2d88","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"5934249ab877950c8e2dd0f7e8b9e517","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"2e1963c9996d4b6a1b0e3118bdf56ad3","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"1ad2f0b5ae670b35b40d84ba7e9fb909","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Large/intelligence-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"d4583d46ec2eb5043fdf80ca8602c16d","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-1c-dark-RGB-md.png"},{"revision":"76e1781d28d48dee0681177b6d7c41fe","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-1c-light-RGB-md.png"},{"revision":"7c2584d328bf198c29462d6a7b04a61b","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-fc-dark-RGB-md.png"},{"revision":"51937cc7e962b2d44f0adf079fc164af","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-fc-light-RGB-md.png"},{"revision":"960b617a316a40ede40f4627f7294be1","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-dark-RGB-md.png"},{"revision":"f5c0a67b571f6b570d2ce8195de56356","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-light-RGB-md.png"},{"revision":"f0a3da356cdc3a78a2fa2329723e0f87","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"171c5cf0106893faed31fd5c9bb475be","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-icon-no-echo-1c-light-RGB-md.png"},{"revision":"a6a77af15f8d9f53209516895703f053","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"b81d57898a29a1177ea61f229d5d21a3","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"3068635294b1b6c9d024b70f58894803","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-icon-no-echo-slate-RGB-md.png"},{"revision":"80682a88e118c08363133f4fc623be9c","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-logo-fc-dark-RGB-md.png"},{"revision":"1b4225faedecb067b8a2ebeb3397fda9","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"54914e5fea1636a027246909122a8f7a","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-logo-no-echo-1c-light-RGB-md.png"},{"revision":"6688595bb6fd4debcfbe677d66cf95c1","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-logo-no-echo-fc-light-RGB-md.png"},{"revision":"dd55db4ad646e8237c8b676890ca1d89","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Medium/intelligence-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"4829ab39fbf841309e5c3627e2443866","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-1c-dark-RGB-sm.png"},{"revision":"d4665bbc5771dc3e1ca0348661cdceae","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-1c-light-RGB-sm.png"},{"revision":"81bfb595c94f9722447dfa56ea71e903","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-fc-dark-RGB-sm.png"},{"revision":"48fd32ab623e003225d219fcec9a8d79","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-fc-light-RGB-sm.png"},{"revision":"65a8b6279cb30673448260b1ced971c7","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"d69f2c160373ff43506ca008022964f5","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-light-RGB-sm.png"},{"revision":"131decf86d2934a4a7641ab45c52d205","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"d9c6854e3bb8c1d815147c51f978f99a","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"ad19877e2bcb84a6e6a4ea34a776b86c","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"11a845cf3e19c21f9d5e2a335582e517","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"102de8dbca6a539cd0ae0902e67db930","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-icon-no-echo-slate-RGB-sm.png"},{"revision":"bac8fd31e6c4135ea139b559cc947da6","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-logo-fc-dark-RGB-sm.png"},{"revision":"1cb0fd3acdb7e637dc7a1dfaa0a39575","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"ab83a7f2201db6036c92fa5762684e61","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"2e6306e421aa4ff385604752c794eaf3","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"2c6c0336a927e4ef896fc201abdca2b2","url":"brand/products/Intelligence-RGB/Intelligence-RGB/PNG/Small/intelligence-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"fc95f5f9692156d4b0c07a16ff5b178c","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-1c-dark.svg"},{"revision":"92cfbafebe380e83a9c4116133ec6888","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-1c-light.svg"},{"revision":"bc556ac93bf6a6ddebdf7f8390640bc2","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-fc-dark.svg"},{"revision":"ba8b7c0231f124c94dfa9aa4bb8f2934","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-fc-light.svg"},{"revision":"d23d0c181ba6f1b22bcb518c517bdad8","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-dark.svg"},{"revision":"23c36c79bf99bd91db825d16a029d568","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/_main brand lockups/digital.ai-intelligence-no-echo-greyscale-light.svg"},{"revision":"90e42c75f4460155294aa6f665ee942b","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-icon-no-echo-1c-dark.svg"},{"revision":"8359a376496c43f0b4b0c1b9e7cdff95","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-icon-no-echo-1c-light.svg"},{"revision":"2e52a5ce6aec8bdd841043aab971936f","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-icon-no-echo-fc-dark.svg"},{"revision":"88de4cf9e9aeddb3c8bdfd3240224f88","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-icon-no-echo-greyscale-dark.svg"},{"revision":"b3d06a40e3378f97b58990272a9f7dc7","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-icon-no-echo-slate.svg"},{"revision":"e2a1b0c1d320bab258561226de25795b","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-logo-fc-dark.svg"},{"revision":"f2cd3c56104de95272ee9242a8d091ed","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-logo-no-echo-1c-dark.svg"},{"revision":"10bbda1b5419e0f779b8682ef94e2616","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-logo-no-echo-1c-light.svg"},{"revision":"0b33a0c7d4d0997f4b8f0525a955caa8","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-logo-no-echo-fc-light.svg"},{"revision":"60429557ddfea8e6980a0b47a179b9ec","url":"brand/products/Intelligence-RGB/Intelligence-RGB/SVG/intelligence-logo-no-echo-greyscale-dark.svg"},{"revision":"935d87d2d7fa6b5c01e90fdad7362db2","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-dark-RGB-lg.png"},{"revision":"dc06109a9f9b3ea453460832310faf70","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-light-RGB-lg.png"},{"revision":"2b0f608052aa1ee45c175cc7a9150374","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-dark-RGB-lg.png"},{"revision":"52278d8bd54851fd7557a9ccb32c7277","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-light-RGB-lg.png"},{"revision":"968d6f5706d9caa1b64fcee12533af04","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"a4aa172460089cfdea1a2efeba5ad10d","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-light-RGB-lg.png"},{"revision":"47e44bf935d5756620ae649f75af9424","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"e24b5fdd16e9b74ee04c518d289a4d93","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"30d1ad5e1baafd3a8b394ca1589977cd","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"fe02d756dd1f47ffd2871021d39a705e","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"5728336b7cf99ef5c7172382edd1b0fa","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-icon-no-echo-slate-RGB-lg.png"},{"revision":"8bd4e6d5990aee6885af1310e6c03713","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"4256e181f948649667c4afc4edfcdb80","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"0e21af9fb6a1ef3604b33fdf488353ed","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"f9dc2a15e2bf18adfdaba1f32beab587","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"6202fbb74fe8811ffca49df7f2561955","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Large/key-data-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"420c12269e2253f02011d39d7b8bb03a","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-dark-RGB-md.png"},{"revision":"d042812d57d330451de73d57173148b6","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-light-RGB-md.png"},{"revision":"6f8c6af09655a68a04810d6fb388dfeb","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-dark-RGB-md.png"},{"revision":"4d32e62afd1e2ed9543726b51f3ead3d","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-light-RGB-md.png"},{"revision":"b8d6d73c7894ab8a709a6c5cb0a74b20","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-dark-RGB-md.png"},{"revision":"a582d75e666c84fe1d44a7f8acefab3b","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-light-RGB-md.png"},{"revision":"987f5cde803c0ee2ff55277e8490a972","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"70d8435f13e811bebdba710e4a1e6bc2","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-icon-no-echo-1c-light-RGB-md.png"},{"revision":"305113d95ea5e7dc968e393615b873cc","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"3b1a1e757cc012af6d4bcacdc0fa0e2b","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"ddad5521549bf8886de1760e23e547f9","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-icon-no-echo-slate-RGB-md.png"},{"revision":"b2b6106c03c37cd322890ee465bd2e5c","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"a6033b57e618d5dea7d6c61dd9e00c9a","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-logo-no-echo-1c-light-RGB-md.png"},{"revision":"de889c6cea395614c67ae4ed14e0c7e6","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"6ad9e8e6bcc259895d2fd77aef271469","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-logo-no-echo-fc-light-RGB-md.png"},{"revision":"5edf93d074ffb9db52ed6447335db7fe","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Medium/key-data-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"0de0289871d2ea6fc3da204be8c2886f","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-dark-RGB-sm.png"},{"revision":"3e22968be8f6398da1a5e0be5af6b7f6","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-light-RGB-sm.png"},{"revision":"f5ac5c5e946154161ba6f9c12fc685c7","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-dark-RGB-sm.png"},{"revision":"13f53f260ead7c1b17a3a93b94aa71f9","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-light-RGB-sm.png"},{"revision":"23dd67f46e5735553f34fcd33a6b0899","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"51502d765783a726a6e4f9e7af0cb6a7","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-light-RGB-sm.png"},{"revision":"408fb4cddaa7c3d9015f8a31567c31de","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"39772f7a680d1f6724a886ff62e1a4f5","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"e89c325f27a03a90df13459a96366f01","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"c57f2542e794ecc3a8c6dd7303323278","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"fdc183d32ba8e1373138ed65c8968131","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-icon-no-echo-slate-RGB-sm.png"},{"revision":"b2c77cd09e505bca948047c8aa404f66","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"d51df09c4e69f0fdace33401bc4662d8","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"2a07ec21e7373eb28ba69cf21de70c21","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"bdf4da642adde4c62c2cdcd4adca0340","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"53b24c7bf3f50aae91df7b358cb9a466","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/PNG/Small/key-data-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"cb1a4a79f0460aad0eaafcf01a2932e1","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-dark.svg"},{"revision":"2f8fc6ca3a2b4d2d6752da252c80ef4c","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-1c-light.svg"},{"revision":"2e2d7d63ca5e353d708bbfa24e1f86f5","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-dark.svg"},{"revision":"bd13d6608561e7ddedee59b1c4f66389","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-fc-light.svg"},{"revision":"7b6890d3af597161e2b184b929040e82","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-dark.svg"},{"revision":"e96aa0ce86873e1c29a310320c4859ed","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/_main brand lockups/digital.ai-key-data-lockup-no-echo-greyscale-light.svg"},{"revision":"bb91c3c8bf72b5f6d782e061dfc09237","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-icon-no-echo-1c-dark.svg"},{"revision":"53304760880d804e4865bd05df89f2b4","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-icon-no-echo-1c-light.svg"},{"revision":"56480aefca789131f5e04bcc42c7fa97","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-icon-no-echo-fc-dark.svg"},{"revision":"5a3320dd24b25d8b0381f26acca7f4b8","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-icon-no-echo-greyscale-dark.svg"},{"revision":"851abbc64db08c98a5dbbfaf89be2d79","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-icon-no-echo-slate.svg"},{"revision":"c4616ad4efa18e52211ce864c0133044","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-logo-no-echo-1c-dark.svg"},{"revision":"816795b9adbe92f73b5cbf69a58dee18","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-logo-no-echo-1c-light.svg"},{"revision":"63b27fef2d80b1baef5cde79b781afd0","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-logo-no-echo-fc-dark.svg"},{"revision":"588aad751250c96c67e870742a942a34","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-logo-no-echo-fc-light.svg"},{"revision":"0fa64fed1e9c1eae6b40d4d429a3a4fe","url":"brand/products/Key___Data_Protection-RGB/Key & Data Protection-RGB/SVG/key-data-logo-no-echo-greyscale-dark.svg"},{"revision":"b0169ed0a3cf689599ae35c17a0c2c31","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/large/platform-icon-fc-dark-CMYK-lrg.png"},{"revision":"d24d7c538b62902cd553325809d7f663","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/large/platform-icon-fc-light-CMYK-lrg.png"},{"revision":"57fba80bc95b14eb0b29d1e298c2a5c6","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/large/platform-icon-greyscale-dark-CMYK-lrg.png"},{"revision":"c27251844b165c0703d1a4f82d10b758","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/large/platform-icon-greyscale-light-CMYK-lrg.png"},{"revision":"f22a8f0ffc587a6804ba1d0727875d04","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/large/platform-icon-slate-CMYK-lrg.png"},{"revision":"636737645c9d2cb83fbaa85bd702a7ce","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/medium/platform-icon-fc-dark-CMYK-med.png"},{"revision":"63a79c3127aa9d969c7ce304d9ec0bc4","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/medium/platform-icon-fc-light-CMYK-med.png"},{"revision":"f35d8cae399ee1805abe016c516284ee","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/medium/platform-icon-greyscale-dark-CMYK-med.png"},{"revision":"4af8f92ed224043905b792197947beaf","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/medium/platform-icon-greyscale-light-CMYK-med.png"},{"revision":"3183f85a82ad45cb8e5c357253b75689","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/medium/platform-icon-slate-CMYK-med.png"},{"revision":"392b2c920ba54a6474eb59b7cae9250b","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/small/platform-icon-fc-dark-CMYK-med.png"},{"revision":"b9febad90a7204e258cbdb22927ef96f","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/small/platform-icon-fc-light-CMYK-med.png"},{"revision":"af3212970e1482dc051bbfb43463e864","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/small/platform-icon-greyscale-dark-CMYK-med.png"},{"revision":"49bb546e52a03d7074d2491e915bad6a","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/small/platform-icon-greyscale-light-CMYK-med.png"},{"revision":"acf62b8960fb5c36652b67b09b1df19c","url":"brand/products/Platform-Icon-CMYK/Platform Icon/PNG/small/platform-icon-slate-CMYK-med.png"},{"revision":"2ddb3265a6d53ebc2d106a92899a7f62","url":"brand/products/Platform-Icon-CMYK/Platform Icon/SVG/platform-icon-fc-dark-CMYK.svg"},{"revision":"527e234c50ff44b21af0a8dd415e0121","url":"brand/products/Platform-Icon-CMYK/Platform Icon/SVG/platform-icon-fc-light-CMYK.svg"},{"revision":"2aaefab4700575b039ce47982a9c1ea4","url":"brand/products/Platform-Icon-CMYK/Platform Icon/SVG/platform-icon-greyscale-dark-CMYK.svg"},{"revision":"2588ba8bd9f2da41bf59ed2514dedb0f","url":"brand/products/Platform-Icon-CMYK/Platform Icon/SVG/platform-icon-greyscale-light-CMYK.svg"},{"revision":"f805f7308bac6d876495bf05e42e0703","url":"brand/products/Platform-Icon-CMYK/Platform Icon/SVG/platform-icon-slate-CMYK.svg"},{"revision":"bd8c53523e2fd5fe362a0b52df6351ab","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-1c-dark-RGB-lg.png"},{"revision":"beef65effd65642eea2af16513fcf6c9","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-1c-light-RGB-lg.png"},{"revision":"4becc8eba95eeddc8d50703a7a90dcfd","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-fc-dark-RGB-lg.png"},{"revision":"3adbcbea973926b401713e7d03ebc23b","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-fc-light-RGB-lg.png"},{"revision":"f6539bf1ad3dad4f4e19fad783005c28","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"6d10df97d6f1e440c2f4804a2da64b8a","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/_main brand lockups/digital.ai-release-no-echo-greyscale-light-RGB-lg.png"},{"revision":"de81617501510168cd56c7b807f740c8","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-icon-no-echo-1c-dark-RGB-lg.png"},{"revision":"d2bcbd0a73a481ff9fefb6723453bb83","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-icon-no-echo-1c-light-RGB-lg.png"},{"revision":"77ee4c1519195c7aea1c38aa06a6d19e","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-icon-no-echo-fc-dark-RGB-lg.png"},{"revision":"28f9ec2e6578297057e379db82035085","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-icon-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"04c1cfce8fcd9a0caeb6420f4a2dbdb7","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-icon-no-echo-slate-RGB-lg.png"},{"revision":"d2a0014d7b56ce97883d19d7c6dc3680","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-logo-no-echo-1c-dark-RGB-lg.png"},{"revision":"f25c1656f69c2df6e8aef254b3cf9260","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-logo-no-echo-1c-light-RGB-lg.png"},{"revision":"91c7405287a4930cbac3e8e04a96dc71","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-logo-no-echo-fc-dark-RGB-lg.png"},{"revision":"80f27988ff93983d0f070dba377a8b6e","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-logo-no-echo-fc-light-RGB-lg.png"},{"revision":"91d924ddc36d652aef3783ffe8ce19ec","url":"brand/products/Release-RGB/Release-RGB/PNG/Large/release-logo-no-echo-greyscale-dark-RGB-lg.png"},{"revision":"1d3f1b3517e5b7fdd2e8ee8b40eadf17","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-1c-dark-RGB-md.png"},{"revision":"83c79f1cd51263731e7a5e10642ac3f3","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-1c-light-RGB-md.png"},{"revision":"d60c4d976699dd1ba04f5bdfa1dc2c2a","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-fc-dark-RGB-md.png"},{"revision":"e8c602bdf5f3146a6e7438565821897b","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-fc-light-RGB-md.png"},{"revision":"6e5d99a11f4abf033d89b88a666c48d4","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-greyscale-dark-RGB-md.png"},{"revision":"37e54bdaf07ee2c6b3fbda666f71f450","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/_main brand lockups/digital.ai-release-no-echo-greyscale-light-RGB-md.png"},{"revision":"659d92eaecaa18840991d0c6509c39c9","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-icon-no-echo-1c-dark-RGB-md.png"},{"revision":"a145e90f332df91ab02e011e92165003","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-icon-no-echo-1c-light-RGB-md.png"},{"revision":"f882f4a28f0b55cf124c6860e6451792","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-icon-no-echo-fc-dark-RGB-md.png"},{"revision":"46ca09c1ca52090379090875192370fd","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-icon-no-echo-greyscale-dark-RGB-md.png"},{"revision":"cc8331bca19c266c2c86873c52e5d185","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-icon-no-echo-slate-RGB-md.png"},{"revision":"9ab2aa88c32c1601b535753df9c9ab74","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-logo-no-echo-1c-dark-RGB-md.png"},{"revision":"79e291d0ad14885f5d897dd27b16d5b6","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-logo-no-echo-1c-light-RGB-md.png"},{"revision":"6eaa7afd219eef768c06091fe444f876","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-logo-no-echo-fc-dark-RGB-md.png"},{"revision":"d36052e3bf0ba0644c7be7f93b16e950","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-logo-no-echo-fc-light-RGB-md.png"},{"revision":"9e5f82e438bf9132c4ad1f6c688ad4e6","url":"brand/products/Release-RGB/Release-RGB/PNG/Medium/release-logo-no-echo-greyscale-dark-RGB-md.png"},{"revision":"7616124512d0221cf479ee6a1229d9cb","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-1c-dark-RGB-sm.png"},{"revision":"c81a30ad282ee889933e3da13d737be2","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-1c-light-RGB-sm.png"},{"revision":"0af421a3801f4ad4c4408f77ad146e61","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-fc-dark-RGB-sm.png"},{"revision":"1bb48a0431832f3b18c2b7df6c17b357","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-fc-light-RGB-sm.png"},{"revision":"e3cc82b640bca91142f3f441e77bdf2b","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"1a3a3a9de26dcb1dc898c72f20e29bfa","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/_main brand lockups/digital.ai-release-no-echo-greyscale-light-RGB-sm.png"},{"revision":"f1fc352f090107d14d1e749833ff26a7","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-icon-no-echo-1c-dark-RGB-sm.png"},{"revision":"8654989ae2940ce19a18601e8ba489d3","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-icon-no-echo-1c-light-RGB-sm.png"},{"revision":"c995d8c61cd9a61dbbb4ff4a130d14f3","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-icon-no-echo-fc-dark-RGB-sm.png"},{"revision":"e6011d21fad3d06fae2604a114c10a10","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-icon-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"923ab2117e09c0c3927776cd3685ecd0","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-icon-no-echo-slate-RGB-sm.png"},{"revision":"b75d8633ecee3bb7ff42ef5bff687fae","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-logo-no-echo-1c-dark-RGB-sm.png"},{"revision":"20fd0f24cd13a4bc3b7047b8a866dd2a","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-logo-no-echo-1c-light-RGB-sm.png"},{"revision":"2e181db212435df6821a9108e3df2d2c","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-logo-no-echo-fc-dark-RGB-sm.png"},{"revision":"9a10a8cb931a64e5649870cd7645082f","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-logo-no-echo-fc-light-RGB-sm.png"},{"revision":"f8abcb7f7ebc9c5b37f4c69c577f085f","url":"brand/products/Release-RGB/Release-RGB/PNG/Small/release-logo-no-echo-greyscale-dark-RGB-sm.png"},{"revision":"994dd181a30189ee6154379f994d4f69","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-1c-dark.svg"},{"revision":"f93a18fdb897f4ecc67444af9c1c6286","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-1c-light.svg"},{"revision":"487a4a39eb7a72db66710b02ac91b2bd","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-fc-dark.svg"},{"revision":"aed787e05c8057645e66a31443615cf0","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-fc-light.svg"},{"revision":"79f92f5b459ad24d0ccba8983eb28b82","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-greyscale-dark.svg"},{"revision":"1ca1d660f22409d6f33769619f51c444","url":"brand/products/Release-RGB/Release-RGB/SVG/_main brand lockups/digital.ai-release-no-echo-greyscale-light.svg"},{"revision":"4c5deb4d818cebc97575f988b086c305","url":"brand/products/Release-RGB/Release-RGB/SVG/release-icon-no-echo-1c-dark.svg"},{"revision":"a8c3292daaf9efe4a68e966afef43eca","url":"brand/products/Release-RGB/Release-RGB/SVG/release-icon-no-echo-1c-light.svg"},{"revision":"397daa97ddf76cfbdb434cefedf6c0ed","url":"brand/products/Release-RGB/Release-RGB/SVG/release-icon-no-echo-fc-dark.svg"},{"revision":"27d7cbfd7f41bb3864d64e5df623a249","url":"brand/products/Release-RGB/Release-RGB/SVG/release-icon-no-echo-greyscale-dark.svg"},{"revision":"e5d586d00fb26aa445e95f5b6c3e8971","url":"brand/products/Release-RGB/Release-RGB/SVG/release-icon-no-echo-slate.svg"},{"revision":"423bdfa7e41d1683391fdd7f43acb8d5","url":"brand/products/Release-RGB/Release-RGB/SVG/release-logo-no-echo-1c-dark.svg"},{"revision":"6264718270e2ac1ff3a15c4b582de2ff","url":"brand/products/Release-RGB/Release-RGB/SVG/release-logo-no-echo-1c-light.svg"},{"revision":"87e309127fb7e8af35ba2619556c1f92","url":"brand/products/Release-RGB/Release-RGB/SVG/release-logo-no-echo-fc-dark.svg"},{"revision":"401ac774ddd850ec96cb7b3f9cf0105e","url":"brand/products/Release-RGB/Release-RGB/SVG/release-logo-no-echo-fc-light.svg"},{"revision":"8bb1c1322b58ec6b769fcb650bcf488d","url":"brand/products/Release-RGB/Release-RGB/SVG/release-logo-no-echo-greyscale-dark.svg"},{"revision":"5deaef7144be791e6c56d1dfe76a962c","url":"docs/assets/images/1610_cherrypick1.png"},{"revision":"5bde63228a73b445105445c57bc03729","url":"docs/assets/images/1610_cloneartifact_01.png"},{"revision":"248d95df2bb3ab4cd0a2dbc696c1034b","url":"docs/assets/images/1610_cloneartifact_02.png"},{"revision":"f1466befe4734aba301342e5ea6e4aa5","url":"docs/assets/images/1610_documents01.png"},{"revision":"461121450c53ad001ea85c8b6ab35cb7","url":"docs/assets/images/1610_documents02.png"},{"revision":"97d4cb7216267fc7a8061ad25c8450a7","url":"docs/assets/images/1610_documents03.png"},{"revision":"d3191540b8a66abf4b16b1e5e60f2e0f","url":"docs/assets/images/1610_documents04.png"},{"revision":"1ef283f9085efcc4a2ad0a44b67236fd","url":"docs/assets/images/1610_documents05.png"},{"revision":"67da711a78d6acf8435dc1c35c5f5702","url":"docs/assets/images/1610_documents08.png"},{"revision":"33441a3e749d6b4a0758ebec3bc05d0b","url":"docs/assets/images/1610_svninternal.png"},{"revision":"3f7bdee1000751aa54724c838bb78442","url":"docs/assets/images/1610_userrolematrix.png"},{"revision":"1adc08f78fce36e0d25a578cc0808731","url":"docs/assets/images/167_as01.png"},{"revision":"a883e7396670a8cb343f273a3e0e8c34","url":"docs/assets/images/167_as02.png"},{"revision":"a25f9234b1f69c6d15fe386c7eeff857","url":"docs/assets/images/167_as03.png"},{"revision":"eae02b5966153beca67690465d7d7166","url":"docs/assets/images/167_commenting01.png"},{"revision":"ead741904a7dea94d774f8231f781882","url":"docs/assets/images/167_commenting02.png"},{"revision":"002c410bda3aa82c98b3ff76a4445237","url":"docs/assets/images/167_massdeleteresurrect01.png"},{"revision":"9fe83cd2fc19c2194d4c71a49176f7a4","url":"docs/assets/images/167_md.png"},{"revision":"60eb780fbd0e696ebe5e4679ef9e59a6","url":"docs/assets/images/167_pwd.png"},{"revision":"b5044e2c435fdabb844fc22d804bf86b","url":"docs/assets/images/167_scm02.png"},{"revision":"a04ce2e1fb1c0dc634287fb1bd03a19e","url":"docs/assets/images/167massdeleteresurrect.png"},{"revision":"195b84fbc8c7a0cb2783c37ed310a907","url":"docs/assets/images/17-11-autopopulate.png"},{"revision":"e67c58965da1aad55f02cb6490b0dd1d","url":"docs/assets/images/17-11-changelogdocuments.png"},{"revision":"9ac67a3fb27c32ec0ec5be2901e90c84","url":"docs/assets/images/17-11-cloneartifact.png"},{"revision":"01c46aea85cf2464a26af852218850f5","url":"docs/assets/images/17-11-cloneaschild.png"},{"revision":"c4759c74339d0ac021cd5d29aa26ff1c","url":"docs/assets/images/17-11-clonesourceartifact.png"},{"revision":"0a07f1888f7f2931df70baa6240513da","url":"docs/assets/images/17-4-advanced-transition.png"},{"revision":"ae884c03104fc8d8ecc961ebc7f53f6d","url":"docs/assets/images/17-4-artifact-schema-image-new2.png"},{"revision":"f9dca26d1620507ebfe3716642306f0d","url":"docs/assets/images/17-4-excelimport.png"},{"revision":"ddc746344804d4fd0346e2c1a2662e05","url":"docs/assets/images/17-4-filtertables_team.png"},{"revision":"b619c4137ae1e791458f2b7eba372d35","url":"docs/assets/images/17-4-filtertables02.png"},{"revision":"a0a1c2af3fda0dbd822ec45512c093fc","url":"docs/assets/images/17-4-filtertables04.png"},{"revision":"140dab92abfad7c3e7a57e306a717fe3","url":"docs/assets/images/17-4-maptags.png"},{"revision":"76cc22f4fbe2eaa6c226e75338a8291f","url":"docs/assets/images/17-4-myworkspace-03.png"},{"revision":"3047a89d7c5ab7d5cc76f1ee520cebbf","url":"docs/assets/images/17-4-trackerid.png"},{"revision":"9a696d41097d01f4534f23035e6fa2ae","url":"docs/assets/images/17-8-federation-tab.png"},{"revision":"c80015948cee6b4667939b1be8e51b86","url":"docs/assets/images/17-8-graphicalview.png"},{"revision":"48b3b7d5e9a3f8df31b64ed23a648b71","url":"docs/assets/images/17-8-html-email-addcomments.png"},{"revision":"b99c464211568771cfdd67948fd37b5d","url":"docs/assets/images/17-8-html-email-artifact-create.png"},{"revision":"c86138b7ec45aafd0effbe776fc49e28","url":"docs/assets/images/17-8-html-email-artifact-update.png"},{"revision":"72bffac0838a0e17b8004159234fc245","url":"docs/assets/images/17-8-SAML-Process-Flow.png"},{"revision":"fb363cd94bc42263ef0aecf2e75fb8e2","url":"docs/assets/images/17-8-SAML-tab.png"},{"revision":"d66b6445ce40076063a9a9f045c0dcb2","url":"docs/assets/images/17.1_aasociatesourceartf.png"},{"revision":"fca86a88d1abf9aea10487ef62ea4667","url":"docs/assets/images/171_actiondesigner.png"},{"revision":"3643919dcedb24677f2e99e521c50fc4","url":"docs/assets/images/171_actiondesigner01.png"},{"revision":"f900d1b1a3df589bde78161923b31a2b","url":"docs/assets/images/171_actiondesigner02.png"},{"revision":"83590ecdf847acabc2c28596e7fdf8ce","url":"docs/assets/images/171_ahadmin.png"},{"revision":"fcc71cc5995cfb1924b6ae9ecdce8e43","url":"docs/assets/images/171_codebrowser.png"},{"revision":"8efc9d4af6f211611d0becb4dc2fe376","url":"docs/assets/images/171_configuring_jenkins_plugin_01.png"},{"revision":"be166cf50bd537f170ad83106a3336fe","url":"docs/assets/images/171_configuring_jenkins_plugin_02.png"},{"revision":"e7e05561bd6771de128fc7e9439d5e42","url":"docs/assets/images/171_gitinlineedit01.png"},{"revision":"beed7a6655bef024a3119bc232d52a13","url":"docs/assets/images/171_gitinlineedit02.png"},{"revision":"1ced8e7050d08fb93953a33aca4cc10a","url":"docs/assets/images/171_gitinlineedit03.png"},{"revision":"5140d436e8ae8612725e7473d71fc086","url":"docs/assets/images/171_gitinlineedit04.png"},{"revision":"2cb79f74cdb915980e0296b0e952c434","url":"docs/assets/images/171_gittags01.png"},{"revision":"e5d0613b0abe4c9e4c8cc23858852315","url":"docs/assets/images/171_inlinedit01.png"},{"revision":"9d13bcb49a0ae3df43696432eec735be","url":"docs/assets/images/171_reviews.png"},{"revision":"30a605b5c78ea6d3c4e8ba77ef5359c4","url":"docs/assets/images/171_scm_01.png"},{"revision":"2c4cc907d36e195c904145748f462a5e","url":"docs/assets/images/171_submitwholetopic.png"},{"revision":"e82a037142459ea6dc1a40fa01ee76c8","url":"docs/assets/images/171_tags01.png"},{"revision":"8e141c2ab3579c310c35e1b7bf9b8d54","url":"docs/assets/images/171_tags02.png"},{"revision":"76d108b52339e8ff5332dbab73fe834f","url":"docs/assets/images/1711-custom-objectid-links.png"},{"revision":"42f1ae35d3c499e170aaf41cbcfd5cbb","url":"docs/assets/images/1711-webhooks01.png"},{"revision":"812c457ab54dbcda60fcc50faa059b8b","url":"docs/assets/images/1711-webhooks02.png"},{"revision":"93d04dc06352f6eb11d34f18ecb73cc0","url":"docs/assets/images/174_addclient01.png"},{"revision":"4c95ce0e8b09da064be0f6461a73dbe0","url":"docs/assets/images/174_oauth_01.png"},{"revision":"3d42e3fdd59b322b7dee3b620b696807","url":"docs/assets/images/174_oauth_02.png"},{"revision":"fddf33bf00e71eaa316f85d6aabb6f43","url":"docs/assets/images/174_oauth_03.png"},{"revision":"1a45aa35c4f2454f31bf9830d1093e19","url":"docs/assets/images/174_oauth_04.png"},{"revision":"753efb7f3a00e12e7b9a6d64471c8dd6","url":"docs/assets/images/174_oauth_05.png"},{"revision":"d8550667c1777a59daf9052e2af65ec3","url":"docs/assets/images/174_removeprojectmapping01.png"},{"revision":"cb7f4010ac92c9eff5111c08100616f0","url":"docs/assets/images/174_removeprojectmapping02.png"},{"revision":"6290a871b1c4418a3c33e9210cbf1079","url":"docs/assets/images/174_removeprojectmapping03.png"},{"revision":"83a08062dc212cba8c313b89fd6a042b","url":"docs/assets/images/174-multiple-workspaces.png"},{"revision":"ec0615c150556e7c0e6f79987dc6a026","url":"docs/assets/images/174-myworkspace-01.png"},{"revision":"d4724fcfb643688ede14b007c38bec75","url":"docs/assets/images/174-myworkspace-02.png"},{"revision":"32377a9843f6d45df75e8ba2ccae88fc","url":"docs/assets/images/174-myworkspace-03.png"},{"revision":"23d3976335eab2fefee99da0718ca51b","url":"docs/assets/images/174-myworkspace-04.png"},{"revision":"fe96c9c76c6feea6c962e7599bce2d1f","url":"docs/assets/images/174-myworkspace-05.png"},{"revision":"a920d0a622cca03928c053570a0ad8a0","url":"docs/assets/images/174-myworkspace-06.png"},{"revision":"05322adb3f3111c1b9f05a04cc010801","url":"docs/assets/images/174-myworkspace-07.png"},{"revision":"ae12e629ffc88ec3abc1b1a9516311ba","url":"docs/assets/images/174-myworkspace-08.png"},{"revision":"4c44c36e6a5de72a92db0a5c8b9682c8","url":"docs/assets/images/174-myworkspace-09.png"},{"revision":"07af37da650681635296cf289e138e09","url":"docs/assets/images/178_ha.png"},{"revision":"0ec654ce4f7df8c30920a1a55237fd5a","url":"docs/assets/images/178-deleteabandonedreviews.png"},{"revision":"aff2d97bbe7905d6ea0482f17f973670","url":"docs/assets/images/18-2-custom-object-ids-lifecycle.png"},{"revision":"441d9827c7fc33a40f0aabbe9263a127","url":"docs/assets/images/19-1_mass-repo-policy-config.png"},{"revision":"c9213c556117963d78994d49d24735d4","url":"docs/assets/images/190_baselinedef_button.png"},{"revision":"82217f68e3620c63013dd2c56e17bc33","url":"docs/assets/images/190_create_definition.png"},{"revision":"1e7b474bf55122371345ea9d81002b50","url":"docs/assets/images/190-ctfupgradeerror.png"},{"revision":"fa368852c005572f9ecef447ece1251c","url":"docs/assets/images/190-girreplicas.png"},{"revision":"c33d6aafc1a5a06d14be48c9c2efa26c","url":"docs/assets/images/190-markfilesreviewd.png"},{"revision":"98f07a0c8b23018e950290128d1ca39f","url":"docs/assets/images/190-privatereviews.png"},{"revision":"d0ec02d07513b3e83f59c118f1562315","url":"docs/assets/images/190-replytocomments.png"},{"revision":"ea98fa6d311c1b095e8ce6e09530acb3","url":"docs/assets/images/190-viewentirediff.png"},{"revision":"33b670c9ad007928910944453247d462","url":"docs/assets/images/20.0-docsuments-01.png"},{"revision":"1219c00d4a0744dea5c62127102ad39f","url":"docs/assets/images/20.0-docsuments-02.png"},{"revision":"b71316354e463e9f29a163e76414706b","url":"docs/assets/images/20.0-docsuments-03.png"},{"revision":"fcf6672f960a0b12666d6891247a6061","url":"docs/assets/images/20.0-docsuments-04.png"},{"revision":"c596e566173c037659e5cd6caab00a32","url":"docs/assets/images/20.0-scm-settingstoggle.png"},{"revision":"2affca4f6b7280a9f9b10356f85d76a6","url":"docs/assets/images/20.0-scm-settingstoggle01.png"},{"revision":"86dc90a7fda8a618b8dc059440b67aaf","url":"docs/assets/images/20.0-scm-settingstoggle02.png"},{"revision":"d795f00e581ad25a3bf30d3836283df4","url":"docs/assets/images/20.0-scm-submodule.png"},{"revision":"0902f3497d0ef707b11d21677c8cf341","url":"docs/assets/images/201-addSubmodule.png"},{"revision":"2eecb3e06f69e4ff79507fc3c457fc40","url":"docs/assets/images/201-advanced-doc-search-01.png"},{"revision":"f670575463c43b6f14311af3d0112d3a","url":"docs/assets/images/201-advanced-doc-search-02.png"},{"revision":"a61ddc5a91db3e83349f5f9a812951a1","url":"docs/assets/images/201-deleteb-01.png"},{"revision":"30f67a22d85ea5db6ee5cc50898e63e7","url":"docs/assets/images/201-deleteb-02.png"},{"revision":"68bfb7d6c0178db65c3cd713784cd9e8","url":"docs/assets/images/201-deletedocs-01.png"},{"revision":"43ec4de29ae10a2e28720b2842c3b385","url":"docs/assets/images/201-deletedocs-02.png"},{"revision":"9828abe60e914baaf01f9b909655aa74","url":"docs/assets/images/201-deletedocs-03.png"},{"revision":"a36ea9fdca28fbdd752e2c82a9f5a0b0","url":"docs/assets/images/201-laststatuschange-01.png"},{"revision":"b00ad626331d5d578fd3c22bcc2cc4b5","url":"docs/assets/images/201-laststatuschange-02.png"},{"revision":"9972204491cb87d9c8e6bf2afdf74999","url":"docs/assets/images/201-qualitygates-01.png"},{"revision":"5d4c5f58efe3871d5b1cc88cf6cbf37e","url":"docs/assets/images/201-qualitygates-02.png"},{"revision":"cee76eaa132f21ed5653a6f3c4137afa","url":"docs/assets/images/201-qualitygates-03.png"},{"revision":"57670b992d3bca8360389aa3e7259e2e","url":"docs/assets/images/201-qualitygates-04.png"},{"revision":"b2be77b8cfccf3332d5cc7edfc0489ba","url":"docs/assets/images/201-qualitygates-05.png"},{"revision":"c448406e041881be1d060c691f174e16","url":"docs/assets/images/201-qualitygates-06.png"},{"revision":"809e7f1cd0457084cbc9b59ba4f35803","url":"docs/assets/images/201-removeSubmodule.png"},{"revision":"fd21c9f4500f9a671b80887747e7f25c","url":"docs/assets/images/201-repositoryConsumers.png"},{"revision":"7a8e093de1c30d7636114064ffe6635d","url":"docs/assets/images/201-testlinkss0-01.png"},{"revision":"daada0a722327a7c40be874f259d03b8","url":"docs/assets/images/201-testlinkss0-02.png"},{"revision":"aae77171acfe6bd1c94467f5ffbf3a90","url":"docs/assets/images/201-testlinksso-03.png"},{"revision":"f6e3141e55a6bb3903378782ca6658dc","url":"docs/assets/images/201-userfilterremoval.png"},{"revision":"12979a87d384d48348c97b71b818e16d","url":"docs/assets/images/201-wholewordsearch-01.png"},{"revision":"7703136c79f067c59d14a728f843479a","url":"docs/assets/images/202-add-binary-to-projects-02.png"},{"revision":"6b72dbffda318ec6c2d466d69707cc8e","url":"docs/assets/images/202-add-binary-to-projects.png"},{"revision":"e63065cc204eb0ee1ac95c52ce50b3f7","url":"docs/assets/images/202-effortspent-01.png"},{"revision":"e38d76541506eb7143827df3acf9183f","url":"docs/assets/images/202-effortspent-02.png"},{"revision":"283834646a06a44f371f515c706c2edf","url":"docs/assets/images/202-newdocbutton.png"},{"revision":"502aae245e78da76829e04dfa022cc5e","url":"docs/assets/images/202-nonpfpb.png"},{"revision":"43aff7e6e9b27fabcce5a8ba6485ef19","url":"docs/assets/images/202-scm-01.png"},{"revision":"a3199c3540f75502913922a4860c2a0f","url":"docs/assets/images/202-scm-02.png"},{"revision":"cfd8bf7242d11e6603b52a4ea85f1b34","url":"docs/assets/images/202-scm-03.png"},{"revision":"8b9a0f173a9b4ab703dbd0ce4a9962a9","url":"docs/assets/images/202-scm-04.png"},{"revision":"51eeebd8763bf9964e0b2e7038f88427","url":"docs/assets/images/202-scm-05.png"},{"revision":"119c5ee871779dffb39813083d0fe4f9","url":"docs/assets/images/202-showhidesummary-01.png"},{"revision":"f4e7ea142b4dc13111a4f1d55c1fe7f0","url":"docs/assets/images/203-deletedef-01.png"},{"revision":"7c98112bcc52515a70a755afea4136f8","url":"docs/assets/images/203-deletedef-02.png"},{"revision":"781b17eba696ca0e3d0c3f5d0beacfe9","url":"docs/assets/images/203-doc-02.png"},{"revision":"642e69ae6200827d4868f7a1eb9e9242","url":"docs/assets/images/203-doc-03.png"},{"revision":"b6193566e4cf6b7ccdb8ae9440a079c5","url":"docs/assets/images/203-doc-04.png"},{"revision":"8b5ade142bf30e5b67446467a4489635","url":"docs/assets/images/203-doc-05.png"},{"revision":"4306cc4e031e7c6465692d877897c23a","url":"docs/assets/images/203-doc-06.png"},{"revision":"db919f0d8dd83b78aecc4a884fbd64c8","url":"docs/assets/images/203-doc-07.png"},{"revision":"250180dbce663eee40de3c6e8c8b64f6","url":"docs/assets/images/203-docs-01.png"},{"revision":"91df7a8272bb98522980df929535a047","url":"docs/assets/images/203-exporttags-01.png"},{"revision":"e0d2791b3b240c8a99cd0e516650fb3d","url":"docs/assets/images/203-exporttags-02.png"},{"revision":"33d388d265ce16bd9a13316219fe991b","url":"docs/assets/images/203-scm-01.png"},{"revision":"1413ad78b0599b321f551cdc74ffc935","url":"docs/assets/images/203-scm-02.png"},{"revision":"2aaecd7251640ebc2d5bd02d64bcb1e4","url":"docs/assets/images/203-scm-03.png"},{"revision":"57195cfc764c391222e8620211cb0b24","url":"docs/assets/images/203-scm-04.png"},{"revision":"dfe26d12648844f6e3d6fed211ea9a2d","url":"docs/assets/images/203-scm-05.png"},{"revision":"8479f4fe5a3cc5b7c335caf54de55f07","url":"docs/assets/images/203-scm-06.png"},{"revision":"2f8c7ffd495f56f77ddc2b2f852347cc","url":"docs/assets/images/203-view-baseline-def.png"},{"revision":"63d054e06f219f1bfb9031dbd15b4055","url":"docs/assets/images/203-webconnect-01.png"},{"revision":"8d7f9b29f3f7fa0cf743fe8179a70240","url":"docs/assets/images/203-webconnect-02.png"},{"revision":"cbd98e1006adb11fd776eef6d57c10d3","url":"docs/assets/images/203-webconnect-03.png"},{"revision":"ff474f38d6a5781fe8f6d9a69821776a","url":"docs/assets/images/203-webconnect-04.png"},{"revision":"3232aa2f003728fc0948ae18b55ef97a","url":"docs/assets/images/203-webconnect-05.png"},{"revision":"5d9390f880a8bb4eb0564245816a98e1","url":"docs/assets/images/203-webconnect-06.png"},{"revision":"dff04135a9f9f41db7e007135b208aae","url":"docs/assets/images/203-webconnect-07.png"},{"revision":"591113fe4a0cefb76f4d812589a605f6","url":"docs/assets/images/203-webconnect-08.png"},{"revision":"226a563ca9f36ace2b4d94c3fe5aacc5","url":"docs/assets/images/203-webconnect-09.png"},{"revision":"5e84f23e70c82a84276a9f1c970221da","url":"docs/assets/images/210-ctf-rebranding-01.png"},{"revision":"80f2071d8304eda0064e27a1030f8ee7","url":"docs/assets/images/210-ctf-rebranding-02.png"},{"revision":"1ba048578ebc3d7fae2510698e615a97","url":"docs/assets/images/210-ctf-rebranding-03.png"},{"revision":"a631b20faf123fdcc603843d624ca03f","url":"docs/assets/images/210-documents-01.png"},{"revision":"90d60059e2b7e10178b1a3235d287c87","url":"docs/assets/images/210-documents-form-validations-01.png"},{"revision":"d5d6984ccea55e235c7a6705af545d1e","url":"docs/assets/images/210-glob-binaries-01.png"},{"revision":"66093947c843343c46f70c27d3f2ba33","url":"docs/assets/images/210-myworkspace-01.png"},{"revision":"40707ce24317d49001db8d83d62534d3","url":"docs/assets/images/210-scm-01.png"},{"revision":"39b53ee0dd5b567b3cd6f9a6792e61bb","url":"docs/assets/images/210-scm-02.png"},{"revision":"d8cfb811a4f89e555e16c15a23c0a3f8","url":"docs/assets/images/210-scm-03.png"},{"revision":"ce4f861351534f4e73daa9daa31fa484","url":"docs/assets/images/210-scm-04.png"},{"revision":"76892ec783418e20e6d162e4ba34f220","url":"docs/assets/images/211-scm-01.png"},{"revision":"328b898aff2130072caef02d7246a981","url":"docs/assets/images/211-tracker-01.png"},{"revision":"69f117c0542365d656da4e5be2ad890f","url":"docs/assets/images/211-tracker-02.png"},{"revision":"955d75b637465c813c93c5792109f1d1","url":"docs/assets/images/211-user-role-enhancements.png"},{"revision":"67699b227b44c07944f53a73cebf2441","url":"docs/assets/images/212-docs-01.png"},{"revision":"881a4bcbd643e44c50075365c0ecda9f","url":"docs/assets/images/212-docs-02.png"},{"revision":"f6f945c197e728c523d83a6fb06d00fe","url":"docs/assets/images/212-docs-03.png"},{"revision":"7b5dcfadd9ef44e89bc1749d5f8ee008","url":"docs/assets/images/212-docs-04.png"},{"revision":"65243f53bca86c8160f3f76a43bb8b23","url":"docs/assets/images/212-docs-05.png"},{"revision":"2a31524408e8f94f00d6c9086f6ebdba","url":"docs/assets/images/212-docs-06.png"},{"revision":"ceb2e2c8a5c890e98ac447b96fbcf879","url":"docs/assets/images/212-docs-07.png"},{"revision":"874eae480c47ea145f93d25e54e01001","url":"docs/assets/images/212-docs-08.png"},{"revision":"9e19ffbd62becb2b41fb534f47b9b6dc","url":"docs/assets/images/22.0-date-picker-01.png"},{"revision":"0921af1e24a8d6361278a288a76523d0","url":"docs/assets/images/22.0-git-replica-01.png"},{"revision":"922d6589e160185363adb0372fb986ef","url":"docs/assets/images/23.0-scm-repo-categories.png"},{"revision":"bba2d700e3922ccb3c89c62c6673a9bf","url":"docs/assets/images/230-u1-baseline-binaries.png"},{"revision":"3b42e72a6a9fd6a89f6bbd3f96dfadf7","url":"docs/assets/images/230-u1-document-download-copy-url.png"},{"revision":"834cc39ae31391d94b1fa936d717426f","url":"docs/assets/images/230-u1-more-icon.png"},{"revision":"48e8d2f0e0eb4505c304a972df7829ec","url":"docs/assets/images/230-update-1-more-icon copy.png"},{"revision":"e3ff3eaafc3ce7023309c447cd89dd70","url":"docs/assets/images/231-u1-soap-server.png"},{"revision":"e82fcd57f9d73a27e062e35836491a40","url":"docs/assets/images/active-review-rules.png"},{"revision":"a272a92242fe3d833eb16c5028cf2ccc","url":"docs/assets/images/activityovertime.png"},{"revision":"01454c9683e439d9184a40edc2ce926e","url":"docs/assets/images/add_new_env.png"},{"revision":"a4f0bc153e3a1366f280c3496d55409c","url":"docs/assets/images/Add_tool_JIRA_Cloud.png"},{"revision":"d6fc667f6ce991ef503e328bb0bb50fd","url":"docs/assets/images/add-files-to-gitrepo-2.png"},{"revision":"5dbe5707560d874770b6d45e134088a3","url":"docs/assets/images/add-files-to-gitrepo-3.png"},{"revision":"23a7326fa878d81d6610a233a169b53c","url":"docs/assets/images/add-files-to-gitrepo-4.png"},{"revision":"2794b046423e8ad16479fc2c45d40184","url":"docs/assets/images/add-files-to-gitrepo.png"},{"revision":"4fe5791accef83d5a6bac6e0e3a5b882","url":"docs/assets/images/addnewenvironment.png"},{"revision":"e66558517d08bb2fb3abed50768bc2f0","url":"docs/assets/images/AF-webloginscreen.png"},{"revision":"09d73a790e95e0ea0733fa505e4a79d2","url":"docs/assets/images/alm-feature-matrix-1.png"},{"revision":"864e1a18fae9a3199442483c654d067a","url":"docs/assets/images/alm-feature-matrix-2.png"},{"revision":"a3e372d0aee0e4ae7a01a262cac3e1ff","url":"docs/assets/images/androidsdkmanagericon.png"},{"revision":"be128b1ff3a26667134f942c743ffcab","url":"docs/assets/images/Animated-GIF-Repository-Policies-Short.gif"},{"revision":"0798941b79972f1fb93f9dda4685821e","url":"docs/assets/images/annotation.png"},{"revision":"5aedbb84badcb2a27c483812788664e2","url":"docs/assets/images/annotations.png"},{"revision":"7b10741462b0f5c10f4eac9c98f76616","url":"docs/assets/images/app-create-1.png"},{"revision":"1e1e7382d6c6d5772530ea69bca15bc3","url":"docs/assets/images/app-create-2.png"},{"revision":"d36735dc553c7e945911aee545051869","url":"docs/assets/images/app-create-3.png"},{"revision":"838769176e7a88b3261e76f2daa7d4ad","url":"docs/assets/images/artfdistmultipletrackers.png"},{"revision":"4fef3256e8c541a4958d0cf0d3738083","url":"docs/assets/images/artfviews-kanban.png"},{"revision":"ca33aa37bb25c265ee06a3801dae3dd9","url":"docs/assets/images/artifact-schema-image-new1.png"},{"revision":"2208ba9275797953f3e2655f5141eae5","url":"docs/assets/images/artifact-update-overwrite-alert.png"},{"revision":"d4015e3423aa0c0aa7023ce814882dfc","url":"docs/assets/images/artifactDistribution_sample.png"},{"revision":"9d08c76a34dcdfbbc64f23ea0470c874","url":"docs/assets/images/artifactid.png"},{"revision":"a149de7a1543768f84bbb19abdbfc941","url":"docs/assets/images/assignedto1.png"},{"revision":"8ca04127fee9b1d0f1692e5f00fcda2b","url":"docs/assets/images/assignedto2.png"},{"revision":"a5aedcd9c3f496378ddd919b5757508a","url":"docs/assets/images/associate-doc-version.png"},{"revision":"70aed31490f8ae26b9d14fb08a345bbd","url":"docs/assets/images/associatecodecommits.png"},{"revision":"49e06e75037c919cef0ba1937cf510a3","url":"docs/assets/images/attachment-reminder-for-comments.png"},{"revision":"2abd31f892f3d90e49f5b91c37acf0ff","url":"docs/assets/images/attachment-reminder-for-description.png"},{"revision":"d5ea894b1863f0c904efd7678b110a13","url":"docs/assets/images/authorizegithubscreen2.png"},{"revision":"9779383e509e4614cd048873fba6d96c","url":"docs/assets/images/authorizeongithub.png"},{"revision":"efdfd00bafb429bc0794fef9166024b3","url":"docs/assets/images/averageagereport.png"},{"revision":"b0398ba2ab6d426db78bbc1c150eb9d3","url":"docs/assets/images/averagesizebyareagroup.png"},{"revision":"629b7dc3e18fef25bf2a1fb033449a31","url":"docs/assets/images/aws-ec2-03.png"},{"revision":"310fbedfe7811674bb82cbc1deee7a14","url":"docs/assets/images/aws-ec2-04.png"},{"revision":"153dae29505ed9dfdf9635daa16d848e","url":"docs/assets/images/aws-ec2-05.png"},{"revision":"460bb6a5a6b0d35406af1fd8ca31c8d3","url":"docs/assets/images/aws-ec2-06.png"},{"revision":"b61140fc0e9ba0656e167cb61aa5ef58","url":"docs/assets/images/aws-ec2-07.png"},{"revision":"1b7068c995f69c5aee972c3398e4743a","url":"docs/assets/images/aws-ec2-08.png"},{"revision":"b3e1782a4f7dae90838121e81afb1b02","url":"docs/assets/images/aws-ec2-09.png"},{"revision":"eefcb5a040c62c00d847a20b05e078f7","url":"docs/assets/images/aws-ec2-10.png"},{"revision":"aa8591cf2dda343c3f79d5dfc64d4f82","url":"docs/assets/images/aws-ec2-11.png"},{"revision":"be82bd9eeba3c3affc439681efdf3aa2","url":"docs/assets/images/aws-ec2-12.png"},{"revision":"856d7820874545b7d7c0fb6689e642e1","url":"docs/assets/images/aws-ec2-13.png"},{"revision":"34c7cca68b84cd480f45f784056c19f9","url":"docs/assets/images/aws-ec2-14.png"},{"revision":"2a6be95c3eb53e6bbbaeb992b56c3bb3","url":"docs/assets/images/aws-ec2-15.png"},{"revision":"37e343127ac4818b18a8a2d72ddeede5","url":"docs/assets/images/aws-ec2-16.png"},{"revision":"b19d9ea4978ab8f8ac28643315d72096","url":"docs/assets/images/aws-ec2-17.png"},{"revision":"6f5844a29b688d0c009866b47ee64096","url":"docs/assets/images/aws-ec2-18.png"},{"revision":"24592d1f9351d41422690ae290baffd5","url":"docs/assets/images/aws-ec2-19.png"},{"revision":"58ca078efd95c28b8a6317b493e5e2f3","url":"docs/assets/images/aws-ec2-20.png"},{"revision":"5774f55a6c7d45cea336aa65acb79d35","url":"docs/assets/images/aws-ec2-21.png"},{"revision":"23002d0576a26b8d0375d0fc751b997a","url":"docs/assets/images/aws-ec2-22.png"},{"revision":"040c63207332d695afe2502a4968641d","url":"docs/assets/images/aws-ec2-23.png"},{"revision":"a6a9c1e6be9bbff80397f3bb65098b1b","url":"docs/assets/images/aws-ec2-24.png"},{"revision":"31b7e3689ea969b1b48f9a3e524c1bad","url":"docs/assets/images/aws-ec2-25.png"},{"revision":"0865a545c77a9da7aafd2539146e5520","url":"docs/assets/images/aws-ec2-26.png"},{"revision":"93fb096f5b4ac664f5c602bcdb29faaf","url":"docs/assets/images/aws-ec2-27.png"},{"revision":"fc6bfb4863005efce2f4d09050da7477","url":"docs/assets/images/aws-ec2-28.png"},{"revision":"9e5535ff69aa94a3bb2407c4b4665435","url":"docs/assets/images/aws-ec2-flowchart.png"},{"revision":"09e07f52dffbb0b25e39d084fcddc09e","url":"docs/assets/images/aws-ec2.png"},{"revision":"2bd3c4513bcddf582bbe7042f1b96c01","url":"docs/assets/images/back-button.png"},{"revision":"722f77b09aabb60990d781820855a61f","url":"docs/assets/images/baseline_jumptoid_search.png"},{"revision":"574e60bb4e96dbded3a7850a3e7daeeb","url":"docs/assets/images/baseline-admin-add-status.png"},{"revision":"07ff119ad1b54ef1bdf0671f1642da9b","url":"docs/assets/images/baseline-admin-add-transition.png"},{"revision":"7e08d141460f87b644662bd13635bf64","url":"docs/assets/images/baseline-admin-custom-status.png"},{"revision":"a8d76bc824624d23c54bf69e5dc61482","url":"docs/assets/images/baseline-admin-meta-status.png"},{"revision":"84e179b7915d667fd66d97a8b0d9cb91","url":"docs/assets/images/baseline-admin-status-button.png"},{"revision":"74a6283449e5ec1be3ffeca54acf26a7","url":"docs/assets/images/baseline-admin-transition.png"},{"revision":"41eb6074bbd6e30a27187275149c93ae","url":"docs/assets/images/baseline-admin-workflow.png"},{"revision":"b34892834e6e98dcc02751ecf450e707","url":"docs/assets/images/baseline-binaries-filter.png"},{"revision":"0216d6e495c3021c91b63ff562c221a5","url":"docs/assets/images/baseline-cancel.png"},{"revision":"8f8fd78812a8495858ea383b74567470","url":"docs/assets/images/baseline-comments-only.png"},{"revision":"7588853ace0cddb326325c3ba3509e7b","url":"docs/assets/images/baseline-comments-showall.png"},{"revision":"bb305953d65df70a17b8950a48b10a20","url":"docs/assets/images/baseline-comments.png"},{"revision":"11edb9c95f0dd1e15ad65ce6fa329b40","url":"docs/assets/images/baseline-definition-list.png"},{"revision":"14586e468f9fe545c65ed84ce6054f35","url":"docs/assets/images/baseline-definition-toggle.png"},{"revision":"b7ea9dac9c8fab910a27df4ca505bd73","url":"docs/assets/images/baseline-delete-icon.png"},{"revision":"6ece34ea015c925916ed5a309da23f81","url":"docs/assets/images/baseline-delete.png"},{"revision":"cb91f7cf0bfb1f27475014ceaef6bea5","url":"docs/assets/images/baseline-documents-preview.png"},{"revision":"5678f8b44158347999b905d0c8d3413e","url":"docs/assets/images/baseline-edit-icon.png"},{"revision":"57e0b0a19f3605eae08eca610c2b2be6","url":"docs/assets/images/baseline-filerelease-preview.png"},{"revision":"55efbdfcee4ca1ff73e9b1e9ef06eff3","url":"docs/assets/images/baseline-generate-package.png"},{"revision":"42b26a638400e30fe802af279a158d1f","url":"docs/assets/images/baseline-in-projectadmin.png"},{"revision":"f4a82946492e2e69348da9ece3189a73","url":"docs/assets/images/baseline-list.png"},{"revision":"f2f8c9f9e254151ec21d74d52270e393","url":"docs/assets/images/baseline-new.png"},{"revision":"30e0e7a953d7a6e5ca467164b95236d7","url":"docs/assets/images/baseline-package.png"},{"revision":"aa91c549875f4afecb16022605e9d7e1","url":"docs/assets/images/baseline-planning-folder-filter-2.png"},{"revision":"23d0f78f5c633a277af799d8922c73d3","url":"docs/assets/images/baseline-planning-folder-filter.png"},{"revision":"2440b460652fe6a2e4915661aa744aa8","url":"docs/assets/images/baseline-preview.png"},{"revision":"f37d0d102f0df37b3dd66edb6a1614d2","url":"docs/assets/images/baseline-process.png"},{"revision":"4a2c6c3029f6fed11f37e956c2d9a911","url":"docs/assets/images/baseline-scm-repository.png"},{"revision":"95db4f62e3d1d5f4fa82f1e59938357a","url":"docs/assets/images/baseline-scm-tags.png"},{"revision":"c1742abc382cab1246e7c13af36dba98","url":"docs/assets/images/baseline-scm-view-tag.png"},{"revision":"2b39dbd069929b7330c7c2a28cd1d688","url":"docs/assets/images/baseline-status.png"},{"revision":"f05af70484efbc3bb015f4140098017d","url":"docs/assets/images/baseline-tracker-artifacts-preview.png"},{"revision":"0b193229c6843ce987c52274410158c2","url":"docs/assets/images/baseline-tracker-type-add-condition.png"},{"revision":"aafcb6632dd05719b7d266764564830f","url":"docs/assets/images/baseline-tracker-type-add-filter-2.png"},{"revision":"30ce2b597cfab3d42a56eccbb824221d","url":"docs/assets/images/baseline-tracker-type-add-filter.png"},{"revision":"ba8aabca110b8dceefff0d2d37f928d5","url":"docs/assets/images/baseline-tracker-type.png"},{"revision":"4c278baaf9754fcd49ccb6f024578363","url":"docs/assets/images/baseline-workflow-2.png"},{"revision":"0a608f6b0282ed0ce7d63e78a10261bf","url":"docs/assets/images/baseline-workflow.png"},{"revision":"7db029bd35b6656f1f13c6bba75402f5","url":"docs/assets/images/baselinedef-jumptoid-search.png"},{"revision":"0467c1a8dc01c57f0f98d7cba169ab3c","url":"docs/assets/images/beforewebhooks.png"},{"revision":"68b9cabd4593c10183326134614803fa","url":"docs/assets/images/beforewebhooks01.png"},{"revision":"1c4aa5d90d954dbb29b7a2e8702eb565","url":"docs/assets/images/bellicon.png"},{"revision":"7efef20f5e97c022f5fdd2aa14add20d","url":"docs/assets/images/buildactivitybyproject.png"},{"revision":"a83d26488e4821d9f5f2077e1ab14473","url":"docs/assets/images/burndownviewmode.png"},{"revision":"f7d9f22118ee9a00fde8776cbf3646d9","url":"docs/assets/images/buttons-bar.png"},{"revision":"95550adf4f162381c47702dca1e07521","url":"docs/assets/images/channel-add-1.png"},{"revision":"8ea844111629caaee40e5218d7844565","url":"docs/assets/images/channel-add-2.png"},{"revision":"828e963c7c191ff8f6826d3a6186c016","url":"docs/assets/images/channel-add-3.png"},{"revision":"70f3d3eb25c3c0d52ccb22c392618a77","url":"docs/assets/images/channel-add-4.png"},{"revision":"a30124a10e8cc3982d9376c94762b84d","url":"docs/assets/images/cliconfigini.png"},{"revision":"c721b5902a0a151e452e1ccd496e4146","url":"docs/assets/images/clone-artifact.png"},{"revision":"284ae8b2cef8020ef8cc540b876d9bf4","url":"docs/assets/images/clone-git-replica.png"},{"revision":"45cbaa1b1941331752ccb02fd1b8145c","url":"docs/assets/images/clone-repo-button.png"},{"revision":"09e2d73125d27509040ca04a11f65648","url":"docs/assets/images/closed-review-status.png"},{"revision":"292e4d3952b64b1301e1afe5753a380a","url":"docs/assets/images/coauthor02.png"},{"revision":"7f0e93f8494368bd76e433a620f378fa","url":"docs/assets/images/coauthor03.png"},{"revision":"06a44d3ee91276b4b43623946aedfe73","url":"docs/assets/images/codesearch01.png"},{"revision":"f594e7ecd2f72ee81cb8c0c71f61ad52","url":"docs/assets/images/codesearch02.png"},{"revision":"22eb86176e0c76cc8daaf5fc2ea1763c","url":"docs/assets/images/codesearch03.png"},{"revision":"1e7ff092d676e9b0a835eb86b89d9dc2","url":"docs/assets/images/CollabNet-Help-Center-Logo.png"},{"revision":"668649e74e8437c1786cbd52c5aa5668","url":"docs/assets/images/collabnetdevops.png"},{"revision":"d1091fd336d2cce674426f9938decf0f","url":"docs/assets/images/coloredboxes.png"},{"revision":"3b142e68d3d7ec7adae145c87310fa47","url":"docs/assets/images/Commits_in_Last_30_days.png"},{"revision":"e69987e1f6aaafebd95f86ea6fcf99e7","url":"docs/assets/images/committeddonemissed.png"},{"revision":"ab935076bf445e271274431924842943","url":"docs/assets/images/company_logo_big.png"},{"revision":"dd92eef3e485355e328a842706b4a467","url":"docs/assets/images/company_logo.png"},{"revision":"d5768482e4e0931d93a682f9ef808545","url":"docs/assets/images/compare-baseline-defs-results.png"},{"revision":"efa07598fc675b899b719809f1e8b4d2","url":"docs/assets/images/compare-baselines-button.png"},{"revision":"e2052f959b9c696e3e3f74c52f95f462","url":"docs/assets/images/compare-baselines-modified-artifacts.png"},{"revision":"f3b11f9fe31795cb99298c3208e696cd","url":"docs/assets/images/compare-baselines-new-artifacts.png"},{"revision":"21375e60e6c9ca23bd201e79b33a7b50","url":"docs/assets/images/compare-baselines-removed-artifacts.png"},{"revision":"f8654ab8cde3cd8e2d10f65c17ec9bf3","url":"docs/assets/images/compare-baselines-results.png"},{"revision":"c49501f8aba98d83ed9465adfa8e2386","url":"docs/assets/images/compare-baselines-search.png"},{"revision":"afdaa7d97b7e46aa2d82cf5c6999767e","url":"docs/assets/images/compare-baselines.png"},{"revision":"b6851026f70d5f291cb2b65098e0f1d1","url":"docs/assets/images/configure-multiple-ldaps.png"},{"revision":"a1b6c9ab6a2c1d57b3959c2bbdb0f456","url":"docs/assets/images/converttogroup.png"},{"revision":"030d669b474d09ff46d89f5d24ad0ef6","url":"docs/assets/images/converttogroup01.png"},{"revision":"cae218798f36fa4c6ff14b7498ba4c4c","url":"docs/assets/images/copy-to-parent-folder.png"},{"revision":"dfb3d3b33e83bbb2d14824cada746bc1","url":"docs/assets/images/create_package.png"},{"revision":"33071e03d36c672d19f4e7d5d38bc58d","url":"docs/assets/images/create_package1.png"},{"revision":"9e6417bd27dd978710df5154f4ebfa1b","url":"docs/assets/images/create-baseline-from-appbaseline.png"},{"revision":"65c75ef4634ddb4e1cf9f86f44036664","url":"docs/assets/images/create-baseline.png"},{"revision":"a7c08c84b025dc337067410db17450f0","url":"docs/assets/images/create-project-baseline-def.png"},{"revision":"5daf4f2c08ef967eb556013048ab8475","url":"docs/assets/images/create-project-baseline.png"},{"revision":"0ef253b82204ef2ec87f88398c3ccdb3","url":"docs/assets/images/create-project-from-pbl.png"},{"revision":"b3f4761e32fc4057b7ec032b083966f0","url":"docs/assets/images/create-teamforge-acct.png"},{"revision":"b9c13b18c7fc1caa4d13c90403766dfe","url":"docs/assets/images/createanuser_licensing.png"},{"revision":"72689e6ef88db57c3332c6768a0c5cfb","url":"docs/assets/images/createartifact.png"},{"revision":"c0eb4a93f59165a1d9a4d689d459a5ac","url":"docs/assets/images/creategitrepo.png"},{"revision":"98739262be7b411c9f1a71bdc416693f","url":"docs/assets/images/createicon.png"},{"revision":"0423ef066c83270a78b4068cfacdacb3","url":"docs/assets/images/createnewboard.png"},{"revision":"7c8dba549a05a0955df348db4831d036","url":"docs/assets/images/createrule.png"},{"revision":"9f8177da4996061f8d6c7e4f71639450","url":"docs/assets/images/createsvnrepo.png"},{"revision":"1bc042d01052641358f1524d7883be53","url":"docs/assets/images/createtasks.png"},{"revision":"1419e48eda98d3857736c7c90bd2d70c","url":"docs/assets/images/createworkflowsystems.png"},{"revision":"fe3b9bf076e2e9678b7845d86bd81053","url":"docs/assets/images/csfe-brandingtemplates.png"},{"revision":"4e4dd7efdb26f3a5c29dfc0456bc7e30","url":"docs/assets/images/csrf-domains.png"},{"revision":"13312e8405ba05da462b5ddb9724cf6f","url":"docs/assets/images/ctfwebr01.png"},{"revision":"49eee59137c8d79eaca5d2a2aaf9cbad","url":"docs/assets/images/ctfwebr02.png"},{"revision":"89fac1425f978fbcadae748418d96dad","url":"docs/assets/images/ctm0.png"},{"revision":"bef3d115d6bc509251f139cb27cf5857","url":"docs/assets/images/ctm01.png"},{"revision":"5402694b37fdbbaa61d91465bfc9d4bf","url":"docs/assets/images/ctm02.png"},{"revision":"3576c193cd43283be86aba35b060fd8b","url":"docs/assets/images/ctm03.png"},{"revision":"3c240c1454373e967bc0de20bedb79c7","url":"docs/assets/images/ctm04.png"},{"revision":"442ed6e3e4c620f7a6c6ddea495a995c","url":"docs/assets/images/ctm05.png"},{"revision":"cbcb2e56f432a6b2390ac8fa6a891c8f","url":"docs/assets/images/ctmteams01.png"},{"revision":"b21b88d84a2f539d03ecc12aebe45ea9","url":"docs/assets/images/ctmteams02.png"},{"revision":"518f819dfc7429aea5bf4bd7d643cd85","url":"docs/assets/images/ctmteams03.png"},{"revision":"ded329cd145729a7dcc6d6af87b51df0","url":"docs/assets/images/ctmteams04.png"},{"revision":"716f9dfbbe1a2a72979f94c95e5cc6e6","url":"docs/assets/images/cumulativeflowreport.png"},{"revision":"a00ff6aa13c4fbd992c33a0cb6952949","url":"docs/assets/images/curl-verify-1.png"},{"revision":"6e88498d84f7182f97981189fd45996e","url":"docs/assets/images/curl-verify-2.png"},{"revision":"b9c511aeec2d253eb3d0f4c65aa97412","url":"docs/assets/images/custom-attributes.png"},{"revision":"5a58663dd4ed02014c47c28ffe564c0f","url":"docs/assets/images/custom-reports-folder-structure.png"},{"revision":"b9ee1f7b6a7ac10875423b9ded3bb90f","url":"docs/assets/images/custom-review-new.png"},{"revision":"81bf321b131cf58d906c52e7fcaccd62","url":"docs/assets/images/cym02.png"},{"revision":"07de6a9892382f468915f8ed66e4d867","url":"docs/assets/images/DAILogoDark.png"},{"revision":"6c682fe76be3d5f3341e1d1962b0fad4","url":"docs/assets/images/dashboard-layout.png"},{"revision":"805e75fe2dad239d3b9904fad0d1fe81","url":"docs/assets/images/DataFlowDiagramAssociation.png"},{"revision":"1dff48cdbd3f1a2cc2ea5dd16c7fa302","url":"docs/assets/images/DataMart-AssociationERModel.png"},{"revision":"8e0dbd01b658c66a87c7499305645b1a","url":"docs/assets/images/default-protected-branch.png"},{"revision":"86f9b59367f7af13fa8bbcc765bd8bdb","url":"docs/assets/images/default-review-new.png"},{"revision":"db765aef45d15e81a4a5329b462b4f98","url":"docs/assets/images/defaultuser-intermediatelogin.png"},{"revision":"b5da11306a93a19d6c9f9d033c36af6a","url":"docs/assets/images/define_app.png"},{"revision":"0d9dcbc749327c4a8e1cfbca3a84d91c","url":"docs/assets/images/define_app3.png"},{"revision":"2a2376fb59260ff181427316f435a49f","url":"docs/assets/images/define_app4.png"},{"revision":"dc4256397db080c73eeb87317cc4fe15","url":"docs/assets/images/delete-custom-status.png"},{"revision":"4d6aa49106d3daa58030a17bd7ea7a83","url":"docs/assets/images/delete-dashboard.png"},{"revision":"def25e8925580f660eb9fa8c35a30f8b","url":"docs/assets/images/delete-draft-baseline.png"},{"revision":"21b6922adfe3e984dc80e40618e46d95","url":"docs/assets/images/delete-user-from-monitoring-list.png"},{"revision":"35cc2aa20be2e3700cd866b612749cb9","url":"docs/assets/images/deleteicon.png"},{"revision":"a94d95c0170887813d358e8a803bd837","url":"docs/assets/images/dependencychangelog.png"},{"revision":"30a75715401a486bcc0211173ecd3d27","url":"docs/assets/images/directlogin-for-saml-users.png"},{"revision":"6fd9d023c8595e5336002a2acbe98556","url":"docs/assets/images/disable-activity-stream.png"},{"revision":"b24db62fec7ca4a14fb9514efbf5b88e","url":"docs/assets/images/dkim-signature.png"},{"revision":"f15f99cf13aa1e9548da86003f25a5b6","url":"docs/assets/images/doc-copied-to-parentfolder.png"},{"revision":"22aa3c8eca9e5476f4d8ecc28c93d5da","url":"docs/assets/images/doc-copied-to-target-projdocfolder.png"},{"revision":"8870c2ccce5bf0af4aa4d85e2b343da6","url":"docs/assets/images/doc-folder-search-results.png"},{"revision":"9b94f5d9213c8b9e5cea02140104effb","url":"docs/assets/images/doc-search-results.png"},{"revision":"9b5ddd27839a7e275e83d6d98e7688b7","url":"docs/assets/images/docs-column-config_selected-fields.png"},{"revision":"e3ffb0f90d2ff5c71f7b732d1df5d94d","url":"docs/assets/images/docs-column-config-deleteconfirm.png"},{"revision":"9d9dc7cf35b4e9963fa432cc53a8e2da","url":"docs/assets/images/docs-delete-column-config.png"},{"revision":"d7751e1ca89271f6473a70988eebe488","url":"docs/assets/images/docs-save-column-config.png"},{"revision":"3a7e120f7da9fed9e40f194d461c7964","url":"docs/assets/images/docs-set-as-favorites.png"},{"revision":"521698977fff92cbfb1ed258d753be54","url":"docs/assets/images/document-column-configuration.png"},{"revision":"03f5861e2537b6a5a0aab3c2c344f2ce","url":"docs/assets/images/document-destination-project.png"},{"revision":"762ce0797b56cbc6ed0effbf7f0b0379","url":"docs/assets/images/document-renamed.png"},{"revision":"d649c2f1f894dc87b8b3d0f883a096d6","url":"docs/assets/images/documentdet-back-button.png"},{"revision":"e7b5182bbf079d369559ac4ba162b6c7","url":"docs/assets/images/documents_baselines_tab.png"},{"revision":"ed254b63f9107f30509a7bca56a285e9","url":"docs/assets/images/documents-action-icons.png"},{"revision":"9e085cde6a48523a8fdc6c6a8b4a5a20","url":"docs/assets/images/documents-add-new-folder.png"},{"revision":"35a4400c323c430ee284d909dc6ba7ec","url":"docs/assets/images/documents-apply-column-config.png"},{"revision":"1c7b1ab7a96bec7f4f09d075aace738a","url":"docs/assets/images/documents-column-config-dialog.png"},{"revision":"1799bd7493f7f79912e2fd9387819f9c","url":"docs/assets/images/documents-column-config-icon.png"},{"revision":"e5589ce5954698c1414846b8d5a609c5","url":"docs/assets/images/documents-details-icons.png"},{"revision":"054597f52b9792309b14f1e9af5031d9","url":"docs/assets/images/documents-download-inprogress.png"},{"revision":"fa721272d98fe361d51037b02cd4df0a","url":"docs/assets/images/documents-edit-button.png"},{"revision":"ba1d82d2ab6860307e8b0ffccf778f17","url":"docs/assets/images/documents-edit-icon.png"},{"revision":"d51bb6779bfa831c1aa7b3ca34127159","url":"docs/assets/images/documents-existing-list-page.png"},{"revision":"8be817bd2bd55714420b04da7b634024","url":"docs/assets/images/documents-favorites-icon.png"},{"revision":"dbce0d21d9aeee6705e14f3b7451bd91","url":"docs/assets/images/documents-favorites-list.png"},{"revision":"e4e90e8f5a5de95a3ebbcdb165308d4e","url":"docs/assets/images/documents-monitor-button.png"},{"revision":"5a90984fb9b20fc865dfac77bca64127","url":"docs/assets/images/documents-monitor-icon.png"},{"revision":"85198d434c159d7d32f4365827c2c3cd","url":"docs/assets/images/documents-monitored-icon.png"},{"revision":"08dcf6cda7b16df632075e4411b85872","url":"docs/assets/images/documents-monitoring-user-icon.png"},{"revision":"3c172a38283bb7e8b52d843a37b8b6eb","url":"docs/assets/images/documents-monitoring-users-list.png"},{"revision":"4da4289fdb1b19723ca1fcf32825fc2d","url":"docs/assets/images/documents-more-icon.png"},{"revision":"c05866bcee15de088ec0860237e99857","url":"docs/assets/images/documents-name-id-separate.png"},{"revision":"b06d362a5b2e96690156238db0c24b15","url":"docs/assets/images/documents-name-id-single.png"},{"revision":"ea1e5e48b512e73bb110a83d79c3f413","url":"docs/assets/images/documents-new-list-page.png"},{"revision":"e54f0503639b336ab88c24ae2e5c412b","url":"docs/assets/images/documents-newfolder-name.png"},{"revision":"7e8e300d6c5f3aaca85392fa8ad2f558","url":"docs/assets/images/documents-newsubfolder.png"},{"revision":"107eba63c9525ee86c31234a3aa20deb","url":"docs/assets/images/documents-redesigned-menu.png"},{"revision":"6be451a186dbb23706b3571f9efb58d3","url":"docs/assets/images/documents-reorder-fields.png"},{"revision":"b3e784509aa93bb57d1d286e6c9086a6","url":"docs/assets/images/documents-review-email-msg.png"},{"revision":"abeb541f26e372d40315c9d50a915874","url":"docs/assets/images/documents-saved-column-config.png"},{"revision":"500c4b15f36d4e27f2913603e044d829","url":"docs/assets/images/documents-select-project.png"},{"revision":"88961ae531270498356562e63170092d","url":"docs/assets/images/documents-stop-monitoring.png"},{"revision":"7d0d3e9d05e1f53316467814cde30dcd","url":"docs/assets/images/documents-target-project-docfolder.png"},{"revision":"5d6f4fa055b0c6e87f5ddebe493d82f5","url":"docs/assets/images/documents-users-monitoring.png"},{"revision":"e661662e6eae00fea71c3c8c21eac97d","url":"docs/assets/images/documentsettings01.png"},{"revision":"6aaf739535517111923025d01be0ba77","url":"docs/assets/images/documentsettings02.png"},{"revision":"6282deaa0baca5ed6f8226ca8a7bee68","url":"docs/assets/images/documentsettings03.png"},{"revision":"d7e4737bfdfac6ec1e18ddac29ac9da3","url":"docs/assets/images/documentsettings04.png"},{"revision":"14d23b359af0e8769608a0d926b2bfa0","url":"docs/assets/images/documentsettings06.png"},{"revision":"e65a93bc55eb617c3a880824474791f6","url":"docs/assets/images/documentslist-more-button.png"},{"revision":"a69bc3a5168c898f0a002b68f986ffd2","url":"docs/assets/images/docversions-associated.png"},{"revision":"112a2d0e634ebeb99eec715266afd2f1","url":"docs/assets/images/downarrow.png"},{"revision":"0d6760b24d13d8ee0a4887f0bfa50bd1","url":"docs/assets/images/downarrowicon.png"},{"revision":"82bce52b3f1c1514415748d716de4a4b","url":"docs/assets/images/download-docs-folders.png"},{"revision":"4503e09aeb6f9d7035c56afea91e5b53","url":"docs/assets/images/downloaded-zip-file-with-lfs-data.png"},{"revision":"78d408c6913358171fc4a4dbac117450","url":"docs/assets/images/draft-baselines.png"},{"revision":"1482649327bb02953ecf2bf983b1ed01","url":"docs/assets/images/drap-n-drop-files.png"},{"revision":"2eee9786951afcc6bd7bf84e632592e0","url":"docs/assets/images/drilldown.png"},{"revision":"6d458bd5814efe6eb04c12171d4fdaeb","url":"docs/assets/images/edit-baseline-1.png"},{"revision":"0e0dcbe6ffcd3772b8959432967f434a","url":"docs/assets/images/edit-baseline-def.png"},{"revision":"657c7d780040475e2b3beecb2a4cacf3","url":"docs/assets/images/edit-baseline.png"},{"revision":"6991e79566108688a218fb7bb8f1f613","url":"docs/assets/images/edit-custom-status.png"},{"revision":"0f17b492dd37db6741a47a96ccc560b4","url":"docs/assets/images/edit-project-baseline-def.png"},{"revision":"acafae3622816fbb7f4a2aa02e2bd8d5","url":"docs/assets/images/editartifactsbutton.png"},{"revision":"51a53fbd497093fa2eae2f61d3aa50b8","url":"docs/assets/images/editartifactswindow.png"},{"revision":"8fb4adfa55924853a96730e406cb5383","url":"docs/assets/images/editboard.png"},{"revision":"7b826a04d80c514b00ef4cabb6a89f40","url":"docs/assets/images/editcomments-editbox.png"},{"revision":"b64d97c5a17447a25bb82cc2d80c836b","url":"docs/assets/images/editcomments-history.png"},{"revision":"38af4a648a73056ff90a0906e0eeb141","url":"docs/assets/images/editcomments-status.png"},{"revision":"f3f993f1f6fb6f9a29712091202889b3","url":"docs/assets/images/editcomments-trackerartifacts.png"},{"revision":"3b0b1121eb1702af6bf79578a7611c18","url":"docs/assets/images/editicon_component.png"},{"revision":"c2998a2cc2e828ada00425c2088cf95a","url":"docs/assets/images/editicon.png"},{"revision":"6a99b5a181a49915a2aaed58f357e3c3","url":"docs/assets/images/editreplica_in_tf.png"},{"revision":"c6ce9238a31111779086d57e0b1545c1","url":"docs/assets/images/editrepo1.png"},{"revision":"82f63086666bc6807cee6ddf62971fea","url":"docs/assets/images/enable-baseline.png"},{"revision":"90dd7f83a1d8fef1cee96d8601291efc","url":"docs/assets/images/enable-button.png"},{"revision":"96bc71c96751072b710e42b86ce12414","url":"docs/assets/images/enable-wh-1.png"},{"revision":"f035dfb73001ddc5ff9b3881a039ab76","url":"docs/assets/images/enable-wh-2.png"},{"revision":"a61863ef53e32d618d29ecae1bc9f563","url":"docs/assets/images/enable-wh-3.png"},{"revision":"e4cbedf82859c2c9b09d5c28a30ffe80","url":"docs/assets/images/enable-wh-4.png"},{"revision":"d880550218cb8c499e75fcde7b63dbd9","url":"docs/assets/images/enable-wh-5.png"},{"revision":"492c9591541eb78b4b8fac6bd8840286","url":"docs/assets/images/environment.png"},{"revision":"c2eafef1ffac87e93e002be49ecb1003","url":"docs/assets/images/exclude-button.png"},{"revision":"3078a686284d0f6af4faa6a78893addf","url":"docs/assets/images/export-appbaseline-to-excel.png"},{"revision":"d0c7eabbbd9b3d4ae77bdd9c1c69af98","url":"docs/assets/images/export-appprojbaseline-to-excel.png"},{"revision":"f9d8dd60050b408cdc03d667eb759bdd","url":"docs/assets/images/export-to-excel-button.png"},{"revision":"b6b840cb7971b190a06235a0cbf5aab3","url":"docs/assets/images/export-to-excel-message.png"},{"revision":"c7825a7bfe25ef8e97ee94456a6826f8","url":"docs/assets/images/exportassociations.png"},{"revision":"263634db5105d6325cab726e7168c55d","url":"docs/assets/images/external-baseline-artifact.png"},{"revision":"c9493f1604a3c6c962dcda2b434bd3e2","url":"docs/assets/images/external-baseline-in-new-project.png"},{"revision":"71a7a6d87b10d960a68dc020aed2224a","url":"docs/assets/images/external-baseline-in-package.png"},{"revision":"c8368a07042b888fba0be92a83e9cf6d","url":"docs/assets/images/external-baseline-tar.png"},{"revision":"6dc8a9118b3616e5cab18d59676c95f5","url":"docs/assets/images/external-baselines.png"},{"revision":"81822c97683a0cdda81092c680888546","url":"docs/assets/images/favicon.ico"},{"revision":"23cd96e1d07699980a6d83e4f376ba6f","url":"docs/assets/images/File_Changes_Over_Last_14_Days.png"},{"revision":"46d79019304be4b8c3f379ad5488dff4","url":"docs/assets/images/file-in-file-editor.png"},{"revision":"2e3169eea4a6e714225e436f09a9fa37","url":"docs/assets/images/file-release-obsolete-status.png"},{"revision":"54ad751ea0677e71aa9592e8a2194276","url":"docs/assets/images/file-upload-progress-bar-2.png"},{"revision":"d975e66a591206d13adc388ac6874031","url":"docs/assets/images/file-upload-progress-bar.png"},{"revision":"cacd2fac6991d852a8374d24bc87e040","url":"docs/assets/images/filerelease_baseline_tabs.png"},{"revision":"ad5bce47d521d65295317cdd210f1433","url":"docs/assets/images/filerelease_changelog.png"},{"revision":"45455a0ad32c20d5652bff6e1ac204d2","url":"docs/assets/images/filtertables01.png"},{"revision":"37a8ef48037560834d7b694f8a3413b8","url":"docs/assets/images/filtertables02.png"},{"revision":"9815bb77e4c2a4a6e3b7b034cce323b2","url":"docs/assets/images/floating-buttons.png"},{"revision":"ef0cf4812997653ea03a3c8eebe2fc55","url":"docs/assets/images/frsfiledownloadcount.png"},{"revision":"066a217803b73272f0299c116e2869b9","url":"docs/assets/images/gerrit-config-1.png"},{"revision":"5324b331f8ded553a6a1358fc6fb4880","url":"docs/assets/images/gerrit-config-2.png"},{"revision":"9bdb6df7b43bf02d3fbd66a395b0636d","url":"docs/assets/images/gerrit-config-3.png"},{"revision":"cd97b8aa7c3360e939d95d5c12929b72","url":"docs/assets/images/gerrit-linkedapp-80-1.png"},{"revision":"422a492ca33fb6cece8b7dce3b06ee7b","url":"docs/assets/images/gerrit-linkedapp-80.png"},{"revision":"5db36f693d4d3f7fd41e824a130dfbe5","url":"docs/assets/images/gerrit183-download-button.png"},{"revision":"aa2ce724d96fc0376bda94a300d49f87","url":"docs/assets/images/gerrit183-view-images.png"},{"revision":"b70f0e26b70b229be9a103ac55cddf2d","url":"docs/assets/images/gerrit183-view-pdf-files.png"},{"revision":"5188dbacdc42c5718003430d1580f639","url":"docs/assets/images/git-browse-branch.png"},{"revision":"d5a33c35bbc8add9ed739ae4afc4c21d","url":"docs/assets/images/git-clone-https-curl.png"},{"revision":"6ee5fff13568b4e9cefc5791616af636","url":"docs/assets/images/git-clone-https-scp.png"},{"revision":"985fb4c933f40b2ade51701170b9185f","url":"docs/assets/images/git-clone-ssh-curl.png"},{"revision":"44bf61d593cb2056b9c08a38b3b27042","url":"docs/assets/images/git-clone-ssh-scp.png"},{"revision":"f2a8f7bdf90a303217a170afa5c0e2a6","url":"docs/assets/images/git-download-folder-icon.png"},{"revision":"a7e303bd2b1c08cac7e8e8000194327f","url":"docs/assets/images/git-fetch-commands.png"},{"revision":"1b41e4f872b6ff2bd559d08117d6b446","url":"docs/assets/images/git-host.png"},{"revision":"d46397011178b4c5ff87886b257406e6","url":"docs/assets/images/git-project-branch.png"},{"revision":"910aa342981a51fedb46e4c87a161b08","url":"docs/assets/images/git-projects-list.png"},{"revision":"3c5e60a80f19235b0ee0d21e36869d87","url":"docs/assets/images/git-replica.png"},{"revision":"79c27a44dd2f302f1fcb4a4e1c44a266","url":"docs/assets/images/git-tf-projects.png"},{"revision":"76d344f08412543c74ccd1fb2493d607","url":"docs/assets/images/github.svg"},{"revision":"776f894b92e3a16479d175d0c87e5335","url":"docs/assets/images/haproxy.png"},{"revision":"c5d8c66bdfd84cfa022a2e08102d040f","url":"docs/assets/images/helpapi-01.png"},{"revision":"ed8b5ae1bd8cb0fd70e22a40b6079bb7","url":"docs/assets/images/helpapi.svg"},{"revision":"0cc7a3d2a5eede9bdedbfbf6399ed781","url":"docs/assets/images/hide-ms-field-values.png"},{"revision":"95991ea99976e494012c0e615232d872","url":"docs/assets/images/hide-ss-field-values.png"},{"revision":"5e372e749fe1ea42c2b150c0baf279a0","url":"docs/assets/images/history_actionflow_choose.png"},{"revision":"713cb2755bbf6b5222efe95f9e0d5b4a","url":"docs/assets/images/history_actionflow_code.png"},{"revision":"fb649866c17ce889cf808fb2eb374f88","url":"docs/assets/images/history_actionflow_general.png"},{"revision":"3de022597e1001086e210c23cfb649eb","url":"docs/assets/images/history_actionflow_sort.png"},{"revision":"4b2d44f6898514f0083e205b2e3b561d","url":"docs/assets/images/history_actionflow.png"},{"revision":"e65c80fb5806620ecf5b24cee72f4947","url":"docs/assets/images/htmlemailscreatedoc.png"},{"revision":"7547d4db875b0754bedec51093397ee5","url":"docs/assets/images/htmlemailsupdatedoc.png"},{"revision":"dff0589b7f0b2fb52cdb6647976833e5","url":"docs/assets/images/ignore-colors-disabled.png"},{"revision":"82e73007c0a456c1873b532b40e6e79a","url":"docs/assets/images/ignore-colors-enabled.png"},{"revision":"2dae83e95083a5be546fd5f68b18bdd9","url":"docs/assets/images/ignore-colors-transparent-mode-enabled.png"},{"revision":"6e567a6807e7a79941198bbca3847536","url":"docs/assets/images/ignore-whitespace-disabled.png"},{"revision":"89bacc225927e117b309d80aeb7442e6","url":"docs/assets/images/ignore-whitespace-enabled.png"},{"revision":"2a0e427f3d3d0e82d571577e2e6671ff","url":"docs/assets/images/illustratoroptions.png"},{"revision":"c64723b2e6c1045f3bccbdb4db0ca351","url":"docs/assets/images/image-opacity-center.png"},{"revision":"c2ede586347b767566d88748295c6090","url":"docs/assets/images/image-opacity-left.png"},{"revision":"33b8684cba6158b8018a6ad043c56776","url":"docs/assets/images/image-opacity-right.png"},{"revision":"710ced5f158926ae357301671bcd2b84","url":"docs/assets/images/import_artifact_functionality.png"},{"revision":"af0723928ee6708a4447c846feb8bbf5","url":"docs/assets/images/import-gitrepo-tab.png"},{"revision":"2ba661ea87bf96a9f6e08a2da5da450e","url":"docs/assets/images/include_scm_binary_repos.png"},{"revision":"fd6a6f5d06bda7d094e58d43f75262dd","url":"docs/assets/images/include-button.png"},{"revision":"6d86049315cb1514926b9bca5539f36b","url":"docs/assets/images/include-document-fields.png"},{"revision":"053e3a50652b717cba3b809c4d8e8830","url":"docs/assets/images/include-tracker-fields.png"},{"revision":"1dfa7cc3e7a97158ec20b8bb6710121c","url":"docs/assets/images/Includeartifactsacrossprojects.png"},{"revision":"64afb2ff233a51a9d6c2d53ca11a6dfd","url":"docs/assets/images/index_pdf_file.png"},{"revision":"ce31f237ad40b12ef07fc347818ce706","url":"docs/assets/images/index_pdf_html_files.png"},{"revision":"2c05be71472b9cc3118fadf131603abe","url":"docs/assets/images/installed-jira-version.png"},{"revision":"1170fd2c21bb91523d9d8232519f2403","url":"docs/assets/images/iterationburndown.png"},{"revision":"86e18b7861fbfb46e0129297f3e51329","url":"docs/assets/images/itermexample.png"},{"revision":"6807f886473d5d859a31367efd18f974","url":"docs/assets/images/jarfilestructure.png"},{"revision":"1cbf41c1d342753a3530a88a5e33cfa5","url":"docs/assets/images/jekyll.png"},{"revision":"9b13fc849d5fb6e94b6e3a8a395259e2","url":"docs/assets/images/Jenkins_Assoc_List_View.png"},{"revision":"720dfedd0dfabbb28c64b9471206cdb2","url":"docs/assets/images/Jenkins_Assoc_Trace_View.png"},{"revision":"bde05d162814d59a969355c657753610","url":"docs/assets/images/jenkins_migration.png"},{"revision":"96429b9358f4be1c8722e1e823b0e590","url":"docs/assets/images/Jenkins_SAK_config.png"},{"revision":"cf695aac5cc8bddb0265fcdce799d0c0","url":"docs/assets/images/jenkins-build-number.png"},{"revision":"825a49f88d3e1a40d150f7c9b98f2e7f","url":"docs/assets/images/JIRA_associations_list.png"},{"revision":"dac3c60bdc3f699d076150219b2848b6","url":"docs/assets/images/jira_migration.png"},{"revision":"715e53498bb4579b201be4cad5241b6c","url":"docs/assets/images/JIRA_projectadmin_page.png"},{"revision":"52165fc7b6dc2403ff7829bcc25b8057","url":"docs/assets/images/jira_tfsetup_modifyprojmapping.png"},{"revision":"08f616f652536694e4d60d3fa9d0737d","url":"docs/assets/images/jira_tfsetup_page_webr.png"},{"revision":"d4bdf35ea8f985ae71fef6a9b1fdbeae","url":"docs/assets/images/jira_tfsetup_page.png"},{"revision":"804e5928082324fe60ae192032fe0fae","url":"docs/assets/images/jira_tfsetup_saveconfig_webr.png"},{"revision":"59f5b816ea37f54cb63425a8025e25fa","url":"docs/assets/images/jira_tfsetup_saveconfig.png"},{"revision":"3f4d4a9e92a265a4fe986f05428ea8ed","url":"docs/assets/images/jira_tfsetup_savedconfig_webr.png"},{"revision":"c9fa1f4d00d115b32c7bc9d4fb596778","url":"docs/assets/images/jira_tfsetup_syncissues_webr.png"},{"revision":"6b966e4720bc15b008f90b17be6c9d71","url":"docs/assets/images/jira_tfsetup_syncissues.png"},{"revision":"e54c0effe4a3b6c1eeb77e3fcb30cb84","url":"docs/assets/images/jira_tfsetup_testconfig_webr.png"},{"revision":"6dc2d090cbe940cabf31a3a4c29cc0f5","url":"docs/assets/images/jira_tfsetup_testconfig.png"},{"revision":"697e20fab45c9935ab2e69133698eb10","url":"docs/assets/images/jira_trace.png"},{"revision":"721d335370ad9d4d0b19534cd987a0f3","url":"docs/assets/images/jira-addons-control.png"},{"revision":"de50f7b04a198e6da70bc18281f95272","url":"docs/assets/images/jira-admin-menu.png"},{"revision":"65f97a4acae6eb3572059c8d1ad8c72a","url":"docs/assets/images/jira-projects-list.png"},{"revision":"16058742372da94d416c94c76966fe48","url":"docs/assets/images/jiraa.png"},{"revision":"5fe247145bc04f0c8ba1b84e3db7c9ee","url":"docs/assets/images/jirab.png"},{"revision":"6547edf1f7634cacbd92ca63f231a674","url":"docs/assets/images/jirac.png"},{"revision":"b650b1dabda6dbf15803e85cdddfd283","url":"docs/assets/images/kanbanboard.png"},{"revision":"b23f9deb4173464a6e9de51204e4cec4","url":"docs/assets/images/kanbansetting1.png"},{"revision":"94dadfc3f1cc583c996d41baf7b638f9","url":"docs/assets/images/kb_createartf.png"},{"revision":"8cfe215658fa2de75dfa91d04e63d665","url":"docs/assets/images/kb_show60days.png"},{"revision":"fd6c268e06fab2dfb9e62c910108a9cc","url":"docs/assets/images/kb_showall.png"},{"revision":"ab8f62bd8ea68d115b11273f9dbf4c42","url":"docs/assets/images/kb-mapstatus.png"},{"revision":"560c50c66f53509da882ad9e276e4a2a","url":"docs/assets/images/kb-mapstatus1.png"},{"revision":"d54e6491ad52dd6b262051d9e0df35d8","url":"docs/assets/images/kb-parentchildartf.png"},{"revision":"8927d50304473b6ba7c13ea90e1a634b","url":"docs/assets/images/kb-selectstatus.png"},{"revision":"7075aff22363ec60ccc57175dac1eded","url":"docs/assets/images/kb-swimlaneheader.png"},{"revision":"c237308fc7a0bf0c18fa815fe603edf8","url":"docs/assets/images/killalljekyll.png"},{"revision":"a962aded90ac207cbf039d1b254903e5","url":"docs/assets/images/killrate.png"},{"revision":"a0be95e6c9f86527322b92883b5676d9","url":"docs/assets/images/ldap-add.png"},{"revision":"9f4f8a26bcaa641a713eecb816d93225","url":"docs/assets/images/ldap-configuration.png"},{"revision":"ff95bacc34486456bdce8b559ffa8f68","url":"docs/assets/images/ldap-idp.png"},{"revision":"4423ae33c6917d87b6da0e3b75d632fc","url":"docs/assets/images/lfs-01.png"},{"revision":"9fd16b9f89ce82753f0a17a32651864d","url":"docs/assets/images/lfs02.png"},{"revision":"334673ad1964bb937db36c7880be170d","url":"docs/assets/images/lfs03.png"},{"revision":"22c63317e463aeaae28f88595c0b1ec7","url":"docs/assets/images/lfs05.png"},{"revision":"8c445d752f550040ee31d62ee48f0c9a","url":"docs/assets/images/lifecycle-integration-params.png"},{"revision":"3100042ea1e39405a3f20515b3d3ba72","url":"docs/assets/images/lifecycle-workitem-link.png"},{"revision":"9fa1e7719af5b460db532f99b9edc869","url":"docs/assets/images/liningup.png"},{"revision":"5ebeb29001dae3a51c9087eede36ae83","url":"docs/assets/images/linked-application.png"},{"revision":"45ed81f7267ba0b10965a493b844a8ba","url":"docs/assets/images/listplantrack01.png"},{"revision":"5ebbba0fb3ad953c8e9e9d12980e7109","url":"docs/assets/images/listplantrack02.png"},{"revision":"a87f37fb3644ab1b8559677c81ab424f","url":"docs/assets/images/listplantrack03.png"},{"revision":"d3845bf3b6e33bd9953feadc8eeb2600","url":"docs/assets/images/lm_cloudallocate.png"},{"revision":"3f829d7659ff59659441af2b58677db4","url":"docs/assets/images/lm_cloudlist.png"},{"revision":"7903496703711c37844246852613b458","url":"docs/assets/images/lm_configurehudsonplugin.png"},{"revision":"352cce680a088cd2c93d47dbfeacb060","url":"docs/assets/images/lm_configurehudsonplugin1.png"},{"revision":"c561b31a9db703bee9e94df690b8bdc2","url":"docs/assets/images/lm_configurejob1.png"},{"revision":"630763f3b3639bd7c465e7ca3dd56383","url":"docs/assets/images/LMserver.png"},{"revision":"6dc8ca2cf6dd26ec7408c78941cc8b0a","url":"docs/assets/images/Lockedproject.png"},{"revision":"e7be29ae9c558ce46386366d614e56f9","url":"docs/assets/images/manage-apps-jira.png"},{"revision":"17d7b45953def42eb6b6b82c0946406f","url":"docs/assets/images/manageboards.png"},{"revision":"ccb9242b2da4339d5dcf2d88ac2df539","url":"docs/assets/images/mandatory_field_without_default_value.png"},{"revision":"fad662decc1ed43cd6f250c8c2fc50df","url":"docs/assets/images/mandatory-review-new.png"},{"revision":"8f60cde38d829d8bc30a7e8940155e93","url":"docs/assets/images/maven_plugin_migration.png"},{"revision":"fc8a1213bfe43bd6bfa4bd4e9fec6d59","url":"docs/assets/images/Meta_repo_project_list.png"},{"revision":"fd7ea6666a9f968ea0f119e9a7f781ce","url":"docs/assets/images/monitor-baseline.png"},{"revision":"eca90ca9d29f61d78859af39baab5c60","url":"docs/assets/images/monitor-button.png"},{"revision":"fc38fe91f60d0922708b5506f7f013b7","url":"docs/assets/images/monitored-button.png"},{"revision":"08eface80078d60178591012b838bccd","url":"docs/assets/images/monitored-document-folder.png"},{"revision":"e0d659fa1222d1d7a48ccce2a21b9f7e","url":"docs/assets/images/more-button.png"},{"revision":"9e9a5c1258e0e9ca9a9377b39ed4a21a","url":"docs/assets/images/more-functions.png"},{"revision":"6c558c3f881527a4a2a82a8eaa61de86","url":"docs/assets/images/move-copy-documents.png"},{"revision":"411f23c1c1c4754e01001f51cefd5c0b","url":"docs/assets/images/move-doc-folder.png"},{"revision":"4bf2c8ab912ce60f11a7d1d4bc1c9843","url":"docs/assets/images/moveadoc-to-native-subfolder-2.png"},{"revision":"df76a9fd909d19475d8784118875b4a6","url":"docs/assets/images/moveadoc-to-native-subfolder.png"},{"revision":"efd37c1455eaed706192b6296d626613","url":"docs/assets/images/multiple-workspaces.png"},{"revision":"6748775355ea483ff1e32048c8d22224","url":"docs/assets/images/multipleuser_licensing.png"},{"revision":"9c897c1425a5d2ca93f7953a4e024f2b","url":"docs/assets/images/multiselectfields.png"},{"revision":"df67d83f6062ea1ccd66d5ebeedabbf3","url":"docs/assets/images/my-artifacts-monitorbyme-option.png"},{"revision":"4dc4fdce8552cba1441ec624c76727db","url":"docs/assets/images/my-artifacts-monitoredartifacts.png"},{"revision":"c372247c7075c1444648c784ed67aaff","url":"docs/assets/images/my-artifacts-title-filtering.png"},{"revision":"752d569db3c398310fcbeda21cbe76e8","url":"docs/assets/images/my-workspace-edit-button.png"},{"revision":"80e75ac94dc5ea203d49986229dd8b6a","url":"docs/assets/images/myworkspace-documents-filter-criteria.png"},{"revision":"680f5f27b0a7485e5fcebd3756cc243b","url":"docs/assets/images/myworkspace-documents-widget.png"},{"revision":"bb9a226ef9e50eea41f70bca260d648c","url":"docs/assets/images/nested-bdef.png"},{"revision":"7ee21ad66ded29b7e332593b9a90141f","url":"docs/assets/images/nested-project-bdef.png"},{"revision":"634495cfb4e1319b64808ad092c4653b","url":"docs/assets/images/new-file-name.png"},{"revision":"9a4c2e334c02c958dcb3b312b8526140","url":"docs/assets/images/nexus-3-authentication-2.png"},{"revision":"621579b182413fa482885fb8187e9025","url":"docs/assets/images/nexus-3-authentication.png"},{"revision":"4c2a9ddc863a31cc281726088054ccca","url":"docs/assets/images/no_code_change.png"},{"revision":"21a162a737a0a41293e663a654bc4c59","url":"docs/assets/images/noneditablefields.png"},{"revision":"2b62b628cf4810882a00d059801ce4df","url":"docs/assets/images/noneditablefields.PNG.jpg"},{"revision":"baae38be345d1bf365d9eecffc4285c7","url":"docs/assets/images/noparent.png"},{"revision":"e81a2e6a0fb9a08def02cac360aedde3","url":"docs/assets/images/oauth1.png"},{"revision":"d0dcd681d51ef9ae77c7da45c0c1d856","url":"docs/assets/images/oauth2.png"},{"revision":"85da5a402bfadca9a5d07adec48bef42","url":"docs/assets/images/oauth3.png"},{"revision":"f0c1c918112d42f97fbcd0cac84e7047","url":"docs/assets/images/oauth4.png"},{"revision":"5595d50e3f03baf9eb5bef97647ccdce","url":"docs/assets/images/open-document-link.png"},{"revision":"e14a7699915ef01e1cb7182487c96fa1","url":"docs/assets/images/open-review-status.png"},{"revision":"6224de200d935d8809f3f554f48709c0","url":"docs/assets/images/optional-review-new.png"},{"revision":"9db520efa2ec550b88d7da1a73c9c658","url":"docs/assets/images/Orc_arch_internal.png"},{"revision":"a8acfde2500a3814cf686363aa7853c9","url":"docs/assets/images/Orc_architecture_main.png"},{"revision":"e351ecc70526a64c9020454dc3cdcecd","url":"docs/assets/images/Orc_customized_plugins.png"},{"revision":"00d5838e7d090aefa96859bfc6648c09","url":"docs/assets/images/Orc_msgQ_details.png"},{"revision":"264242ff28cf981caa50eb0e1155b02d","url":"docs/assets/images/package-download.png"},{"revision":"d01b7eaad58ea4ce186621a1aba7015e","url":"docs/assets/images/package-list.png"},{"revision":"39f0641351f53a1131f3dd1580d5cf48","url":"docs/assets/images/package-structure.png"},{"revision":"38ab1d481dcf9dad870c23315d4d1b71","url":"docs/assets/images/pbl-in-create-project-page.png"},{"revision":"c171299a123aac411496e27f7b73eeef","url":"docs/assets/images/pboard_artfcard_edit.png"},{"revision":"72dc45d72e1d7fb2938eae534408fcfd","url":"docs/assets/images/pending-obsolete-file-releases.png"},{"revision":"fb267ba85160c01b20ca30160da858f4","url":"docs/assets/images/planningfolder-status-freeze-2.png"},{"revision":"46cf105fa9f357417a7506f6a0cf9b14","url":"docs/assets/images/planningfolder-status-freeze.png"},{"revision":"4d86a00be4a666614e358d74c36849ff","url":"docs/assets/images/planningfoldertree.png"},{"revision":"d82298c5ec958f204480cac54cfb0371","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/ALM Connect.png"},{"revision":"33c6d10dbc61f7bf782f0d743aeab640","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/CF.png"},{"revision":"938779c0f62f16dd60ff9db3e3e3f05e","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/CollabNet VersionOne.png"},{"revision":"72c708fd0e89bbf689c44d64e50bcf15","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/Continuum.png"},{"revision":"d0668227edfb5c5b479c4784cb7663bb","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/DLM.png"},{"revision":"1ee61b6f4f9577a6e2f7ef1b88cd3ebc","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/GitEye.png"},{"revision":"554af9c351e961e9c1c5ee9f3c2afca8","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/Integrations.png"},{"revision":"80be7954227737e583c242b1cebcec8b","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/LabManagement.png"},{"revision":"1e68677e607b12dd910cfec9293d5ff5","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/SubversionEdge.png"},{"revision":"9f942afc57d13b3bc307a9ee8d61e957","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/SWP.png"},{"revision":"348476f9131c34f7282ce011819749e6","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/TF SCM.png"},{"revision":"ea37b814cca406fa74f09762e688b2ac","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/TF.png"},{"revision":"fb21aa0f1ad5e144f7a0b0b55c9ca33c","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/VersionOne.png"},{"revision":"0102a10cdb9d699aec46abb6a2e22485","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/Logo Large/VS.png"},{"revision":"cba91b66d16b256082f675a39989b65f","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/ALMConnect.png"},{"revision":"c739549ac59f28745e18528798145dcd","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/CF.png"},{"revision":"07123cedc0d5fdbb411004382bd736cd","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/CollabNet VersionOne.png"},{"revision":"0342777333d657fa7e28108fc3936840","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/Continuum.png"},{"revision":"bfb6329e978b974990e135ab2909fdcd","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/DLM.png"},{"revision":"c013f727544fffd1ad87a98ab43af450","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/GitEye.png"},{"revision":"02183a2ea99fa980d486bbc5085553f8","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/Integraions.png"},{"revision":"13c61ea506f51daf3a426abea675da13","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/Lab Management.png"},{"revision":"e8b4ac25748eececd03b086fbd2b0e36","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/SubversionEdge.png"},{"revision":"54fd4f0377f4e67881678a68dbd6b77f","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/SWP.png"},{"revision":"886ca335004dcdd6648c9db200d31a35","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/TF SCM.png"},{"revision":"aa0a319caa02f7bcefef18cc051f00c1","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/TF.png"},{"revision":"f3a1f27c0976cef9d48e5ed979ee4cb7","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/VersionOne.png"},{"revision":"1c94296f724137f4ccc2ae87f4375926","url":"docs/assets/images/PNG Logos for web_CollabNetVersionOne/PNG/logo/VS.png"},{"revision":"ef5b62a468384053964caca67d92f3b0","url":"docs/assets/images/PNG New logos for web/CollabNet Logos/Logo black and orange/collabnet-horizon.png"},{"revision":"1f662d0d1b4ddae536a76e7a95f85dd0","url":"docs/assets/images/PNG New logos for web/CollabNet Logos/Logo black and orange/collabnet.png"},{"revision":"5d11a5d5ffd0cc68aa18245771956885","url":"docs/assets/images/PNG New logos for web/CollabNet Logos/Logo in white and orange/collabnet-horizon-cloud.png"},{"revision":"d09412f66fdfe2b287a4238649bcc60f","url":"docs/assets/images/PNG New logos for web/CollabNet Logos/Logo in white and orange/collabnet.png"},{"revision":"440252402ee1d45c025f2d3b4a317da2","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/clarive.png"},{"revision":"867e8503bcbe8b14e2f5ef1240ef1c49","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/cloudforge-bycn.png"},{"revision":"e002e6fea853dd7fc6e11e927524ee7b","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/cloudforge-cloud.png"},{"revision":"30ccd3f9782765149cf0b32c59b6d2e9","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/cloudforge.png"},{"revision":"ff888aa8ebd838130f81a73376789fb7","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/devops-cloud.png"},{"revision":"d829c96e1f2cee2d9b853d524eb7d338","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/devops.png"},{"revision":"956ef160b90bbb3b5028bcddb8c52c17","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/giteye-cloud.png"},{"revision":"aa7a02cd63f7b620cdb043d0cf0e11b9","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/giteye.png"},{"revision":"0bb7b160cb0539dd1729691c8b669350","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/integrations-cloud.png"},{"revision":"3ffdf45293518b3f1ba7169cba816958","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/integrations.png"},{"revision":"0d9c4b0ac626f08864621fd07812be9c","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/labmanagement.png"},{"revision":"5ef1442f3833da4c12638a019a714061","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/scrumworks-bycn.png"},{"revision":"7e74d45d4f03417b5061e65962273462","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/scrumworks-cloud.png"},{"revision":"1042562d123d7371a0b368aec4ca16ec","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/scrumworks.png"},{"revision":"6219b9390bea3c34905b61fedf81690d","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/svnedge-bycn.png"},{"revision":"96ca59eb95885fffb6ec61788f9056ca","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/svnedge-cloud.png"},{"revision":"eea401fb1c3e10dd08dc0ddbee076f34","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/svnedge.png"},{"revision":"0209a097e89332c17d5aae48d22f2ad7","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforge-bycn.png"},{"revision":"3a7ca98cc3fcefe0c9b18c876d1deac0","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforge-cloud.png"},{"revision":"554809c94aee2b1fa8c88e592f4b0bd6","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforge.png"},{"revision":"48be1434a72fe65f404618246b6df53b","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforgescm-bycn.png"},{"revision":"d1f371fd87b9d63926fe6b40c227be22","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforgescm-cloud.png"},{"revision":"1afa9b7367d2afa2bfe32a35b152f033","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo black and orange/teamforgescm.png"},{"revision":"f0e50fb927d7779913f7a892edebc4ac","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/clarive.png"},{"revision":"578bac70eae40b37498ae1588ac8fd96","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/cloudforge-bycn.png"},{"revision":"6ca7bb77def9054501ca07d211d54ffd","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/cloudforge-cloud.png"},{"revision":"252e1af1964d4a0d0796204429775793","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/cloudforge.png"},{"revision":"b50dbd581065696a2d120f07258e8cfb","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/devops cloud.png"},{"revision":"abec37dd2721bb5bd3a6121614a8fee9","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/devops.png"},{"revision":"04d403235c567e3156799a84f49bec01","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/giteye-cloud.png"},{"revision":"ede2466c847d7276340aef4cab8838fd","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/giteye.png"},{"revision":"cd770edc0af998611d8cc041502e5456","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/integrations.png"},{"revision":"3d6383c92a36c56f5e8385fd2df81560","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/scrumworks-bycn.png"},{"revision":"2feff3cc57afe6e0e846085a94885ba1","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/scrumworks-cloud.png"},{"revision":"90b05ba6ac2ac3163d2234ec44b9419b","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/scrumworks.png"},{"revision":"98b8b7a2047dbba778477fe41574bfdd","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/svnedge-bycn.png"},{"revision":"3cd71f815716712931e18eb4a89876e2","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/svnedge-cloud.png"},{"revision":"7e1b950d4efbb9dfc777a7b49d3a92d5","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/svnedge.png"},{"revision":"bb9e732b783ae6255a47980c6f78ce4e","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforge scm.png"},{"revision":"e55c9cce3eb53fb78e87b07026b52ced","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforge-bycn.png"},{"revision":"68592bbcafb595309f8bf73ccbdd9d8e","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforge-cloud.png"},{"revision":"b36384fef50cb30571964500f9be07fb","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforge.png"},{"revision":"827231173a3fda6bbb445d6a295511f7","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforgescm-bycn.png"},{"revision":"1a928dde8dcd74f1db23962974f525d7","url":"docs/assets/images/PNG New logos for web/Product Logos/Logo in white and orange/teamforgescm-cloud.png"},{"revision":"330edc776d1f7f285b8492ecbcf2ba0c","url":"docs/assets/images/policy-settings-index.png"},{"revision":"da2997c7929815076501a3161c21eceb","url":"docs/assets/images/policy-settings-monitoring.png"},{"revision":"c1f071244ce99719f954f73e59264dc4","url":"docs/assets/images/policy-settings-webhook-urls.png"},{"revision":"6ae6174916995f5648c517502147db4a","url":"docs/assets/images/pr01.png"},{"revision":"d185919b893631afd71b4ae43ba2f0a3","url":"docs/assets/images/pr02.png"},{"revision":"2dfc99a1b085e40d488012d4edf1b668","url":"docs/assets/images/pr03.png"},{"revision":"f6d367dbbd340e24e423943c93710eb1","url":"docs/assets/images/pr04.png"},{"revision":"9b2237cc670c76ea5a4ecbc1a357a75c","url":"docs/assets/images/preview-project-baseline.png"},{"revision":"4cf0533ef7832c0ffbed6f5c66f3bcf2","url":"docs/assets/images/printdownloadreport.png"},{"revision":"8a1708ca0d01118865077cdbce06963f","url":"docs/assets/images/project_config.png"},{"revision":"b31fc1c884db082010f2e8f299889877","url":"docs/assets/images/project-baseline.png"},{"revision":"fecc0225bf4775e6dd8c2fa489294390","url":"docs/assets/images/pull-request-review.png"},{"revision":"4d2befdf3c57fbdfb051b6624d469925","url":"docs/assets/images/qualitygates-for-protectbranches.png"},{"revision":"167f432ef1e6e23f55e364a658c78df1","url":"docs/assets/images/quikaddbutton.png"},{"revision":"8f55be9aebe994d2667a990e81675d12","url":"docs/assets/images/recent-document-files.png"},{"revision":"8df35bbde5346ed377c011e392a9c5fd","url":"docs/assets/images/refresh-baseline-status.png"},{"revision":"42264e8aae21ec895be6b3b013ff8eff","url":"docs/assets/images/refresh-package-status.png"},{"revision":"62f6f5649d212e28fee2e68131177799","url":"docs/assets/images/relative-file-path-content.png"},{"revision":"4c56491eda0914d55c6f0da7d91dc7a5","url":"docs/assets/images/relative-file-path-link.png"},{"revision":"09867979f627ad91f5baf8803fb9764a","url":"docs/assets/images/relative-file-path.png"},{"revision":"8ce06ce1dc0a2592d68cae63221ad796","url":"docs/assets/images/relative-folder-path-contents.png"},{"revision":"cd9d9040239c4bc41476fe5768e4c87a","url":"docs/assets/images/relative-folder-path-link.png"},{"revision":"cb6e130adc2473f436d4e6c7bf4c297c","url":"docs/assets/images/relative-folder-path.png"},{"revision":"642c26ff5dc671784612a7b761bdf7a8","url":"docs/assets/images/relative-path-to-image.png"},{"revision":"9f17644eb45905156b726225e77d5e85","url":"docs/assets/images/release_baselines_tab.png"},{"revision":"8e74c1ba2258e0abdf27063638fd89d8","url":"docs/assets/images/releaseburndown.png"},{"revision":"5fdf8932c19c45cd0b5cd266764c614d","url":"docs/assets/images/releaseburndownchart.png"},{"revision":"c7f14a38e4f4f64bc4f7f3dcf74224d7","url":"docs/assets/images/releaseburnup.png"},{"revision":"a36fd82613a15b7b32d906c6f6b5a4cd","url":"docs/assets/images/removestreamevents01.png"},{"revision":"27e8fb031700f630e2f764d29d0999a5","url":"docs/assets/images/removestreamevents02.png"},{"revision":"e7d89fa835e2ac4c9c2cd4293f4cc30b","url":"docs/assets/images/rename-doc-folder.png"},{"revision":"807ef0b3194e0a9e73226c6b08a64ad7","url":"docs/assets/images/rename-docs-folders.png"},{"revision":"f14dfb356fa140f8640793fec9a2b40d","url":"docs/assets/images/rename-document.png"},{"revision":"0f2cf6fdac53881893fa1ca576448fe8","url":"docs/assets/images/rendered-image-by-relative-path.png"},{"revision":"0e2438404bbaf0b053db8db670e74aa3","url":"docs/assets/images/replicatab.png"},{"revision":"dac68b4872a26793a9bec35f5b0de03c","url":"docs/assets/images/replicatab01.png"},{"revision":"00e31543b820947edc256ca11016b826","url":"docs/assets/images/replicaterepo08.png"},{"revision":"b2ed5c5487626a8770dbec1ad8bc9a21","url":"docs/assets/images/replicaterepos03.png"},{"revision":"225116cc39e4c369fd004609f27d088d","url":"docs/assets/images/replicaterepos04.png"},{"revision":"f76c7ea17c2005f9940a2ee87454e5ab","url":"docs/assets/images/replicaterepos05.png"},{"revision":"ad2a9e72886f11bb3d1ec224931b7f05","url":"docs/assets/images/replicaterepos06.png"},{"revision":"8fc0048522ca2ae108636862dd481c9e","url":"docs/assets/images/replicaterepos07.png"},{"revision":"d402be84887574f3305c78a04ccbc8f7","url":"docs/assets/images/replicaterepos08.png"},{"revision":"84963d546a99dfdc3acad9a0b0cb7f94","url":"docs/assets/images/replicatesvnrepo.png"},{"revision":"1adcdffb61632bb0846e601bf107c897","url":"docs/assets/images/repo-download-zip-folder.png"},{"revision":"d04a688dff2e30180b409dbe981c0908","url":"docs/assets/images/repocommandhistory.png"},{"revision":"d343dc9da59dd541d3e20d84df7d03af","url":"docs/assets/images/repofolder-download-zip-folder.png"},{"revision":"1731701c44e94e60493500227540f8f0","url":"docs/assets/images/reports-artifactclosed.png"},{"revision":"d4f86d631f36b9794a6a437381bdc21e","url":"docs/assets/images/reports-artifactcreated.png"},{"revision":"94bb58661c621cdaa738a4ba5191f41c","url":"docs/assets/images/reports-Build_Activity.png"},{"revision":"c60d7b5aeba7c09802b6cafe8678f0d1","url":"docs/assets/images/reports-buildandtestactivity.png"},{"revision":"0637a0317a099d6d70234b1fe7785ea3","url":"docs/assets/images/reports-commitsbyuser.png"},{"revision":"c2fc8afa0aaf42e05c1ac085c459980e","url":"docs/assets/images/reports-date-range.png"},{"revision":"ab8502500ecd246b8eca75e120f2a92f","url":"docs/assets/images/reports-multiple-planningfolders.png"},{"revision":"f95ae93877c667150e4267403099ece6","url":"docs/assets/images/reports-multiple-projects.png"},{"revision":"43b77a869d36c3a214e9e9b726b674c0","url":"docs/assets/images/reports-page-size-dropdown.png"},{"revision":"373bd7f6727e6491d5f7166e354b8779","url":"docs/assets/images/reports-projects-link.png"},{"revision":"d8b0db13eeb771198377d706ea4c58dc","url":"docs/assets/images/reports-projects-list.png"},{"revision":"8afcbde25e94b6d813aa47cf147e9077","url":"docs/assets/images/reports-refresh.png"},{"revision":"a647dfc61dd89b02dcad6259906b3bde","url":"docs/assets/images/reports-scmcommits.png"},{"revision":"13f8ac8bc621838b058a2adff2b7015e","url":"docs/assets/images/reports-select-planningfolders.png"},{"revision":"ac67dbbd7563a98a5c437cc55483a425","url":"docs/assets/images/reports-select-repos.png"},{"revision":"1d65a993a081ff18b6cc7ae6d75603cd","url":"docs/assets/images/reports-select-trackers.png"},{"revision":"eda42ea57334e5d34567f07b6f3ee0e7","url":"docs/assets/images/reports-trackerassto.png"},{"revision":"1786e02296a870c7f968ca74ad2381ac","url":"docs/assets/images/repository-name-1.png"},{"revision":"052f1e153d9bf384d1c8eb7b2671a29f","url":"docs/assets/images/repository-name-2.png"},{"revision":"d5a45b0569ca775a47755138df55e129","url":"docs/assets/images/Requirement-TestSuite.png"},{"revision":"5d986fa7d599bf40b8a47b9a50d64245","url":"docs/assets/images/review-baseline.png"},{"revision":"c298f1837a30be0d960d11c887ee2129","url":"docs/assets/images/review-completed.png"},{"revision":"bf7c8bd0d3ee1c920bf4b57a16466971","url":"docs/assets/images/review-mass-repo-policy-settings.png"},{"revision":"7699f518cd5402ef4249cc48f1c381fe","url":"docs/assets/images/review-msg.png"},{"revision":"8b1b4bcdce21669ec0466bc172d6ab1a","url":"docs/assets/images/review-not-completed.png"},{"revision":"ad9cd1204c46f7f87eea942b23f72e57","url":"docs/assets/images/review-optional.png"},{"revision":"b995983440f9c21ad1891a326a2e8d2d","url":"docs/assets/images/review-policy-submit-types.png"},{"revision":"90bd4328844f418003184050f445f2f0","url":"docs/assets/images/review-required.png"},{"revision":"4feac88393e0dc0b24d024cdcf9bee9f","url":"docs/assets/images/review-rules-desc-tooltip.png"},{"revision":"89da407abba706af3d11a8aff2c3d343","url":"docs/assets/images/review+ps1_notif.png"},{"revision":"6d1def6eaf89409b61be5395169667cf","url":"docs/assets/images/reviewer-avatar.png"},{"revision":"e9fd8b03047d9df764f1301510db9499","url":"docs/assets/images/reviewpendingbaselines.png"},{"revision":"6f760e008019490fb6650bbe6e192d59","url":"docs/assets/images/richtexteditor.png"},{"revision":"67239f00a4ba600fa2ff79843977c87f","url":"docs/assets/images/RSSicon.png"},{"revision":"72d064ca1496cba200e6b05f8e1564f7","url":"docs/assets/images/rule-create.png"},{"revision":"c51e0da9a3ffe7416cfd14bbce094c8c","url":"docs/assets/images/rule-executionhistory.png"},{"revision":"aedc068c90082f844f972094ce3b319a","url":"docs/assets/images/rule-general.png"},{"revision":"03958e549f1ec6b6dcacf2fb4e8e9fd4","url":"docs/assets/images/rule-scope.png"},{"revision":"56924c96ea5dce1913172c959736f4c5","url":"docs/assets/images/rulegeneral.png"},{"revision":"4832d07ad0010023201385f1c5dcac9b","url":"docs/assets/images/ruleseditor1.png"},{"revision":"1711bacde009aa31f64973b7931af1b2","url":"docs/assets/images/ruleseditor1.png.jpg"},{"revision":"e63f8e70895d2adbc54fbb7dc17e91ea","url":"docs/assets/images/saml-ldap.png"},{"revision":"c5ef64f48eed42030b22a0cf434d8ad0","url":"docs/assets/images/save-as-def-name-alert.png"},{"revision":"fcfe818cf064c4ea2956140da6b2abb4","url":"docs/assets/images/save-as-def-name.png"},{"revision":"ac81680f53c5f897479251c84c1b2814","url":"docs/assets/images/save-as-draft-button-projbaseline.png"},{"revision":"3af1a678ba229c4612a42d39be231b52","url":"docs/assets/images/save-as-draft-button.png"},{"revision":"1dcbe11d0dfdadefe0838e5483339329","url":"docs/assets/images/scale-images-fit-frame.png"},{"revision":"3f92eca0150b5452a7c03939bc74f6c4","url":"docs/assets/images/SCM-checkout.png"},{"revision":"1d3c5701c37157f891d88dd67e33c68a","url":"docs/assets/images/SCM-comments_only.png"},{"revision":"df4b26a80432a2fe411b7b650a85d2c7","url":"docs/assets/images/SCM-freeze_scm_server.png"},{"revision":"c1341508692ec5bc42cbf9739edd610c","url":"docs/assets/images/SCM-link_to_line.png"},{"revision":"cf6a3fb3e831d3c7af3c08a2cb22b77d","url":"docs/assets/images/SCM-link_to_range.png"},{"revision":"ef5a9f0b0356acf949423641421b74f1","url":"docs/assets/images/SCM-recurse_submodules.png"},{"revision":"a988010bc582bd188bd52189f5ad2e51","url":"docs/assets/images/SCM-repo_prefix.png"},{"revision":"a225beb1239d593172a5e6bc468748d2","url":"docs/assets/images/SCM-same_project_association.png"},{"revision":"12ac20aa1f2eb2a0fc5924675db2817d","url":"docs/assets/images/scm-schema-image-new.png"},{"revision":"0331ba7426cb66a940a7f58574e354f5","url":"docs/assets/images/SCM-toggle_comment_visibility.png"},{"revision":"b7128dced52b515d5c31f169ad8b2afc","url":"docs/assets/images/scm183-01.png"},{"revision":"b9fd96e968f0bcdb1cf928a74f14093e","url":"docs/assets/images/scm183-02.png"},{"revision":"8872fbfd743d2e265e4b42353f76266a","url":"docs/assets/images/scm183-03.png"},{"revision":"a2492fc98f7360e1ea07e329b10a73b4","url":"docs/assets/images/scm183-04.png"},{"revision":"0089aa6dc7517e26b7e3d539a9c616e0","url":"docs/assets/images/scm183-05.png"},{"revision":"4e1b67c168498016fefe345e776fe8f9","url":"docs/assets/images/scm183-06.png"},{"revision":"8cfa09ae273e4ab4f387b7ed07a47dd3","url":"docs/assets/images/scm183-07.png"},{"revision":"bdca55e082982f7489d92d6413b2d83a","url":"docs/assets/images/scm183-08.png"},{"revision":"60ae65813365487229256963bda238f1","url":"docs/assets/images/scm183-09.png"},{"revision":"d7ae3cfdf7ae49cf1ef665dac3d417a8","url":"docs/assets/images/search-baseline-button.png"},{"revision":"5195a2acb83557b06726a690186503da","url":"docs/assets/images/search-baseline-category.png"},{"revision":"f57d92c93bdd5e936b82f5b7c4243358","url":"docs/assets/images/search-baseline-name.png"},{"revision":"9fe81d95389133625bd87ade4658ab7c","url":"docs/assets/images/search-baseline-user.png"},{"revision":"efd00046b5ec184a906a1e266c7109a3","url":"docs/assets/images/search-docs-folders.png"},{"revision":"c9acfe3e8804a3736cdde378ab17b9f4","url":"docs/assets/images/searchthemarketplace.png"},{"revision":"8de195d17e30a6aedb89d3c1390a231f","url":"docs/assets/images/searchthemarketplace01.png"},{"revision":"0c104de070b66edc9ff63c4a635cac9a","url":"docs/assets/images/searchtrackers-multiplePFvalues.png"},{"revision":"07bea33281b23e60b63c8e3b9532e827","url":"docs/assets/images/searchtrackers-multipleteamvalues.png"},{"revision":"66f569d9f163ba05b774b209b43d5e7d","url":"docs/assets/images/select-pbl-from-createprojectpage.png"},{"revision":"35b8142b4140c25c1646a857966777dc","url":"docs/assets/images/selectmywidget-documents.png"},{"revision":"7e377895d6a13c802385789461da5086","url":"docs/assets/images/selectmywidget.png"},{"revision":"3bef1ffd58b96ff3f0e1969da5579f70","url":"docs/assets/images/selectprojects.png"},{"revision":"1c47cedba0e4d4f5428b39ccddf05d32","url":"docs/assets/images/selectpublicreportsforproject.png"},{"revision":"b7510ba39cfc31724e23dce3944eba1a","url":"docs/assets/images/selectrepos.png"},{"revision":"b23ac8c90af5af70d5c65845d2e6be59","url":"docs/assets/images/server.jpg"},{"revision":"5d4684d1bdf2cf26401cd578eabd8125","url":"docs/assets/images/set-multiple-docs-as-favorites.png"},{"revision":"dda9370d3708b1f77c676698981cff2b","url":"docs/assets/images/set-single-doc-as-favorite.png"},{"revision":"2f88300ebd27379401c6b58e51cc1caa","url":"docs/assets/images/setdefaultboard.png"},{"revision":"de1dd8bc09d2506213b12823d00df844","url":"docs/assets/images/setupgitreplicaserver01.png"},{"revision":"4af85a6fa9f2fbf1f8c12a1050cf2d7f","url":"docs/assets/images/setupgitreplicaserver02.png"},{"revision":"c6a341a1822c5d4509aa3d5ec62d4037","url":"docs/assets/images/share-package.png"},{"revision":"b3a216351a78d0dc11b852aa899e5e62","url":"docs/assets/images/show-pending-obsolete-file-release-2.png"},{"revision":"6c71855ee05d8ea614a44d623ffb4c7a","url":"docs/assets/images/show-pending-obsolete-file-release.png"},{"revision":"e6d126bb15c6fbfbacab0e7535d85227","url":"docs/assets/images/showclosedartifacts.png"},{"revision":"4f16288411d587e2a9f03321580a88c1","url":"docs/assets/images/sign-in-1.png"},{"revision":"2a91c07ed23094cb94d402732ef7ed0d","url":"docs/assets/images/sign-in-2.png"},{"revision":"3672e7ba6a1f4709083d244b81f704b0","url":"docs/assets/images/sign-in-3.png"},{"revision":"b35522f7a58b9501a836f5224e61d6f0","url":"docs/assets/images/sign-in-4.png"},{"revision":"4b6e0a1b5ad9b81a74e3d323cf640f74","url":"docs/assets/images/siteadmin-adhoc-database-query.png"},{"revision":"a10bc57d42efd325c64694833e40d0f1","url":"docs/assets/images/siteadmin-editmsg.png"},{"revision":"8aa5905d7117e8e54416b4bbe21e6d3e","url":"docs/assets/images/slack_configuration.png"},{"revision":"a004de24ad022f9813f1ec311680d339","url":"docs/assets/images/sort-documents-folders.png"},{"revision":"5bce494a2ff9ee6367750d9c41451f8d","url":"docs/assets/images/sourcecode.png"},{"revision":"838e0827dd7201a0998178a80231f210","url":"docs/assets/images/sprintburndownchart.png"},{"revision":"fcf68763689fec39699c403de160b22b","url":"docs/assets/images/ssl-off-no-support.png"},{"revision":"f912e26be4422a6711c4656b76536f94","url":"docs/assets/images/status-failure-small.png"},{"revision":"7d1600f58f309fd2549f54b54639e19a","url":"docs/assets/images/status-success-small.png"},{"revision":"fb744605443f041175997a269bde7245","url":"docs/assets/images/statusbyareagroup.png"},{"revision":"fe74252f4648f7be8b47651373a285b6","url":"docs/assets/images/swimlane.png"},{"revision":"2aac1857017bc7b0d6a1d78a13eeab40","url":"docs/assets/images/swimlanerefresh.png"},{"revision":"7bf5f0f2dee97c6a53b6d8206526e5f6","url":"docs/assets/images/tagclouds01.png"},{"revision":"dcaa28ec8c006ff31e3f262a0925af4f","url":"docs/assets/images/tagmanagement01.png"},{"revision":"e6f0a3405781a06978ec367c5d4ef0a0","url":"docs/assets/images/tagmanagement02.png"},{"revision":"d3813b6df0488953ec01ee8cf8863bf5","url":"docs/assets/images/tagmanagement03.png"},{"revision":"0b7e3e1bfb1666ca0b76ef08cdf68d75","url":"docs/assets/images/taskbdcard01.png"},{"revision":"ec8bb6b0237b21f6f5fe59c11e2fd01f","url":"docs/assets/images/taskbdcard02.png"},{"revision":"c973a2ef0d8a157914f684be99a618ec","url":"docs/assets/images/taskbdconfigicon.png"},{"revision":"02a87584e807ec08678194d9b6fc0d87","url":"docs/assets/images/taskbdsettings.png"},{"revision":"6227bd0c877039885b9856a8c220b104","url":"docs/assets/images/taskbdsettings02.png"},{"revision":"391a6549ee2171587cfbca64e2d060f7","url":"docs/assets/images/tb_edittaskwindow.png"},{"revision":"26df6ba556615c22aae488994a5a1d67","url":"docs/assets/images/TCRun-Defect.png"},{"revision":"3156388695acee5d5e6c84aef2df9fcc","url":"docs/assets/images/team_create.png"},{"revision":"62d0b65bc9d044e2004905687a8eb7e8","url":"docs/assets/images/team_edit.png"},{"revision":"9ea3db5b64f53b8293315ee3abf69675","url":"docs/assets/images/team_viewmember.png"},{"revision":"0d22055292265e75c89ffc203d88f9fe","url":"docs/assets/images/team-deletemembericon.png"},{"revision":"ae9836a0850f6f189ef5dc39ed9f5f4b","url":"docs/assets/images/team-teamowner.png"},{"revision":"c0710d7f82abd078a6eaf91f285427b5","url":"docs/assets/images/team-viewmembersicon.png"},{"revision":"8568b20585cf13e99663b6540617e3e0","url":"docs/assets/images/teamforge-associations.png"},{"revision":"47600108ce0ee16d9ac4dbe1bd795cec","url":"docs/assets/images/teamforge-git-overview.png"},{"revision":"9a4ca5372597e3dcf6f9df6324314ff7","url":"docs/assets/images/TeamForge-Testlink.png"},{"revision":"d35a07353296a2df36951f94ede7eabe","url":"docs/assets/images/teamforgegerritmappings-file.png"},{"revision":"67ab9e530417cd14d22c1813e8aced53","url":"docs/assets/images/teamview.png"},{"revision":"5fa97ce2fa9217d8fd1a86c2ecbaea9a","url":"docs/assets/images/Test-Traceability.png"},{"revision":"a684dfce92b7b8dc1a80bd81380b9107","url":"docs/assets/images/testlink_migration.png"},{"revision":"13084ae4861f4c3c3aee6f3b9f240f52","url":"docs/assets/images/testlink-teamforgesetup01.png"},{"revision":"27f3783d132be579d76f75b0300854c8","url":"docs/assets/images/testlink-teamforgesetup02.png"},{"revision":"889918866c8d3b60e6d801913cc50cc7","url":"docs/assets/images/testlink01.png"},{"revision":"5bc288624c46d1321d25bfcb2f8f4f21","url":"docs/assets/images/testlink03.png"},{"revision":"1a54fc3e719fe1480ac5e89e1a41faa4","url":"docs/assets/images/testlink04.png"},{"revision":"b3d7716d248e125c1a013d4dc49acc2e","url":"docs/assets/images/testlink05.png"},{"revision":"4edc5799f55bc91e75e64df2d62ca9b4","url":"docs/assets/images/testlink07.png"},{"revision":"6c1d55637834d1b378a26fe22ecbfd5d","url":"docs/assets/images/testlink08.png"},{"revision":"25786fa886b012b3f53dffcfa2d62c89","url":"docs/assets/images/testlink09.png"},{"revision":"28d47661a1683c70da551dc65d7af408","url":"docs/assets/images/testlink10.png"},{"revision":"a8daedbf308dd209c034ed8a3d974d69","url":"docs/assets/images/testlink12.png"},{"revision":"23ceb99c8db2db5e125f5b8cdf056c1c","url":"docs/assets/images/testlink13.png"},{"revision":"cedc45748b4e98a3b751eeb5e9de0fd6","url":"docs/assets/images/testlink14.png"},{"revision":"9389aee0274f5a1a665a2f04edd696a1","url":"docs/assets/images/testlink15.png"},{"revision":"db7f0fd7525e3997ee360b3bd9d4100c","url":"docs/assets/images/testlink16.png"},{"revision":"c847f70db847e8bb2d98774f19c78c95","url":"docs/assets/images/testlink17.png"},{"revision":"6f3766fc48f4c59e38f7c289ca5f3517","url":"docs/assets/images/testlink18.png"},{"revision":"b5ea5bbb318fc28d6c290857672ecd2a","url":"docs/assets/images/testlink19.png"},{"revision":"504bba98d31d7306191d9dba310a5239","url":"docs/assets/images/TestsLast7Days.png"},{"revision":"8d0242023e173769db0ddd3dc10dd4de","url":"docs/assets/images/tf-git-fetchcommand.png"},{"revision":"52395927c9ceb5ac3e83c8d3467594b0","url":"docs/assets/images/tf-git-historyprotect-email.png"},{"revision":"1636ec6341a773404188a2cf3603071c","url":"docs/assets/images/tf-git-resurrecthistory-2.7.x.png"},{"revision":"5bbf523231de60784ebc70de84334bea","url":"docs/assets/images/tf-git-rewrittenhistory-2.7.x.png"},{"revision":"93843828841a531159f37c586ffc7fd1","url":"docs/assets/images/tfgerritcomm01.png"},{"revision":"56cdc7756faeb94d6d225ac567e21860","url":"docs/assets/images/tfgerritcomm02.png"},{"revision":"acca51cd0c906e4b0dabe722aab714d6","url":"docs/assets/images/tfgerritcomm03.png"},{"revision":"96c056dfb6852dedfed83f6d7b2f3bbc","url":"docs/assets/images/top-button.png"},{"revision":"776b2dfed9a9607a2c9dc6c7db9a97e1","url":"docs/assets/images/totalsizebyareagroup.png"},{"revision":"c8cc61e5e1db35e0c1c4f219a3d0b87a","url":"docs/assets/images/totalsizebytrackertype.png"},{"revision":"72ec4189d2a1321d355d604dd75512ea","url":"docs/assets/images/tracker-type-add-filter-2.png"},{"revision":"752e8a1813125c3bacbd6529455b4603","url":"docs/assets/images/tracker-type-add-filter.png"},{"revision":"e2ae4e1d7eca4f4e7b2ab39e1865efef","url":"docs/assets/images/tracker-type.png"},{"revision":"71a50fa898b5dc8e764ca6d5a9c07d83","url":"docs/assets/images/trackers-hiddensummary.png"},{"revision":"e02fa1b06f8078d718c3d8313166472a","url":"docs/assets/images/treeview-gittags.png"},{"revision":"7330a7ba27a67f1b58ab971daf9a1a62","url":"docs/assets/images/unmonitor-artifact-confirm.png"},{"revision":"a449eb6f77951bad44b74dc32f5e087e","url":"docs/assets/images/unmonitor-createartifact-email.png"},{"revision":"4f17d5cffcc3360dd68e677f2a344b8e","url":"docs/assets/images/unmonitor-createdoc-email.png"},{"revision":"3c40f9a1300bae49c9e96541bc93a021","url":"docs/assets/images/unmonitor-document-confirm.png"},{"revision":"3d65662c6511fe84c936a1acab5c0273","url":"docs/assets/images/unmonitor-updateartifact-email.png"},{"revision":"9d813afeec056a13e62bbc0b176faa9c","url":"docs/assets/images/unmonitor-updatedoc-email.png"},{"revision":"ecc97811925b9f584c1d83f470d56a15","url":"docs/assets/images/unmonitored-document-folder.png"},{"revision":"7a7c0ff710b370051b51b1229edfbce2","url":"docs/assets/images/unmonitored-folder-document.png"},{"revision":"a951516b2d6bb7c06e556a4a42d025d3","url":"docs/assets/images/uparrow.png"},{"revision":"982c3826b15a06971622e9fc2677bd0b","url":"docs/assets/images/upload-file-to-gitrepo.png"},{"revision":"3abb694444b4e444b0a006093dfed2ab","url":"docs/assets/images/upload-jira-adapter-01.png"},{"revision":"26523ed162a49790158b2e56da859d94","url":"docs/assets/images/upload-jira-adapter-02.png"},{"revision":"566300a82e9ca9767dfb51fb9263ed05","url":"docs/assets/images/user_defined_pull_req_master.png"},{"revision":"910f407c2afaa9eedd6f00ce5ad7bff6","url":"docs/assets/images/user-defined-pull-request-new.png"},{"revision":"ccb964cfc9a46179028db2a839e77d8e","url":"docs/assets/images/user-defined-repo-category.png"},{"revision":"e99b8480ef749ee022e3d6f5fe5586b1","url":"docs/assets/images/user-defined-review.png"},{"revision":"21271c4cdb045e52f40d01bc0f823789","url":"docs/assets/images/user-schema-image-new.png"},{"revision":"4994dcdcaa7916891415ea1f07d33d37","url":"docs/assets/images/velocitycal-nestedpf.png"},{"revision":"593ebbf800c386953d2f984c9816e663","url":"docs/assets/images/velocitycal-parentartf.png"},{"revision":"bc511dad11e891ba316e1faafc7614ff","url":"docs/assets/images/view-approved-baseline.png"},{"revision":"3678fcf0b9711b1933fb0a6e8f71acac","url":"docs/assets/images/view-baseline-1.png"},{"revision":"42e7e7b5f75565e58ba190db3b2126d9","url":"docs/assets/images/view-baseline-def.png"},{"revision":"7081ad26a8696d7df8d80dc47949d37e","url":"docs/assets/images/view-externalbaseline.png"},{"revision":"c4438764538e0be8947e217311536a08","url":"docs/assets/images/view-link.png"},{"revision":"fe419eed0841c26465e5bf42fae7b079","url":"docs/assets/images/viewartifact_baselines_tab.png"},{"revision":"75d5472850a379697ea41f7e0d224fce","url":"docs/assets/images/webhook-create.png"},{"revision":"392b1190a936db33a7ba4b7db3556f01","url":"docs/assets/images/webhook-to-disable.png"},{"revision":"119c145c9d4921bc4f293f32f361d324","url":"docs/assets/images/webhookevents.png"},{"revision":"994017c0b778c8e4837aaf4325e24293","url":"docs/assets/images/webhooks-add-new-subscriber.png"},{"revision":"03bbcd9969cfc2d8d6f8896921eb471b","url":"docs/assets/images/webhooks-communicationtype-2.png"},{"revision":"7288860e617a9d85ec49da7917b81e59","url":"docs/assets/images/webhooks-communicationtype.png"},{"revision":"38b326f7d3772e285bafd532e3db0925","url":"docs/assets/images/webhooks-eventtypes.png"},{"revision":"0f492b1a8b6477dc15f93ca8e805ff3f","url":"docs/assets/images/webhooks-pre-submit-internalJSVM.png"},{"revision":"c0454cf20a9e74060db1a65ee51cb2af","url":"docs/assets/images/webhooks-subscribers-list.png"},{"revision":"73732e89bba7550e2007e1f09bab60bc","url":"docs/assets/images/webhooks-trackerartifacts.png"},{"revision":"440cde98ddb1de5bbe723c0c6d69469a","url":"docs/assets/images/webr-architecture.png"},{"revision":"c972c80f67563c8fa84bf3169b8028e2","url":"docs/assets/images/webr-notification-params.png"},{"revision":"7947498c985f93c56f0dd7bad596d1b4","url":"docs/assets/images/webr-pprofs-sample.png"},{"revision":"861514ecb5571238ed396def1427ca54","url":"docs/assets/images/withparent.png"},{"revision":"3acb096616507bf62c9f745a751f47b2","url":"docs/assets/images/workflowarrow.png"},{"revision":"13fe33f9a5fe7b307268eb16be6ba179","url":"docs/assets/images/workspaces.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"c56a75b88a8e7c04412ceb094d90f9e6","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"cf7478163137e6cf18d5f3a93ab5544f","url":"img/undraw_docusaurus_react.svg"},{"revision":"7b2189e7d9cffada0efe2d02e932c879","url":"img/undraw_docusaurus_tree.svg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map