/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./designit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./button.js":
/*!*******************!*\
  !*** ./button.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * DesignBold JS SDK v1.0
 *
 * Using in Design IT Button
 *
 * Copyright (c) DesignBold
 */

window.DBSDK_Cfg = {
    export_mode: ['download'],
    export_callback: function (resultUrl,document_id, exportTarget) {
        // do something with design image URL, which is only accessible for 24 hours
    },
};
window.DBSDK = {
    app_id : "08b68956d3",
};

// Add style css
(function (doc) {
    var style = doc.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".db-btn-designit,.db-btn-redesign{-moz-box-shadow:0 10px 14px -7px #000;-webkit-box-shadow:0 10px 14px -7px #000;background-color:#0098fe}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.db-btn-designit{box-shadow:0 10px 14px -7px #000;font-family:Arial;-moz-border-radius:3px;border-radius:3px;display:inline-block;cursor:pointer;color:#fff;font-size:13px;font-weight:700;padding:0 10px 0 30px;height:30px;line-height:32px;z-index:99999;text-decoration:none;-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADvqaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0wNC0xNVQxMzozNjo1MyswNzowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDQtMTVUMTQ6MzE6MDUrMDc6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTA0LTE1VDE0OjMxOjA1KzA3OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo5MjU4YjVmNi03ZjI3LWQyNGMtYmYyNi02N2FlZDY3ZTc2Nzc8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZGIzZmY3ZC0wMmQ0LTExZTYtOTg0ZC1mMzU1ZWE5OGUxNGU8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpjM2QwMjFlNC02NTNhLWU5NDQtODFjMS01Njg0OGE2ZTE4N2U8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YzNkMDIxZTQtNjUzYS1lOTQ0LTgxYzEtNTY4NDhhNmUxODdlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA0LTE1VDEzOjM2OjUzKzA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmJjN2I1NTg2LTExNDQtMzM0Ni04ZWFkLTIyOWFhZDQxZmZiOTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0wNC0xNVQxMzozNjo1MyswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5MjU4YjVmNi03ZjI3LWQyNGMtYmYyNi02N2FlZDY3ZTc2Nzc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDQtMTVUMTQ6MzE6MDUrMDc6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1i5r2gAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAACoUlEQVR42pSVy0tUYRjGf3NmvF8iL6ndoBKisMuiFkE3Kiq6aWXRokWbaNtfUNCiC5VKBEEuWnWBMLNcFEFQSheMUYlEY8qcxPHajDnN7eg8LRrldEYtH/g273Pe3wff973PcUhiGuUB24BDwEZgYaLeB7QAT4BmYCipU5J9HZHUqn/rk6Rj9n47rEpmTHEzqjmoeiZgjSSZnS0K37usOarGDqycdMyuDwocXSjT/XKu0GOSMIAc4NLkmRrZ81AkSKyuBiIh5qCLQI4BHARKp4DOFFJy5sOQF2JjAAwGTbyjUUJmfDZgKXDIlQBOKb5gKel7T2G8eURLb4javh94un1EJkRhVgrlq/M4ub6AVKdjOugBF7DWWumKm3RureBwRjr1777yMLCUVZki3WXwaTBM07ceegJRzu1YhNORBF3rAkqsFf/oCGe9H9mw/Tg7e9JYZmSwe0UW2alO3H0hqpr7uPm2nzVFmVSW5dmBJUjyW6+qO+iXs+G6Kt3Ppn/NA2GtvN6myrufFYxO2G2/AfisW4wD+a40vowOMTweTjqk1QvSWb9kMa++pzIQnLDbPgNot1YcgP7MJPGJ5FuNC7YUutlT8JgMY8xutxtAo7VSlJZJWW4BHYEBvKGkBhzxMU4XnuHOxvOUZEXsdqORSA7PZCXblcr+4uVEzQhXPR8YiYUtQQKR/mqC/m7M3BOQUmyFeYCnSaMnSSOxsDa/vi8eXNCm13W64WnVsK9W8c/7NNyM/O5lGg93TDt61nCotrodP0e0s+mBqLslV/1VtTTlSu+Rv7VUscDzf4bD5PorZn6ZUd3v/aYrXW/V670mDd/WePS7HXZ5tjxEUoWktv9Il9bEt3/1O2b4BeQDu4ByYJ1lmnyJZ9YAvAB+2Bt/DwBjORDN8Mr1IAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:5px 5px}.db-btn-designit:hover{background-color:#37acfb;color:#fff;text-decoration:none}.db-btn-designit:active{margin-top:1px}.db-overlay{padding:0;margin:0;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;bottom:0;right:0;z-index:999999;-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s;display:none}.db-lightbox{position:fixed;top:30px;left:20px;right:20px;background-color:#fff;z-index:99999;bottom:20px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;overflow:hidden}.db-close-lightbox{width:30px;height:30px;display:block;line-height:30px;font-size:26px;color:#eee;-moz-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;position:absolute;top:3px;text-align:center;font-family:Arial;right:10px}.db-load,.db-loading{top:0;left:0;bottom:0;z-index:999;position:absolute}.db-close-lightbox:hover{cursor:pointer;color:#fff;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.db-lightbox iframe{border:none;width:100%;height:100%}.db-loading{right:0;background-color:#f5f5f5}.db-load{right:0;background-color:rgba(0,0,0,.6);-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s}.inner-circles-loader:not(:required),.large.inner-circles-loader:not(:required){background:rgba(2,188,155,.7);overflow:hidden;text-indent:-9999px;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);border-radius:50%}.db-load .db-load-img{position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;display:block}.inner-circles-loader:not(:required){-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;display:inline-block;width:50px;height:50px}.inner-circles-loader:not(:required):after,.inner-circles-loader:not(:required):before{content:\'\';position:absolute;top:0;display:inline-block;width:50px;height:50px;border-radius:50%}.large.inner-circles-loader:not(:required){-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;display:inline-block;width:90px;height:90px}.large.inner-circles-loader:not(:required):after,.large.inner-circles-loader:not(:required):before{content:\'\';position:absolute;top:0;display:inline-block;width:90px;height:90px;border-radius:50%}.inner-circles-loader:not(:required):before{-moz-animation:inner-circles-loader 3s infinite;-webkit-animation:inner-circles-loader 3s infinite;animation:inner-circles-loader 3s infinite;-moz-transform-origin:0 50%;-ms-transform-origin:0 50%;-webkit-transform-origin:0 50%;transform-origin:0 50%;left:0;background:#c7efcf}.inner-circles-loader:not(:required):after{-moz-animation:inner-circles-loader 3s .2s reverse infinite;-webkit-animation:inner-circles-loader 3s .2s reverse infinite;animation:inner-circles-loader 3s .2s reverse infinite;-moz-transform-origin:100% 50%;-ms-transform-origin:100% 50%;-webkit-transform-origin:100% 50%;transform-origin:100% 50%;right:0;background:#eef5db;background-color:rgba(44,151,221,.7)}@-moz-keyframes inner-circles-loader{0%,100%{-moz-transform:rotate(0);transform:rotate(0)}50%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes inner-circles-loader{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes inner-circles-loader{0%,100%{-moz-transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0)}50%{-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.inner-circles-loader.large{position:absolute!important;top:50%;left:50%;margin:-50px 0 0 -50px}";
    doc.getElementsByTagName('head')[0].appendChild(style);
})(document);

(function (self) {
    'use strict';

    if (self.fetch) {
        return
    }

    var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
                new Blob();
                return true
            } catch (e) {
                return false
            }
        })(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
    };

    if (support.arrayBuffer) {
        var viewClasses = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]'
        ];

        var isDataView = function (obj) {
            return obj && DataView.prototype.isPrototypeOf(obj)
        };

        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
        }
    }

    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = String(name)
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name')
        }
        return name.toLowerCase()
    }

    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = String(value)
        }
        return value
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
        var iterator = {
            next: function () {
                var value = items.shift();
                return {done: value === undefined, value: value}
            }
        };

        if (support.iterable) {
            iterator[Symbol.iterator] = function () {
                return iterator
            }
        }

        return iterator
    }

    function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
                this.append(name, value)
            }, this)

        } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name])
            }, this)
        }
    }

    Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ',' + value : value
    };

    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)]
    };

    Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null
    };

    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name))
    };

    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value)
    };

    Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this)
            }
        }
    };

    Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
            items.push(name)
        });
        return iteratorFor(items)
    };

    Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
            items.push(value)
        });
        return iteratorFor(items)
    };

    Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
            items.push([name, value])
        });
        return iteratorFor(items)
    };

    if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries
    }

    function consumed(body) {
        if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'))
        }
        body.bodyUsed = true
    }

    function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result)
            };
            reader.onerror = function () {
                reject(reader.error)
            }
        })
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise
    }

    function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise
    }

    function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);

        for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i])
        }
        return chars.join('')
    }

    function bufferClone(buf) {
        if (buf.slice) {
            return buf.slice(0)
        } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer
        }
    }

    function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
            this._bodyInit = body;
            if (!body) {
                this._bodyText = ''
            } else if (typeof body === 'string') {
                this._bodyText = body
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString()
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([this._bodyArrayBuffer])
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body)
            } else {
                throw new Error('unsupported BodyInit type')
            }

            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8')
                } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type)
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
                }
            }
        };

        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected
                }

                if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob)
                } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob')
                } else {
                    return Promise.resolve(new Blob([this._bodyText]))
                }
            };

            this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                    return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                } else {
                    return this.blob().then(readBlobAsArrayBuffer)
                }
            }
        }

        this.text = function () {
            var rejected = consumed(this);
            if (rejected) {
                return rejected
            }

            if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob)
            } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
            } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as text')
            } else {
                return Promise.resolve(this._bodyText)
            }
        };

        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode)
            }
        }

        this.json = function () {
            return this.text().then(JSON.parse)
        };

        return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return (methods.indexOf(upcased) > -1) ? upcased : method
    }

    function Request(input, options) {
        options = options || {};
        var body = options.body;

        if (typeof input === 'string') {
            this.url = input
        } else {
            if (input.bodyUsed) {
                throw new TypeError('Already read')
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
                this.headers = new Headers(input.headers)
            }
            this.method = input.method;
            this.mode = input.mode;
            if (!body && input._bodyInit !== null) {
                body = input._bodyInit;
                input.bodyUsed = true
            }
        }

        this.credentials = options.credentials || this.credentials || 'omit';
        if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers)
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.referrer = null;

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests')
        }
        this._initBody(body)
    }

    Request.prototype.clone = function () {
        return new Request(this, {body: this._bodyInit})
    };

    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        });
        return form
    }

    function parseHeaders(rawHeaders) {
        var headers = new Headers();
        rawHeaders.split(/\r?\n/).forEach(function (line) {
            var parts = line.split(':');
            var key = parts.shift().trim();
            if (key) {
                var value = parts.join(':').trim();
                headers.append(key, value)
            }
        });
        return headers
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
        if (!options) {
            options = {}
        }

        this.type = 'default';
        this.status = 'status' in options ? options.status : 200;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit)
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        })
    };

    Response.error = function () {
        var response = new Response(null, {status: 0, statusText: ''});
        response.type = 'error';
        return response
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code')
        }

        return new Response(null, {status: status, headers: {location: url}})
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
        return new Promise(function (resolve, reject) {
            var request = new Request(input, init);
            var xhr = new XMLHttpRequest();

            xhr.onload = function () {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                };
                options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options))
            };

            xhr.onerror = function () {
                reject(new TypeError('Network request failed'))
            };

            xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'))
            };

            xhr.open(request.method, request.url, true);

            if (request.credentials === 'include') {
                xhr.withCredentials = true
            }

            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob'
            }

            request.headers.forEach(function (value, name) {
                xhr.setRequestHeader(name, value)
            });

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
        })
    };
    self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);
(function(doc, win) {
    var host = null;
    var source_frame = {};
    if (typeof win === 'object' && typeof win.DBSDK === 'object' && typeof win.DBSDK.API === 'object' && typeof win.DBSDK.API.host) {
        host = win.DBSDK.API.host;
    }
    win.DBSDK = {
        'API': {
            'app_id': win.DBSDK.app_id,
            'scheme': 'https',
            'host': host || 'www.designbold.com',
            'path': 'design-it/create'
        },
        'error' : ""
    };

    DBSDK.getParameterByName = function (name, url) {
        if (!url) url = doc.getElementById('db-js-sdk').getAttribute('src');
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[#&]" + name + "(=([^&]*)|&|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    DBSDK.validateCustomDimension_ = function (width, height, unit) {
        if (isNaN(Number(width)) || isNaN(Number(height))) {
            var msg = 'Please enter a valid width / height number';
        }
        else if (unit === 'mm') {
            if (width < 13.2 || width > 1058.3 || height < 13.2 || height > 1058.3) {
                var msg = 'Width and height must has value between of 13.2 and 1058.3 milimeters';
            }
        }
        else if (unit === 'cm') {
            if (width < 1.32 || width > 105.83 || height < 1.32 || height > 105.83) {
                var msg = 'Width and height must has value between of 1.32 and 105.83 centimeters';
            }
        }
        else if (unit === 'inch' || unit === 'in') {
            if (width < 0.52 || width > 41.67 || height < 0.52 || height > 41.67) {
                var msg = 'Width and height must has value between of 0.52 and 41.67 inches';
            }
        }
        else {
            if (width < 50 || width > 4000 || height < 50 || height > 4000) {
                var msg = 'Width and height must has value between of 50 and 4000 pixels';
            }
        }
        return msg;
    };

    DBSDK.API_CREATE = DBSDK.API.scheme + '://' + DBSDK.API.host + '/' + DBSDK.API.path;
    DBSDK.COLLECTION_LIST = DBSDK.API.scheme + '://' + DBSDK.API.host + '/' + "collection/";

    DBSDK.BROWSER_UNSUPPORTED = DBSDK.API.scheme + '://' + DBSDK.API.host + "/" + "browser/unsupported";

    /* validate app id */
    DBSDK.validateApp = function (callback) {
        var app_id = DBSDK.app_id;
        if (app_id && app_id !== '') {
            win.fetch('https://api.designbold.com/pub/app/validate/' + app_id, {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow'
            }).then(function (response) {
                if (response.status === 200 && typeof callback === 'function') {
                    DBSDK.API.app_id = app_id;
                    callback();
                }
            }).catch(function () {
                console.warn("Application is invalid & SDK can not be initialized.");
            });
        }
        return false;
    };

    /* override dom selector */
    DBSDK.$ = function (selector) {
        var selectorType = 'querySelectorAll';

        if (selector.indexOf('#') === 0) {
            selectorType = 'getElementById';
            selector = selector.substr(1, selector.length);
        }

        return document[selectorType](selector);
    };

    /* check if dom element is in current viewport */
    DBSDK.isElementInViewport = function (el) {

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (win.innerHeight || doc.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (win.innerWidth || doc.documentElement.clientWidth) /*or $(window).width() */
        );
    };

    /* bind event & handler on element */
    DBSDK.bindEventHandler = function (target, type, callback, useCapture) {
        useCapture = useCapture || false;
        if (target.addEventListener) {
            target.addEventListener(type, callback, useCapture);
        }
        else {
            target.attachEvent('on' + type, callback);
        }
    };
    /* unbind event handler & return callback */
    DBSDK.unbindEventHandler = function (target, type, callback, useCapture) {
        useCapture = useCapture || false;
        if (target.removeEventListener) {
            target.removeEventListener(type, callback, useCapture);
        }
        else {
            target.detachEvent('on' + type, callback);
        }
    };

    /* check if document content is ready */
    DBSDK.documentReady = function (fn) {
        if (doc.readyState !== 'loading') {
            fn();
        } else if (win.addEventListener) {
            win.addEventListener('DOMContentLoaded', fn);
        } else {
            win.attachEvent('onreadystatechange', function () {
                if (doc.readyState !== 'loading')
                    fn();
            });
        }
    };

    /* animating function */
    DBSDK.FX = {
        easing: {
            linear: function (progress) {
                return progress;
            },
            quadratic: function (progress) {
                return Math.pow(progress, 2);
            },
            swing: function (progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function (progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function (progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function (progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function (progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function (options) {
            options = options || {};
            var start = new Date;
            var id = setInterval(function () {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress === 1) {
                    clearInterval(id);
                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeOut: function (element, options) {
            options = options || {};
            var to = 1;
            this.animate({
                duration: options.duration || 400,
                delta: function (progress) {
                    progress = this.progress;
                    return DBSDK.FX.easing.swing(progress);
                },
                complete: options.complete || function () {
                },
                step: function (delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeIn: function (element, options) {
            options = options || {};
            var to = 0;
            this.animate({
                duration: options.duration || 400,
                delta: function (progress) {
                    progress = this.progress;
                    return DBSDK.FX.easing.swing(progress);
                },
                complete: options.complete || function () {
                },
                step: function (delta) {
                    element.style.opacity = to + delta;
                }
            });
        }
    };

    /* create unique id */
    DBSDK.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };

    /* trigger create or open design frame */
    DBSDK.startDesignTool = function (e) {
        var designit_uri = e.currentTarget.getAttribute('data-href'),
            uuid = e.currentTarget.getAttribute('data-id'),
            overlay = DBSDK.$('.db-overlay[data-id="' + uuid + '"]');
        if (overlay.length) {
            overlay[0].style.display = 'block';
        }
        else {
            var iframe = doc.createElement('iframe');
            iframe.style.display = 'none';
            iframe.setAttribute('data-id', uuid);
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = designit_uri;
            iframe.name = 'db-design-frame-' + uuid;
            iframe.id = 'db-design-frame-' + uuid;
            var iframeOnLoad = function () {
                if (iframe.removeEventListener) {
                    iframe.removeEventListener('load', null, true);
                }
                else if (iframe.detachEvent) {
                    iframe.detachEvent('onload', null);
                }
                iframe.style.display = 'block';
                DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-loading')[0].style.display = 'none';
                //source_frame = window.document.getElementById('db-design-frame-'+uuid);
            };
            DBSDK.unbindEventHandler(iframe, 'load', iframeOnLoad, true);
            DBSDK.bindEventHandler(iframe, 'load', iframeOnLoad, true);
            var overlay = '<div class="db-overlay animated fadeIn" data-id="' + uuid + '" style="display: block;">'
                + '<span class="db-close-lightbox">×</span>'
                + '<div class="db-lightbox">'
                + '<div class="db-loading">'
                + '<div class="inner-circles-loader large loading-icon"></div>'
                + '</div>'
                + '</div>'
                + '</div>';
            doc.body.insertAdjacentHTML('beforeend', overlay);
            DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-lightbox')[0].appendChild(iframe);
            source_frame = window.document.getElementById('db-design-frame-'+uuid);
            DBSDK.bindEventHandler(DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-close-lightbox')[0], 'click', function (e) {
                e.currentTarget.parentNode.style.display = 'none';
                window.parent.postMessage({"action":""})
            });
        }
    };

    DBSDK.startDesignToolExtension = function (designit_uri,uuid) {
        var overlay = DBSDK.$('.db-overlay[data-id="' + uuid + '"]');
        if (overlay.length) {
            overlay[0].style.display = 'block';
        }
        else {
            var iframe = doc.createElement('iframe');
            iframe.style.display = 'none';
            iframe.setAttribute('data-id', uuid);
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = designit_uri;
            iframe.name = 'db-design-frame-' + uuid;
            iframe.id = 'db-design-frame-' + uuid;
            var iframeOnLoad = function () {
                if (iframe.removeEventListener) {
                    iframe.removeEventListener('load', null, true);
                }
                else if (iframe.detachEvent) {
                    iframe.detachEvent('onload', null);
                }
                iframe.style.display = 'block';
                DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-loading')[0].style.display = 'none';
                //source_frame = window.document.getElementById('db-design-frame-'+uuid);
            };
            DBSDK.unbindEventHandler(iframe, 'load', iframeOnLoad, true);
            DBSDK.bindEventHandler(iframe, 'load', iframeOnLoad, true);
            var overlay = '<div class="db-overlay animated fadeIn" data-id="' + uuid + '" style="display: block;">'
                + '<span class="db-close-lightbox">×</span>'
                + '<div class="db-lightbox">'
                + '<div class="db-loading">'
                + '<div class="inner-circles-loader large loading-icon"></div>'
                + '</div>'
                + '</div>'
                + '</div>';
            doc.body.insertAdjacentHTML('beforeend', overlay);
            DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-lightbox')[0].appendChild(iframe);
            source_frame = window.document.getElementById('db-design-frame-'+uuid);
            DBSDK.bindEventHandler(DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-close-lightbox')[0], 'click', function (e) {
                var el = e.currentTarget.parentNode;
                el.parentNode.removeChild(el);
                //e.currentTarget.parentNode.style.display = 'none';
                window.parent.postMessage({action:"#db-extension#design-button#close"},"*");
            });
        }
    };

    /* build design button uri create */
    DBSDK.buildButtonUri = function (image, doctype, layout, width, height, unit, type) {
        image = image || '';
        doctype = doctype || '';
        layout = layout || '';
        width = width || 0;
        height = height || 0;
        unit = unit || 'px';
        var uri = '';
        if (image !== '') {
            uri = DBSDK.API_CREATE + '/image/w' + width + '/h' + height + '/' + win.btoa(image);
            if (doctype != ""){
                uri = DBSDK.API_CREATE + '/image/dt-' + doctype + '/' + win.btoa(image);
            }
            else{
                uri = DBSDK.API_CREATE + '/image/w' + width + '/h' + height + '/' + win.btoa(image);
            }
        }
        else if (doctype !== '' || layout !== '') {
            uri = DBSDK.API_CREATE;
            if (doctype !== '') {
                uri += '/' + doctype;
            }
            else {
                uri += '/dt';
            }
            if (layout !== '') {
                uri += '/' + layout;
            }
        }
        else {
            uri = DBSDK.API_CREATE + '/custom/' + width + '/' + height + '/' + unit;
        }
        var query = [];
        if (DBSDK.API.app_id !== '') {
            query.push('app_id=' + DBSDK.API.app_id);
        }
        if (query.length > 0) {
            for (var i = 0; i < query.length; i++) {
                uri += (i === 0 ? '?' : '&') + query[i];
            }
        }
        return uri;
    };

    DBSDK.buildButtonUriEdit = function (docid) {

        var uri = '';
        uri = DBSDK.API_CREATE + '/edit/' + docid;
        var query = [];
        if (DBSDK.API.app_id !== '') {
            query.push('app_id=' + DBSDK.API.app_id);
        }
        if (query.length > 0) {
            for (var i = 0; i < query.length; i++) {
                uri += (i === 0 ? '?' : '&') + query[i];
            }
        }
        return uri;
    };

    DBSDK.buildButtonUriCopy = function (docid) {
        var uri = '';
        uri = DBSDK.API_CREATE + '/copy/' + docid;
        var query = [];
        if (DBSDK.API.app_id !== '') {
            query.push('app_id=' + DBSDK.API.app_id);
        }
        if (query.length > 0) {
            for (var i = 0; i < query.length; i++) {
                uri += (i === 0 ? '?' : '&') + query[i];
            }
        }
        return uri;
    };

    DBSDK.buildUnsupportedUrl = function () {
        return DBSDK.BROWSER_UNSUPPORTED;
    };


    var DBMessageListener = function (e) {
        var action = e.data.action || '',
            frame = e.data.frame || '',
            design_frame, uuid, img, href;
        if (action === '#db#design-button#getconfig') {
            if (!!source_frame) {
                source_frame.contentWindow.postMessage({
                    action: '#db#designit#config',
                    config: DBSDK.config
                }, '*');
            }
        }
        else if (action === '#db#design-button#getconfiglogin') {
            if (!DBSDK.config.hasOwnProperty('auth')){
                DBSDK.config.auth = {};
            }
            if (!!source_frame) {
                source_frame.contentWindow.postMessage({
                    action: '#db#designit#configlogin',
                    config: DBSDK.config.auth
                }, '*');
            }
        }
        else if (action === '#db#design-button#export-callback') {
            if (typeof DBSDK.exportCallback === 'function') {
                design_frame = doc.getElementsByName(frame);
                if (design_frame.length) {
                    var downloadUrl = e.data.src || null;
                    var document_id = e.data.document_id || null;
                    uuid = design_frame[0].getAttribute('data-id');
                    var btn = DBSDK.$('.db-btn-designit[data-id="' + uuid + '"]')[0],
                        previewTarget = btn.getAttribute('data-db-preview-target');
                    // hide the iframe modal
                    DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-close-lightbox')[0].click();
                    setTimeout(function () {
                        if (previewTarget) {
                            DBSDK.exportCallback(downloadUrl,document_id, previewTarget);
                        }
                        else {
                            DBSDK.exportCallback(downloadUrl,document_id);
                        }
                    }, 0);
                }
            }
        }
        else if (action === '#db#design-button#quit') {
            design_frame = doc.getElementsByName(frame);
            if (design_frame.length) {
                uuid = design_frame[0].getAttribute('data-id');
                var overlay = DBSDK.$('.db-overlay[data-id="' + uuid + '"]')[0];
                overlay.parentNode.removeChild(overlay);
            }
        }
        else if (action === '#db#design-button#logout') {
            href = e.data.href || '';
            design_frame = doc.getElementsByName(frame);
            if (design_frame.length) {
                // cancel preview if user logged out
                // ...
                // create iframe to logout
                var iframe = doc.createElement('iframe');
                iframe.style.display = 'none';
                iframe.onload = function (e) {
                    doc.body.removeChild(iframe);
                };
                iframe.src = href;
                doc.body.appendChild(iframe);
                // remove all design it overlay
                var overlays = DBSDK.$('.db-overlay');
                for (var i = 0; i < overlays.length; i++) {
                    doc.body.removeChild(overlays[i]);
                }
            }
        }
        else if (action === '#db#design-button#getimagesize') {
            href = e.data.href || '';
            design_frame = doc.getElementsByName(frame);
            if (design_frame.length) {
                uuid = design_frame[0].getAttribute('data-id');
                img = DBSDK.$('.db-btn-designit[data-id="' + uuid + '"]')[0];
                DBSDK.$('.db-overlay[data-id="' + uuid + '"] iframe')[0].contentWindow.postMessage({
                    action: '#db#designit#imagesize',
                    width: img.naturalWidth || img.offsetWidth,
                    height: img.naturalHeight || img.offsetHeight
                }, '*');
            }
        }
        else if (action === '#db#design-button#start_design_tool') {
            var image = e.data.image || '';
            var param = e.data.param || '';
            startDesignTool(image,param);
        }
    };
    DBSDK.unbindEventHandler(window, 'message', DBMessageListener, false);
    DBSDK.bindEventHandler(window, 'message', DBMessageListener, false);

    /* reload button */
    DBSDK.documentReady(function () {
        if (win.DBSDK_Cfg.hasOwnProperty('export_callback')) {
            DBSDK.exportCallback = win.DBSDK_Cfg.export_callback;
        }
        DBSDK.config = JSON.parse(JSON.stringify(win.DBSDK_Cfg)) || {};
    });
})(document, window);


/***/ }),

/***/ "./designit.js":
/*!*********************!*\
  !*** ./designit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesignitPlugin; });
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_src_button_buttonview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src/button/buttonview */ "./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_src_iframe_iframeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src/iframe/iframeview */ "./node_modules/@ckeditor/ckeditor5-ui/src/iframe/iframeview.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ "./button.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/theme/icons/image.svg */ "./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg");
/* harmony import */ var _ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_4__);







const Designit = 'Designit';

var startDesignTool = function(image_src, param){
    if (typeof param != "object"){
        var doc_type = "blog-graphic";
    }
    else{
        var doc_type = param.doc_type
    }
    var status = 1;
    if (image_src == ""){
        // status = 0;
        // var designit_uri = DBSDK.COLLECTION_LIST + doc_type;
        status = 1;
        var designit_uri = DBSDK.buildButtonUri(image_src,doc_type,null,null,null,null,"button");
    }
    else{
        status = 1;
        var designit_uri = DBSDK.buildButtonUri(image_src,doc_type,null,null,null,null,"button");
    }
    window.DBSDK.uuid = DBSDK.guid();
    if (status){
        DBSDK.startDesignToolExtension(designit_uri,window.DBSDK.uuid);
    }
    else{
        window.open(designit_uri,'_blank');
    }
};

class DesignitPlugin extends _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_0__["default"] {
    init(){
        const editor = this.editor;
		const t = editor.t;

		// Add button to feature components.
        editor.ui.componentFactory.add( Designit , locale => {
            const view = new _ckeditor_ckeditor5_ui_src_button_buttonview__WEBPACK_IMPORTED_MODULE_1__["default"]( locale );
            const iframe_view = new _ckeditor_ckeditor5_ui_src_iframe_iframeview__WEBPACK_IMPORTED_MODULE_2__["default"]( locale );

            view.set( {
                label: t('Open dialog'),
                icon: _ckeditor_ckeditor5_core_theme_icons_image_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
            	let image_src = "";
            	let param = {
            		doc_type : "blog-graphic"
            	};
            	
            	startDesignTool(image_src, param);
            } );
            return view;
        })
    }
}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/src/plugin.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plugin; });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module core/plugin
 */




/**
 * The base class for CKEditor plugin classes.
 *
 * @implements module:core/plugin~PluginInterface
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class Plugin {
	/**
	 * @inheritDoc
	 */
	constructor( editor ) {
		/**
		 * The editor instance.
		 *
		 * Note that most editors implement the {@link module:core/editor/editorwithui~EditorWithUI} interface in addition
		 * to the base {@link module:core/editor/editor~Editor} interface. However, editors with an external UI
		 * (i.e. Bootstrap-based) or a headless editor may not implement the {@link module:core/editor/editorwithui~EditorWithUI}
		 * interface.
		 *
		 * Because of above, to make plugins more universal, it is recommended to split features into:
		 *  - The "editing" part that only uses the {@link module:core/editor/editor~Editor} interface.
		 *  - The "UI" part that uses both the {@link module:core/editor/editor~Editor} interface and
		 *  the {@link module:core/editor/editorwithui~EditorWithUI} interface.
		 *
		 * @readonly
		 * @member {module:core/editor/editor~Editor} #editor
		 */
		this.editor = editor;
	}

	/**
	 * @inheritDoc
	 */
	destroy() {
		this.stopListening();
	}
}

Object(_ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_1__["default"])( Plugin, _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_0__["default"] );

/**
 * The base interface for CKEditor plugins.
 *
 * In its minimal form it can be a simple function (it will be used as a constructor) that accepts
 * {@link module:core/editor/editor~Editor the editor} as a parameter.
 * It can also implement a few methods which, when present, will be used to properly initialize and destroy the plugin.
 *
 *		// A simple plugin that enables a data processor.
 *		function MyPlugin( editor ) {
 *			editor.data.processor = new MyDataProcessor();
 *		}
 *
 * In most cases, however, you will want to inherit from the {@link module:core/plugin~Plugin} class which implements the
 * {@link module:utils/observablemixin~ObservableMixin} and is, therefore, more convenient:
 *
 *		class MyPlugin extends Plugin {
 *			init() {
 *				// `listenTo()` and `editor` are available thanks to `Plugin`.
 *				// By using `listenTo()` you will ensure that the listener is removed when
 *				// the plugin is destroyed.
 *				this.listenTo( this.editor, 'dataReady', () => {
 *					// Do something when the data is ready.
 *				} );
 *			}
 *		}
 *
 * @interface PluginInterface
 */

/**
 * Creates a new plugin instance. This is the first step of the plugin initialization.
 * See also {@link #init} and {@link #afterInit}.
 *
 * A plugin is always instantiated after its {@link module:core/plugin~PluginInterface.requires dependencies} and the
 * {@link #init} and {@link #afterInit} methods are called in the same order.
 *
 * Usually, you will want to put your plugin's initialization code in the {@link #init} method.
 * The constructor can be understood as "before init" and used in special cases, just like
 * {@link #afterInit} serves the special "after init" scenarios (e.g.the code which depends on other
 * plugins, but which does not {@link module:core/plugin~PluginInterface.requires explicitly require} them).
 *
 * @method #constructor
 * @param {module:core/editor/editor~Editor} editor
 */

/**
 * An array of plugins required by this plugin.
 *
 * To keep the plugin class definition tight it is recommended to define this property as a static getter:
 *
 *		import Image from './image.js';
 *
 *		export default class ImageCaption {
 *			static get requires() {
 *				return [ Image ];
 *			}
 *		}
 *
 * @static
 * @readonly
 * @member {Array.<Function>|undefined} module:core/plugin~PluginInterface.requires
 */

/**
 * An optional name of the plugin. If set, the plugin will be available in
 * {@link module:core/plugincollection~PluginCollection#get} by its
 * name and its constructor. If not, then only by its constructor.
 *
 * The name should reflect the constructor name.
 *
 * To keep the plugin class definition tight it is recommended to define this property as a static getter:
 *
 *		export default class ImageCaption {
 *			static get pluginName() {
 *				return 'ImageCaption';
 *			}
 *		}
 *
 * Note: The native `Function.name` property could not be used to keep the plugin name because
 * it will be mangled during code minification.
 *
 * Naming a plugin is necessary to enable removing it through the
 * {@link module:core/editor/editorconfig~EditorConfig#removePlugins `config.removePlugins`} option.
 *
 * @static
 * @readonly
 * @member {String|undefined} module:core/plugin~PluginInterface.pluginName
 */

/**
 * The second stage (after plugin {@link #constructor}) of plugin initialization.
 * Unlike the plugin constructor this method can be asynchronous.
 *
 * A plugin's `init()` method is called after its {@link module:core/plugin~PluginInterface.requires dependencies} are initialized,
 * so in the same order as constructors of these plugins.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #init
 * @returns {null|Promise}
 */

/**
 * The third (and last) stage of plugin initialization. See also {@link #constructor} and {@link #init}.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #afterInit
 * @returns {null|Promise}
 */

/**
 * Destroys the plugin.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #destroy
 * @returns {null|Promise}
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/theme/icons/image.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z\" fill=\"#000\" fill-rule=\"nonzero\"/></svg>\n"

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonView; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _icon_iconview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/iconview */ "./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js");
/* harmony import */ var _tooltip_tooltipview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip/tooltipview */ "./node_modules/@ckeditor/ckeditor5-ui/src/tooltip/tooltipview.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/keyboard */ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js");
/* harmony import */ var _theme_components_button_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/components/button/button.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css");
/* harmony import */ var _theme_components_button_button_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme_components_button_button_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/button/buttonview
 */










/**
 * The button view class.
 *
 *		const view = new ButtonView();
 *
 *		view.set( {
 *			label: 'A button',
 *			keystroke: 'Ctrl+B',
 *			tooltip: true,
 *			withText: true
 *		} );
 *
 *		view.render();
 *
 *		document.body.append( view.element );
 *
 * @extends module:ui/view~View
 * @implements module:ui/button/button~Button
 */
class ButtonView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		const bind = this.bindTemplate;
		const ariaLabelUid = Object(_ckeditor_ckeditor5_utils_src_uid__WEBPACK_IMPORTED_MODULE_3__["default"])();

		// Implement the Button interface.
		this.set( 'class' );
		this.set( 'labelStyle' );
		this.set( 'icon' );
		this.set( 'isEnabled', true );
		this.set( 'isOn', false );
		this.set( 'isVisible', true );
		this.set( 'keystroke' );
		this.set( 'label' );
		this.set( 'tabindex', -1 );
		this.set( 'tooltip' );
		this.set( 'tooltipPosition', 's' );
		this.set( 'type', 'button' );
		this.set( 'withText', false );

		/**
		 * Collection of the child views inside of the button {@link #element}.
		 *
		 * @readonly
		 * @member {module:ui/viewcollection~ViewCollection}
		 */
		this.children = this.createCollection();

		/**
		 * Tooltip of the button view. It is configurable using the {@link #tooltip tooltip attribute}.
		 *
		 * @readonly
		 * @member {module:ui/tooltip/tooltipview~TooltipView} #tooltipView
		 */
		this.tooltipView = this._createTooltipView();

		/**
		 * Label of the button view. It is configurable using the {@link #label label attribute}.
		 *
		 * @readonly
		 * @member {module:ui/view~View} #labelView
		 */
		this.labelView = this._createLabelView( ariaLabelUid );

		/**
		 * The icon view of the button. Will be added to {@link #children} when the
		 * {@link #icon icon attribute} is defined.
		 *
		 * @readonly
		 * @member {module:ui/icon/iconview~IconView} #iconView
		 */
		this.iconView = new _icon_iconview__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.iconView.extendTemplate( {
			attributes: {
				class: 'ck-button__icon'
			}
		} );

		/**
		 * Tooltip of the button bound to the template.
		 *
		 * @see #tooltip
		 * @see #_getTooltipString
		 * @private
		 * @observable
		 * @member {Boolean} #_tooltipString
		 */
		this.bind( '_tooltipString' ).to(
			this, 'tooltip',
			this, 'label',
			this, 'keystroke',
			this._getTooltipString.bind( this )
		);

		this.setTemplate( {
			tag: 'button',

			attributes: {
				class: [
					'ck',
					'ck-button',
					bind.to( 'class' ),
					bind.if( 'isEnabled', 'ck-disabled', value => !value ),
					bind.if( 'isVisible', 'ck-hidden', value => !value ),
					bind.to( 'isOn', value => value ? 'ck-on' : 'ck-off' ),
					bind.if( 'withText', 'ck-button_with-text' )
				],
				type: bind.to( 'type', value => value ? value : 'button' ),
				tabindex: bind.to( 'tabindex' ),
				'aria-labelledby': `ck-editor__aria-label_${ ariaLabelUid }`,
				'aria-disabled': bind.if( 'isEnabled', true, value => !value ),
				'aria-pressed': bind.if( 'isOn', true )
			},

			children: this.children,

			on: {
				mousedown: bind.to( evt => {
					evt.preventDefault();
				} ),

				click: bind.to( evt => {
					// We can't make the button disabled using the disabled attribute, because it won't be focusable.
					// Though, shouldn't this condition be moved to the button controller?
					if ( this.isEnabled ) {
						this.fire( 'execute' );
					} else {
						// Prevent the default when button is disabled, to block e.g.
						// automatic form submitting. See ckeditor/ckeditor5-link#74.
						evt.preventDefault();
					}
				} )
			}
		} );
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		if ( this.icon ) {
			this.iconView.bind( 'content' ).to( this, 'icon' );
			this.children.add( this.iconView );
		}

		this.children.add( this.tooltipView );
		this.children.add( this.labelView );
	}

	/**
	 * Focuses the {@link #element} of the button.
	 */
	focus() {
		this.element.focus();
	}

	/**
	 * Creates a {@link module:ui/tooltip/tooltipview~TooltipView} instance and binds it with button
	 * attributes.
	 *
	 * @private
	 * @returns {module:ui/tooltip/tooltipview~TooltipView}
	 */
	_createTooltipView() {
		const tooltipView = new _tooltip_tooltipview__WEBPACK_IMPORTED_MODULE_2__["default"]();

		tooltipView.bind( 'text' ).to( this, '_tooltipString' );
		tooltipView.bind( 'position' ).to( this, 'tooltipPosition' );

		return tooltipView;
	}

	/**
	 * Creates a label view instance and binds it with button attributes.
	 *
	 * @private
	 * @param {String} ariaLabelUid The aria label UID.
	 * @returns {module:ui/view~View}
	 */
	_createLabelView( ariaLabelUid ) {
		const labelView = new _view__WEBPACK_IMPORTED_MODULE_0__["default"]();
		const bind = this.bindTemplate;

		labelView.setTemplate( {
			tag: 'span',

			attributes: {
				class: [
					'ck',
					'ck-button__label'
				],
				style: bind.to( 'labelStyle' ),
				id: `ck-editor__aria-label_${ ariaLabelUid }`,
			},

			children: [
				{
					text: this.bindTemplate.to( 'label' )
				}
			]
		} );

		return labelView;
	}

	/**
	 * Gets the text for the {@link #tooltipView} from the combination of
	 * {@link #tooltip}, {@link #label} and {@link #keystroke} attributes.
	 *
	 * @private
	 * @see #tooltip
	 * @see #_tooltipString
	 * @param {Boolean|String|Function} tooltip Button tooltip.
	 * @param {String} label Button label.
	 * @param {String} keystroke Button keystroke.
	 * @returns {String}
	 */
	_getTooltipString( tooltip, label, keystroke ) {
		if ( tooltip ) {
			if ( typeof tooltip == 'string' ) {
				return tooltip;
			} else {
				if ( keystroke ) {
					keystroke = Object(_ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_4__["getEnvKeystrokeText"])( keystroke );
				}

				if ( tooltip instanceof Function ) {
					return tooltip( label, keystroke );
				} else {
					return `${ label }${ keystroke ? ` (${ keystroke })` : '' }`;
				}
			}
		}

		return '';
	}
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconView; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _theme_components_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/components/icon/icon.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css");
/* harmony import */ var _theme_components_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_components_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global DOMParser */

/**
 * @module ui/icon/iconview
 */





/**
 * The icon view class.
 *
 * @extends module:ui/view~View
 */
class IconView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
	/**
	 * @inheritDoc
	 */
	constructor() {
		super();

		const bind = this.bindTemplate;

		/**
		 * The SVG source of the icon.
		 *
		 * @observable
		 * @member {String} #content
		 */
		this.set( 'content', '' );

		/**
		 * This attribute specifies the boundaries to which the
		 * icon content should stretch.
		 *
		 * @observable
		 * @default '0 0 20 20'
		 * @member {String} #viewBox
		 */
		this.set( 'viewBox', '0 0 20 20' );

		/**
		 * The fill color of the child `path.ck-icon__fill`.
		 *
		 * @observable
		 * @default ''
		 * @member {String} #fillColor
		 */
		this.set( 'fillColor', '' );

		this.setTemplate( {
			tag: 'svg',
			ns: 'http://www.w3.org/2000/svg',
			attributes: {
				class: [
					'ck',
					'ck-icon'
				],
				viewBox: bind.to( 'viewBox' )
			}
		} );
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		this._updateXMLContent();
		this._colorFillPaths();

		// This is a hack for lack of innerHTML binding.
		// See: https://github.com/ckeditor/ckeditor5-ui/issues/99.
		this.on( 'change:content', () => {
			this._updateXMLContent();
			this._colorFillPaths();
		} );

		this.on( 'change:fillColor', () => {
			this._colorFillPaths();
		} );
	}

	/**
	 * Updates the {@link #element} with the value of {@link #content}.
	 *
	 * @private
	 */
	_updateXMLContent() {
		if ( this.content ) {
			const parsed = new DOMParser().parseFromString( this.content.trim(), 'image/svg+xml' );
			const svg = parsed.querySelector( 'svg' );
			const viewBox = svg.getAttribute( 'viewBox' );

			if ( viewBox ) {
				this.viewBox = viewBox;
			}

			this.element.innerHTML = '';

			while ( svg.childNodes.length > 0 ) {
				this.element.appendChild( svg.childNodes[ 0 ] );
			}
		}
	}

	/**
	 * Fills all child `path.ck-icon__fill` with the `#fillColor`.
	 *
	 * @private
	 */
	_colorFillPaths() {
		if ( this.fillColor ) {
			this.element.querySelectorAll( '.ck-icon__fill' ).forEach( path => {
				path.style.fill = this.fillColor;
			} );
		}
	}
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/iframe/iframeview.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/iframe/iframeview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IframeView; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/iframe/iframeview
 */



/**
 * The iframe view class.
 *
 * @extends module:ui/view~View
 */
class IframeView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
	/**
	 * Creates a new instance of the iframe view.
	 *
	 * @param {module:utils/locale~Locale} [locale] The locale instance.
	 */
	constructor( locale ) {
		super( locale );

		const bind = this.bindTemplate;

		this.setTemplate( {
			tag: 'iframe',
			attributes: {
				class: [
					'ck',
					'ck-reset_all'
				],
				// It seems that we need to allow scripts in order to be able to listen to events.
				// TODO: Research that. Perhaps the src must be set?
				sandbox: 'allow-same-origin allow-scripts'
			},
			on: {
				load: bind.to( 'loaded' )
			}
		} );
	}

	/**
	 * Renders the iframe's {@link #element} and returns a `Promise` for asynchronous
	 * child `contentDocument` loading process.
	 *
	 * @returns {Promise} A promise which resolves once the iframe `contentDocument` has
	 * been {@link #event:loaded}.
	 */
	render() {
		return new Promise( resolve => {
			this.on( 'loaded', resolve );
			super.render();
		} );
	}
}

/**
 * Fired when the DOM iframe's `contentDocument` finished loading.
 *
 * @event loaded
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/template.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/template.js ***!
  \*************************************************************/
/*! exports provided: default, TemplateBinding, TemplateToBinding, TemplateIfBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateBinding", function() { return TemplateBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateToBinding", function() { return TemplateToBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateIfBinding", function() { return TemplateIfBinding; });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_emittermixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _viewcollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewcollection */ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_lib_lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/lib/lodash/cloneDeepWith */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/cloneDeepWith.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_lib_lodash_isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/lib/lodash/isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/dom/isnode */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/log */ "./node_modules/@ckeditor/ckeditor5-utils/src/log.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/template
 */

/* global document */











const xhtmlNs = 'http://www.w3.org/1999/xhtml';

/**
 * A basic Template class. It renders a DOM HTML element or text from a
 * {@link module:ui/template~TemplateDefinition definition} and supports element attributes, children,
 * bindings to {@link module:utils/observablemixin~Observable observables} and DOM event propagation.
 *
 * A simple template can look like this:
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			attributes: {
 *				class: 'foo',
 *				style: {
 *					backgroundColor: 'yellow'
 *				}
 *			},
 *			on: {
 *				click: bind.to( 'clicked' )
 *			}
 *			children: [
 *				'A paragraph.'
 *			]
 *		} ).render();
 *
 * and it will render the following HTML element:
 *
 *		<p class="foo" style="background-color: yellow;">A paragraph.</p>
 *
 * Additionally, the `observable` will always fire `clicked` upon clicking `<p>` in the DOM.
 *
 * See {@link module:ui/template~TemplateDefinition} to know more about templates and complex
 * template definitions.
 *
* @mixes module:utils/emittermixin~EmitterMixin
 */
class Template {
	/**
	 * Creates an instance of the {@link ~Template} class.
	 *
	 * @param {module:ui/template~TemplateDefinition} def The definition of the template.
	 */
	constructor( def ) {
		Object.assign( this, normalize( clone( def ) ) );

		/**
		 * Indicates whether this particular Template instance has been
		 * {@link #render rendered}.
		 *
		 * @readonly
		 * @protected
		 * @member {Boolean}
		 */
		this._isRendered = false;

		/**
		 * The tag (`tagName`) of this template, e.g. `div`. It also indicates that the template
		 * renders to an HTML element.
		 *
		 * @member {String} #tag
		 */

		/**
		 * The text of the template. It also indicates that the template renders to a DOM text node.
		 *
		 * @member {Array.<String|module:ui/template~TemplateValueSchema>} #text
		 */

		/**
		 * The attributes of the template, e.g. `{ id: [ 'ck-id' ] }`, corresponding with
		 * the attributes of an HTML element.
		 *
		 * **Note**: This property only makes sense when {@link #tag} is defined.
		 *
		 * @member {Object} #attributes
		 */

		/**
		 * The children of the template. They can be either:
		 * * independent instances of {@link ~Template} (sub–templates),
		 * * native DOM Nodes.
		 *
		 * **Note**: This property only makes sense when {@link #tag} is defined.
		 *
		 * @member {Array.<module:ui/template~Template|Node>} #children
		 */

		/**
		 * The DOM event listeners of the template.
		 *
		 * @member {Object} #eventListeners
		 */

		/**
		 * The data used by the {@link #revert} method to restore a node to its original state.
		 *
		 * See: {@link #apply}.
		 *
		 * @readonly
		 * @protected
		 * @member {module:ui/template~RenderData}
		 */
		this._revertData = null;
	}

	/**
	 * Renders a DOM Node (an HTML element or text) out of the template.
	 *
	 *		const domNode = new Template( { ... } ).render();
	 *
	 * See: {@link #apply}.
	 *
	 * @returns {HTMLElement|Text}
	 */
	render() {
		const node = this._renderNode( {
			intoFragment: true
		} );

		this._isRendered = true;

		return node;
	}

	/**
	 * Applies the template to an existing DOM Node, either HTML element or text.
	 *
	 * **Note:** No new DOM nodes will be created. Applying extends
	 * {@link module:ui/template~TemplateDefinition attributes} and
	 * {@link module:ui/template~TemplateDefinition event listeners} only.
	 *
	 * **Note:** Existing `class` and `style` attributes are extended when a template
	 * is applied to an HTML element, while other attributes and `textContent` are overridden.
	 *
	 * **Note:** The process of applying a template can be easily reverted using the
	 * {@link module:ui/template~Template#revert} method.
	 *
	 *		const element = document.createElement( 'div' );
	 *		const bind = Template.bind( observable, emitter );
	 *
	 *		new Template( {
	 *			attrs: {
	 *				id: 'first-div',
	 *				class: bind.to( 'divClass' )
	 *			},
	 *			on: {
	 *				click: bind( 'elementClicked' ) // Will be fired by the observable.
	 *			}
	 *			children: [
	 *				'Div text.'
	 *			]
	 *		} ).apply( element );
	 *
	 *		element.outerHTML == "<div id="first-div" class="my-div">Div text.</div>"
	 *
	 * @see module:ui/template~Template#render
	 * @see module:ui/template~Template#revert
	 * @param {Node} node Root node for the template to apply.
	 */
	apply( node ) {
		this._revertData = getEmptyRevertData();

		this._renderNode( {
			node,
			isApplying: true,
			revertData: this._revertData
		} );

		return node;
	}

	/**
	 * Reverts a template {@link module:ui/template~Template#apply applied} to a DOM node.
	 *
	 * @param {Node} node The root node for the template to revert. In most of the cases, it is the
	 * same node used by {@link module:ui/template~Template#apply}.
	 */
	revert( node ) {
		if ( !this._revertData ) {
			/**
			 * Attempting to revert a template which has not been applied yet.
			 *
			 * @error ui-template-revert-not-applied
			 */
			throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]( 'ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.' );
		}

		this._revertTemplateFromNode( node, this._revertData );
	}

	/**
	 * Returns an iterator which traverses the template in search of {@link module:ui/view~View}
	 * instances and returns them one by one.
	 *
	 *		const viewFoo = new View();
	 *		const viewBar = new View();
	 *		const viewBaz = new View();
	 *		const template = new Template( {
	 *			tag: 'div',
	 *			children: [
	 *				viewFoo,
	 *				{
	 *					tag: 'div',
	 *					children: [
	 *						viewBar
	 *					]
	 *				},
	 *				viewBaz
	 *			]
	 *		} );
	 *
	 *		// Logs: viewFoo, viewBar, viewBaz
	 *		for ( const view of template.getViews() ) {
	 *			console.log( view );
	 *		}
	 *
	 * @returns {Iterable.<module:ui/view~View>}
	 */
	* getViews() {
		function* search( def ) {
			if ( def.children ) {
				for ( const child of def.children ) {
					if ( isView( child ) ) {
						yield child;
					} else if ( isTemplate( child ) ) {
						yield* search( child );
					}
				}
			}
		}

		yield* search( this );
	}

	/**
	 * An entry point to the interface which binds DOM nodes to
	 * {@link module:utils/observablemixin~Observable observables}.
	 * There are two types of bindings:
	 *
	 * * HTML element attributes or text `textContent` synchronized with attributes of an
	 * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}
	 * and {@link module:ui/template~BindChain#if}.
	 *
	 *		const bind = Template.bind( observable, emitter );
	 *
	 *		new Template( {
	 *			attrs: {
	 *				// Binds the element "class" attribute to observable#classAttribute.
	 *				class: bind.to( 'classAttribute' )
	 *			}
	 *		} ).render();
	 *
	 * * DOM events fired on HTML element propagated through
	 * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}.
	 *
	 *		const bind = Template.bind( observable, emitter );
	 *
	 *		new Template( {
	 *			on: {
	 *				// Will be fired by the observable.
	 *				click: bind( 'elementClicked' )
	 *			}
	 *		} ).render();
	 *
	 * Also see {@link module:ui/view~View#bindTemplate}.
	 *
	 * @param {module:utils/observablemixin~Observable} observable An observable which provides boundable attributes.
	 * @param {module:utils/emittermixin~Emitter} emitter An emitter that listens to observable attribute
	 * changes or DOM Events (depending on the kind of the binding). Usually, a {@link module:ui/view~View} instance.
	 * @returns {module:ui/template~BindChain}
	 */
	static bind( observable, emitter ) {
		return {
			to( eventNameOrFunctionOrAttribute, callback ) {
				return new TemplateToBinding( {
					eventNameOrFunction: eventNameOrFunctionOrAttribute,
					attribute: eventNameOrFunctionOrAttribute,
					observable, emitter, callback
				} );
			},

			if( attribute, valueIfTrue, callback ) {
				return new TemplateIfBinding( {
					observable, emitter, attribute, valueIfTrue, callback
				} );
			}
		};
	}

	/**
	 * Extends an existing {@link module:ui/template~Template} instance with some additional content
	 * from another {@link module:ui/template~TemplateDefinition}.
	 *
	 *		const bind = Template.bind( observable, emitter );
	 *
	 *		const template = new Template( {
	 *			tag: 'p',
	 *			attributes: {
	 *				class: 'a',
	 *				data-x: bind.to( 'foo' )
	 *			},
	 *			children: [
	 *				{
	 *					tag: 'span',
	 *					attributes: {
	 *						class: 'b'
	 *					},
	 *					children: [
	 *						'Span'
	 *					]
	 *				}
	 *			]
	 *		 } );
	 *
	 *		// Instance-level extension.
	 *		Template.extend( template, {
	 *			attributes: {
	 *				class: 'b',
	 *				data-x: bind.to( 'bar' )
	 *			},
	 *			children: [
	 *				{
	 *					attributes: {
	 *						class: 'c'
	 *					}
	 *				}
	 *			]
	 *		} );
	 *
	 *		// Child extension.
	 *		Template.extend( template.children[ 0 ], {
	 *			attributes: {
	 *				class: 'd'
	 *			}
	 *		} );
	 *
	 * the `outerHTML` of `template.render()` is:
	 *
	 *		<p class="a b" data-x="{ observable.foo } { observable.bar }">
	 *			<span class="b c d">Span</span>
	 *		</p>
	 *
	 * @param {module:ui/template~Template} template An existing template instance to be extended.
	 * @param {module:ui/template~TemplateDefinition} def Additional definition to be applied to a template.
	 */
	static extend( template, def ) {
		if ( template._isRendered ) {
			/**
			 * Extending a template after rendering may not work as expected. To make sure
			 * the {@link module:ui/template~Template.extend extending} works for an element,
			 * make sure it happens before {@link #render} is called.
			 *
			 * @error template-extend-render
			 */
			_ckeditor_ckeditor5_utils_src_log__WEBPACK_IMPORTED_MODULE_8__["default"].warn( 'template-extend-render: Attempting to extend a template which has already been rendered.' );
		}

		extendTemplate( template, normalize( clone( def ) ) );
	}

	/**
	 * Renders a DOM Node (either an HTML element or text) out of the template.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderNode( data ) {
		let isInvalid;

		if ( data.node ) {
			// When applying, a definition cannot have "tag" and "text" at the same time.
			isInvalid = this.tag && this.text;
		} else {
			// When rendering, a definition must have either "tag" or "text": XOR( this.tag, this.text ).
			isInvalid = this.tag ? this.text : !this.text;
		}

		if ( isInvalid ) {
			/**
			 * Node definition cannot have the "tag" and "text" properties at the same time.
			 * Node definition must have either "tag" or "text" when rendering a new Node.
			 *
			 * @error ui-template-wrong-syntax
			 */
			throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"](
				'ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.'
			);
		}

		if ( this.text ) {
			return this._renderText( data );
		} else {
			return this._renderElement( data );
		}
	}

	/**
	 * Renders an HTML element out of the template.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderElement( data ) {
		let node = data.node;

		if ( !node ) {
			node = data.node = document.createElementNS( this.ns || xhtmlNs, this.tag );
		}

		this._renderAttributes( data );
		this._renderElementChildren( data );
		this._setUpListeners( data );

		return node;
	}

	/**
	 * Renders a text node out of {@link module:ui/template~Template#text}.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderText( data ) {
		let node = data.node;

		// Save the original textContent to revert it in #revert().
		if ( node ) {
			data.revertData.text = node.textContent;
		} else {
			node = data.node = document.createTextNode( '' );
		}

		// Check if this Text Node is bound to Observable. Cases:
		//
		//		text: [ Template.bind( ... ).to( ... ) ]
		//
		//		text: [
		//			'foo',
		//			Template.bind( ... ).to( ... ),
		//			...
		//		]
		//
		if ( hasTemplateBinding( this.text ) ) {
			this._bindToObservable( {
				schema: this.text,
				updater: getTextUpdater( node ),
				data
			} );
		}
		// Simply set text. Cases:
		//
		//		text: [ 'all', 'are', 'static' ]
		//
		//		text: [ 'foo' ]
		//
		else {
			node.textContent = this.text.join( '' );
		}

		return node;
	}

	/**
	 * Renders HTML element attributes out of {@link module:ui/template~Template#attributes}.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderAttributes( data ) {
		let attrName, attrValue, domAttrValue, attrNs;

		if ( !this.attributes ) {
			return;
		}

		const node = data.node;
		const revertData = data.revertData;

		for ( attrName in this.attributes ) {
			// Current attribute value in DOM.
			domAttrValue = node.getAttribute( attrName );

			// The value to be set.
			attrValue = this.attributes[ attrName ];

			// Save revert data.
			if ( revertData ) {
				revertData.attributes[ attrName ] = domAttrValue;
			}

			// Detect custom namespace:
			//
			//		class: {
			//			ns: 'abc',
			//			value: Template.bind( ... ).to( ... )
			//		}
			//
			attrNs = ( Object(_ckeditor_ckeditor5_utils_src_lib_lodash_isObject__WEBPACK_IMPORTED_MODULE_6__["default"])( attrValue[ 0 ] ) && attrValue[ 0 ].ns ) ? attrValue[ 0 ].ns : null;

			// Activate binding if one is found. Cases:
			//
			//		class: [
			//			Template.bind( ... ).to( ... )
			//		]
			//
			//		class: [
			//			'bar',
			//			Template.bind( ... ).to( ... ),
			//			'baz'
			//		]
			//
			//		class: {
			//			ns: 'abc',
			//			value: Template.bind( ... ).to( ... )
			//		}
			//
			if ( hasTemplateBinding( attrValue ) ) {
				// Normalize attributes with additional data like namespace:
				//
				//		class: {
				//			ns: 'abc',
				//			value: [ ... ]
				//		}
				//
				const valueToBind = attrNs ? attrValue[ 0 ].value : attrValue;

				// Extend the original value of attributes like "style" and "class",
				// don't override them.
				if ( revertData && shouldExtend( attrName ) ) {
					valueToBind.unshift( domAttrValue );
				}

				this._bindToObservable( {
					schema: valueToBind,
					updater: getAttributeUpdater( node, attrName, attrNs ),
					data
				} );
			}

			// Style attribute could be an Object so it needs to be parsed in a specific way.
			//
			//		style: {
			//			width: '100px',
			//			height: Template.bind( ... ).to( ... )
			//		}
			//
			else if ( attrName == 'style' && typeof attrValue[ 0 ] !== 'string' ) {
				this._renderStyleAttribute( attrValue[ 0 ], data );
			}

			// Otherwise simply set the static attribute:
			//
			//		class: [ 'foo' ]
			//
			//		class: [ 'all', 'are', 'static' ]
			//
			//		class: [
			//			{
			//				ns: 'abc',
			//				value: [ 'foo' ]
			//			}
			//		]
			//
			else {
				// Extend the original value of attributes like "style" and "class",
				// don't override them.
				if ( revertData && domAttrValue && shouldExtend( attrName ) ) {
					attrValue.unshift( domAttrValue );
				}

				attrValue = attrValue
					// Retrieve "values" from:
					//
					//		class: [
					//			{
					//				ns: 'abc',
					//				value: [ ... ]
					//			}
					//		]
					//
					.map( val => val ? ( val.value || val ) : val )
					// Flatten the array.
					.reduce( ( prev, next ) => prev.concat( next ), [] )
					// Convert into string.
					.reduce( arrayValueReducer, '' );

				if ( !isFalsy( attrValue ) ) {
					node.setAttributeNS( attrNs, attrName, attrValue );
				}
			}
		}
	}

	/**
	 * Renders the `style` attribute of an HTML element based on
	 * {@link module:ui/template~Template#attributes}.
	 *
	 * A style attribute is an {Object} with static values:
	 *
	 *		attributes: {
	 *			style: {
	 *				color: 'red'
	 *			}
	 *		}
	 *
	 * or values bound to {@link module:ui/model~Model} properties:
	 *
	 *		attributes: {
	 *			style: {
	 *				color: bind.to( ... )
	 *			}
	 *		}
	 *
	 * Note: The `style` attribute is rendered without setting the namespace. It does not seem to be
	 * needed.
	 *
	 * @private
	 * @param {Object} styles Styles located in `attributes.style` of {@link module:ui/template~TemplateDefinition}.
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderStyleAttribute( styles, data ) {
		const node = data.node;

		for ( const styleName in styles ) {
			const styleValue = styles[ styleName ];

			// Cases:
			//
			//		style: {
			//			color: bind.to( 'attribute' )
			//		}
			//
			if ( hasTemplateBinding( styleValue ) ) {
				this._bindToObservable( {
					schema: [ styleValue ],
					updater: getStyleUpdater( node, styleName ),
					data
				} );
			}

			// Cases:
			//
			//		style: {
			//			color: 'red'
			//		}
			//
			else {
				node.style[ styleName ] = styleValue;
			}
		}
	}

	/**
	 * Recursively renders HTML element's children from {@link module:ui/template~Template#children}.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_renderElementChildren( data ) {
		const node = data.node;
		const container = data.intoFragment ? document.createDocumentFragment() : node;
		const isApplying = data.isApplying;
		let childIndex = 0;

		for ( const child of this.children ) {
			if ( isViewCollection( child ) ) {
				if ( !isApplying ) {
					child.setParent( node );

					// Note: ViewCollection renders its children.
					for ( const view of child ) {
						container.appendChild( view.element );
					}
				}
			} else if ( isView( child ) ) {
				if ( !isApplying ) {
					if ( !child.isRendered ) {
						child.render();
					}

					container.appendChild( child.element );
				}
			} else if ( Object(_ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_7__["default"])( child ) ) {
				container.appendChild( child );
			} else {
				if ( isApplying ) {
					const revertData = data.revertData;
					const childRevertData = getEmptyRevertData();

					revertData.children.push( childRevertData );

					child._renderNode( {
						node: container.childNodes[ childIndex++ ],
						isApplying: true,
						revertData: childRevertData
					} );
				} else {
					container.appendChild( child.render() );
				}
			}
		}

		if ( data.intoFragment ) {
			node.appendChild( container );
		}
	}

	/**
	 * Activates `on` event listeners from the {@link module:ui/template~TemplateDefinition}
	 * on an HTML element.
	 *
	 * @protected
	 * @param {module:ui/template~RenderData} data Rendering data.
	 */
	_setUpListeners( data ) {
		if ( !this.eventListeners ) {
			return;
		}

		for ( const key in this.eventListeners ) {
			const revertBindings = this.eventListeners[ key ].map( schemaItem => {
				const [ domEvtName, domSelector ] = key.split( '@' );

				return schemaItem.activateDomEventListener( domEvtName, domSelector, data );
			} );

			if ( data.revertData ) {
				data.revertData.bindings.push( revertBindings );
			}
		}
	}

	/**
	 * For a given {@link module:ui/template~TemplateValueSchema} containing {@link module:ui/template~TemplateBinding}
	 * activates the binding and sets its initial value.
	 *
	 * Note: {@link module:ui/template~TemplateValueSchema} can be for HTML element attributes or
	 * text node `textContent`.
	 *
	 * @protected
	 * @param {Object} options Binding options.
	 * @param {module:ui/template~TemplateValueSchema} options.schema
	 * @param {Function} options.updater A function which updates the DOM (like attribute or text).
	 * @param {module:ui/template~RenderData} options.data Rendering data.
	 */
	_bindToObservable( { schema, updater, data } ) {
		const revertData = data.revertData;

		// Set initial values.
		syncValueSchemaValue( schema, updater, data );

		const revertBindings = schema
			// Filter "falsy" (false, undefined, null, '') value schema components out.
			.filter( item => !isFalsy( item ) )
			// Filter inactive bindings from schema, like static strings ('foo'), numbers (42), etc.
			.filter( item => item.observable )
			// Once only the actual binding are left, let the emitter listen to observable change:attribute event.
			// TODO: Reduce the number of listeners attached as many bindings may listen
			// to the same observable attribute.
			.map( templateBinding => templateBinding.activateAttributeListener( schema, updater, data ) );

		if ( revertData ) {
			revertData.bindings.push( revertBindings );
		}
	}

	/**
	 * Reverts {@link module:ui/template~RenderData#revertData template data} from a node to
	 * return it to the original state.
	 *
	 * @protected
	 * @param {HTMLElement|Text} node A node to be reverted.
	 * @param {module:ui/template~RenderData#revertData} revertData Stores information about
	 * what changes have been made by {@link #apply} to the node.
	 */
	_revertTemplateFromNode( node, revertData ) {
		for ( const binding of revertData.bindings ) {
			// Each binding may consist of several observable+observable#attribute.
			// like the following has 2:
			//
			//		class: [
			//			'x',
			//			bind.to( 'foo' ),
			//			'y',
			//			bind.to( 'bar' )
			//		]
			//
			for ( const revertBinding of binding ) {
				revertBinding();
			}
		}

		if ( revertData.text ) {
			node.textContent = revertData.text;

			return;
		}

		for ( const attrName in revertData.attributes ) {
			const attrValue = revertData.attributes[ attrName ];

			// When the attribute has **not** been set before #apply().
			if ( attrValue === null ) {
				node.removeAttribute( attrName );
			} else {
				node.setAttribute( attrName, attrValue );
			}
		}

		for ( let i = 0; i < revertData.children.length; ++i ) {
			this._revertTemplateFromNode( node.childNodes[ i ], revertData.children[ i ] );
		}
	}
}

Object(_ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_1__["default"])( Template, _ckeditor_ckeditor5_utils_src_emittermixin__WEBPACK_IMPORTED_MODULE_2__["default"] );

/**
 * Describes a binding created by the {@link module:ui/template~Template.bind} interface.
 *
 * @protected
 */
class TemplateBinding {
	/**
	 * Creates an instance of the {@link module:ui/template~TemplateBinding} class.
	 *
	 * @param {module:ui/template~TemplateDefinition} def The definition of the binding.
	 */
	constructor( def ) {
		Object.assign( this, def );

		/**
		 * An observable instance of the binding. It either:
		 *
		 * * provides the attribute with the value,
		 * * or passes the event when a corresponding DOM event is fired.
		 *
		 * @member {module:utils/observablemixin~ObservableMixin} module:ui/template~TemplateBinding#observable
		 */

		/**
		 * An {@link module:utils/emittermixin~Emitter} used by the binding to:
		 *
		 * * listen to the attribute change in the {@link module:ui/template~TemplateBinding#observable},
		 * * or listen to the event in the DOM.
		 *
		 * @member {module:utils/emittermixin~EmitterMixin} module:ui/template~TemplateBinding#emitter
		 */

		/**
		 * The name of the {@link module:ui/template~TemplateBinding#observable observed attribute}.
		 *
		 * @member {String} module:ui/template~TemplateBinding#attribute
		 */

		/**
		 * A custom function to process the value of the {@link module:ui/template~TemplateBinding#attribute}.
		 *
		 * @member {Function} [module:ui/template~TemplateBinding#callback]
		 */
	}

	/**
	 * Returns the value of the binding. It is the value of the {@link module:ui/template~TemplateBinding#attribute} in
	 * {@link module:ui/template~TemplateBinding#observable}. The value may be processed by the
	 * {@link module:ui/template~TemplateBinding#callback}, if such has been passed to the binding.
	 *
	 * @param {Node} [node] A native DOM node, passed to the custom {@link module:ui/template~TemplateBinding#callback}.
	 * @returns {*} The value of {@link module:ui/template~TemplateBinding#attribute} in
	 * {@link module:ui/template~TemplateBinding#observable}.
	 */
	getValue( node ) {
		const value = this.observable[ this.attribute ];

		return this.callback ? this.callback( value, node ) : value;
	}

	/**
	 * Activates the listener which waits for changes of the {@link module:ui/template~TemplateBinding#attribute} in
	 * {@link module:ui/template~TemplateBinding#observable}, then updates the DOM with the aggregated
	 * value of {@link module:ui/template~TemplateValueSchema}.
	 *
	 * @param {module:ui/template~TemplateValueSchema} schema A full schema to generate an attribute or text in the DOM.
	 * @param {Function} updater A DOM updater function used to update the native DOM attribute or text.
	 * @param {module:ui/template~RenderData} data Rendering data.
	 * @returns {Function} A function to sever the listener binding.
	 */
	activateAttributeListener( schema, updater, data ) {
		const callback = () => syncValueSchemaValue( schema, updater, data );

		this.emitter.listenTo( this.observable, 'change:' + this.attribute, callback );

		// Allows revert of the listener.
		return () => {
			this.emitter.stopListening( this.observable, 'change:' + this.attribute, callback );
		};
	}
}

/**
 * Describes either:
 *
 * * a binding to an {@link module:utils/observablemixin~Observable},
 * * or a native DOM event binding.
 *
 * It is created by the {@link module:ui/template~BindChain#to} method.
 *
 * @protected
 */
class TemplateToBinding extends TemplateBinding {
	/**
	 * Activates the listener for the native DOM event, which when fired, is propagated by
	 * the {@link module:ui/template~TemplateBinding#emitter}.
	 *
	 * @param {String} domEvtName The name of the native DOM event.
	 * @param {String} domSelector The selector in the DOM to filter delegated events.
	 * @param {module:ui/template~RenderData} data Rendering data.
	 * @returns {Function} A function to sever the listener binding.
	 */
	activateDomEventListener( domEvtName, domSelector, data ) {
		const callback = ( evt, domEvt ) => {
			if ( !domSelector || domEvt.target.matches( domSelector ) ) {
				if ( typeof this.eventNameOrFunction == 'function' ) {
					this.eventNameOrFunction( domEvt );
				} else {
					this.observable.fire( this.eventNameOrFunction, domEvt );
				}
			}
		};

		this.emitter.listenTo( data.node, domEvtName, callback );

		// Allows revert of the listener.
		return () => {
			this.emitter.stopListening( data.node, domEvtName, callback );
		};
	}
}

/**
 * Describes a binding to {@link module:utils/observablemixin~ObservableMixin} created by the {@link module:ui/template~BindChain#if}
 * method.
 *
 * @protected
 */
class TemplateIfBinding extends TemplateBinding {
	/**
	 * @inheritDoc
	 */
	getValue( node ) {
		const value = super.getValue( node );

		return isFalsy( value ) ? false : ( this.valueIfTrue || true );
	}

	/**
	 * The value of the DOM attribute or text to be set if the {@link module:ui/template~TemplateBinding#attribute} in
	 * {@link module:ui/template~TemplateBinding#observable} is `true`.
	 *
	 * @member {String} [module:ui/template~TemplateIfBinding#valueIfTrue]
	 */
}

// Checks whether given {@link module:ui/template~TemplateValueSchema} contains a
// {@link module:ui/template~TemplateBinding}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @returns {Boolean}
function hasTemplateBinding( schema ) {
	if ( !schema ) {
		return false;
	}

	// Normalize attributes with additional data like namespace:
	//
	//		class: {
	//			ns: 'abc',
	//			value: [ ... ]
	//		}
	//
	if ( schema.value ) {
		schema = schema.value;
	}

	if ( Array.isArray( schema ) ) {
		return schema.some( hasTemplateBinding );
	} else if ( schema instanceof TemplateBinding ) {
		return true;
	}

	return false;
}

// Assembles the value using {@link module:ui/template~TemplateValueSchema} and stores it in a form of
// an Array. Each entry of the Array corresponds to one of {@link module:ui/template~TemplateValueSchema}
// items.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
// @returns {Array}
function getValueSchemaValue( schema, node ) {
	return schema.map( schemaItem => {
		// Process {@link module:ui/template~TemplateBinding} bindings.
		if ( schemaItem instanceof TemplateBinding ) {
			return schemaItem.getValue( node );
		}

		// All static values like strings, numbers, and "falsy" values (false, null, undefined, '', etc.) just pass.
		return schemaItem;
	} );
}

// A function executed each time the bound Observable attribute changes, which updates the DOM with a value
// constructed from {@link module:ui/template~TemplateValueSchema}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Function} updater A function which updates the DOM (like attribute or text).
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
function syncValueSchemaValue( schema, updater, { node } ) {
	let value = getValueSchemaValue( schema, node );

	// Check if schema is a single Template.bind.if, like:
	//
	//		class: Template.bind.if( 'foo' )
	//
	if ( schema.length == 1 && schema[ 0 ] instanceof TemplateIfBinding ) {
		value = value[ 0 ];
	} else {
		value = value.reduce( arrayValueReducer, '' );
	}

	if ( isFalsy( value ) ) {
		updater.remove();
	} else {
		updater.set( value );
	}
}

// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset `textContent`.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @returns {Object}
function getTextUpdater( node ) {
	return {
		set( value ) {
			node.textContent = value;
		},

		remove() {
			node.textContent = '';
		}
	};
}

// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset an attribute.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} attrName Name of the attribute to be modified.
// @param {String} [ns=null] Namespace to use.
// @returns {Object}
function getAttributeUpdater( el, attrName, ns ) {
	return {
		set( value ) {
			el.setAttributeNS( ns, attrName, value );
		},

		remove() {
			el.removeAttributeNS( ns, attrName );
		}
	};
}

// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of CSSStyleDeclaration to set or remove a style.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} styleName Name of the style to be modified.
// @returns {Object}
function getStyleUpdater( el, styleName ) {
	return {
		set( value ) {
			el.style[ styleName ] = value;
		},

		remove() {
			el.style[ styleName ] = null;
		}
	};
}

// Clones definition of the template.
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition}
function clone( def ) {
	const clone = Object(_ckeditor_ckeditor5_utils_src_lib_lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_5__["default"])( def, value => {
		// Don't clone the `Template.bind`* bindings because of the references to Observable
		// and DomEmitterMixin instances inside, which would also be traversed and cloned by greedy
		// cloneDeepWith algorithm. There's no point in cloning Observable/DomEmitterMixins
		// along with the definition.
		//
		// Don't clone Template instances if provided as a child. They're simply #render()ed
		// and nothing should interfere.
		//
		// Also don't clone View instances if provided as a child of the Template. The template
		// instance will be extracted from the View during the normalization and there's no need
		// to clone it.
		if ( value && ( value instanceof TemplateBinding || isTemplate( value ) || isView( value ) || isViewCollection( value ) ) ) {
			return value;
		}
	} );

	return clone;
}

// Normalizes given {@link module:ui/template~TemplateDefinition}.
//
// See:
//  * {@link normalizeAttributes}
//  * {@link normalizeListeners}
//  * {@link normalizePlainTextDefinition}
//  * {@link normalizeTextDefinition}
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition} Normalized definition.
function normalize( def ) {
	if ( typeof def == 'string' ) {
		def = normalizePlainTextDefinition( def );
	} else if ( def.text ) {
		normalizeTextDefinition( def );
	}

	if ( def.on ) {
		def.eventListeners = normalizeListeners( def.on );

		// Template mixes EmitterMixin, so delete #on to avoid collision.
		delete def.on;
	}

	if ( !def.text ) {
		if ( def.attributes ) {
			normalizeAttributes( def.attributes );
		}

		const children = [];

		if ( def.children ) {
			if ( isViewCollection( def.children ) ) {
				children.push( def.children );
			} else {
				for ( const child of def.children ) {
					if ( isTemplate( child ) || isView( child ) || Object(_ckeditor_ckeditor5_utils_src_dom_isnode__WEBPACK_IMPORTED_MODULE_7__["default"])( child ) ) {
						children.push( child );
					} else {
						children.push( new Template( child ) );
					}
				}
			}
		}

		def.children = children;
	}

	return def;
}

// Normalizes "attributes" section of {@link module:ui/template~TemplateDefinition}.
//
//		attributes: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: {
//				value: 'bar'
//			}
//		}
//
// becomes
//
//		attributes: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: {
//				value: [ 'bar' ]
//			}
//		}
//
// @param {Object} attrs
function normalizeAttributes( attrs ) {
	for ( const a in attrs ) {
		if ( attrs[ a ].value ) {
			attrs[ a ].value = [].concat( attrs[ a ].value );
		}

		arrayify( attrs, a );
	}
}

// Normalizes "on" section of {@link module:ui/template~TemplateDefinition}.
//
//		on: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// becomes
//
//		on: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// @param {Object} listeners
// @returns {Object} Object containing normalized listeners.
function normalizeListeners( listeners ) {
	for ( const l in listeners ) {
		arrayify( listeners, l );
	}

	return listeners;
}

// Normalizes "string" {@link module:ui/template~TemplateDefinition}.
//
//		"foo"
//
// becomes
//
//		{ text: [ 'foo' ] },
//
// @param {String} def
// @returns {module:ui/template~TemplateDefinition} Normalized template definition.
function normalizePlainTextDefinition( def ) {
	return {
		text: [ def ]
	};
}

// Normalizes text {@link module:ui/template~TemplateDefinition}.
//
//		children: [
//			{ text: 'def' },
//			{ text: {@link module:ui/template~TemplateBinding} }
//		]
//
// becomes
//
//		children: [
//			{ text: [ 'def' ] },
//			{ text: [ {@link module:ui/template~TemplateBinding} ] }
//		]
//
// @param {module:ui/template~TemplateDefinition} def
function normalizeTextDefinition( def ) {
	if ( !Array.isArray( def.text ) ) {
		def.text = [ def.text ];
	}
}

// Wraps an entry in Object in an Array, if not already one.
//
//		{
//			x: 'y',
//			a: [ 'b' ]
//		}
//
// becomes
//
//		{
//			x: [ 'y' ],
//			a: [ 'b' ]
//		}
//
// @param {Object} obj
// @param {String} key
function arrayify( obj, key ) {
	if ( !Array.isArray( obj[ key ] ) ) {
		obj[ key ] = [ obj[ key ] ];
	}
}

// A helper which concatenates the value avoiding unwanted
// leading white spaces.
//
// @param {String} prev
// @param {String} cur
// @returns {String}
function arrayValueReducer( prev, cur ) {
	if ( isFalsy( cur ) ) {
		return prev;
	} else if ( isFalsy( prev ) ) {
		return cur;
	} else {
		return `${ prev } ${ cur }`;
	}
}

// Extends one object defined in the following format:
//
//		{
//			key1: [Array1],
//			key2: [Array2],
//			...
//			keyN: [ArrayN]
//		}
//
// with another object of the same data format.
//
// @param {Object} obj Base object.
// @param {Object} ext Object extending base.
// @returns {String}
function extendObjectValueArray( obj, ext ) {
	for ( const a in ext ) {
		if ( obj[ a ] ) {
			obj[ a ].push( ...ext[ a ] );
		} else {
			obj[ a ] = ext[ a ];
		}
	}
}

// A helper for {@link module:ui/template~Template#extend}. Recursively extends {@link module:ui/template~Template} instance
// with content from {module:ui/template~TemplateDefinition}. See {@link module:ui/template~Template#extend} to learn more.
//
// @param {module:ui/template~Template} def A template instance to be extended.
// @param {module:ui/template~TemplateDefinition} def A definition which is to extend the template instance.
function extendTemplate( template, def ) {
	if ( def.attributes ) {
		if ( !template.attributes ) {
			template.attributes = {};
		}

		extendObjectValueArray( template.attributes, def.attributes );
	}

	if ( def.eventListeners ) {
		if ( !template.eventListeners ) {
			template.eventListeners = {};
		}

		extendObjectValueArray( template.eventListeners, def.eventListeners );
	}

	if ( def.text ) {
		template.text.push( ...def.text );
	}

	if ( def.children && def.children.length ) {
		if ( template.children.length != def.children.length ) {
			/**
			 * The number of children in extended definition does not match.
			 *
			 * @error ui-template-extend-children-mismatch
			 */
			throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"](
				'ui-template-extend-children-mismatch: The number of children in extended definition does not match.'
			);
		}

		let childIndex = 0;

		for ( const childDef of def.children ) {
			extendTemplate( template.children[ childIndex++ ], childDef );
		}
	}
}

// Checks if value is "falsy".
// Note: 0 (Number) is not "falsy" in this context.
//
// @private
// @param {*} value Value to be checked.
function isFalsy( value ) {
	return !value && value !== 0;
}

// Checks if the item is an instance of {@link module:ui/view~View}
//
// @private
// @param {*} value Value to be checked.
function isView( item ) {
	return item instanceof _view__WEBPACK_IMPORTED_MODULE_3__["default"];
}

// Checks if the item is an instance of {@link module:ui/template~Template}
//
// @private
// @param {*} value Value to be checked.
function isTemplate( item ) {
	return item instanceof Template;
}

// Checks if the item is an instance of {@link module:ui/viewcollection~ViewCollection}
//
// @private
// @param {*} value Value to be checked.
function isViewCollection( item ) {
	return item instanceof _viewcollection__WEBPACK_IMPORTED_MODULE_4__["default"];
}

// Creates an empty skeleton for {@link module:ui/template~Template#revert}
// data.
//
// @private
function getEmptyRevertData() {
	return {
		children: [],
		bindings: [],
		attributes: {}
	};
}

// Checks whether an attribute should be extended when
// {@link module:ui/template~Template#apply} is called.
//
// @private
// @param {String} attrName Attribute name to check.
function shouldExtend( attrName ) {
	return attrName == 'class' || attrName == 'style';
}

/**
 * A definition of the {@link module:ui/template~Template}. It describes what kind of
 * node a template will render (HTML element or text), attributes of an element, DOM event
 * listeners and children.
 *
 * Also see:
 * * {@link module:ui/template~TemplateValueSchema} to learn about HTML element attributes,
 * * {@link module:ui/template~TemplateListenerSchema} to learn about DOM event listeners.
 *
 * A sample definition on an HTML element can look like this:
 *
 *		new Template( {
 *			tag: 'p',
 *			children: [
 *				{
 *					tag: 'span',
 *					attributes: { ... },
 *					children: [ ... ],
 *				},
 *				{
 *					text: 'static–text'
 *				},
 *				'also-static–text',
 *			],
 *			attributes: {
 *				class: {@link module:ui/template~TemplateValueSchema},
 *				id: {@link module:ui/template~TemplateValueSchema},
 *				style: {@link module:ui/template~TemplateValueSchema}
 *
 *				// ...
 *			},
 *			on: {
 *				'click': {@link module:ui/template~TemplateListenerSchema}
 *
 *				// Document.querySelector format is also accepted.
 *				'keyup@a.some-class': {@link module:ui/template~TemplateListenerSchema}
 *
 *				// ...
 *			}
 *		} );
 *
 * A {@link module:ui/view~View}, another {@link module:ui/template~Template} or a native DOM node
 * can also become a child of a template. When a view is passed, its {@link module:ui/view~View#element} is used:
 *
 *		const view = new SomeView();
 *		const childTemplate = new Template( { ... } );
 *		const childNode = document.createElement( 'b' );
 *
 *		new Template( {
 *			tag: 'p',
 *
 *			children: [
 *				// view#element will be added as a child of this <p>.
 *				view,
 *
 * 				// The output of childTemplate.render() will be added here.
 *				childTemplate,
 *
 *				// Native DOM nodes are included directly in the rendered output.
 *				childNode
 *			]
 *		} );
 *
 * An entire {@link module:ui/viewcollection~ViewCollection} can be used as a child in the definition:
 *
 *		const collection = new ViewCollection();
 *		collection.add( someView );
 *
 *		new Template( {
 *			tag: 'p',
 *
 *			children: collection
 *		} );
 *
 * @typedef module:ui/template~TemplateDefinition
 * @type Object
 *
 * @property {String} tag See the template {@link module:ui/template~Template#tag} property.
 *
 * @property {Array.<module:ui/template~TemplateDefinition>} [children]
 * See the template {@link module:ui/template~Template#children} property.
 *
 * @property {Object.<String, module:ui/template~TemplateValueSchema>} [attributes]
 * See the template {@link module:ui/template~Template#attributes} property.
 *
 * @property {String|module:ui/template~TemplateValueSchema|Array.<String|module:ui/template~TemplateValueSchema>} [text]
 * See the template {@link module:ui/template~Template#text} property.
 *
 * @property {Object.<String, module:ui/template~TemplateListenerSchema>} [on]
 * See the template {@link module:ui/template~Template#eventListeners} property.
 */

/**
 * Describes a value of an HTML element attribute or `textContent`. It allows combining multiple
 * data sources like static values and {@link module:utils/observablemixin~Observable} attributes.
 *
 * Also see:
 * * {@link module:ui/template~TemplateDefinition} to learn where to use it,
 * * {@link module:ui/template~Template.bind} to learn how to configure
 * {@link module:utils/observablemixin~Observable} attribute bindings,
 * * {@link module:ui/template~Template#render} to learn how to render a template,
 * * {@link module:ui/template~BindChain#to `to()`} and {@link module:ui/template~BindChain#if `if()`}
 * methods to learn more about bindings.
 *
 * Attribute values can be described in many different ways:
 *
 *		// Bind helper will create bindings to attributes of the observable.
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			attributes: {
 *				// A plain string schema.
 *				'class': 'static-text',
 *
 *				// An object schema, binds to the "foo" attribute of the
 *				// observable and follows its value.
 *				'class': bind.to( 'foo' ),
 *
 *				// An array schema, combines the above.
 *				'class': [
 *					'static-text',
 *					bind.to( 'bar', () => { ... } ),
 *
 * 					// Bindings can also be conditional.
 *					bind.if( 'baz', 'class-when-baz-is-true' )
 *				],
 *
 *				// An array schema, with a custom namespace, e.g. useful for creating SVGs.
 *				'class': {
 *					ns: 'http://ns.url',
 *					value: [
 *						bind.if( 'baz', 'value-when-true' ),
 *						'static-text'
 *					]
 *				},
 *
 *				// An object schema, specific for styles.
 *				style: {
 *					color: 'red',
 *					backgroundColor: bind.to( 'qux', () => { ... } )
 *				}
 *			}
 *		} );
 *
 * Text nodes can also have complex values:
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		// Will render a "foo" text node.
 *		new Template( {
 *			text: 'foo'
 *		} );
 *
 *		// Will render a "static text: {observable.foo}" text node.
 *		// The text of the node will be updated as the "foo" attribute changes.
 *		new Template( {
 *			text: [
 *				'static text: ',
 *				bind.to( 'foo', () => { ... } )
 *			]
 *		} );
 *
 * @typedef module:ui/template~TemplateValueSchema
 * @type {Object|String|Array}
 */

/**
 * Describes an event listener attached to an HTML element. Such listener can propagate DOM events
 * through an {@link module:utils/observablemixin~Observable} instance, execute custom callbacks
 * or both, if necessary.
 *
 * Also see:
 * * {@link module:ui/template~TemplateDefinition} to learn more about template definitions,
 * * {@link module:ui/template~BindChain#to `to()`} method to learn more about bindings.
 *
 * Check out different ways of attaching event listeners below:
 *
 *		// Bind helper will propagate events through the observable.
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			on: {
 *				// An object schema. The observable will fire the "clicked" event upon DOM "click".
 *				click: bind.to( 'clicked' )
 *
 *				// An object schema. It will work for "click" event on "a.foo" children only.
 *				'click@a.foo': bind.to( 'clicked' )
 *
 *				// An array schema, makes the observable propagate multiple events.
 *				click: [
 *					bind.to( 'clicked' ),
 *					bind.to( 'executed' )
 *				],
 *
 *				// An array schema with a custom callback.
 *				'click@a.foo': {
 *					bind.to( 'clicked' ),
 *					bind.to( evt => {
 *						console.log( `${ evt.target } has been clicked!` );
 *					} }
 *				}
 *			}
 *		} );
 *
 * @typedef module:ui/template~TemplateListenerSchema
 * @type {Object|String|Array}
 */

/**
 * The return value of {@link ~Template.bind `Template.bind()`}. It provides `to()` and `if()`
 * methods to create the {@link module:utils/observablemixin~Observable observable} attribute and event bindings.
 *
 * @interface module:ui/template~BindChain
 */

/**
 * Binds an {@link module:utils/observablemixin~Observable observable} to either:
 *
 * * an HTML element attribute or a text node `textContent`, so it remains in sync with the observable
 * attribute as it changes,
 * * or an HTML element DOM event, so the DOM events are propagated through an observable.
 *
 * Some common use cases of `to()` bindings are presented below:
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			attributes: {
 *				// class="..." attribute gets bound to `observable#a`
 *				class: bind.to( 'a' )
 *			},
 *			children: [
 *				// <p>...</p> gets bound to observable#b; always `toUpperCase()`.
 *				{
 *					text: bind.to( 'b', ( value, node ) => value.toUpperCase() )
 *				}
 *			],
 *			on: {
 *				click: [
 *					// An observable will fire "clicked" upon "click" in the DOM.
 *					bind.to( 'clicked' ),
 *
 *					// A custom callback will be executed upon "click" in the DOM.
 *					bind.to( () => {
 *						...
 *					} )
 *				]
 *			}
 *		} ).render();
 *
 * Learn more about using `to()` in the {@link module:ui/template~TemplateValueSchema} and
 * {@link module:ui/template~TemplateListenerSchema}.
 *
 * @method #to
 * @param {String|Function} eventNameOrFunctionOrAttribute An attribute name of
 * {@link module:utils/observablemixin~Observable} or a DOM event name or an event callback.
 * @param {Function} [callback] Allows for processing of the value. Accepts `Node` and `value` as arguments.
 * @returns {module:ui/template~TemplateBinding}
 */

/**
 * Binds an {@link module:utils/observablemixin~Observable observable} to an HTML element attribute or a text
 * node `textContent` so it remains in sync with the observable attribute as it changes.
 *
 * Unlike {@link module:ui/template~BindChain#to}, it controls the presence of the attribute or `textContent`
 * depending on the "falseness" of an {@link module:utils/observablemixin~Observable} attribute.
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'input',
 *			attributes: {
 *				// <input checked> when `observable#a` is not undefined/null/false/''
 *				// <input> when `observable#a` is undefined/null/false
 *				checked: bind.if( 'a' )
 *			},
 *			children: [
 *				{
 *					// <input>"b-is-not-set"</input> when `observable#b` is undefined/null/false/''
 *					// <input></input> when `observable#b` is not "falsy"
 *					text: bind.if( 'b', 'b-is-not-set', ( value, node ) => !value )
 *				}
 *			]
 *		} ).render();
 *
 * Learn more about using `if()` in the {@link module:ui/template~TemplateValueSchema}.
 *
 * @method #if
 * @param {String} attribute An attribute name of {@link module:utils/observablemixin~Observable} used in the binding.
 * @param {String} [valueIfTrue] Value set when the {@link module:utils/observablemixin~Observable} attribute is not
 * undefined/null/false/'' (empty string).
 * @param {Function} [callback] Allows for processing of the value. Accepts `Node` and `value` as arguments.
 * @returns {module:ui/template~TemplateBinding}
 */

/**
 * The {@link module:ui/template~Template#_renderNode} configuration.
 *
 * @private
 * @interface module:ui/template~RenderData
 */

/**
 * Tells {@link module:ui/template~Template#_renderNode} to render
 * children into `DocumentFragment` first and then append the fragment
 * to the parent element. It is a speed optimization.
 *
 * @member {Boolean} #intoFragment
 */

/**
 * A node which is being rendered.
 *
 * @member {HTMLElement|Text} #node
 */

/**
 * Indicates whether the {@module:ui/template~RenderNodeOptions#node} has
 * been provided by {@module:ui/template~Template#apply}.
 *
 * @member {Boolean} #isApplying
 */

/**
 * An object storing the data that helps {@module:ui/template~Template#revert}
 * bringing back an element to its initial state, i.e. before
 * {@module:ui/template~Template#apply} was called.
 *
 * @member {Object} #revertData
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/tooltip/tooltipview.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/tooltip/tooltipview.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TooltipView; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js");
/* harmony import */ var _theme_components_tooltip_tooltip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/components/tooltip/tooltip.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css");
/* harmony import */ var _theme_components_tooltip_tooltip_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_components_tooltip_tooltip_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/tooltip/tooltipview
 */





/**
 * The tooltip view class.
 *
 * @extends module:ui/view~View
 */
class TooltipView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		/**
		 * The text of the tooltip visible to the user.
		 *
		 * @observable
		 * @member {String} #text
		 */
		this.set( 'text', '' );

		/**
		 * The position of the tooltip (south or north).
		 *
		 *		+-----------+
		 *		|   north   |
		 *		+-----------+
		 *		      V
		 *		  [element]
		 *
		 *		  [element]
		 *		      ^
		 *		+-----------+
		 *		|   south   |
		 *		+-----------+
		 *
		 * @observable
		 * @default 's'
		 * @member {'s'|'n'} #position
		 */
		this.set( 'position', 's' );

		const bind = this.bindTemplate;

		this.setTemplate( {
			tag: 'span',
			attributes: {
				class: [
					'ck',
					'ck-tooltip',
					bind.to( 'position', position => 'ck-tooltip_' + position ),
					bind.if( 'text', 'ck-hidden', value => !value.trim() )
				]
			},
			children: [
				{
					tag: 'span',

					attributes: {
						class: [
							'ck',
							'ck-tooltip__text'
						]
					},

					children: [
						{
							text: bind.to( 'text' ),
						}
					]
				}
			]
		} );
	}
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/view.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/view.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _viewcollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewcollection */ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./node_modules/@ckeditor/ckeditor5-ui/src/template.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_dom_emittermixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/dom/emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/collection */ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/isiterable */ "./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js");
/* harmony import */ var _theme_globals_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/globals/globals.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css");
/* harmony import */ var _theme_globals_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_theme_globals_globals_css__WEBPACK_IMPORTED_MODULE_8__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/view
 */












/**
 * The basic view class, which represents an HTML element created out of a
 * {@link module:ui/view~View#template}. Views are building blocks of the user interface and handle
 * interaction
 *
 * Views {@link module:ui/view~View#registerChild aggregate} children in
 * {@link module:ui/view~View#createCollection collections} and manage the life cycle of DOM
 * listeners e.g. by handling rendering and destruction.
 *
 * See the {@link module:ui/template~TemplateDefinition} syntax to learn more about shaping view
 * elements, attributes and listeners.
 *
 *		class SampleView extends View {
 *			constructor( locale ) {
 *				super( locale );
 *
 *				const bind = this.bindTemplate;
 *
 *				// Views define their interface (state) using observable attributes.
 *				this.set( 'elementClass', 'bar' );
 *
 *				this.setTemplate( {
 *					tag: 'p',
 *
 *					// The element of the view can be defined with its children.
 *					children: [
 *						'Hello',
 *						{
 *							tag: 'b',
 *							children: [ 'world!' ]
 *						}
 *					],
 *					attributes: {
 *						class: [
 *							'foo',
 *
 *							// Observable attributes control the state of the view in DOM.
 *							bind.to( 'elementClass' )
 *						]
 *					},
 *					on: {
 *						// Views listen to DOM events and propagate them.
 *						click: bind.to( 'clicked' )
 *					}
 *				} );
 *			}
 *		}
 *
 *		const view = new SampleView( locale );
 *
 *		view.render();
 *
 *		// Append <p class="foo bar">Hello<b>world</b></p> to the <body>
 *		document.body.appendChild( view.element );
 *
 *		// Change the class attribute to <p class="foo baz">Hello<b>world</b></p>
 *		view.elementClass = 'baz';
 *
 *		// Respond to the "click" event in DOM by executing a custom action.
 *		view.on( 'clicked', () => {
 *			console.log( 'The view has been clicked!' );
 *		} );
 *
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class View {
	/**
	 * Creates an instance of the {@link module:ui/view~View} class.
	 *
	 * Also see {@link #render}.
	 *
	 * @param {module:utils/locale~Locale} [locale] The localization services instance.
	 */
	constructor( locale ) {
		/**
		 * An HTML element of the view. `null` until {@link #render rendered}
		 * from the {@link #template}.
		 *
		 *		class SampleView extends View {
		 *			constructor() {
		 *				super();
		 *
		 *				// A template instance the #element will be created from.
		 *				this.setTemplate( {
		 *					tag: 'p'
		 *
		 *					// ...
		 *				} );
		 *			}
		 *		}
		 *
		 *		const view = new SampleView();
		 *
		 *		// Renders the #template.
		 *		view.render();
		 *
		 *		// Append the HTML element of the view to <body>.
		 *		document.body.appendChild( view.element );
		 *
		 * **Note**: The element of the view can also be assigned directly:
		 *
		 *		view.element = document.querySelector( '#my-container' );
		 *
		 * @member {HTMLElement}
		 */
		this.element = null;

		/**
		 * Set `true` when the view has already been {@link module:ui/view~View#render rendered}.
		 *
		 * @readonly
		 * @member {Boolean} #isRendered
		 */
		this.isRendered = false;

		/**
		 * A set of tools to localize the user interface.
		 *
		 * Also see {@link module:core/editor/editor~Editor#locale}.
		 *
		 * @readonly
		 * @member {module:utils/locale~Locale}
		 */
		this.locale = locale;

		/**
		 * Shorthand for {@link module:utils/locale~Locale#t}.
		 *
		 * Note: If {@link #locale} instance hasn't been passed to the view this method may not
		 * be available.
		 *
		 * @see module:utils/locale~Locale#t
		 * @method
		 */
		this.t = locale && locale.t;

		/**
		 * Collections registered with {@link #createCollection}.
		 *
		 * @protected
		 * @member {Set.<module:ui/viewcollection~ViewCollection>}
		 */
		this._viewCollections = new _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_5__["default"]();

		/**
		 * A collection of view instances, which have been added directly
		 * into the {@link module:ui/template~Template#children}.
		 *
		 * @protected
		 * @member {module:ui/viewcollection~ViewCollection}
		 */
		this._unboundChildren = this.createCollection();

		// Pass parent locale to its children.
		this._viewCollections.on( 'add', ( evt, collection ) => {
			collection.locale = locale;
		} );

		/**
		 * Template of this view. It provides the {@link #element} representing
		 * the view in DOM, which is {@link #render rendered}.
		 *
		 * @member {module:ui/template~Template} #template
		 */

		/**
		 * Cached {@link module:ui/template~BindChain bind chain} object created by the
		 * {@link #template}. See {@link #bindTemplate}.
		 *
		 * @private
		 * @member {Object} #_bindTemplate
		 */

		this.decorate( 'render' );
	}

	/**
	 * Shorthand for {@link module:ui/template~Template.bind}, a binding
	 * {@link module:ui/template~BindChain interface} pre–configured for the view instance.
	 *
	 * It provides {@link module:ui/template~BindChain#to `to()`} and
	 * {@link module:ui/template~BindChain#if `if()`} methods that initialize bindings with
	 * observable attributes and attach DOM listeners.
	 *
	 *		class SampleView extends View {
	 *			constructor( locale ) {
	 *				super( locale );
	 *
	 *				const bind = this.bindTemplate;
	 *
	 *				// These {@link module:utils/observablemixin~Observable observable} attributes will control
	 *				// the state of the view in DOM.
	 *				this.set( {
	 *					elementClass: 'foo',
	 *				 	isEnabled: true
	 *				 } );
	 *
	 *				this.setTemplate( {
	 *					tag: 'p',
	 *
	 *					attributes: {
	 *						// The class HTML attribute will follow elementClass
	 *						// and isEnabled view attributes.
	 *						class: [
	 *							bind.to( 'elementClass' )
	 *							bind.if( 'isEnabled', 'present-when-enabled' )
	 *						]
	 *					},
	 *
	 *					on: {
	 *						// The view will fire the "clicked" event upon clicking <p> in DOM.
	 *						click: bind.to( 'clicked' )
	 *					}
	 *				} );
	 *			}
	 *		}
	 *
	 * @method #bindTemplate
	 */
	get bindTemplate() {
		if ( this._bindTemplate ) {
			return this._bindTemplate;
		}

		return ( this._bindTemplate = _template__WEBPACK_IMPORTED_MODULE_2__["default"].bind( this, this ) );
	}

	/**
	 * Creates a new collection of views, which can be used as
	 * {@link module:ui/template~Template#children} of this view.
	 *
	 *		class SampleView extends View {
	 *			constructor( locale ) {
	 *				super( locale );
	 *
	 *				this.items = this.createCollection();
 	 *
	 *				this.setTemplate( {
	 *					tag: 'p',
	 *
	 *					// `items` collection will render here.
	 *					children: this.items
	 *				} );
	 *			}
	 *		}
	 *
	 *		const view = new SampleView( locale );
	 *		const child = new ChildView( locale );
	 *
	 *		view.render();
	 *
	 *		// It will append <p></p> to the <body>.
	 *		document.body.appendChild( view.element );
	 *
	 *		// From now on the child is nested under its parent, which is also reflected in DOM.
	 *		// <p><child#element></p>
	 *		view.items.add( child );
	 *
	 * @returns {module:ui/viewcollection~ViewCollection} A new collection of view instances.
	 */
	createCollection() {
		const collection = new _viewcollection__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this._viewCollections.add( collection );

		return collection;
	}

	/**
	 * Registers a new child view under the view instance. Once registered, a child
	 * view is managed by its parent, including {@link #render rendering}
	 * and {@link #destroy destruction}.
	 *
	 * To revert this, use {@link #deregisterChild}.
	 *
	 *		class SampleView extends View {
	 *			constructor( locale ) {
	 *				super( locale );
	 *
	 *				this.childA = new SomeChildView( locale );
	 *				this.childB = new SomeChildView( locale );
	 *
	 *				this.setTemplate( { tag: 'p' } );
	 *
	 *				// Register the children.
	 *				this.registerChild( [ this.childA, this.childB ] );
	 *			}
	 *
	 *			render() {
	 *				super.render();
	 *
	 *				this.element.appendChild( this.childA.element );
	 *				this.element.appendChild( this.childB.element );
	 *			}
	 *		}
	 *
	 *		const view = new SampleView( locale );
	 *
	 *		view.render();
	 *
	 *		// Will append <p><childA#element><b></b><childB#element></p>.
	 *		document.body.appendChild( view.element );
	 *
	 * **Note**: There's no need to add child views if they're already referenced in the
	 * {@link #template}:
	 *
	 *		class SampleView extends View {
	 *			constructor( locale ) {
	 *				super( locale );
	 *
	 *				this.childA = new SomeChildView( locale );
	 *				this.childB = new SomeChildView( locale );
	 *
	 *				this.setTemplate( {
	 *					tag: 'p',
	 *
 	 *					// These children will be added automatically. There's no
 	 *					// need to call {@link #registerChild} for any of them.
	 *					children: [ this.childA, this.childB ]
	 *				} );
	 *			}
	 *
	 *			// ...
	 *		}
	 *
	 * @param {module:ui/view~View|Iterable.<module:ui/view~View>} children Children views to be registered.
	 */
	registerChild( children ) {
		if ( !Object(_ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_7__["default"])( children ) ) {
			children = [ children ];
		}

		for ( const child of children ) {
			this._unboundChildren.add( child );
		}
	}

	/**
	 * The opposite of {@link #registerChild}. Removes a child view from this view instance.
	 * Once removed, the child is no longer managed by its parent, e.g. it can safely
	 * become a child of another parent view.
	 *
	 * @see #registerChild
	 * @param {module:ui/view~View|Iterable.<module:ui/view~View>} children Child views to be removed.
	 */
	deregisterChild( children ) {
		if ( !Object(_ckeditor_ckeditor5_utils_src_isiterable__WEBPACK_IMPORTED_MODULE_7__["default"])( children ) ) {
			children = [ children ];
		}

		for ( const child of children ) {
			this._unboundChildren.remove( child );
		}
	}

	/**
	 * Sets the {@link #template} of the view with with given definition.
	 *
	 * A shorthand for:
	 *
	 *		view.setTemplate( definition );
	 *
	 * @param {module:ui/template~TemplateDefinition} definition Definition of view's template.
	 */
	setTemplate( definition ) {
		this.template = new _template__WEBPACK_IMPORTED_MODULE_2__["default"]( definition );
	}

	/**
	 * {@link module:ui/template~Template.extend Extends} the {@link #template} of the view with
	 * with given definition.
	 *
	 * A shorthand for:
	 *
	 *		Template.extend( view.template, definition );
	 *
	 * **Note**: Is requires the {@link #template} to be already set. See {@link #setTemplate}.
	 *
	 * @param {module:ui/template~TemplateDefinition} definition Definition which
	 * extends the {@link #template}.
	 */
	extendTemplate( definition ) {
		_template__WEBPACK_IMPORTED_MODULE_2__["default"].extend( this.template, definition );
	}

	/**
	 * Recursively renders the view.
	 *
	 * Once the view is rendered:
	 * * the {@link #element} becomes an HTML element out of {@link #template},
	 * * the {@link #isRendered} flag is set `true`.
	 *
	 * **Note**: The children of the view:
	 * * defined directly in the {@link #template}
	 * * residing in collections created by the {@link #createCollection} method,
	 * * and added by {@link #registerChild}
	 * are also rendered in the process.
	 *
	 * In general, `render()` method is the right place to keep the code which refers to the
	 * {@link #element} and should be executed at the very beginning of the view's life cycle.
	 *
	 * It is possible to {@link module:ui/template~Template.extend} the {@link #template} before
	 * the view is rendered. To allow an early customization of the view (e.g. by its parent),
	 * such references should be done in `render()`.
	 *
	 *		class SampleView extends View {
	 *			constructor() {
	 *				this.setTemplate( {
	 *					// ...
	 *				} );
	 *			},
	 *
	 *			render() {
	 *				// View#element becomes available.
	 *				super.render();
	 *
	 *				// The "scroll" listener depends on #element.
	 *				this.listenTo( window, 'scroll', () => {
	 *					// A reference to #element would render the #template and make it non-extendable.
	 *					if ( window.scrollY > 0 ) {
	 *						this.element.scrollLeft = 100;
	 *					} else {
	 *						this.element.scrollLeft = 0;
	 *					}
	 *				} );
	 *			}
	 *		}
	 *
	 *		const view = new SampleView();
	 *
	 *		// Let's customize the view before it gets rendered.
	 *		view.extendTemplate( {
	 *			attributes: {
	 *				class: [
	 *					'additional-class'
	 *				]
	 *			}
	 *		} );
	 *
	 *		// Late rendering allows customization of the view.
	 *		view.render();
	 */
	render() {
		if ( this.isRendered ) {
			/**
			 * This View has already been rendered.
			 *
			 * @error ui-view-render-rendered
			 */
			throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]( 'ui-view-render-already-rendered: This View has already been rendered.' );
		}

		// Render #element of the view.
		if ( this.template ) {
			this.element = this.template.render();

			// Auto–register view children from #template.
			this.registerChild( this.template.getViews() );
		}

		this.isRendered = true;
	}

	/**
	 * Recursively destroys the view instance and child views added by {@link #registerChild} and
	 * residing in collections created by the {@link #createCollection}.
	 *
	 * Destruction disables all event listeners:
	 * * created on the view, e.g. `view.on( 'event', () => {} )`,
	 * * defined in the {@link #template} for DOM events.
	 */
	destroy() {
		this.stopListening();

		this._viewCollections.map( c => c.destroy() );
	}

	/**
	 * Event fired by the {@link #render} method. Actual rendering is executed as a listener to
	 * this event with the default priority.
	 *
	 * See {@link module:utils/observablemixin~ObservableMixin.decorate} for more information and samples.
	 *
	 * @event render
	 */
}

Object(_ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_6__["default"])( View, _ckeditor_ckeditor5_utils_src_dom_emittermixin__WEBPACK_IMPORTED_MODULE_3__["default"] );
Object(_ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_6__["default"])( View, _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_4__["default"] );


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewCollection; });
/* harmony import */ var _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/collection */ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/viewcollection
 */






/**
 * Collects {@link module:ui/view~View} instances.
 *
 *		const parentView = new ParentView( locale );
 *		const collection = new ViewCollection( locale );
 *
 *		collection.setParent( parentView.element );
 *
 *		const viewA = new ChildView( locale );
 *		const viewB = new ChildView( locale );
 *
 * View collection renders and manages view {@link module:ui/view~View#element elements}:
 *
 *		collection.add( viewA );
 *		collection.add( viewB );
 *
 *		console.log( parentView.element.firsChild ); // -> viewA.element
 *		console.log( parentView.element.lastChild ); // -> viewB.element
 *
 * It {@link module:ui/viewcollection~ViewCollection#delegate propagates} DOM events too:
 *
 *		// Delegate #click and #keydown events from viewA and viewB to the parentView.
 *		collection.delegate( 'click' ).to( parentView );
 *
 *		parentView.on( 'click', ( evt ) => {
 *			console.log( `${ evt.source } has been clicked.` );
 *		} );
 *
 *		// This event will be delegated to the parentView.
 *		viewB.fire( 'click' );
 *
 * **Note**: A view collection can be used directly in the {@link module:ui/template~TemplateDefinition definition}
 * of a {@link module:ui/template~Template template}.
 *
 * @extends module:utils/collection~Collection
 * @mixes module:utils/observablemixin~ObservableMixin
 */
class ViewCollection extends _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {
	/**
	 * Creates a new instance of the {@link module:ui/viewcollection~ViewCollection}.
	 *
	 * @param {module:utils/locale~Locale} [locale] The {@link module:core/editor/editor~Editor editor's locale} instance.
	 */
	constructor( locale ) {
		super( {
			// An #id Number attribute should be legal and not break the `ViewCollection` instance.
			// https://github.com/ckeditor/ckeditor5-ui/issues/93
			idProperty: 'viewUid'
		} );

		// Handle {@link module:ui/view~View#element} in DOM when a new view is added to the collection.
		this.on( 'add', ( evt, view, index ) => {
			if ( !view.isRendered ) {
				view.render();
			}

			if ( view.element && this._parentElement ) {
				this._parentElement.insertBefore( view.element, this._parentElement.children[ index ] );
			}
		} );

		// Handle {@link module:ui/view~View#element} in DOM when a view is removed from the collection.
		this.on( 'remove', ( evt, view ) => {
			if ( view.element && this._parentElement ) {
				view.element.remove();
			}
		} );

		/**
		 * The {@link module:core/editor/editor~Editor#locale editor's locale} instance.
		 * See the view {@link module:ui/view~View#locale locale} property.
		 *
		 * @member {module:utils/locale~Locale}
		 */
		this.locale = locale;

		/**
		 * A parent element within which child views are rendered and managed in DOM.
		 *
		 * @protected
		 * @member {HTMLElement}
		 */
		this._parentElement = null;
	}

	/**
	 * Destroys the view collection along with child views.
	 * See the view {@link module:ui/view~View#destroy} method.
	 */
	destroy() {
		this.map( view => view.destroy() );
	}

	/**
	 * Sets the parent HTML element of this collection. When parent is set, {@link #add adding} and
	 * {@link #remove removing} views in the collection synchronizes their
	 * {@link module:ui/view~View#element elements} in the parent element.
	 *
	 * @param {HTMLElement} element A new parent element.
	 */
	setParent( elementOrDocFragment ) {
		this._parentElement = elementOrDocFragment;
	}

	/**
	 * Delegates selected events coming from within views in the collection to any
	 * {@link module:utils/emittermixin~Emitter}.
	 *
	 * For the following views and collection:
	 *
	 *		const viewA = new View();
	 *		const viewB = new View();
	 *		const viewC = new View();
	 *
	 *		const views = parentView.createCollection();
	 *
	 *		views.delegate( 'eventX' ).to( viewB );
	 *		views.delegate( 'eventX', 'eventY' ).to( viewC );
	 *
	 *		views.add( viewA );
	 *
	 * the `eventX` is delegated (fired by) `viewB` and `viewC` along with `customData`:
	 *
	 *		viewA.fire( 'eventX', customData );
	 *
	 * and `eventY` is delegated (fired by) `viewC` along with `customData`:
	 *
	 *		viewA.fire( 'eventY', customData );
	 *
	 * See {@link module:utils/emittermixin~EmitterMixin#delegate}.
	 *
	 * @param {...String} events {@link module:ui/view~View} event names to be delegated to another
	 * {@link module:utils/emittermixin~Emitter}.
	 * @returns {Object}
	 * @returns {Function} return.to A function which accepts the destination of
	 * {@link module:utils/emittermixin~EmitterMixin#delegate delegated} events.
	 */
	delegate( ...events ) {
		if ( !events.length || !isStringArray( events ) ) {
			/**
			 * All event names must be strings.
			 *
			 * @error ui-viewcollection-delegate-wrong-events
			 */
			throw new _ckeditor_ckeditor5_utils_src_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]( 'ui-viewcollection-delegate-wrong-events: All event names must be strings.' );
		}

		return {
			/**
			 * Selects destination for {@link module:utils/emittermixin~EmitterMixin#delegate} events.
			 *
			 * @memberOf module:ui/viewcollection~ViewCollection#delegate
			 * @function module:ui/viewcollection~ViewCollection#delegate.to
			 * @param {module:utils/emittermixin~EmitterMixin} dest An `EmitterMixin` instance which is
			 * the destination for delegated events.
			 */
			to: dest => {
				// Activate delegating on existing views in this collection.
				for ( const view of this ) {
					for ( const evtName of events ) {
						view.delegate( evtName ).to( dest );
					}
				}

				// Activate delegating on future views in this collection.
				this.on( 'add', ( evt, view ) => {
					for ( const evtName of events ) {
						view.delegate( evtName ).to( dest );
					}
				} );

				// Deactivate delegating when view is removed from this collection.
				this.on( 'remove', ( evt, view ) => {
					for ( const evtName of events ) {
						view.stopDelegating( evtName, dest );
					}
				} );
			}
		};
	}

	/**
	 * Removes a child view from the collection. If the {@link #setParent parent element} of the
	 * collection has been set, the {@link module:ui/view~View#element element} of the view is also removed
	 * in DOM, reflecting the order of the collection.
	 *
	 * See the {@link #add} method.
	 *
	 * @method #remove
	 * @param {module:ui/view~View|Number|String} subject The view to remove, its id or index in the collection.
	 * @returns {Object} The removed view.
	 */
}

Object(_ckeditor_ckeditor5_utils_src_mix__WEBPACK_IMPORTED_MODULE_3__["default"])( _ckeditor_ckeditor5_utils_src_collection__WEBPACK_IMPORTED_MODULE_2__["default"], _ckeditor_ckeditor5_utils_src_observablemixin__WEBPACK_IMPORTED_MODULE_1__["default"] );

// Check if all entries of the array are of `String` type.
//
// @private
// @param {Array} arr An array to be checked.
// @returns {Boolean}
function isStringArray( arr ) {
	return arr.every( a => typeof a == 'string' );
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../postcss-loader/src??ref--5-1!./button.css */ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../postcss-loader/src??ref--5-1!./icon.css */ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../postcss-loader/src??ref--5-1!./tooltip.css */ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../postcss-loader/src??ref--5-1!./globals.css */ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js ***!
  \*********************************************************************/
/*! exports provided: DOCUMENTATION_URL, default, attachLinkToDocumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_URL", function() { return DOCUMENTATION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CKEditorError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachLinkToDocumentation", function() { return attachLinkToDocumentation; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/ckeditorerror
 */

/**
 * URL to the documentation with error codes.
 */
const DOCUMENTATION_URL =
	'https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html';

/**
 * The CKEditor error class.
 *
 * All errors will be shortened during the minification process in order to reduce the code size.
 * Therefore, all error messages should be documented in the same way as those in {@link module:utils/log}.
 *
 * Read more in the {@link module:utils/log} module.
 *
 * @extends Error
 */
class CKEditorError extends Error {
	/**
	 * Creates an instance of the CKEditorError class.
	 *
	 * Read more about error logging in the {@link module:utils/log} module.
	 *
	 * @param {String} message The error message in an `error-name: Error message.` format.
	 * During the minification process the "Error message" part will be removed to limit the code size
	 * and a link to this error documentation will be added to the `message`.
	 * @param {Object} [data] Additional data describing the error. A stringified version of this object
	 * will be appended to the error message, so the data are quickly visible in the console. The original
	 * data object will also be later available under the {@link #data} property.
	 */
	constructor( message, data ) {
		message = attachLinkToDocumentation( message );

		if ( data ) {
			message += ' ' + JSON.stringify( data );
		}

		super( message );

		/**
		 * @member {String}
		 */
		this.name = 'CKEditorError';

		/**
		 * The additional error data passed to the constructor.
		 *
		 * @member {Object}
		 */
		this.data = data;
	}

	/**
	 * Checks if error is an instance of CKEditorError class.
	 *
	 * @param {Object} error Object to check.
	 * @returns {Boolean}
	 */
	static isCKEditorError( error ) {
		return error instanceof CKEditorError;
	}
}

/**
 * Attaches link to the documentation at the end of the error message.
 *
 * @param {String} message Message to be logged.
 * @returns {String}
 */
function attachLinkToDocumentation( message ) {
	const matchedErrorName = message.match( /^([^:]+):/ );

	if ( !matchedErrorName ) {
		return message;
	}

	return message + ` Read more: ${ DOCUMENTATION_URL }#error-${ matchedErrorName[ 1 ] }\n`;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/collection.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/collection.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collection; });
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/collection
 */






/**
 * Collections are ordered sets of objects. Items in the collection can be retrieved by their indexes
 * in the collection (like in an array) or by their ids.
 *
 * If an object without an `id` property is being added to the collection, the `id` property will be generated
 * automatically. Note that the automatically generated id is unique only within this single collection instance.
 *
 * By default an item in the collection is identified by its `id` property. The name of the identifier can be
 * configured through the constructor of the collection.
 *
 * @mixes module:utils/emittermixin~EmitterMixin
 */
class Collection {
	/**
	 * Creates a new Collection instance.
	 *
	 * @param {Object} [options={}] The options object.
	 * @param {String} [options.idProperty='id'] The name of the property which is considered to identify an item.
	 */
	constructor( options = {} ) {
		/**
		 * The internal list of items in the collection.
		 *
		 * @private
		 * @member {Object[]}
		 */
		this._items = [];

		/**
		 * The internal map of items in the collection.
		 *
		 * @private
		 * @member {Map}
		 */
		this._itemMap = new Map();

		/**
		 * The name of the property which is considered to identify an item.
		 *
		 * @private
		 * @member {String}
		 */
		this._idProperty = options.idProperty || 'id';

		/**
		 * A helper mapping external items of a bound collection ({@link #bindTo})
		 * and actual items of this collection. It provides information
		 * necessary to properly remove items bound to another collection.
		 *
		 * See {@link #_bindToInternalToExternalMap}.
		 *
		 * @protected
		 * @member {WeakMap}
		 */
		this._bindToExternalToInternalMap = new WeakMap();

		/**
		 * A helper mapping items of this collection to external items of a bound collection
		 * ({@link #bindTo}). It provides information necessary to manage the bindings, e.g.
		 * to avoid loops in two–way bindings.
		 *
		 * See {@link #_bindToExternalToInternalMap}.
		 *
		 * @protected
		 * @member {WeakMap}
		 */
		this._bindToInternalToExternalMap = new WeakMap();

		/**
		 * Stores indexes of skipped items from bound external collection.
		 *
		 * @private
		 * @member {Array}
		 */
		this._skippedIndexesFromExternal = [];

		/**
		 * A collection instance this collection is bound to as a result
		 * of calling {@link #bindTo} method.
		 *
		 * @protected
		 * @member {module:utils/collection~Collection} #_bindToCollection
		 */
	}

	/**
	 * The number of items available in the collection.
	 *
	 * @member {Number} #length
	 */
	get length() {
		return this._items.length;
	}

	/**
	 * Returns the first item from the collection or null when collection is empty.
	 *
	 * @returns {Object|null} The first item or `null` if collection is empty.
	 */
	get first() {
		return this._items[ 0 ] || null;
	}

	/**
	 * Returns the last item from the collection or null when collection is empty.
	 *
	 * @returns {Object|null} The last item or `null` if collection is empty.
	 */
	get last() {
		return this._items[ this.length - 1 ] || null;
	}

	/**
	 * Adds an item into the collection.
	 *
	 * If the item does not have an id, then it will be automatically generated and set on the item.
	 *
	 * @chainable
	 * @param {Object} item
	 * @param {Number} [index] The position of the item in the collection. The item
	 * is pushed to the collection when `index` not specified.
	 * @fires add
	 */
	add( item, index ) {
		let itemId;
		const idProperty = this._idProperty;

		if ( ( idProperty in item ) ) {
			itemId = item[ idProperty ];

			if ( typeof itemId != 'string' ) {
				/**
				 * This item's id should be a string.
				 *
				 * @error collection-add-invalid-id
				 */
				throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-add-invalid-id' );
			}

			if ( this.get( itemId ) ) {
				/**
				 * This item already exists in the collection.
				 *
				 * @error collection-add-item-already-exists
				 */
				throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-add-item-already-exists' );
			}
		} else {
			item[ idProperty ] = itemId = Object(_uid__WEBPACK_IMPORTED_MODULE_2__["default"])();
		}

		// TODO: Use ES6 default function argument.
		if ( index === undefined ) {
			index = this._items.length;
		} else if ( index > this._items.length || index < 0 ) {
			/**
			 * The index number has invalid value.
			 *
			 * @error collection-add-item-bad-index
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-add-item-invalid-index' );
		}

		this._items.splice( index, 0, item );

		this._itemMap.set( itemId, item );

		this.fire( 'add', item, index );

		return this;
	}

	/**
	 * Gets item by its id or index.
	 *
	 * @param {String|Number} idOrIndex The item id or index in the collection.
	 * @returns {Object|null} The requested item or `null` if such item does not exist.
	 */
	get( idOrIndex ) {
		let item;

		if ( typeof idOrIndex == 'string' ) {
			item = this._itemMap.get( idOrIndex );
		} else if ( typeof idOrIndex == 'number' ) {
			item = this._items[ idOrIndex ];
		} else {
			/**
			 * Index or id must be given.
			 *
			 * @error collection-get-invalid-arg
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-get-invalid-arg: Index or id must be given.' );
		}

		return item || null;
	}

	/**
	 * Gets index of item in the collection.
	 * When item is not defined in the collection then index will be equal -1.
	 *
	 * @param {String|Object} idOrItem The item or its id in the collection.
	 * @returns {Number} Index of given item.
	 */
	getIndex( idOrItem ) {
		let item;

		if ( typeof idOrItem == 'string' ) {
			item = this._itemMap.get( idOrItem );
		} else {
			item = idOrItem;
		}

		return this._items.indexOf( item );
	}

	/**
	 * Removes an item from the collection.
	 *
	 * @param {Object|Number|String} subject The item to remove, its id or index in the collection.
	 * @returns {Object} The removed item.
	 * @fires remove
	 */
	remove( subject ) {
		let index, id, item;
		let itemDoesNotExist = false;
		const idProperty = this._idProperty;

		if ( typeof subject == 'string' ) {
			id = subject;
			item = this._itemMap.get( id );
			itemDoesNotExist = !item;

			if ( item ) {
				index = this._items.indexOf( item );
			}
		} else if ( typeof subject == 'number' ) {
			index = subject;
			item = this._items[ index ];
			itemDoesNotExist = !item;

			if ( item ) {
				id = item[ idProperty ];
			}
		} else {
			item = subject;
			id = item[ idProperty ];
			index = this._items.indexOf( item );
			itemDoesNotExist = ( index == -1 || !this._itemMap.get( id ) );
		}

		if ( itemDoesNotExist ) {
			/**
			 * Item not found.
			 *
			 * @error collection-remove-404
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-remove-404: Item not found.' );
		}

		this._items.splice( index, 1 );
		this._itemMap.delete( id );

		const externalItem = this._bindToInternalToExternalMap.get( item );
		this._bindToInternalToExternalMap.delete( item );
		this._bindToExternalToInternalMap.delete( externalItem );

		this.fire( 'remove', item, index );

		return item;
	}

	/**
	 * Executes the callback for each item in the collection and composes an array or values returned by this callback.
	 *
	 * @param {Function} callback
	 * @param {Object} callback.item
	 * @param {Number} callback.index
	 * @params {Object} ctx Context in which the `callback` will be called.
	 * @returns {Array} The result of mapping.
	 */
	map( callback, ctx ) {
		return this._items.map( callback, ctx );
	}

	/**
	 * Finds the first item in the collection for which the `callback` returns a true value.
	 *
	 * @param {Function} callback
	 * @param {Object} callback.item
	 * @param {Number} callback.index
	 * @returns {Object} The item for which `callback` returned a true value.
	 * @params {Object} ctx Context in which the `callback` will be called.
	 */
	find( callback, ctx ) {
		return this._items.find( callback, ctx );
	}

	/**
	 * Returns an array with items for which the `callback` returned a true value.
	 *
	 * @param {Function} callback
	 * @param {Object} callback.item
	 * @param {Number} callback.index
	 * @params {Object} ctx Context in which the `callback` will be called.
	 * @returns {Object[]} The array with matching items.
	 */
	filter( callback, ctx ) {
		return this._items.filter( callback, ctx );
	}

	/**
	 * Removes all items from the collection and destroys the binding created using
	 * {@link #bindTo}.
	 */
	clear() {
		if ( this._bindToCollection ) {
			this.stopListening( this._bindToCollection );
			this._bindToCollection = null;
		}

		while ( this.length ) {
			this.remove( 0 );
		}
	}

	/**
	 * Binds and synchronizes the collection with another one.
	 *
	 * The binding can be a simple factory:
	 *
	 *		class FactoryClass {
	 *			constructor( data ) {
	 *				this.label = data.label;
	 *			}
	 *		}
	 *
	 *		const source = new Collection( { idProperty: 'label' } );
	 *		const target = new Collection();
	 *
	 *		target.bindTo( source ).as( FactoryClass );
	 *
	 *		source.add( { label: 'foo' } );
	 *		source.add( { label: 'bar' } );
	 *
	 *		console.log( target.length ); // 2
	 *		console.log( target.get( 1 ).label ); // 'bar'
	 *
	 *		source.remove( 0 );
	 *		console.log( target.length ); // 1
	 *		console.log( target.get( 0 ).label ); // 'bar'
	 *
	 * or the factory driven by a custom callback:
	 *
	 *		class FooClass {
	 *			constructor( data ) {
	 *				this.label = data.label;
	 *			}
	 *		}
	 *
	 *		class BarClass {
	 *			constructor( data ) {
	 *				this.label = data.label;
	 *			}
	 *		}
	 *
	 *		const source = new Collection( { idProperty: 'label' } );
	 *		const target = new Collection();
	 *
	 *		target.bindTo( source ).using( ( item ) => {
	 *			if ( item.label == 'foo' ) {
	 *				return new FooClass( item );
	 *			} else {
	 *				return new BarClass( item );
	 *			}
	 *		} );
	 *
	 *		source.add( { label: 'foo' } );
	 *		source.add( { label: 'bar' } );
	 *
	 *		console.log( target.length ); // 2
	 *		console.log( target.get( 0 ) instanceof FooClass ); // true
	 *		console.log( target.get( 1 ) instanceof BarClass ); // true
	 *
	 * or the factory out of property name:
	 *
	 *		const source = new Collection( { idProperty: 'label' } );
	 *		const target = new Collection();
	 *
	 *		target.bindTo( source ).using( 'label' );
	 *
	 *		source.add( { label: { value: 'foo' } } );
	 *		source.add( { label: { value: 'bar' } } );
	 *
	 *		console.log( target.length ); // 2
	 *		console.log( target.get( 0 ).value ); // 'foo'
	 *		console.log( target.get( 1 ).value ); // 'bar'
	 *
	 * It's possible to skip specified items by returning falsy value:
	 *
	 *		const source = new Collection();
	 *		const target = new Collection();
	 *
	 *		target.bindTo( source ).using( item => {
	 *			if ( item.hidden ) {
	 *				return null;
	 *			}
	 *
	 *			return item;
	 *		} );
	 *
	 *		source.add( { hidden: true } );
	 *		source.add( { hidden: false } );
	 *
	 *		console.log( source.length ); // 2
	 *		console.log( target.length ); // 1
	 *
	 * **Note**: {@link #clear} can be used to break the binding.
	 *
	 * @param {module:utils/collection~Collection} externalCollection A collection to be bound.
	 * @returns {Object}
	 * @returns {module:utils/collection~Collection#bindTo#as} return.as
	 * @returns {module:utils/collection~Collection#bindTo#using} return.using
	 */
	bindTo( externalCollection ) {
		if ( this._bindToCollection ) {
			/**
			 * The collection cannot be bound more than once.
			 *
			 * @error collection-bind-to-rebind
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'collection-bind-to-rebind: The collection cannot be bound more than once.' );
		}

		this._bindToCollection = externalCollection;

		return {
			/**
			 * Creates the class factory binding.
			 *
			 * @static
			 * @param {Function} Class Specifies which class factory is to be initialized.
			 */
			as: Class => {
				this._setUpBindToBinding( item => new Class( item ) );
			},

			/**
			 * Creates callback or property binding.
			 *
			 * @static
			 * @param {Function|String} callbackOrProperty When the function is passed, it is used to
			 * produce the items. When the string is provided, the property value is used to create
			 * the bound collection items.
			 */
			using: callbackOrProperty => {
				if ( typeof callbackOrProperty == 'function' ) {
					this._setUpBindToBinding( item => callbackOrProperty( item ) );
				} else {
					this._setUpBindToBinding( item => item[ callbackOrProperty ] );
				}
			}
		};
	}

	/**
	 * Finalizes and activates a binding initiated by {#bindTo}.
	 *
	 * @protected
	 * @param {Function} factory A function which produces collection items.
	 */
	_setUpBindToBinding( factory ) {
		const externalCollection = this._bindToCollection;

		// Adds the item to the collection once a change has been done to the external collection.
		//
		// @private
		const addItem = ( evt, externalItem, index ) => {
			const isExternalBoundToThis = externalCollection._bindToCollection == this;
			const externalItemBound = externalCollection._bindToInternalToExternalMap.get( externalItem );

			// If an external collection is bound to this collection, which makes it a 2–way binding,
			// and the particular external collection item is already bound, don't add it here.
			// The external item has been created **out of this collection's item** and (re)adding it will
			// cause a loop.
			if ( isExternalBoundToThis && externalItemBound ) {
				this._bindToExternalToInternalMap.set( externalItem, externalItemBound );
				this._bindToInternalToExternalMap.set( externalItemBound, externalItem );
			} else {
				const item = factory( externalItem );

				// When there is no item we need to remember skipped index first and then we can skip this item.
				if ( !item ) {
					this._skippedIndexesFromExternal.push( index );

					return;
				}

				// Lets try to put item at the same index as index in external collection
				// but when there are a skipped items in one or both collections we need to recalculate this index.
				let finalIndex = index;

				// When we try to insert item after some skipped items from external collection we need
				// to include this skipped items and decrease index.
				//
				// For the following example:
				// external -> [ 'A', 'B - skipped for internal', 'C - skipped for internal' ]
				// internal -> [ A ]
				//
				// Another item is been added at the end of external collection:
				// external.add( 'D' )
				// external -> [ 'A', 'B - skipped for internal', 'C - skipped for internal', 'D' ]
				//
				// We can't just add 'D' to internal at the same index as index in external because
				// this will produce empty indexes what is invalid:
				// internal -> [ 'A', empty, empty, 'D' ]
				//
				// So we need to include skipped items and decrease index
				// internal -> [ 'A', 'D' ]
				for ( const skipped of this._skippedIndexesFromExternal ) {
					if ( index > skipped ) {
						finalIndex--;
					}
				}

				// We need to take into consideration that external collection could skip some items from
				// internal collection.
				//
				// For the following example:
				// internal -> [ 'A', 'B - skipped for external', 'C - skipped for external' ]
				// external -> [ A ]
				//
				// Another item is been added at the end of external collection:
				// external.add( 'D' )
				// external -> [ 'A', 'D' ]
				//
				// We need to include skipped items and place new item after them:
				// internal -> [ 'A', 'B - skipped for external', 'C - skipped for external', 'D' ]
				for ( const skipped of externalCollection._skippedIndexesFromExternal ) {
					if ( finalIndex >= skipped ) {
						finalIndex++;
					}
				}

				this._bindToExternalToInternalMap.set( externalItem, item );
				this._bindToInternalToExternalMap.set( item, externalItem );
				this.add( item, finalIndex );

				// After adding new element to internal collection we need update indexes
				// of skipped items in external collection.
				for ( let i = 0; i < externalCollection._skippedIndexesFromExternal.length; i++ ) {
					if ( finalIndex <= externalCollection._skippedIndexesFromExternal[ i ] ) {
						externalCollection._skippedIndexesFromExternal[ i ]++;
					}
				}
			}
		};

		// Load the initial content of the collection.
		for ( const externalItem of externalCollection ) {
			addItem( null, externalItem, externalCollection.getIndex( externalItem ) );
		}

		// Synchronize the with collection as new items are added.
		this.listenTo( externalCollection, 'add', addItem );

		// Synchronize the with collection as new items are removed.
		this.listenTo( externalCollection, 'remove', ( evt, externalItem, index ) => {
			const item = this._bindToExternalToInternalMap.get( externalItem );

			if ( item ) {
				this.remove( item );
			}

			// After removing element from external collection we need update/remove indexes
			// of skipped items in internal collection.
			this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce( ( result, skipped ) => {
				if ( index < skipped ) {
					result.push( skipped - 1 );
				}

				if ( index > skipped ) {
					result.push( skipped );
				}

				return result;
			}, [] );
		} );
	}

	/**
	 * Iterable interface.
	 *
	 * @returns {Iterable.<*>}
	 */
	[ Symbol.iterator ]() {
		return this._items[ Symbol.iterator ]();
	}

	/**
	 * Fired when an item is added to the collection.
	 *
	 * @event add
	 * @param {Object} item The added item.
	 */

	/**
	 * Fired when an item is removed from the collection.
	 *
	 * @event remove
	 * @param {Object} item The removed item.
	 * @param {Number} index Index from which item was removed.
	 */
}

Object(_mix__WEBPACK_IMPORTED_MODULE_3__["default"])( Collection, _emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"] );


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _lib_lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/lodash/extend */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js");
/* harmony import */ var _isnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isnode */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js");
/* harmony import */ var _iswindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iswindow */ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/dom/emittermixin
 */







/**
 * Mixin that injects the DOM events API into its host. It provides the API
 * compatible with {@link module:utils/emittermixin~EmitterMixin}.
 *
 * DOM emitter mixin is by default available in the {@link module:ui/view~View} class,
 * but it can also be mixed into any other class:
 *
 *		import mix from '../utils/mix.js';
 *		import DomEmitterMixin from '../utils/dom/emittermixin.js';
 *
 *		class SomeView {}
 *		mix( SomeView, DomEmitterMixin );
 *
 *		const view = new SomeView();
 *		view.listenTo( domElement, ( evt, domEvt ) => {
 *			console.log( evt, domEvt );
 *		} );
 *
 * @mixin EmitterMixin
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/dom/emittermixin~Emitter
 */
const DomEmitterMixin = Object(_lib_lodash_extend__WEBPACK_IMPORTED_MODULE_2__["default"])( {}, _emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"], {
	/**
	 * Registers a callback function to be executed when an event is fired in a specific Emitter or DOM Node.
	 * It is backwards compatible with {@link module:utils/emittermixin~EmitterMixin#listenTo}.
	 *
	 * @param {module:utils/emittermixin~Emitter|Node} emitter The object that fires the event.
	 * @param {String} event The name of the event.
	 * @param {Function} callback The function to be called on event.
	 * @param {Object} [options={}] Additional options.
	 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
	 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
	 * order they were added.
	 * @param {Boolean} [options.useCapture=false] Indicates that events of this type will be dispatched to the registered
	 * listener before being dispatched to any EventTarget beneath it in the DOM tree.
	 */
	listenTo( emitter, ...rest ) {
		// Check if emitter is an instance of DOM Node. If so, replace the argument with
		// corresponding ProxyEmitter (or create one if not existing).
		if ( Object(_isnode__WEBPACK_IMPORTED_MODULE_3__["default"])( emitter ) || Object(_iswindow__WEBPACK_IMPORTED_MODULE_4__["default"])( emitter ) ) {
			const proxy = this._getProxyEmitter( emitter ) || new ProxyEmitter( emitter );

			proxy.attach( ...rest );

			emitter = proxy;
		}

		// Execute parent class method with Emitter (or ProxyEmitter) instance.
		_emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"].listenTo.call( this, emitter, ...rest );
	},

	/**
	 * Stops listening for events. It can be used at different levels:
	 * It is backwards compatible with {@link module:utils/emittermixin~EmitterMixin#listenTo}.
	 *
	 * * To stop listening to a specific callback.
	 * * To stop listening to a specific event.
	 * * To stop listening to all events fired by a specific object.
	 * * To stop listening to all events fired by all object.
	 *
	 * @param {module:utils/emittermixin~Emitter|Node} [emitter] The object to stop listening to. If omitted, stops it for all objects.
	 * @param {String} [event] (Requires the `emitter`) The name of the event to stop listening to. If omitted, stops it
	 * for all events from `emitter`.
	 * @param {Function} [callback] (Requires the `event`) The function to be removed from the call list for the given
	 * `event`.
	 */
	stopListening( emitter, event, callback ) {
		// Check if emitter is an instance of DOM Node. If so, replace the argument with corresponding ProxyEmitter.
		if ( Object(_isnode__WEBPACK_IMPORTED_MODULE_3__["default"])( emitter ) || Object(_iswindow__WEBPACK_IMPORTED_MODULE_4__["default"])( emitter ) ) {
			const proxy = this._getProxyEmitter( emitter );

			// Element has no listeners.
			if ( !proxy ) {
				return;
			}

			emitter = proxy;
		}

		// Execute parent class method with Emitter (or ProxyEmitter) instance.
		_emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"].stopListening.call( this, emitter, event, callback );

		if ( emitter instanceof ProxyEmitter ) {
			emitter.detach( event );
		}
	},

	/**
	 * Retrieves ProxyEmitter instance for given DOM Node residing in this Host.
	 *
	 * @pivate
	 * @param {Node} node DOM Node of the ProxyEmitter.
	 * @returns {module:utils/dom/emittermixin~ProxyEmitter} ProxyEmitter instance or null.
	 */
	_getProxyEmitter( node ) {
		return Object(_emittermixin__WEBPACK_IMPORTED_MODULE_0__["_getEmitterListenedTo"])( this, getNodeUID( node ) );
	}
} );

/* harmony default export */ __webpack_exports__["default"] = (DomEmitterMixin);

/**
 * Creates a ProxyEmitter instance. Such an instance is a bridge between a DOM Node firing events
 * and any Host listening to them. It is backwards compatible with {@link module:utils/emittermixin~EmitterMixin#on}.
 *
 *                                  listenTo( click, ... )
 *                    +-----------------------------------------+
 *                    |              stopListening( ... )       |
 *     +----------------------------+                           |             addEventListener( click, ... )
 *     | Host                       |                           |   +---------------------------------------------+
 *     +----------------------------+                           |   |       removeEventListener( click, ... )     |
 *     | _listeningTo: {            |                +----------v-------------+                                   |
 *     |   UID: {                   |                | ProxyEmitter           |                                   |
 *     |     emitter: ProxyEmitter, |                +------------------------+                      +------------v----------+
 *     |     callbacks: {           |                | events: {              |                      | Node (HTMLElement)    |
 *     |       click: [ callbacks ] |                |   click: [ callbacks ] |                      +-----------------------+
 *     |     }                      |                | },                     |                      | data-ck-expando: UID  |
 *     |   }                        |                | _domNode: Node,        |                      +-----------------------+
 *     | }                          |                | _domListeners: {},     |                                   |
 *     | +------------------------+ |                | _emitterId: UID        |                                   |
 *     | | DomEmitterMixin        | |                +--------------^---------+                                   |
 *     | +------------------------+ |                           |   |                                             |
 *     +--------------^-------------+                           |   +---------------------------------------------+
 *                    |                                         |                  click (DOM Event)
 *                    +-----------------------------------------+
 *                                fire( click, DOM Event )
 *
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/dom/emittermixin~Emitter
 * @private
 */
class ProxyEmitter {
	/**
	 * @param {Node} node DOM Node that fires events.
	 * @returns {Object} ProxyEmitter instance bound to the DOM Node.
	 */
	constructor( node ) {
		// Set emitter ID to match DOM Node "expando" property.
		Object(_emittermixin__WEBPACK_IMPORTED_MODULE_0__["_setEmitterId"])( this, getNodeUID( node ) );

		// Remember the DOM Node this ProxyEmitter is bound to.
		this._domNode = node;
	}
}

Object(_lib_lodash_extend__WEBPACK_IMPORTED_MODULE_2__["default"])( ProxyEmitter.prototype, _emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"], {
	/**
	 * Collection of native DOM listeners.
	 *
	 * @private
	 * @member {Object} module:utils/dom/emittermixin~ProxyEmitter#_domListeners
	 */

	/**
	 * Registers a callback function to be executed when an event is fired.
	 *
	 * It attaches a native DOM listener to the DOM Node. When fired,
	 * a corresponding Emitter event will also fire with DOM Event object as an argument.
	 *
	 * @method module:utils/dom/emittermixin~ProxyEmitter#attach
	 * @param {String} event The name of the event.
	 * @param {Function} callback The function to be called on event.
	 * @param {Object} [options={}] Additional options.
	 * @param {Boolean} [options.useCapture=false] Indicates that events of this type will be dispatched to the registered
	 * listener before being dispatched to any EventTarget beneath it in the DOM tree.
	 */
	attach( event, callback, options = {} ) {
		// If the DOM Listener for given event already exist it is pointless
		// to attach another one.
		if ( this._domListeners && this._domListeners[ event ] ) {
			return;
		}

		const domListener = this._createDomListener( event, !!options.useCapture );

		// Attach the native DOM listener to DOM Node.
		this._domNode.addEventListener( event, domListener, !!options.useCapture );

		if ( !this._domListeners ) {
			this._domListeners = {};
		}

		// Store the native DOM listener in this ProxyEmitter. It will be helpful
		// when stopping listening to the event.
		this._domListeners[ event ] = domListener;
	},

	/**
	 * Stops executing the callback on the given event.
	 *
	 * @method module:utils/dom/emittermixin~ProxyEmitter#detach
	 * @param {String} event The name of the event.
	 */
	detach( event ) {
		let events;

		// Remove native DOM listeners which are orphans. If no callbacks
		// are awaiting given event, detach native DOM listener from DOM Node.
		// See: {@link attach}.

		if ( this._domListeners[ event ] && ( !( events = this._events[ event ] ) || !events.callbacks.length ) ) {
			this._domListeners[ event ].removeListener();
		}
	},

	/**
	 * Creates a native DOM listener callback. When the native DOM event
	 * is fired it will fire corresponding event on this ProxyEmitter.
	 * Note: A native DOM Event is passed as an argument.
	 *
	 * @private
	 * @method module:utils/dom/emittermixin~ProxyEmitter#_createDomListener
	 * @param {String} event The name of the event.
	 * @param {Boolean} useCapture Indicates whether the listener was created for capturing event.
	 * @returns {Function} The DOM listener callback.
	 */
	_createDomListener( event, useCapture ) {
		const domListener = domEvt => {
			this.fire( event, domEvt );
		};

		// Supply the DOM listener callback with a function that will help
		// detach it from the DOM Node, when it is no longer necessary.
		// See: {@link detach}.
		domListener.removeListener = () => {
			this._domNode.removeEventListener( event, domListener, useCapture );
			delete this._domListeners[ event ];
		};

		return domListener;
	}
} );

// Gets an unique DOM Node identifier. The identifier will be set if not defined.
//
// @private
// @param {Node} node
// @returns {String} UID for given DOM Node.
function getNodeUID( node ) {
	return node[ 'data-ck-expando' ] || ( node[ 'data-ck-expando' ] = Object(_uid__WEBPACK_IMPORTED_MODULE_1__["default"])() );
}

/**
 * Interface representing classes which mix in {@link module:utils/dom/emittermixin~EmitterMixin}.
 *
 * @interface Emitter
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNode; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/dom/isnode
 */

/**
 * Checks if the object is a native DOM Node.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
function isNode( obj ) {
	if ( obj ) {
		if ( obj.defaultView ) {
			return obj instanceof obj.defaultView.Document;
		} else if ( obj.ownerDocument && obj.ownerDocument.defaultView ) {
			return obj instanceof obj.ownerDocument.defaultView.Node;
		}
	}

	return false;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWindow; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/dom/iswindow
 */

/**
 * Checks if the object is a native DOM Window.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
function isWindow( obj ) {
	const stringifiedObject = Object.prototype.toString.apply( obj );

	// Returns `true` for the `window` object in browser environments.
	if ( stringifiedObject == '[object Window]' ) {
		return true;
	}

	// Returns `true` for the `window` object in the Electron environment.
	if ( stringifiedObject == '[object global]' ) {
		return true;
	}

	return false;
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js ***!
  \********************************************************************/
/*! exports provided: default, _getEmitterListenedTo, _setEmitterId, _getEmitterId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getEmitterListenedTo", function() { return _getEmitterListenedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setEmitterId", function() { return _setEmitterId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getEmitterId", function() { return _getEmitterId; });
/* harmony import */ var _eventinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventinfo */ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/emittermixin
 */





const _listeningTo = Symbol( 'listeningTo' );
const _emitterId = Symbol( 'emitterId' );

/**
 * Mixin that injects the {@link ~Emitter events API} into its host.
 *
 * @mixin EmitterMixin
 * @implements module:utils/emittermixin~Emitter
 */
const EmitterMixin = {
	/**
	 * @inheritDoc
	 */
	on( event, callback, options = {} ) {
		this.listenTo( this, event, callback, options );
	},

	/**
	 * @inheritDoc
	 */
	once( event, callback, options ) {
		const onceCallback = function( event, ...args ) {
			// Go off() at the first call.
			event.off();

			// Go with the original callback.
			callback.call( this, event, ...args );
		};

		// Make a similar on() call, simply replacing the callback.
		this.listenTo( this, event, onceCallback, options );
	},

	/**
	 * @inheritDoc
	 */
	off( event, callback ) {
		this.stopListening( this, event, callback );
	},

	/**
	 * @inheritDoc
	 */
	listenTo( emitter, event, callback, options = {} ) {
		let emitterInfo, eventCallbacks;

		// _listeningTo contains a list of emitters that this object is listening to.
		// This list has the following format:
		//
		// _listeningTo: {
		//     emitterId: {
		//         emitter: emitter,
		//         callbacks: {
		//             event1: [ callback1, callback2, ... ]
		//             ....
		//         }
		//     },
		//     ...
		// }

		if ( !this[ _listeningTo ] ) {
			this[ _listeningTo ] = {};
		}

		const emitters = this[ _listeningTo ];

		if ( !_getEmitterId( emitter ) ) {
			_setEmitterId( emitter );
		}

		const emitterId = _getEmitterId( emitter );

		if ( !( emitterInfo = emitters[ emitterId ] ) ) {
			emitterInfo = emitters[ emitterId ] = {
				emitter,
				callbacks: {}
			};
		}

		if ( !( eventCallbacks = emitterInfo.callbacks[ event ] ) ) {
			eventCallbacks = emitterInfo.callbacks[ event ] = [];
		}

		eventCallbacks.push( callback );

		// Finally register the callback to the event.
		createEventNamespace( emitter, event );
		const lists = getCallbacksListsForNamespace( emitter, event );
		const priority = _priorities__WEBPACK_IMPORTED_MODULE_2__["default"].get( options.priority );

		const callbackDefinition = {
			callback,
			priority
		};

		// Add the callback to all callbacks list.
		for ( const callbacks of lists ) {
			// Add the callback to the list in the right priority position.
			let added = false;

			for ( let i = 0; i < callbacks.length; i++ ) {
				if ( callbacks[ i ].priority < priority ) {
					callbacks.splice( i, 0, callbackDefinition );
					added = true;

					break;
				}
			}

			// Add at the end, if right place was not found.
			if ( !added ) {
				callbacks.push( callbackDefinition );
			}
		}
	},

	/**
	 * @inheritDoc
	 */
	stopListening( emitter, event, callback ) {
		const emitters = this[ _listeningTo ];
		let emitterId = emitter && _getEmitterId( emitter );
		const emitterInfo = emitters && emitterId && emitters[ emitterId ];
		const eventCallbacks = emitterInfo && event && emitterInfo.callbacks[ event ];

		// Stop if nothing has been listened.
		if ( !emitters || ( emitter && !emitterInfo ) || ( event && !eventCallbacks ) ) {
			return;
		}

		// All params provided. off() that single callback.
		if ( callback ) {
			removeCallback( emitter, event, callback );
		}
		// Only `emitter` and `event` provided. off() all callbacks for that event.
		else if ( eventCallbacks ) {
			while ( ( callback = eventCallbacks.pop() ) ) {
				removeCallback( emitter, event, callback );
			}

			delete emitterInfo.callbacks[ event ];
		}
		// Only `emitter` provided. off() all events for that emitter.
		else if ( emitterInfo ) {
			for ( event in emitterInfo.callbacks ) {
				this.stopListening( emitter, event );
			}
			delete emitters[ emitterId ];
		}
		// No params provided. off() all emitters.
		else {
			for ( emitterId in emitters ) {
				this.stopListening( emitters[ emitterId ].emitter );
			}
			delete this[ _listeningTo ];
		}
	},

	/**
	 * @inheritDoc
	 */
	fire( eventOrInfo, ...args ) {
		const eventInfo = eventOrInfo instanceof _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"] ? eventOrInfo : new _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"]( this, eventOrInfo );
		const event = eventInfo.name;
		let callbacks = getCallbacksForEvent( this, event );

		// Record that the event passed this emitter on its path.
		eventInfo.path.push( this );

		// Handle event listener callbacks first.
		if ( callbacks ) {
			// Arguments passed to each callback.
			const callbackArgs = [ eventInfo, ...args ];

			// Copying callbacks array is the easiest and most secure way of preventing infinite loops, when event callbacks
			// are added while processing other callbacks. Previous solution involved adding counters (unique ids) but
			// failed if callbacks were added to the queue before currently processed callback.
			// If this proves to be too inefficient, another method is to change `.on()` so callbacks are stored if same
			// event is currently processed. Then, `.fire()` at the end, would have to add all stored events.
			callbacks = Array.from( callbacks );

			for ( let i = 0; i < callbacks.length; i++ ) {
				callbacks[ i ].callback.apply( this, callbackArgs );

				// Remove the callback from future requests if off() has been called.
				if ( eventInfo.off.called ) {
					// Remove the called mark for the next calls.
					delete eventInfo.off.called;

					removeCallback( this, event, callbacks[ i ].callback );
				}

				// Do not execute next callbacks if stop() was called.
				if ( eventInfo.stop.called ) {
					break;
				}
			}
		}

		// Delegate event to other emitters if needed.
		if ( this._delegations ) {
			const destinations = this._delegations.get( event );
			const passAllDestinations = this._delegations.get( '*' );

			if ( destinations ) {
				fireDelegatedEvents( destinations, eventInfo, args );
			}

			if ( passAllDestinations ) {
				fireDelegatedEvents( passAllDestinations, eventInfo, args );
			}
		}

		return eventInfo.return;
	},

	/**
	 * @inheritDoc
	 */
	delegate( ...events ) {
		return {
			to: ( emitter, nameOrFunction ) => {
				if ( !this._delegations ) {
					this._delegations = new Map();
				}

				for ( const eventName of events ) {
					const destinations = this._delegations.get( eventName );

					if ( !destinations ) {
						this._delegations.set( eventName, new Map( [ [ emitter, nameOrFunction ] ] ) );
					} else {
						destinations.set( emitter, nameOrFunction );
					}
				}
			}
		};
	},

	/**
	 * @inheritDoc
	 */
	stopDelegating( event, emitter ) {
		if ( !this._delegations ) {
			return;
		}

		if ( !event ) {
			this._delegations.clear();
		} else if ( !emitter ) {
			this._delegations.delete( event );
		} else {
			const destinations = this._delegations.get( event );

			if ( destinations ) {
				destinations.delete( emitter );
			}
		}
	}
};

/* harmony default export */ __webpack_exports__["default"] = (EmitterMixin);

/**
 * Emitter/listener interface.
 *
 * Can be easily implemented by a class by mixing the {@link module:utils/emittermixin~EmitterMixin} mixin.
 *
 * @interface Emitter
 */

/**
 * Registers a callback function to be executed when an event is fired.
 *
 * Shorthand for {@link #listenTo `this.listenTo( this, event, callback, options )`} (it makes the emitter
 * listen on itself).
 *
 * @method #on
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Registers a callback function to be executed on the next time the event is fired only. This is similar to
 * calling {@link #on} followed by {@link #off} in the callback.
 *
 * @method #once
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Stops executing the callback on the given event.
 * Shorthand for {@link #stopListening `this.stopListening( this, event, callback )`}.
 *
 * @method #off
 * @param {String} event The name of the event.
 * @param {Function} callback The function to stop being called.
 */

/**
 * Registers a callback function to be executed when an event is fired in a specific (emitter) object.
 *
 * Events can be grouped in namespaces using `:`.
 * When namespaced event is fired, it additionally fires all callbacks for that namespace.
 *
 *		// myEmitter.on( ... ) is a shorthand for myEmitter.listenTo( myEmitter, ... ).
 *		myEmitter.on( 'myGroup', genericCallback );
 *		myEmitter.on( 'myGroup:myEvent', specificCallback );
 *
 *		// genericCallback is fired.
 *		myEmitter.fire( 'myGroup' );
 *		// both genericCallback and specificCallback are fired.
 *		myEmitter.fire( 'myGroup:myEvent' );
 *		// genericCallback is fired even though there are no callbacks for "foo".
 *		myEmitter.fire( 'myGroup:foo' );
 *
 * An event callback can {@link module:utils/eventinfo~EventInfo#stop stop the event} and
 * set the {@link module:utils/eventinfo~EventInfo#return return value} of the {@link #fire} method.
 *
 * @method #listenTo
 * @param {module:utils/emittermixin~Emitter} emitter The object that fires the event.
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Stops listening for events. It can be used at different levels:
 *
 * * To stop listening to a specific callback.
 * * To stop listening to a specific event.
 * * To stop listening to all events fired by a specific object.
 * * To stop listening to all events fired by all objects.
 *
 * @method #stopListening
 * @param {module:utils/emittermixin~Emitter} [emitter] The object to stop listening to. If omitted, stops it for all objects.
 * @param {String} [event] (Requires the `emitter`) The name of the event to stop listening to. If omitted, stops it
 * for all events from `emitter`.
 * @param {Function} [callback] (Requires the `event`) The function to be removed from the call list for the given
 * `event`.
 */

/**
 * Fires an event, executing all callbacks registered for it.
 *
 * The first parameter passed to callbacks is an {@link module:utils/eventinfo~EventInfo} object,
 * followed by the optional `args` provided in the `fire()` method call.
 *
 * @method #fire
 * @param {String|module:utils/eventinfo~EventInfo} eventOrInfo The name of the event or `EventInfo` object if event is delegated.
 * @param {...*} [args] Additional arguments to be passed to the callbacks.
 * @returns {*} By default the method returns `undefined`. However, the return value can be changed by listeners
 * through modification of the {@link module:utils/eventinfo~EventInfo#return `evt.return`}'s property (the event info
 * is the first param of every callback).
 */

/**
 * Delegates selected events to another {@link module:utils/emittermixin~Emitter}. For instance:
 *
 *		emitterA.delegate( 'eventX' ).to( emitterB );
 *		emitterA.delegate( 'eventX', 'eventY' ).to( emitterC );
 *
 * then `eventX` is delegated (fired by) `emitterB` and `emitterC` along with `data`:
 *
 *		emitterA.fire( 'eventX', data );
 *
 * and `eventY` is delegated (fired by) `emitterC` along with `data`:
 *
 *		emitterA.fire( 'eventY', data );
 *
 * @method #delegate
 * @param {...String} events Event names that will be delegated to another emitter.
 * @returns {module:utils/emittermixin~EmitterMixinDelegateChain}
 */

/**
 * Stops delegating events. It can be used at different levels:
 *
 * * To stop delegating all events.
 * * To stop delegating a specific event to all emitters.
 * * To stop delegating a specific event to a specific emitter.
 *
 * @method #stopDelegating
 * @param {String} [event] The name of the event to stop delegating. If omitted, stops it all delegations.
 * @param {module:utils/emittermixin~Emitter} [emitter] (requires `event`) The object to stop delegating a particular event to.
 * If omitted, stops delegation of `event` to all emitters.
 */

/**
 * Checks if `listeningEmitter` listens to an emitter with given `listenedToEmitterId` and if so, returns that emitter.
 * If not, returns `null`.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} listeningEmitter Emitter that listens.
 * @param {String} listenedToEmitterId Unique emitter id of emitter listened to.
 * @returns {module:utils/emittermixin~EmitterMixin|null}
 */
function _getEmitterListenedTo( listeningEmitter, listenedToEmitterId ) {
	if ( listeningEmitter[ _listeningTo ] && listeningEmitter[ _listeningTo ][ listenedToEmitterId ] ) {
		return listeningEmitter[ _listeningTo ][ listenedToEmitterId ].emitter;
	}

	return null;
}

/**
 * Sets emitter's unique id.
 *
 * **Note:** `_emitterId` can be set only once.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} emitter Emitter for which id will be set.
 * @param {String} [id] Unique id to set. If not passed, random unique id will be set.
 */
function _setEmitterId( emitter, id ) {
	if ( !emitter[ _emitterId ] ) {
		emitter[ _emitterId ] = id || Object(_uid__WEBPACK_IMPORTED_MODULE_1__["default"])();
	}
}

/**
 * Returns emitter's unique id.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} emitter Emitter which id will be returned.
 */
function _getEmitterId( emitter ) {
	return emitter[ _emitterId ];
}

// Gets the internal `_events` property of the given object.
// `_events` property store all lists with callbacks for registered event names.
// If there were no events registered on the object, empty `_events` object is created.
function getEvents( source ) {
	if ( !source._events ) {
		Object.defineProperty( source, '_events', {
			value: {}
		} );
	}

	return source._events;
}

// Creates event node for generic-specific events relation architecture.
function makeEventNode() {
	return {
		callbacks: [],
		childEvents: []
	};
}

// Creates an architecture for generic-specific events relation.
// If needed, creates all events for given eventName, i.e. if the first registered event
// is foo:bar:abc, it will create foo:bar:abc, foo:bar and foo event and tie them together.
// It also copies callbacks from more generic events to more specific events when
// specific events are created.
function createEventNamespace( source, eventName ) {
	const events = getEvents( source );

	// First, check if the event we want to add to the structure already exists.
	if ( events[ eventName ] ) {
		// If it exists, we don't have to do anything.
		return;
	}

	// In other case, we have to create the structure for the event.
	// Note, that we might need to create intermediate events too.
	// I.e. if foo:bar:abc is being registered and we only have foo in the structure,
	// we need to also register foo:bar.

	// Currently processed event name.
	let name = eventName;
	// Name of the event that is a child event for currently processed event.
	let childEventName = null;

	// Array containing all newly created specific events.
	const newEventNodes = [];

	// While loop can't check for ':' index because we have to handle generic events too.
	// In each loop, we truncate event name, going from the most specific name to the generic one.
	// I.e. foo:bar:abc -> foo:bar -> foo.
	while ( name !== '' ) {
		if ( events[ name ] ) {
			// If the currently processed event name is already registered, we can be sure
			// that it already has all the structure created, so we can break the loop here
			// as no more events need to be registered.
			break;
		}

		// If this event is not yet registered, create a new object for it.
		events[ name ] = makeEventNode();
		// Add it to the array with newly created events.
		newEventNodes.push( events[ name ] );

		// Add previously processed event name as a child of this event.
		if ( childEventName ) {
			events[ name ].childEvents.push( childEventName );
		}

		childEventName = name;
		// If `.lastIndexOf()` returns -1, `.substr()` will return '' which will break the loop.
		name = name.substr( 0, name.lastIndexOf( ':' ) );
	}

	if ( name !== '' ) {
		// If name is not empty, we found an already registered event that was a parent of the
		// event we wanted to register.

		// Copy that event's callbacks to newly registered events.
		for ( const node of newEventNodes ) {
			node.callbacks = events[ name ].callbacks.slice();
		}

		// Add last newly created event to the already registered event.
		events[ name ].childEvents.push( childEventName );
	}
}

// Gets an array containing callbacks list for a given event and it's more specific events.
// I.e. if given event is foo:bar and there is also foo:bar:abc event registered, this will
// return callback list of foo:bar and foo:bar:abc (but not foo).
function getCallbacksListsForNamespace( source, eventName ) {
	const eventNode = getEvents( source )[ eventName ];

	if ( !eventNode ) {
		return [];
	}

	let callbacksLists = [ eventNode.callbacks ];

	for ( let i = 0; i < eventNode.childEvents.length; i++ ) {
		const childCallbacksLists = getCallbacksListsForNamespace( source, eventNode.childEvents[ i ] );

		callbacksLists = callbacksLists.concat( childCallbacksLists );
	}

	return callbacksLists;
}

// Get the list of callbacks for a given event, but only if there any callbacks have been registered.
// If there are no callbacks registered for given event, it checks if this is a specific event and looks
// for callbacks for it's more generic version.
function getCallbacksForEvent( source, eventName ) {
	let event;

	if ( !source._events || !( event = source._events[ eventName ] ) || !event.callbacks.length ) {
		// There are no callbacks registered for specified eventName.
		// But this could be a specific-type event that is in a namespace.
		if ( eventName.indexOf( ':' ) > -1 ) {
			// If the eventName is specific, try to find callback lists for more generic event.
			return getCallbacksForEvent( source, eventName.substr( 0, eventName.lastIndexOf( ':' ) ) );
		} else {
			// If this is a top-level generic event, return null;
			return null;
		}
	}

	return event.callbacks;
}

// Fires delegated events for given map of destinations.
//
// @private
// * @param {Map.<utils.Emitter>} destinations A map containing `[ {@link utils.Emitter}, "event name" ]` pair destinations.
// * @param {utils.EventInfo} eventInfo The original event info object.
// * @param {Array.<*>} fireArgs Arguments the original event was fired with.
function fireDelegatedEvents( destinations, eventInfo, fireArgs ) {
	for ( let [ emitter, name ] of destinations ) {
		if ( !name ) {
			name = eventInfo.name;
		} else if ( typeof name == 'function' ) {
			name = name( eventInfo.name );
		}

		const delegatedInfo = new _eventinfo__WEBPACK_IMPORTED_MODULE_0__["default"]( eventInfo.source, name );

		delegatedInfo.path = [ ...eventInfo.path ];

		emitter.fire( delegatedInfo, ...fireArgs );
	}
}

// Removes callback from emitter for given event.
//
// @param {module:utils/emittermixin~Emitter} emitter
// @param {String} event
// @param {Function} callback
function removeCallback( emitter, event, callback ) {
	const lists = getCallbacksListsForNamespace( emitter, event );

	for ( const callbacks of lists ) {
		for ( let i = 0; i < callbacks.length; i++ ) {
			if ( callbacks[ i ].callback == callback ) {
				// Remove the callback from the list (fixing the next index).
				callbacks.splice( i, 1 );
				i--;
			}
		}
	}
}

/**
 * The return value of {@link ~EmitterMixin#delegate}.
 *
 * @interface module:utils/emittermixin~EmitterMixinDelegateChain
 */

/**
 * Selects destination for {@link module:utils/emittermixin~EmitterMixin#delegate} events.
 *
 * @method #to
 * @param {module:utils/emittermixin~Emitter} emitter An `EmitterMixin` instance which is the destination for delegated events.
 * @param {String|Function} nameOrFunction A custom event name or function which converts the original name string.
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/env.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/env.js ***!
  \***********************************************************/
/*! exports provided: default, isMac, isEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals navigator:false */

/**
 * @module utils/env
 */

const userAgent = navigator.userAgent.toLowerCase();

/**
 * A namespace containing environment and browser information.
 *
 * @namespace
 */
const env = {
	/**
	 * Indicates that the application is running on Macintosh.
	 *
	 * @static
	 * @member {Boolean} module:utils/env~env#isMac
	 */
	isMac: isMac( userAgent ),

	/**
	 * Indicates that the application is running in Microsoft Edge.
	 *
	 * @static
	 * @member {Boolean} module:utils/env~env#isEdge
	 */
	isEdge: isEdge( userAgent )
};

/* harmony default export */ __webpack_exports__["default"] = (env);

/**
 * Checks if User Agent represented by the string is running on Macintosh.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running on Macintosh or not.
 */
function isMac( userAgent ) {
	return userAgent.indexOf( 'macintosh' ) > -1;
}

/**
 * Checks if User Agent represented by the string is Microsoft Edge.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is Edge or not.
 */
function isEdge( userAgent ) {
	return !!userAgent.match( /edge\/(\d+.?\d*)/ );
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventInfo; });
/* harmony import */ var _spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spy */ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/eventinfo
 */



/**
 * The event object passed to event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
class EventInfo {
	/**
	 * @param {Object} source The emitter.
	 * @param {String} name The event name.
	 */
	constructor( source, name ) {
		/**
		 * The object that fired the event.
		 *
		 * @readonly
		 * @member {Object}
		 */
		this.source = source;

		/**
		 * The event name.
		 *
		 * @readonly
		 * @member {String}
		 */
		this.name = name;

		/**
		 * Path this event has followed. See {@link module:utils/emittermixin~EmitterMixin#delegate}.
		 *
		 * @readonly
		 * @member {Array.<Object>}
		 */
		this.path = [];

		// The following methods are defined in the constructor because they must be re-created per instance.

		/**
		 * Stops the event emitter to call further callbacks for this event interaction.
		 *
		 * @method #stop
		 */
		this.stop = Object(_spy__WEBPACK_IMPORTED_MODULE_0__["default"])();

		/**
		 * Removes the current callback from future interactions of this event.
		 *
		 * @method #off
		 */
		this.off = Object(_spy__WEBPACK_IMPORTED_MODULE_0__["default"])();

		/**
		 * The value which will be returned by {@link module:utils/emittermixin~EmitterMixin#fire}.
		 *
		 * It's `undefined` by default and can be changed by an event listener:
		 *
		 *		dataController.fire( 'getSelectedContent', ( evt ) => {
		 *			// This listener will make `dataController.fire( 'getSelectedContent' )`
		 *			// always return an empty DocumentFragment.
		 *			evt.return = new DocumentFragment();
		 *
		 *			// Make sure no other listeners are executed.
		 *			evt.stop();
		 *		} );
		 *
		 * @member #return
		 */
	}
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isIterable; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/isiterable
 */

/**
 * Checks if value implements iterator interface.
 *
 * @param {*} value The value to check.
 * @returns {Boolean} True if value implements iterator interface.
 */
function isIterable( value ) {
	return !!( value && value[ Symbol.iterator ] );
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js ***!
  \****************************************************************/
/*! exports provided: keyCodes, getCode, parseKeystroke, getEnvKeystrokeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodes", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCode", function() { return getCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKeystroke", function() { return parseKeystroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvKeystrokeText", function() { return getEnvKeystrokeText; });
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/@ckeditor/ckeditor5-utils/src/env.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Set of utils related to keyboard support.
 *
 * @module utils/keyboard
 */




const macGlyphsToModifiers = {
	'⌘': 'ctrl',
	'⇧': 'shift',
	'⌥': 'alt'
};

const modifiersToMacGlyphs = {
	'ctrl': '⌘',
	'shift': '⇧',
	'alt': '⌥'
};

/**
 * Object with `keyName => keyCode` pairs for a set of known keys.
 *
 * Contains:
 *
 * * `a-z`,
 * * `0-9`,
 * * `f1-f12`,
 * * `arrow(left|up|right|bottom)`,
 * * `backspace`, `delete`, `enter`, `esc`, `tab`,
 * * `ctrl`, `cmd`, `shift`, `alt`.
 */
const keyCodes = generateKnownKeyCodes();

/**
 * Converts a key name or a {@link module:utils/keyboard~KeystrokeInfo keystroke info} into a key code.
 *
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 *
 * @param {String|module:utils/keyboard~KeystrokeInfo} Key name (see {@link module:utils/keyboard~keyCodes})
 * or a keystroke data object.
 * @returns {Number} Key or keystroke code.
 */
function getCode( key ) {
	let keyCode;

	if ( typeof key == 'string' ) {
		keyCode = keyCodes[ key.toLowerCase() ];

		if ( !keyCode ) {
			/**
			 * Unknown key name. Only key names contained by the {@link module:utils/keyboard~keyCodes} can be used.
			 *
			 * @errror keyboard-unknown-key
			 * @param {String} key
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["default"]( 'keyboard-unknown-key: Unknown key name.', { key } );
		}
	} else {
		keyCode = key.keyCode +
			( key.altKey ? keyCodes.alt : 0 ) +
			( key.ctrlKey ? keyCodes.ctrl : 0 ) +
			( key.shiftKey ? keyCodes.shift : 0 );
	}

	return keyCode;
}

/**
 * Parses keystroke and returns a keystroke code that will match the code returned by
 * link {@link module:utils/keyboard.getCode} for a corresponding {@link module:utils/keyboard~KeystrokeInfo keystroke info}.
 *
 * The keystroke can be passed in two formats:
 *
 * * as a single string – e.g. `ctrl + A`,
 * * as an array of {@link module:utils/keyboard~keyCodes known key names} and key codes – e.g.:
 *   * `[ 'ctrl', 32 ]` (ctrl + space),
 *   * `[ 'ctrl', 'a' ]` (ctrl + A).
 *
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 *
 * Note: Only keystrokes with a single non-modifier key are supported (e.g. `ctrl+A` is OK, but `ctrl+A+B` is not).
 *
 * @param {String|Array.<Number|String>} keystroke Keystroke definition.
 * @returns {Number} Keystroke code.
 */
function parseKeystroke( keystroke ) {
	if ( typeof keystroke == 'string' ) {
		keystroke = splitKeystrokeText( keystroke );
	}

	return keystroke
		.map( key => ( typeof key == 'string' ) ? getCode( key ) : key )
		.reduce( ( key, sum ) => sum + key, 0 );
}

/**
 * It translates any keystroke string text like `"CTRL+A"` to an
 * environment–specific keystroke, i.e. `"⌘A"` on Mac OSX.
 *
 * @param {String} keystroke Keystroke text.
 * @returns {String} Keystroke text specific for the environment.
 */
function getEnvKeystrokeText( keystroke ) {
	if ( !_env__WEBPACK_IMPORTED_MODULE_1__["default"].isMac ) {
		return keystroke;
	}

	return splitKeystrokeText( keystroke )
		// Replace modifiers (e.g. "ctrl") with Mac glyphs (e.g. "⌘") first.
		.map( key => modifiersToMacGlyphs[ key.toLowerCase() ] || key )

		// Decide whether to put "+" between keys in the keystroke or not.
		.reduce( ( value, key ) => {
			if ( value.slice( -1 ) in macGlyphsToModifiers ) {
				return value + key;
			} else {
				return value + '+' + key;
			}
		} );
}

function generateKnownKeyCodes() {
	const keyCodes = {
		arrowleft: 37,
		arrowup: 38,
		arrowright: 39,
		arrowdown: 40,
		backspace: 8,
		delete: 46,
		enter: 13,
		space: 32,
		esc: 27,
		tab: 9,

		// The idea about these numbers is that they do not collide with any real key codes, so we can use them
		// like bit masks.
		ctrl: 0x110000,
		// Has the same code as ctrl, because their behaviour should be unified across the editor.
		// See http://ckeditor.github.io/editor-recommendations/general-policies#ctrl-vs-cmd
		cmd: 0x110000,
		shift: 0x220000,
		alt: 0x440000
	};

	// a-z
	for ( let code = 65; code <= 90; code++ ) {
		const letter = String.fromCharCode( code );

		keyCodes[ letter.toLowerCase() ] = code;
	}

	// 0-9
	for ( let code = 48; code <= 57; code++ ) {
		keyCodes[ code - 48 ] = code;
	}

	// F1-F12
	for ( let code = 112; code <= 123; code++ ) {
		keyCodes[ 'f' + ( code - 111 ) ] = code;
	}

	return keyCodes;
}

function splitKeystrokeText( keystroke ) {
	return keystroke.split( /\s*\+\s*/ );
}

/**
 * Information about a keystroke.
 *
 * @interface module:utils/keyboard~KeystrokeInfo
 */

/**
 * The [key code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
 *
 * @member {Number} module:utils/keyboard~KeystrokeInfo#keyCode
 */

/**
 * Whether the <kbd>Alt</kbd> modifier was pressed.
 *
 * @member {Bolean} module:utils/keyboard~KeystrokeInfo#altKey
 */

/**
 * Whether the <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> modifier was pressed.
 *
 * @member {Bolean} module:utils/keyboard~KeystrokeInfo#ctrlKey
 */

/**
 * Whether the <kbd>Shift</kbd> modifier was pressed.
 *
 * @member {Bolean} module:utils/keyboard~KeystrokeInfo#shiftKey
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_DataView.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_DataView.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(_root__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["default"] = (DataView);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Hash.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Hash.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashClear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashClear.js");
/* harmony import */ var _hashDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashDelete.js");
/* harmony import */ var _hashGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashGet.js");
/* harmony import */ var _hashHas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashHas.js");
/* harmony import */ var _hashSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Hash);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listCacheClear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheClear.js");
/* harmony import */ var _listCacheDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheDelete.js");
/* harmony import */ var _listCacheGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheGet.js");
/* harmony import */ var _listCacheHas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheHas.js");
/* harmony import */ var _listCacheSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (ListCache);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Map.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(_root__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_MapCache.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_MapCache.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCacheClear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapCache);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Promise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Promise.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(_root__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");


/** Built-in value references. */
var Reflect = _root__WEBPACK_IMPORTED_MODULE_0__["default"].Reflect;

/* harmony default export */ __webpack_exports__["default"] = (Reflect);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Set.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Set.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(_root__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Stack.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Stack.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js");
/* harmony import */ var _stackClear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackClear.js");
/* harmony import */ var _stackDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackDelete.js");
/* harmony import */ var _stackGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackGet.js");
/* harmony import */ var _stackHas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackHas.js");
/* harmony import */ var _stackSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new _ListCache__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Symbol.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Symbol.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");


/** Built-in value references. */
var Symbol = _root__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Uint8Array.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Uint8Array.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");


/** Built-in value references. */
var Uint8Array = _root__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ __webpack_exports__["default"] = (Uint8Array);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_WeakMap.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_WeakMap.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(_root__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addMapEntry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addMapEntry.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (addMapEntry);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addSetEntry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addSetEntry.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  set.add(value);
  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (addSetEntry);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  var length = args.length;
  switch (length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ __webpack_exports__["default"] = (apply);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayEach.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayEach.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEach);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayPush.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayPush.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayPush);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayReduce.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayReduce.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayReduce);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && Object(_eq__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(_eq__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (assocIndexOf);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseAssign.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseAssign.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && Object(_copyObject__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssign);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseClone.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseClone.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Stack.js");
/* harmony import */ var _arrayEach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayEach.js");
/* harmony import */ var _assignValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assignValue */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js");
/* harmony import */ var _baseAssign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseAssign */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseAssign.js");
/* harmony import */ var _cloneBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneBuffer.js");
/* harmony import */ var _copyArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_copyArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyArray.js");
/* harmony import */ var _copySymbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copySymbols */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copySymbols.js");
/* harmony import */ var _getAllKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getAllKeys.js");
/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_getTag */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getTag.js");
/* harmony import */ var _initCloneArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneArray.js");
/* harmony import */ var _initCloneByTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneByTag.js");
/* harmony import */ var _initCloneObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneObject.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");
/* harmony import */ var _isBuffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isBuffer */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isBuffer.js");
/* harmony import */ var _isHostObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_isHostObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isHostObject.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./keys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keys.js");


















/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    return value;
  }
  var isArr = Object(_isArray__WEBPACK_IMPORTED_MODULE_12__["default"])(value);
  if (isArr) {
    result = Object(_initCloneArray__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
    if (!isDeep) {
      return Object(_copyArray__WEBPACK_IMPORTED_MODULE_5__["default"])(value, result);
    }
  } else {
    var tag = Object(_getTag__WEBPACK_IMPORTED_MODULE_8__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if (Object(_isBuffer__WEBPACK_IMPORTED_MODULE_13__["default"])(value)) {
      return Object(_cloneBuffer__WEBPACK_IMPORTED_MODULE_4__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (Object(_isHostObject__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
        return object ? value : {};
      }
      result = Object(_initCloneObject__WEBPACK_IMPORTED_MODULE_11__["default"])(isFunc ? {} : value);
      if (!isDeep) {
        return Object(_copySymbols__WEBPACK_IMPORTED_MODULE_6__["default"])(value, Object(_baseAssign__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = Object(_initCloneByTag__WEBPACK_IMPORTED_MODULE_10__["default"])(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? Object(_getAllKeys__WEBPACK_IMPORTED_MODULE_7__["default"])(value) : Object(_keys__WEBPACK_IMPORTED_MODULE_16__["default"])(value);
  }
  // Recursively populate clone (susceptible to call stack limits).
  Object(_arrayEach__WEBPACK_IMPORTED_MODULE_1__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    Object(_assignValue__WEBPACK_IMPORTED_MODULE_2__["default"])(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClone);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseCreate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseCreate.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(proto) ? objectCreate(proto) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseGetAllKeys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseGetAllKeys.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayPush.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return Object(_isArray__WEBPACK_IMPORTED_MODULE_1__["default"])(object) ? result : Object(_arrayPush__WEBPACK_IMPORTED_MODULE_0__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseHas.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseHas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getPrototype.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.
  return hasOwnProperty.call(object, key) ||
    (typeof object == 'object' && key in object && Object(_getPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(object) === null);
}

/* harmony default export */ __webpack_exports__["default"] = (baseHas);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeys.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeys.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object.keys;

/**
 * The base implementation of `_.keys` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  return nativeKeys(Object(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeys);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Reflect */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js");
/* harmony import */ var _iteratorToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_iteratorToArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var enumerate = _Reflect__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Reflect__WEBPACK_IMPORTED_MODULE_0__["default"].enumerate : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.keysIn` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  object = object == null ? object : Object(object);

  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}

// Fallback for IE < 9 with es6-shim.
if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
  baseKeysIn = function(object) {
    return Object(_iteratorToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(enumerate(object));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseProperty);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTimes);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value && value.Object === Object) ? value : null;
}

/* harmony default export */ __webpack_exports__["default"] = (checkGlobal);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneArrayBuffer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneArrayBuffer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneBuffer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneBuffer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneDataView.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneDataView.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDataView);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneMap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneMap.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addMapEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_addMapEntry */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addMapEntry.js");
/* harmony import */ var _arrayReduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayReduce.js");
/* harmony import */ var _mapToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapToArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapToArray.js");




/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(Object(_mapToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(map), true) : Object(_mapToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(map);
  return Object(_arrayReduce__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _addMapEntry__WEBPACK_IMPORTED_MODULE_0__["default"], new map.constructor);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneMap);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneRegExp.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneRegExp.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneRegExp);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addSetEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_addSetEntry */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_addSetEntry.js");
/* harmony import */ var _arrayReduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_arrayReduce.js");
/* harmony import */ var _setToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setToArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_setToArray.js");




/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(Object(_setToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(set), true) : Object(_setToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(set);
  return Object(_arrayReduce__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _addSetEntry__WEBPACK_IMPORTED_MODULE_0__["default"], new set.constructor);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSymbol.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSymbol.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSymbol);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneTypedArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneTypedArray.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyArray.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js");


/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : source[key];

    Object(_assignValue__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
  }
  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copySymbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copySymbols.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js");
/* harmony import */ var _getSymbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getSymbols.js");



/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return Object(_copyObject__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbols__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbols);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIterateeCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js");



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return Object(_rest__WEBPACK_IMPORTED_MODULE_1__["default"])(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && Object(_isIterateeCall__WEBPACK_IMPORTED_MODULE_0__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createAssigner);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getAllKeys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getAllKeys.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getSymbols.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(_baseGetAllKeys__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbols__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeys);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseProperty */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js");


/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a
 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
 * Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = Object(_baseProperty__WEBPACK_IMPORTED_MODULE_0__["default"])('length');

/* harmony default export */ __webpack_exports__["default"] = (getLength);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isKeyable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return Object(_isKeyable__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["default"] = (getMapData);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isNative.js");


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object[key];
  return Object(_isNative__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (getNative);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetPrototype = Object.getPrototypeOf;

/**
 * Gets the `[[Prototype]]` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {null|Object} Returns the `[[Prototype]]`.
 */
function getPrototype(value) {
  return nativeGetPrototype(Object(value));
}

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getSymbols.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getSymbols.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Built-in value references. */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
function getSymbols(object) {
  // Coerce `object` to an object to avoid non-object errors in V8.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
  return getOwnPropertySymbols(Object(object));
}

// Fallback for IE < 11.
if (!getOwnPropertySymbols) {
  getSymbols = function() {
    return [];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getSymbols);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getTag.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getTag.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataView */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_DataView.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Map.js");
/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Promise */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Promise.js");
/* harmony import */ var _Set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Set */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Set.js");
/* harmony import */ var _WeakMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_WeakMap */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_WeakMap.js");
/* harmony import */ var _toSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_toSource */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_toSource.js");







/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(_DataView__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mapCtorString = Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(_Map__WEBPACK_IMPORTED_MODULE_1__["default"]),
    promiseCtorString = Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(_Promise__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setCtorString = Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(_Set__WEBPACK_IMPORTED_MODULE_3__["default"]),
    weakMapCtorString = Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(_WeakMap__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  return objectToString.call(value);
}

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge, and promises in Node.js.
if ((_DataView__WEBPACK_IMPORTED_MODULE_0__["default"] && getTag(new _DataView__WEBPACK_IMPORTED_MODULE_0__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _Map__WEBPACK_IMPORTED_MODULE_1__["default"]) != mapTag) ||
    (_Promise__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve()) != promiseTag) ||
    (_Set__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(new _Set__WEBPACK_IMPORTED_MODULE_3__["default"]) != setTag) ||
    (_WeakMap__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _WeakMap__WEBPACK_IMPORTED_MODULE_4__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource__WEBPACK_IMPORTED_MODULE_5__["default"])(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getTag);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashClear.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashClear.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_nativeCreate__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (hashClear);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashDelete.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashDelete.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/* harmony default export */ __webpack_exports__["default"] = (hashDelete);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashGet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashGet.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (hashGet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashHas.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashHas.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate__WEBPACK_IMPORTED_MODULE_0__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["default"] = (hashHas);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashSet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_hashSet.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (_nativeCreate__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (hashSet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTimes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTimes */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js");
/* harmony import */ var _isArguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");
/* harmony import */ var _isLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isString */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js");






/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if (Object(_isLength__WEBPACK_IMPORTED_MODULE_3__["default"])(length) &&
      (Object(_isArray__WEBPACK_IMPORTED_MODULE_2__["default"])(object) || Object(_isString__WEBPACK_IMPORTED_MODULE_4__["default"])(object) || Object(_isArguments__WEBPACK_IMPORTED_MODULE_1__["default"])(object))) {
    return Object(_baseTimes__WEBPACK_IMPORTED_MODULE_0__["default"])(length, String);
  }
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (indexKeys);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneArray.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneByTag.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneByTag.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneDataView.js");
/* harmony import */ var _cloneMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneMap */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneMap.js");
/* harmony import */ var _cloneRegExp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneRegExp.js");
/* harmony import */ var _cloneSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSet */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSet.js");
/* harmony import */ var _cloneSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_cloneTypedArray.js");








/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return Object(_cloneArrayBuffer__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return Object(_cloneDataView__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return Object(_cloneTypedArray__WEBPACK_IMPORTED_MODULE_6__["default"])(object, isDeep);

    case mapTag:
      return Object(_cloneMap__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return Object(_cloneRegExp__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case setTag:
      return Object(_cloneSet__WEBPACK_IMPORTED_MODULE_4__["default"])(object, isDeep, cloneFunc);

    case symbolTag:
      return Object(_cloneSymbol__WEBPACK_IMPORTED_MODULE_5__["default"])(object);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneByTag);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneObject.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_initCloneObject.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseCreate.js");
/* harmony import */ var _getPrototype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getPrototype.js");
/* harmony import */ var _isPrototype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    ? Object(_baseCreate__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype__WEBPACK_IMPORTED_MODULE_1__["default"])(object))
    : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isHostObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isHostObject.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (isHostObject);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["default"] = (isIndex);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");
/* harmony import */ var _isIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_3__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && Object(_isIndex__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return Object(_eq__WEBPACK_IMPORTED_MODULE_0__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (isIterateeCall);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isKeyable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isKeyable.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ __webpack_exports__["default"] = (isKeyable);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["default"] = (isPrototype);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (iteratorToArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheClear.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheClear.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheClear);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheDelete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheDelete.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheDelete);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheGet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheGet.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheGet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheHas.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheHas.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return Object(_assocIndexOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheHas);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheSet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_listCacheSet.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = Object(_assocIndexOf__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheSet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheClear.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheClear.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Hash.js");
/* harmony import */ var _ListCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ListCache */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new _Hash__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map__WEBPACK_IMPORTED_MODULE_2__["default"] || _ListCache__WEBPACK_IMPORTED_MODULE_1__["default"]),
    'string': new _Hash__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheClear);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheDelete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheDelete.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return Object(_getMapData__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheGet.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheGet.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return Object(_getMapData__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheGet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheHas.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheHas.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return Object(_getMapData__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheHas);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheSet.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapCacheSet.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  Object(_getMapData__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).set(key, value);
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheSet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapToArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_mapToArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapToArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_nativeCreate.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ __webpack_exports__["default"] = (nativeCreate);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony import */ var _checkGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_checkGlobal */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js");


/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
  ? module
  : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = Object(_checkGlobal__WEBPACK_IMPORTED_MODULE_0__["default"])(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = Object(_checkGlobal__WEBPACK_IMPORTED_MODULE_0__["default"])(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
var freeWindow = Object(_checkGlobal__WEBPACK_IMPORTED_MODULE_0__["default"])(objectTypes[typeof window] && window);

/** Detect `this` as the global object. */
var thisGlobal = Object(_checkGlobal__WEBPACK_IMPORTED_MODULE_0__["default"])(objectTypes[typeof undefined] && undefined);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal ||
  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
    freeSelf || thisGlobal || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_setToArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_setToArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (setToArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackClear.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackClear.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (stackClear);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackDelete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackDelete.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackDelete);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackGet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackGet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackHas.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackHas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackHas);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_stackSet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_ListCache.js");
/* harmony import */ var _MapCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_MapCache */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_MapCache.js");



/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof _ListCache__WEBPACK_IMPORTED_MODULE_0__["default"] && cache.__data__.length == LARGE_ARRAY_SIZE) {
    cache = this.__data__ = new _MapCache__WEBPACK_IMPORTED_MODULE_1__["default"](cache.__data__);
  }
  cache.set(key, value);
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (stackSet);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_toSource.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_toSource.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (toSource);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js");
/* harmony import */ var _copyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_copyObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js");
/* harmony import */ var _createAssigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createAssigner */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");
/* harmony import */ var _isPrototype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");
/* harmony import */ var _keysIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keysIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * function Bar() {
 *   this.d = 4;
 * }
 *
 * Foo.prototype.c = 3;
 * Bar.prototype.e = 5;
 *
 * _.assignIn({ 'a': 1 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
 */
var assignIn = Object(_createAssigner__WEBPACK_IMPORTED_MODULE_2__["default"])(function(object, source) {
  if (nonEnumShadows || Object(_isPrototype__WEBPACK_IMPORTED_MODULE_4__["default"])(source) || Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_3__["default"])(source)) {
    Object(_copyObject__WEBPACK_IMPORTED_MODULE_1__["default"])(source, Object(_keysIn__WEBPACK_IMPORTED_MODULE_5__["default"])(source), object);
    return;
  }
  for (var key in source) {
    Object(_assignValue__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, source[key]);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (assignIn);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/cloneDeepWith.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/cloneDeepWith.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseClone.js");


/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  return Object(_baseClone__WEBPACK_IMPORTED_MODULE_0__["default"])(value, true, true, customizer);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDeepWith);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/constant.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/constant.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var getter = _.constant(object);
 *
 * getter() === object;
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (constant);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["default"] = (eq);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assignIn__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArrayLikeObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js");


/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return Object(_isArrayLikeObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @type {Function}
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js");
/* harmony import */ var _isLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js");




/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && Object(_isLength__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getLength__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) && !Object(_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLike);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");
/* harmony import */ var _isObjectLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return Object(_isObjectLike__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLikeObject);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isBuffer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isBuffer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/constant.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");



/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
  ? module
  : undefined;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = (freeModule && freeModule.exports === freeExports)
  ? freeExports
  : undefined;

/** Built-in value references. */
var Buffer = moduleExports ? _root__WEBPACK_IMPORTED_MODULE_1__["default"].Buffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = !Buffer ? Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(false) : function(value) {
  return value instanceof Buffer;
};

/* harmony default export */ __webpack_exports__["default"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");


/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["default"] = (isLength);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isNative.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isNative.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js");
/* harmony import */ var _isHostObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isHostObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isHostObject.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");
/* harmony import */ var _toSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (!Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    return false;
  }
  var pattern = (Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || Object(_isHostObject__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (isNative);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");
/* harmony import */ var _isObjectLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");



/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && Object(_isObjectLike__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && objectToString.call(value) == stringTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isString);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObjectLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");


/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && objectToString.call(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keys.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseHas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseHas */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseHas.js");
/* harmony import */ var _baseKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeys.js");
/* harmony import */ var _indexKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_indexKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");
/* harmony import */ var _isIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIndex */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js");
/* harmony import */ var _isPrototype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");







/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  var isProto = Object(_isPrototype__WEBPACK_IMPORTED_MODULE_5__["default"])(object);
  if (!(isProto || Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_3__["default"])(object))) {
    return Object(_baseKeys__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var indexes = Object(_indexKeys__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  for (var key in object) {
    if (Object(_baseHas__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key) &&
        !(skipIndexes && (key == 'length' || Object(_isIndex__WEBPACK_IMPORTED_MODULE_4__["default"])(key, length))) &&
        !(isProto && key == 'constructor')) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (keys);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseKeysIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js");
/* harmony import */ var _indexKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_indexKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js");
/* harmony import */ var _isIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js");
/* harmony import */ var _isPrototype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");





/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  var index = -1,
      isProto = Object(_isPrototype__WEBPACK_IMPORTED_MODULE_3__["default"])(object),
      props = Object(_baseKeysIn__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      propsLength = props.length,
      indexes = Object(_indexKeys__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  while (++index < propsLength) {
    var key = props[index];
    if (!(skipIndexes && (key == 'length' || Object(_isIndex__WEBPACK_IMPORTED_MODULE_2__["default"])(key, length))) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js");
/* harmony import */ var _toInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toInteger */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js");



/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function rest(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : Object(_toInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(start), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, array);
      case 1: return func.call(this, args[0], array);
      case 2: return func.call(this, args[0], args[1], array);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return Object(_apply__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (rest);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = Object(_toNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toFinite);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js");


/**
 * Converts `value` to an integer.
 *
 * **Note:** This function is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = Object(_toFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toInteger);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");
/* harmony import */ var _isSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSymbol */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(value.valueOf) ? value.valueOf() : value;
    value = Object(_isObject__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/log.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/log.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global console */

/**
 * @module utils/log
 */



/**
 * The logging module.
 *
 * This object features two functions that should be used across CKEditor code base to log errors and warnings.
 * Despite being an overridable interface for native `console.*` this module serves also the goal to limit the
 * code size of a minified CKEditor package. During minification process the messages will be shortened and
 * links to their documentation will be logged to the console.
 *
 * All errors and warning should be documented in the following way:
 *
 *		/**
 *		 * Error thrown when a plugin cannot be loaded due to JavaScript errors, lack of plugins with a given name, etc.
 *		 *
 *		 * @error plugin-load
 *		 * @param pluginName The name of the plugin that could not be loaded.
 *		 * @param moduleName The name of the module which tried to load this plugin.
 *		 * /
 *		log.error( 'plugin-load: It was not possible to load the "{$pluginName}" plugin in module "{$moduleName}', {
 *			pluginName: 'foo',
 *			moduleName: 'bar'
 *		} );
 *
 * ### Warning vs Error vs Throw
 *
 * * Whenever a potentially incorrect situation occurs, which does not directly lead to an incorrect behavior,
 * log a warning.
 * * Whenever an incorrect situation occurs, but the app may continue working (although perhaps incorrectly),
 * log an error.
 * * Whenever it's really bad and it does not make sense to continue working, throw a {@link module:utils/ckeditorerror~CKEditorError}.
 *
 * @namespace
 */
const log = {
	/**
	 * Logs an error to the console.
	 *
	 * Read more about error logging in the {@link module:utils/log} module.
	 *
	 * @param {String} message The error message in an `error-name: Error message.` format.
	 * During the minification process the "Error message" part will be removed to limit the code size
	 * and a link to this error documentation will be logged to the console.
	 * @param {Object} [data] Additional data describing the error.
	 */
	error( message, data ) {
		console.error( Object(_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["attachLinkToDocumentation"])( message ), data );
	},

	/**
	 * Logs a warning to the console.
	 *
	 * Read more about error logging in the {@link module:utils/log} module.
	 *
	 * @param {String} message The warning message in a `warning-name: Warning message.` format.
	 * During the minification process the "Warning message" part will be removed to limit the code size
	 * and a link to this error documentation will be logged to the console.
	 * @param {Object} [data] Additional data describing the warning.
	 */
	warn( message, data ) {
		console.warn( Object(_ckeditorerror__WEBPACK_IMPORTED_MODULE_0__["attachLinkToDocumentation"])( message ), data );
	}
};

/* harmony default export */ __webpack_exports__["default"] = (log);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/mix.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mix; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/mix
 */

/**
 * Copies enumerable properties and symbols from the objects given as 2nd+ parameters to the
 * prototype of first object (a constructor).
 *
 *		class Editor {
 *			...
 *		}
 *
 *		const SomeMixin = {
 *			a() {
 *				return 'a';
 *			}
 *		};
 *
 *		mix( Editor, SomeMixin, ... );
 *
 *		new Editor().a(); // -> 'a'
 *
 * Note: Properties which already exist in the base class will not be overriden.
 *
 * @param {Function} [baseClass] Class which prototype will be extended.
 * @param {Object} [...mixins] Objects from which to get properties.
 */
function mix( baseClass, ...mixins ) {
	mixins.forEach( mixin => {
		Object.getOwnPropertyNames( mixin ).concat( Object.getOwnPropertySymbols( mixin ) )
			.forEach( key => {
				if ( key in baseClass.prototype ) {
					return;
				}

				const sourceDescriptor = Object.getOwnPropertyDescriptor( mixin, key );
				sourceDescriptor.enumerable = false;

				Object.defineProperty( baseClass.prototype, key, sourceDescriptor );
			} );
	} );
}


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emittermixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");
/* harmony import */ var _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");
/* harmony import */ var _lib_lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/lodash/extend */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js");
/* harmony import */ var _lib_lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/lodash/isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/observablemixin
 */






const observablePropertiesSymbol = Symbol( 'observableProperties' );
const boundObservablesSymbol = Symbol( 'boundObservables' );
const boundPropertiesSymbol = Symbol( 'boundProperties' );

/**
 * Mixin that injects the "observable properties" and data binding functionality described in the
 * {@link ~Observable} interface.
 *
 * @mixin ObservableMixin
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/observablemixin~Observable
 */
const ObservableMixin = {
	/**
	 * @inheritDoc
	 */
	set( name, value ) {
		// If the first parameter is an Object, iterate over its properties.
		if ( Object(_lib_lodash_isObject__WEBPACK_IMPORTED_MODULE_3__["default"])( name ) ) {
			Object.keys( name ).forEach( property => {
				this.set( property, name[ property ] );
			}, this );

			return;
		}

		initObservable( this );

		const properties = this[ observablePropertiesSymbol ];

		if ( ( name in this ) && !properties.has( name ) ) {
			/**
			 * Cannot override an existing property.
			 *
			 * This error is thrown when trying to {@link ~Observable#set set} an property with
			 * a name of an already existing property. For example:
			 *
			 *		let observable = new Model();
			 *		observable.property = 1;
			 *		observable.set( 'property', 2 );			// throws
			 *
			 *		observable.set( 'property', 1 );
			 *		observable.set( 'property', 2 );			// ok, because this is an existing property.
			 *
			 * @error observable-set-cannot-override
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-set-cannot-override: Cannot override an existing property.' );
		}

		Object.defineProperty( this, name, {
			enumerable: true,
			configurable: true,

			get() {
				return properties.get( name );
			},

			set( value ) {
				const oldValue = properties.get( name );

				// Fire `set` event before the new value will be set to make it possible
				// to override observable property without affecting `change` event.
				// See https://github.com/ckeditor/ckeditor5-utils/issues/171.
				let newValue = this.fire( 'set:' + name, name, value, oldValue );

				if ( newValue === undefined ) {
					newValue = value;
				}

				// Allow undefined as an initial value like A.define( 'x', undefined ) (#132).
				// Note: When properties map has no such own property, then its value is undefined.
				if ( oldValue !== newValue || !properties.has( name ) ) {
					properties.set( name, newValue );
					this.fire( 'change:' + name, name, newValue, oldValue );
				}
			}
		} );

		this[ name ] = value;
	},

	/**
	 * @inheritDoc
	 */
	bind( ...bindProperties ) {
		if ( !bindProperties.length || !isStringArray( bindProperties ) ) {
			/**
			 * All properties must be strings.
			 *
			 * @error observable-bind-wrong-properties
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-wrong-properties: All properties must be strings.' );
		}

		if ( ( new Set( bindProperties ) ).size !== bindProperties.length ) {
			/**
			 * Properties must be unique.
			 *
			 * @error observable-bind-duplicate-properties
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-duplicate-properties: Properties must be unique.' );
		}

		initObservable( this );

		const boundProperties = this[ boundPropertiesSymbol ];

		bindProperties.forEach( propertyName => {
			if ( boundProperties.has( propertyName ) ) {
				/**
				 * Cannot bind the same property more that once.
				 *
				 * @error observable-bind-rebind
				 */
				throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-rebind: Cannot bind the same property more that once.' );
			}
		} );

		const bindings = new Map();

		// @typedef {Object} Binding
		// @property {Array} property Property which is bound.
		// @property {Array} to Array of observable–property components of the binding (`{ observable: ..., property: .. }`).
		// @property {Array} callback A function which processes `to` components.
		bindProperties.forEach( a => {
			const binding = { property: a, to: [] };

			boundProperties.set( a, binding );
			bindings.set( a, binding );
		} );

		// @typedef {Object} BindChain
		// @property {Function} to See {@link ~ObservableMixin#_bindTo}.
		// @property {Function} toMany See {@link ~ObservableMixin#_bindToMany}.
		// @property {module:utils/observablemixin~Observable} _observable The observable which initializes the binding.
		// @property {Array} _bindProperties Array of `_observable` properties to be bound.
		// @property {Array} _to Array of `to()` observable–properties (`{ observable: toObservable, properties: ...toProperties }`).
		// @property {Map} _bindings Stores bindings to be kept in
		// {@link ~ObservableMixin#_boundProperties}/{@link ~ObservableMixin#_boundObservables}
		// initiated in this binding chain.
		return {
			to: bindTo,
			toMany: bindToMany,

			_observable: this,
			_bindProperties: bindProperties,
			_to: [],
			_bindings: bindings
		};
	},

	/**
	 * @inheritDoc
	 */
	unbind( ...unbindProperties ) {
		// Nothing to do here if not inited yet.
		if ( !( observablePropertiesSymbol in this ) ) {
			return;
		}

		const boundProperties = this[ boundPropertiesSymbol ];
		const boundObservables = this[ boundObservablesSymbol ];

		if ( unbindProperties.length ) {
			if ( !isStringArray( unbindProperties ) ) {
				/**
				 * Properties must be strings.
				 *
				 * @error observable-unbind-wrong-properties
				 */
				throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-unbind-wrong-properties: Properties must be strings.' );
			}

			unbindProperties.forEach( propertyName => {
				const binding = boundProperties.get( propertyName );

				// Nothing to do if the binding is not defined
				if ( !binding ) {
					return;
				}

				let toObservable, toProperty, toProperties, toPropertyBindings;

				binding.to.forEach( to => {
					// TODO: ES6 destructuring.
					toObservable = to[ 0 ];
					toProperty = to[ 1 ];
					toProperties = boundObservables.get( toObservable );
					toPropertyBindings = toProperties[ toProperty ];

					toPropertyBindings.delete( binding );

					if ( !toPropertyBindings.size ) {
						delete toProperties[ toProperty ];
					}

					if ( !Object.keys( toProperties ).length ) {
						boundObservables.delete( toObservable );
						this.stopListening( toObservable, 'change' );
					}
				} );

				boundProperties.delete( propertyName );
			} );
		} else {
			boundObservables.forEach( ( bindings, boundObservable ) => {
				this.stopListening( boundObservable, 'change' );
			} );

			boundObservables.clear();
			boundProperties.clear();
		}
	},

	/**
	 * @inheritDoc
	 */
	decorate( methodName ) {
		const originalMethod = this[ methodName ];

		if ( !originalMethod ) {
			/**
			 * Cannot decorate an undefined method.
			 *
			 * @error observablemixin-cannot-decorate-undefined
			 * @param {Object} object The object which method should be decorated.
			 * @param {String} methodName Name of the method which does not exist.
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"](
				'observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.',
				{ object: this, methodName }
			);
		}

		this.on( methodName, ( evt, args ) => {
			evt.return = originalMethod.apply( this, args );
		} );

		this[ methodName ] = function( ...args ) {
			return this.fire( methodName, args );
		};
	}
};

Object(_lib_lodash_extend__WEBPACK_IMPORTED_MODULE_2__["default"])( ObservableMixin, _emittermixin__WEBPACK_IMPORTED_MODULE_0__["default"] );

/* harmony default export */ __webpack_exports__["default"] = (ObservableMixin);

// Init symbol properties needed to for the observable mechanism to work.
//
// @private
// @param {module:utils/observablemixin~ObservableMixin} observable
function initObservable( observable ) {
	// Do nothing if already inited.
	if ( observablePropertiesSymbol in observable ) {
		return;
	}

	// The internal hash containing the observable's state.
	//
	// @private
	// @type {Map}
	Object.defineProperty( observable, observablePropertiesSymbol, {
		value: new Map()
	} );

	// Map containing bindings to external observables. It shares the binding objects
	// (`{ observable: A, property: 'a', to: ... }`) with {@link module:utils/observablemixin~ObservableMixin#_boundProperties} and
	// it is used to observe external observables to update own properties accordingly.
	// See {@link module:utils/observablemixin~ObservableMixin#bind}.
	//
	//		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
	//		console.log( A._boundObservables );
	//
	//			Map( {
	//				B: {
	//					x: Set( [
	//						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//					] ),
	//					y: Set( [
	//						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//					] )
	//				}
	//			} )
	//
	//		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
	//		console.log( A._boundObservables );
	//
	//			Map( {
	//				B: {
	//					x: Set( [
	//						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//					] ),
	//					y: Set( [
	//						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//					] ),
	//					z: Set( [
	//						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//					] )
	//				},
	//				C: {
	//					w: Set( [
	//						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//					] )
	//				}
	//			} )
	//
	// @private
	// @type {Map}
	Object.defineProperty( observable, boundObservablesSymbol, {
		value: new Map()
	} );

	// Object that stores which properties of this observable are bound and how. It shares
	// the binding objects (`{ observable: A, property: 'a', to: ... }`) with {@link utils.ObservableMixin#_boundObservables}.
	// This data structure is a reverse of {@link utils.ObservableMixin#_boundObservables} and it is helpful for
	// {@link utils.ObservableMixin#unbind}.
	//
	// See {@link utils.ObservableMixin#bind}.
	//
	//		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
	//		console.log( A._boundProperties );
	//
	//			Map( {
	//				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//			} )
	//
	//		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
	//		console.log( A._boundProperties );
	//
	//			Map( {
	//				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] },
	//				d: { observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//			} )
	//
	// @private
	// @type {Map}
	Object.defineProperty( observable, boundPropertiesSymbol, {
		value: new Map()
	} );
}

// A chaining for {@link module:utils/observablemixin~ObservableMixin#bind} providing `.to()` interface.
//
// @private
// @param {...[Observable|String|Function]} args Arguments of the `.to( args )` binding.
function bindTo( ...args ) {
	const parsedArgs = parseBindToArgs( ...args );
	const bindingsKeys = Array.from( this._bindings.keys() );
	const numberOfBindings = bindingsKeys.length;

	// Eliminate A.bind( 'x' ).to( B, C )
	if ( !parsedArgs.callback && parsedArgs.to.length > 1 ) {
		/**
		 * Binding multiple observables only possible with callback.
		 *
		 * @error observable-bind-no-callback
		 */
		throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-no-callback: Binding multiple observables only possible with callback.' );
	}

	// Eliminate A.bind( 'x', 'y' ).to( B, callback )
	if ( numberOfBindings > 1 && parsedArgs.callback ) {
		/**
		 * Cannot bind multiple properties and use a callback in one binding.
		 *
		 * @error observable-bind-to-extra-callback
		 */
		throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.' );
	}

	parsedArgs.to.forEach( to => {
		// Eliminate A.bind( 'x', 'y' ).to( B, 'a' )
		if ( to.properties.length && to.properties.length !== numberOfBindings ) {
			/**
			 * The number of properties must match.
			 *
			 * @error observable-bind-to-properties-length
			 */
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-properties-length: The number of properties must match.' );
		}

		// When no to.properties specified, observing source properties instead i.e.
		// A.bind( 'x', 'y' ).to( B ) -> Observe B.x and B.y
		if ( !to.properties.length ) {
			to.properties = this._bindProperties;
		}
	} );

	this._to = parsedArgs.to;

	// Fill {@link BindChain#_bindings} with callback. When the callback is set there's only one binding.
	if ( parsedArgs.callback ) {
		this._bindings.get( bindingsKeys[ 0 ] ).callback = parsedArgs.callback;
	}

	attachBindToListeners( this._observable, this._to );

	// Update observable._boundProperties and observable._boundObservables.
	updateBindToBound( this );

	// Set initial values of bound properties.
	this._bindProperties.forEach( propertyName => {
		updateBoundObservableProperty( this._observable, propertyName );
	} );
}

// Binds to an attribute in a set of iterable observables.
//
// @private
// @param {Array.<Observable>} observables
// @param {String} attribute
// @param {Function} callback
function bindToMany( observables, attribute, callback ) {
	if ( this._bindings.size > 1 ) {
		/**
		 * Binding one attribute to many observables only possible with one attribute.
		 *
		 * @error observable-bind-to-many-not-one-binding
		 */
		throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().' );
	}

	this.to(
		// Bind to #attribute of each observable...
		...getBindingTargets( observables, attribute ),
		// ...using given callback to parse attribute values.
		callback
	);
}

// Returns an array of binding components for
// {@link Observable#bind} from a set of iterable observables.
//
// @param {Array.<Observable>} observables
// @param {String} attribute
// @returns {Array.<String|Observable>}
function getBindingTargets( observables, attribute ) {
	const observableAndAttributePairs = observables.map( observable => [ observable, attribute ] );

	// Merge pairs to one-dimension array of observables and attributes.
	return Array.prototype.concat.apply( [], observableAndAttributePairs );
}

// Check if all entries of the array are of `String` type.
//
// @private
// @param {Array} arr An array to be checked.
// @returns {Boolean}
function isStringArray( arr ) {
	return arr.every( a => typeof a == 'string' );
}

// Parses and validates {@link Observable#bind}`.to( args )` arguments and returns
// an object with a parsed structure. For example
//
//		A.bind( 'x' ).to( B, 'a', C, 'b', call );
//
// becomes
//
//		{
//			to: [
//				{ observable: B, properties: [ 'a' ] },
//				{ observable: C, properties: [ 'b' ] },
//			],
//			callback: call
// 		}
//
// @private
// @param {...*} args Arguments of {@link Observable#bind}`.to( args )`.
// @returns {Object}
function parseBindToArgs( ...args ) {
	// Eliminate A.bind( 'x' ).to()
	if ( !args.length ) {
		/**
		 * Invalid argument syntax in `to()`.
		 *
		 * @error observable-bind-to-parse-error
		 */
		throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-parse-error: Invalid argument syntax in `to()`.' );
	}

	const parsed = { to: [] };
	let lastObservable;

	if ( typeof args[ args.length - 1 ] == 'function' ) {
		parsed.callback = args.pop();
	}

	args.forEach( a => {
		if ( typeof a == 'string' ) {
			lastObservable.properties.push( a );
		} else if ( typeof a == 'object' ) {
			lastObservable = { observable: a, properties: [] };
			parsed.to.push( lastObservable );
		} else {
			throw new _ckeditorerror__WEBPACK_IMPORTED_MODULE_1__["default"]( 'observable-bind-to-parse-error: Invalid argument syntax in `to()`.' );
		}
	} );

	return parsed;
}

// Synchronizes {@link module:utils/observablemixin#_boundObservables} with {@link Binding}.
//
// @private
// @param {Binding} binding A binding to store in {@link Observable#_boundObservables}.
// @param {Observable} toObservable A observable, which is a new component of `binding`.
// @param {String} toPropertyName A name of `toObservable`'s property, a new component of the `binding`.
function updateBoundObservables( observable, binding, toObservable, toPropertyName ) {
	const boundObservables = observable[ boundObservablesSymbol ];
	const bindingsToObservable = boundObservables.get( toObservable );
	const bindings = bindingsToObservable || {};

	if ( !bindings[ toPropertyName ] ) {
		bindings[ toPropertyName ] = new Set();
	}

	// Pass the binding to a corresponding Set in `observable._boundObservables`.
	bindings[ toPropertyName ].add( binding );

	if ( !bindingsToObservable ) {
		boundObservables.set( toObservable, bindings );
	}
}

// Synchronizes {@link Observable#_boundProperties} and {@link Observable#_boundObservables}
// with {@link BindChain}.
//
// Assuming the following binding being created
//
// 		A.bind( 'a', 'b' ).to( B, 'x', 'y' );
//
// the following bindings were initialized by {@link Observable#bind} in {@link BindChain#_bindings}:
//
// 		{
// 			a: { observable: A, property: 'a', to: [] },
// 			b: { observable: A, property: 'b', to: [] },
// 		}
//
// Iterate over all bindings in this chain and fill their `to` properties with
// corresponding to( ... ) arguments (components of the binding), so
//
// 		{
// 			a: { observable: A, property: 'a', to: [ B, 'x' ] },
// 			b: { observable: A, property: 'b', to: [ B, 'y' ] },
// 		}
//
// Then update the structure of {@link Observable#_boundObservables} with updated
// binding, so it becomes:
//
// 		Map( {
// 			B: {
// 				x: Set( [
// 					{ observable: A, property: 'a', to: [ [ B, 'x' ] ] }
// 				] ),
// 				y: Set( [
// 					{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
// 				] )
//			}
// 		} )
//
// @private
// @param {BindChain} chain The binding initialized by {@link Observable#bind}.
function updateBindToBound( chain ) {
	let toProperty;

	chain._bindings.forEach( ( binding, propertyName ) => {
		// Note: For a binding without a callback, this will run only once
		// like in A.bind( 'x', 'y' ).to( B, 'a', 'b' )
		// TODO: ES6 destructuring.
		chain._to.forEach( to => {
			toProperty = to.properties[ binding.callback ? 0 : chain._bindProperties.indexOf( propertyName ) ];

			binding.to.push( [ to.observable, toProperty ] );
			updateBoundObservables( chain._observable, binding, to.observable, toProperty );
		} );
	} );
}

// Updates an property of a {@link Observable} with a value
// determined by an entry in {@link Observable#_boundProperties}.
//
// @private
// @param {Observable} observable A observable which property is to be updated.
// @param {String} propertyName An property to be updated.
function updateBoundObservableProperty( observable, propertyName ) {
	const boundProperties = observable[ boundPropertiesSymbol ];
	const binding = boundProperties.get( propertyName );
	let propertyValue;

	// When a binding with callback is created like
	//
	// 		A.bind( 'a' ).to( B, 'b', C, 'c', callback );
	//
	// collect B.b and C.c, then pass them to callback to set A.a.
	if ( binding.callback ) {
		propertyValue = binding.callback.apply( observable, binding.to.map( to => to[ 0 ][ to[ 1 ] ] ) );
	} else {
		propertyValue = binding.to[ 0 ];
		propertyValue = propertyValue[ 0 ][ propertyValue[ 1 ] ];
	}

	if ( observable.hasOwnProperty( propertyName ) ) {
		observable[ propertyName ] = propertyValue;
	} else {
		observable.set( propertyName, propertyValue );
	}
}

// Starts listening to changes in {@link BindChain._to} observables to update
// {@link BindChain._observable} {@link BindChain._bindProperties}. Also sets the
// initial state of {@link BindChain._observable}.
//
// @private
// @param {BindChain} chain The chain initialized by {@link Observable#bind}.
function attachBindToListeners( observable, toBindings ) {
	toBindings.forEach( to => {
		const boundObservables = observable[ boundObservablesSymbol ];
		let bindings;

		// If there's already a chain between the observables (`observable` listens to
		// `to.observable`), there's no need to create another `change` event listener.
		if ( !boundObservables.get( to.observable ) ) {
			observable.listenTo( to.observable, 'change', ( evt, propertyName ) => {
				bindings = boundObservables.get( to.observable )[ propertyName ];

				// Note: to.observable will fire for any property change, react
				// to changes of properties which are bound only.
				if ( bindings ) {
					bindings.forEach( binding => {
						updateBoundObservableProperty( observable, binding.property );
					} );
				}
			} );
		}
	} );
}

/**
 * Interface which adds "observable properties" and data binding functionality.
 *
 * Can be easily implemented by a class by mixing the {@link module:utils/observablemixin~ObservableMixin} mixin.
 *
 * @interface Observable
 * @extends module:utils/emittermixin~Emitter
 */

/**
 * Fired when a property changed value.
 *
 *		observable.set( 'prop', 1 );
 *
 *		observable.on( 'change:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `${ propertyName } has changed from ${ oldValue } to ${ newValue }` );
 *		} );
 *
 *		observable.prop = 2; // -> 'prop has changed from 1 to 2'
 *
 * @event change:{property}
 * @param {String} name The property name.
 * @param {*} value The new property value.
 * @param {*} oldValue The previous property value.
 */

/**
 * Fired when a property value is going to be set but is not set yet (before the `change` event is fired).
 *
 * You can control the final value of the property by using
 * the {@link module:utils/eventinfo~EventInfo#return event's `return` property}.
 *
 *		observable.set( 'prop', 1 );
 *
 *		observable.on( 'set:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `Value is going to be changed from ${ oldValue } to ${ newValue }` );
 *			console.log( `Current property value is ${ observable[ propertyName ] }` );
 *
 *			// Let's override the value.
 *			evt.return = 3;
 *		} );
 *
 *		observable.on( 'change:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `Value has changed from ${ oldValue } to ${ newValue }` );
 *		} );
 *
 *		observable.prop = 2; // -> 'Value is going to be changed from 1 to 2'
 *		                     // -> 'Current property value is 1'
 *		                     // -> 'Value has changed from 1 to 3'
 *
 * **Note:** Event is fired even when the new value is the same as the old value.
 *
 * @event set:{property}
 * @param {String} name The property name.
 * @param {*} value The new property value.
 * @param {*} oldValue The previous property value.
 */

/**
 * Creates and sets the value of an observable property of this object. Such an property becomes a part
 * of the state and is be observable.
 *
 * It accepts also a single object literal containing key/value pairs with properties to be set.
 *
 * This method throws the `observable-set-cannot-override` error if the observable instance already
 * have a property with the given property name. This prevents from mistakenly overriding existing
 * properties and methods, but means that `foo.set( 'bar', 1 )` may be slightly slower than `foo.bar = 1`.
 *
 * @method #set
 * @param {String|Object} name The property's name or object with `name=>value` pairs.
 * @param {*} [value] The property's value (if `name` was passed in the first parameter).
 */

/**
 * Binds observable properties to another objects implementing {@link module:utils/observablemixin~Observable}
 * interface (like {@link module:ui/model~Model}).
 *
 * Once bound, the observable will immediately share the current state of properties
 * of the observable it is bound to and react to the changes to these properties
 * in the future.
 *
 * **Note**: To release the binding use {@link module:utils/observablemixin~Observable#unbind}.
 *
 * Using `bind().to()` chain:
 *
 *		A.bind( 'a' ).to( B );
 *		A.bind( 'a' ).to( B, 'b' );
 *		A.bind( 'a', 'b' ).to( B, 'c', 'd' );
 *		A.bind( 'a' ).to( B, 'b', C, 'd', ( b, d ) => b + d );
 *
 * It is also possible to bind to the same property in a observables collection using `bind().toMany()` chain:
 *
 *		A.bind( 'a' ).toMany( [ B, C, D ], 'x', ( a, b, c ) => a + b + c );
 *		A.bind( 'a' ).toMany( [ B, C, D ], 'x', ( ...x ) => x.every( x => x ) );
 *
 * @method #bind
 * @param {...String} bindProperties Observable properties that will be bound to another observable(s).
 * @returns {Object} The bind chain with the `to()` and `toMany()` methods.
 */

/**
 * Removes the binding created with {@link #bind}.
 *
 *		A.unbind( 'a' );
 *		A.unbind();
 *
 * @method #unbind
 * @param {...String} [unbindProperties] Observable properties to be unbound. All the bindings will
 * be released if no properties provided.
 */

/**
 * Turns the given methods of this object into event-based ones. This means that the new method will fire an event
 * (named after the method) and the original action will be plugged as a listener to that event.
 *
 * This is a very simplified method decoration. Itself it doesn't change the behavior of a method (expect adding the event),
 * but it allows to modify it later on by listening to the method's event.
 *
 * For example, in order to cancel the method execution one can stop the event:
 *
 *		class Foo {
 *			constructor() {
 *				this.decorate( 'method' );
 *			}
 *
 *			method() {
 *				console.log( 'called!' );
 *			}
 *		}
 *
 *		const foo = new Foo();
 *		foo.on( 'method', ( evt ) => {
 *			evt.stop();
 *		}, { priority: 'high' } );
 *
 *		foo.method(); // Nothing is logged.
 *
 *
 * Note: we used a high priority listener here to execute this callback before the one which
 * calls the original method (which used the default priority).
 *
 * It's also possible to change the return value:
 *
 *		foo.on( 'method', ( evt ) => {
 *			evt.return = 'Foo!';
 *		} );
 *
 *		foo.method(); // -> 'Foo'
 *
 * Finally, it's possible to access and modify the parameters:
 *
 *		method( a, b ) {
 *			console.log( `${ a }, ${ b }`  );
 *		}
 *
 *		// ...
 *
 *		foo.on( 'method', ( evt, args ) => {
 *			args[ 0 ] = 3;
 *
 *			console.log( args[ 1 ] ); // -> 2
 *		}, { priority: 'high' } );
 *
 *		foo.method( 1, 2 ); // -> '3, 2'
 *
 * @method #decorate
 * @param {String} methodName Name of the method to decorate.
 */


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/priorities
 */

/**
 * String representing a priority value.
 *
 * @typedef {'highest'|'high'|'normal'|'low'|'lowest'} module:utils/priorities~PriorityString
 */

/**
 * Provides group of constants to use instead of hardcoding numeric priority values.
 *
 * @namespace
 */
const priorities = {
	/**
	 * Converts a string with priority name to it's numeric value. If `Number` is given, it just returns it.
	 *
	 * @static
	 * @param {module:utils/priorities~PriorityString|Number} priority Priority to convert.
	 * @returns {Number} Converted priority.
	 */
	get( priority ) {
		if ( typeof priority != 'number' ) {
			return this[ priority ] || this.normal;
		} else {
			return priority;
		}
	},

	highest: 100000,
	high: 1000,
	normal: 0,
	low: -1000,
	lowest: -100000
};

/* harmony default export */ __webpack_exports__["default"] = (priorities);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/spy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/spy
 */

/**
 * Creates a spy function (ala Sinon.js) that can be used to inspect call to it.
 *
 * The following are the present features:
 *
 * * spy.called: property set to `true` if the function has been called at least once.
 *
 * @returns {Function} The spy function.
 */
function spy() {
	return function spy() {
		spy.called = true;
	};
}

/* harmony default export */ __webpack_exports__["default"] = (spy);


/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/uid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uid; });
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/uid
 */

/**
 * Returns a unique id. This id consist of an 'e' character and a randomly generated string of 32 aphanumeric characters.
 * Each character in uid string represents a hexadecimal digit (base 16).
 *
 * @returns {String} A hexadecimal number representing the id.
 */
function uid() {
	let uuid = 'e'; // Make sure that id does not start with number.

	for ( let i = 0; i < 8; i++ ) {
		uuid += Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
	}

	return uuid;
}


/***/ }),

/***/ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/src??ref--5-1!./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"

/***/ }),

/***/ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/src??ref--5-1!./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}"

/***/ }),

/***/ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/src??ref--5-1!./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:\"\";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}"

/***/ }),

/***/ "./node_modules/postcss-loader/src/index.js?!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/src??ref--5-1!./node_modules/@ckeditor/ckeditor5-ui/theme/globals/globals.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-base-foreground);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,0.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map