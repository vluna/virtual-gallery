(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vlunaram/Documents/virtual-gallery/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "HQy5":
/*!******************************************************!*\
  !*** ./src/app/exhibitions/exhibitions.component.ts ***!
  \******************************************************/
/*! exports provided: ExhibitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitionsComponent", function() { return ExhibitionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_exhibitions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exhibitions.service */ "KbMi");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_exhibitions_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pipes/exhibitions-filter.pipe */ "jL4v");

















function ExhibitionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading Exhibitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExhibitionsComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.title, " ");
} }
function ExhibitionsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "It seems your search returned 0 results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.filterMetadata.count, " Exhibitions");
} }
function ExhibitionsComponent_h1_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.filterMetadata.count, " Exhibition(s)");
} }
function ExhibitionsComponent_mat_card_16_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const exhibition_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.collectionartnb.ca/", exhibition_r7.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Image ", exhibition_r7.title, "");
} }
const _c0 = function (a1) { return ["/exhibitions", a1]; };
function ExhibitionsComponent_mat_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExhibitionsComponent_mat_card_16_img_8_Template, 1, 2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "VIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exhibition_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exhibition_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", exhibition_r7.total, " Artworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", exhibition_r7.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", exhibition_r7.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, exhibition_r7.slug));
} }
class ExhibitionsComponent {
    constructor(httpClient, exhibitionsService, snackBar, cdr) {
        this.httpClient = httpClient;
        this.exhibitionsService = exhibitionsService;
        this.snackBar = snackBar;
        this.cdr = cdr;
        this.loading = true;
        this.exhibitions = [];
        this.currentYear = new Date().getFullYear();
        this.filterMetadata = {};
    }
    ngOnInit() {
        this.loading = true;
        this.exhibitionsService.getAll().then((res) => {
            this.exhibitions = res;
            this.loading = false;
            this.filterMetadata = {
                count: this.exhibitions.length
            };
        }, (err) => {
            this.snackBar.open(err, "", {
                horizontalPosition: "center",
                verticalPosition: "top"
            });
        });
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
}
ExhibitionsComponent.ɵfac = function ExhibitionsComponent_Factory(t) { return new (t || ExhibitionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exhibitions_service__WEBPACK_IMPORTED_MODULE_2__["ExhibitionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ExhibitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExhibitionsComponent, selectors: [["app-exhibitions"]], decls: 22, vars: 12, consts: [["id", "loading-screen", 4, "ngIf"], ["src", "assets/images/artnb-logo-white.svg", "width", "250"], ["appearance", "outline"], ["type", "text", "matInput", "", 3, "matAutocomplete", "ngModel", "ngModelChange"], ["matSuffix", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "exhibitions-list"], [4, "ngIf"], ["fxLayout.xs", "column", "fxLayout", "row wrap", "fxLayoutGap", "10px", "ngClass.gt-xs", "ml-10"], ["fxFlex.sm", "0 1 calc(100%)", 4, "ngIf"], ["class", "exhibitions-card", "fxFlex.sm", "0 1 calc(50%)", "fxFlex.md", "0 1 calc(33%)", "fxFlex.gt-md", "0 1 calc(25%)", 4, "ngFor", "ngForOf"], ["src", "assets/images/ws-logo-white.svg", "width", "150"], ["id", "loading-screen"], ["id", "spinner"], ["id", "spinner-spin"], ["id", "spinner-text"], [3, "value"], [1, "exhibitions-card"], ["fxFlex.sm", "0 1 calc(100%)"], ["fxFlex.sm", "0 1 calc(50%)", "fxFlex.md", "0 1 calc(33%)", "fxFlex.gt-md", "0 1 calc(25%)", 1, "exhibitions-card"], ["mat-card-image", "", 3, "src", "alt", 4, "ngIf"], [3, "innerHTML"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-card-image", "", 3, "src", "alt"]], template: function ExhibitionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExhibitionsComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter Exhibitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExhibitionsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExhibitionsComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExhibitionsComponent_div_13_Template, 8, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExhibitionsComponent_h1_15_Template, 2, 1, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExhibitionsComponent_mat_card_16_Template, 13, 7, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "exhibitionsFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1)("ngModel", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exhibitions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterMetadata.count == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterMetadata.count > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](17, 8, ctx.exhibitions, ctx.filterText, ctx.filterMetadata));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Government of New Brunswick. All rights reserved.");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"]], pipes: [_pipes_exhibitions_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["ExhibitionsFilterPipe"]], styles: ["header[_ngcontent-%COMP%] {  \n  position: absolute;\n  top: 0;\n  background: #212529;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  height: 200px;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 20%;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: white;\n  caret-color: white;\n}\n\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 25px calc(50% - 125px);\n}\n\n#exhibitions-list[_ngcontent-%COMP%] {\n  margin: 250px 0 25px 0;\n}\n\n#exhibitions-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0 45px;\n  font-weight: bold;\n}\n\n.exhibitions-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.exhibitions-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.exhibitions-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0!important;\n}\n\nfooter[_ngcontent-%COMP%] {  \n  position: absolute;\n  background: #212529;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  align-content: center;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin: 25px 0;\n}\n\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 25px calc(50% - 75px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4aGliaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixPQUFPO0VBQ1AscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJleGhpYml0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHsgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIDIwJTtcbn1cblxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIG1hdC1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbn1cblxuaGVhZGVyIGltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyNXB4IGNhbGMoNTAlIC0gMTI1cHgpO1xufVxuXG4jZXhoaWJpdGlvbnMtbGlzdCB7XG4gIG1hcmdpbjogMjUwcHggMCAyNXB4IDA7XG59XG5cbiNleGhpYml0aW9ucy1saXN0IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMCA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV4aGliaXRpb25zLWNhcmQgbWF0LWNhcmQtYWN0aW9ucyBhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGhpYml0aW9ucy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGhpYml0aW9ucy1jYXJkIG1hdC1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG59XG5cbmZvb3RlciB7ICBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsZWZ0OiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmZvb3RlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG5mb290ZXIgaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI1cHggY2FsYyg1MCUgLSA3NXB4KTtcbn0iXX0= */"] });


/***/ }),

/***/ "KbMi":
/*!*************************************************!*\
  !*** ./src/app/services/exhibitions.service.ts ***!
  \*************************************************/
/*! exports provided: ExhibitionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitionsService", function() { return ExhibitionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class Exhibition {
    constructor(id, slug, title, description, image, total, artworks) {
        this.id = id;
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.image = image;
        this.total = total;
        this.artworks = artworks;
    }
}
class ExhibitionsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://www.collectionartnb.ca/exhibitions';
        this.EXHIBITIONS = [];
    }
    getAll() {
        const promise = new Promise((resolve, reject) => {
            let endPoint = this.URL;
            this.httpClient
                .get(endPoint)
                .toPromise()
                .then((res) => {
                this.EXHIBITIONS = res.map((response) => {
                    return new Exhibition(response.id, response.slug, response.title, response.description, response.image, response.total, response.artworks);
                });
                resolve(this.EXHIBITIONS);
            }, error => {
                reject("Error: Unable to load exhibitions.");
            });
        });
        return promise;
    }
    getById(slug) {
        const promise = new Promise((resolve, reject) => {
            let endPoint = `${this.URL}/${slug}`;
            this.httpClient
                .get(endPoint)
                .toPromise()
                .then((res) => {
                this.EXHIBITION = new Exhibition(res.id, res.slug, res.title, res.description, res.image, res.total, res.artworks);
                resolve(this.EXHIBITION);
            }, error => {
                reject("Error: Unable to load exhibition.");
            });
        });
        return promise;
    }
}
ExhibitionsService.ɵfac = function ExhibitionsService_Factory(t) { return new (t || ExhibitionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ExhibitionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExhibitionsService, factory: ExhibitionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PEKV":
/*!******************************************!*\
  !*** ./src/app/scene/scene.component.ts ***!
  \******************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ "v5Mq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_exhibitions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exhibitions.service */ "KbMi");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["renderCanvas"];
function SceneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading Exhibitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SceneComponent {
    constructor(exhibitionsService, snackBar, actRoute) {
        this.exhibitionsService = exhibitionsService;
        this.snackBar = snackBar;
        this.actRoute = actRoute;
        this.loading = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.actRoute.paramMap.subscribe(params => {
            this.exhibition_slug = params.get('slug');
        });
        this.loading = true;
        this.exhibitionsService.getById(this.exhibition_slug).then((res) => {
            this.exhibition = res;
            this.loading = false;
            this.scene = this.createScene(this.renderCanvas.nativeElement);
            this.engine.runRenderLoop(() => {
                this.scene.render();
            });
        }, (err) => {
            this.snackBar.open(err, "", {
                horizontalPosition: "center",
                verticalPosition: "top"
            });
        });
    }
    createScene(canvas) {
        // Dynamic constants from api
        const artwork_per_wall = Math.ceil(this.exhibition.total / 4);
        const wall_height = 200;
        const wall_width = (artwork_per_wall * 75);
        const half_wall_width = Math.ceil(wall_width / 2);
        const floor_height = wall_width;
        const floor_width = wall_width;
        this.engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Engine"](canvas);
        // This creates a basic Babylon Scene object (non-mesh)
        const scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Scene"](this.engine);
        // Add gravity to keep movement to x and z
        scene.gravity = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -0.9, 0);
        scene.collisionsEnabled = true;
        // This creates and positions a free camera (non-mesh)
        const camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["FreeCamera"]('camera-movement', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(half_wall_width / 2), 32, -10), scene);
        // This targets the camera to scene origin
        camera.setTarget(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 32, 0));
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        camera.checkCollisions = true;
        camera.ellipsoid = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](4, 16, 4);
        camera.applyGravity = true;
        // // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        // const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
        // // Default intensity is 1. Let's dim the light a small amount
        // light.intensity = 1;
        // Build walls
        const wall_material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("wall_material", scene);
        wall_material.diffuseTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Texture"]("assets/images/textures/concrete.jpg", scene);
        const left_wall = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox('box', { width: wall_width, height: wall_height }, scene);
        left_wall.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 20, -half_wall_width);
        left_wall.material = wall_material;
        left_wall.checkCollisions = true;
        left_wall.position.y = 20;
        const right_wall = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox('box', { width: wall_width, height: wall_height }, scene);
        right_wall.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 20, half_wall_width);
        right_wall.material = wall_material;
        right_wall.checkCollisions = true;
        right_wall.position.y = 20;
        const front_wall = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox('box', { width: wall_width, height: wall_height }, scene);
        front_wall.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](half_wall_width, 20, 0);
        front_wall.material = wall_material;
        front_wall.checkCollisions = true;
        front_wall.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, Math.PI / 2, 0);
        const back_wall = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox('box', { width: wall_width, height: wall_height }, scene);
        back_wall.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-half_wall_width, 20, 0);
        back_wall.material = wall_material;
        back_wall.checkCollisions = true;
        back_wall.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -Math.PI / 2, 0);
        // Create ground
        const ground = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateGround('ground', { width: floor_width, height: floor_width }, scene);
        const ground_material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("ground_material", scene);
        ground_material.diffuseTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Texture"]("assets/images/textures/wood.jpg", scene);
        ground.material = ground_material;
        ground.checkCollisions = true;
        // Create painting
        var idx_artwork = 0;
        var idx_wall = 0;
        var artwork_space = 0;
        if (artwork_per_wall > 1) {
            artwork_space = -half_wall_width / ((artwork_per_wall / 2) <= 1 ? 2 : (artwork_per_wall / 2));
        }
        var walls = {
            0: {
                id: "front",
                rotation: [0, (Math.PI / 2), 0],
                position: [half_wall_width - 1, 40, 0],
                frame_position: [half_wall_width - .75, 40, 0]
            },
            1: {
                id: "back",
                rotation: [0, (-Math.PI / 2), 0],
                position: [-(half_wall_width - 1), 40, 0],
                frame_position: [-(half_wall_width - .75), 40, 0]
            },
            2: {
                id: "left",
                rotation: [],
                position: [0, 40, half_wall_width - 1],
                frame_position: [0, 40, half_wall_width - .75]
            },
            3: {
                id: "right",
                rotation: [0, Math.PI, 0],
                position: [0, 40, -(half_wall_width - 1)],
                frame_position: [0, 40, -(half_wall_width - .75)]
            }
        };
        console.log(this.exhibition.artworks);
        while (idx_artwork < this.exhibition.total) {
            for (let idx = 0; (idx < artwork_per_wall && idx_artwork < this.exhibition.total); idx++) {
                let artwork = this.exhibition.artworks[idx_artwork];
                let current_wall_position = walls[idx_wall]["position"];
                let current_wall_frame_position = walls[idx_wall]["frame_position"];
                let current_wall_rotation = walls[idx_wall]["rotation"];
                let current_artwork_width = artwork.width / 10;
                let current_artwork_height = artwork.height / 10;
                var artwork_texture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Texture"](`https://www.collectionartnb.ca/${artwork.image}`, scene);
                var artwork_plane = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreatePlane(artwork.slug, { width: current_artwork_width, height: current_artwork_height }, scene);
                var artwork_material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"](`artwork-${artwork.slug}`, scene);
                artwork_material.diffuseTexture = artwork_texture;
                artwork_plane.material = artwork_material;
                var frame_texture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Texture"]('assets/images/textures/wood.jpg', scene);
                var frame_plane = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreatePlane(artwork.slug, { width: current_artwork_width + 2, height: current_artwork_height + 2 }, scene);
                var frame_material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"](`frame-${artwork.slug}`, scene);
                frame_material.diffuseTexture = frame_texture;
                frame_plane.material = frame_material;
                if (walls[idx_wall]['id'] == 'left' || walls[idx_wall]['id'] == 'right') {
                    artwork_plane.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](artwork_space, current_wall_position[1], current_wall_position[2]);
                    frame_plane.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](artwork_space, current_wall_frame_position[1], current_wall_frame_position[2]);
                }
                else {
                    artwork_plane.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](current_wall_position[0], current_wall_position[1], artwork_space);
                    frame_plane.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](current_wall_frame_position[0], current_wall_frame_position[1], artwork_space);
                }
                var artwork_light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["PointLight"](`light-${artwork.slug}`, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 30, 0), scene);
                artwork_light.range = 150;
                artwork_light.intensity = .5;
                artwork_light.parent = artwork_plane;
                if (current_wall_rotation.length > 0) {
                    artwork_plane.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](current_wall_rotation[0], current_wall_rotation[1], current_wall_rotation[2]);
                    frame_plane.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](current_wall_rotation[0], current_wall_rotation[1], current_wall_rotation[2]);
                }
                idx_artwork += 1;
                artwork_space += 50;
                //   plane.actionManager = new ActionManager(scene);
                //   plane.actionManager.registerAction(
                //   	new ExecuteCodeAction(
                //     ActionManager.OnPickTrigger, function (ev) {
                //     	console.log(artwork);
                //     	setCamLateralLeft(idx);
                //       }
                //     )
                // );
            }
            idx_wall += 1;
            var artwork_space = 0;
            if (artwork_per_wall > 1) {
                artwork_space = -half_wall_width / ((artwork_per_wall / 2) <= 1 ? 2 : (artwork_per_wall / 2));
            }
        }
        // 	 //Set font type
        //    var font_type = "Arial";
        // //Set width an height for plane
        //    var planeWidth = 100;
        //    var planeHeight = 30;
        //    //Create plane
        //    var plane = MeshBuilder.CreatePlane("plane", {width:planeWidth, height:planeHeight}, scene);
        //    //Set width and height for dynamic texture using same multiplier
        //    var DTWidth = planeWidth * 60;
        //    var DTHeight = planeHeight * 60;
        //    //Set text
        //    var text = "Some words to fit";
        //    //Create dynamic texture
        //    var dynamicTexture = new DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene, true);
        //    //Check width of text for given font type at any size of font
        //    var ctx = dynamicTexture.getContext();
        // var size = 12; //any value will work
        //    ctx.font = size + "px " + font_type;
        //    var textWidth = ctx.measureText(text).width;
        //    //Calculate ratio of text width to size of font used
        //    var ratio = textWidth/size;
        // //set font to be actually used to write text on dynamic texture
        //    var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
        //    var font = font_size + "px " + font_type;
        // //Draw text
        //    dynamicTexture.drawText(text, null, null, font, "#000000", "#ffffff", true);
        //    //create material
        //    var mat = new StandardMaterial("mat", scene);
        //    mat.diffuseTexture = dynamicTexture;
        //    //apply material
        //    plane.material = mat;
        //   var speed = 45;
        //   var frameCount = 200;
        // 	var setCamLateralLeft = function(idx) {
        //   	animateCameraTargetToPosition(camera, speed, frameCount, new Vector3(-240, 15, 10 * idx));
        //   	animateCameraToPosition(camera, speed, frameCount, new Vector3(-200, 15, 10 * idx));
        //   };
        //     var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        //         var ease = new CubicEase();
        //         ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
        //         var aable1 = Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
        //         aable1.disposeOnEnd = true;
        //     }
        //   var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        //   	var ease = new CubicEase();
        //     ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
        //     var aable2 = Animation.CreateAndStartAnimation('at4', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
        //     aable2.disposeOnEnd = true;
        //   }
        // 	var artworkTest = function(artwork, idx) {
        // 	}
        return scene;
    }
}
SceneComponent.ɵfac = function SceneComponent_Factory(t) { return new (t || SceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exhibitions_service__WEBPACK_IMPORTED_MODULE_2__["ExhibitionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
SceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SceneComponent, selectors: [["app-scene"]], viewQuery: function SceneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.renderCanvas = _t.first);
    } }, decls: 3, vars: 1, consts: [["id", "loading-screen", 4, "ngIf"], ["id", "renderCanvas"], ["renderCanvas", ""], ["id", "loading-screen"], ["id", "spinner"], ["id", "spinner-spin"], ["id", "spinner-text"]], template: function SceneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SceneComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 1, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["#renderCanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVCIsImZpbGUiOiJzY2VuZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlbmRlckNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Exhibitions | collectionArtNB';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scene/scene.component */ "PEKV");
/* harmony import */ var _exhibitions_exhibitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exhibitions/exhibitions.component */ "HQy5");
/* harmony import */ var _services_exhibitions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/exhibitions.service */ "KbMi");
/* harmony import */ var _pipes_exhibitions_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/exhibitions-filter.pipe */ "jL4v");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




// Components



// Services

// Pipes

// Other











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        _services_exhibitions_service__WEBPACK_IMPORTED_MODULE_7__["ExhibitionsService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _scene_scene_component__WEBPACK_IMPORTED_MODULE_5__["SceneComponent"],
        _exhibitions_exhibitions_component__WEBPACK_IMPORTED_MODULE_6__["ExhibitionsComponent"],
        _pipes_exhibitions_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["ExhibitionsFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]] }); })();


/***/ }),

/***/ "jL4v":
/*!**************************************************!*\
  !*** ./src/app/pipes/exhibitions-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: ExhibitionsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitionsFilterPipe", function() { return ExhibitionsFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExhibitionsFilterPipe {
    transform(items, filterText, filterMetadata = {}) {
        if (!items || !filterText) {
            filterMetadata.count = items.length;
            return items;
        }
        let filteredItems = items.filter(item => item.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
        filterMetadata.count = filteredItems.length;
        return filteredItems;
    }
}
ExhibitionsFilterPipe.ɵfac = function ExhibitionsFilterPipe_Factory(t) { return new (t || ExhibitionsFilterPipe)(); };
ExhibitionsFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "exhibitionsFilter", type: ExhibitionsFilterPipe, pure: false });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exhibitions_exhibitions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exhibitions/exhibitions.component */ "HQy5");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/scene.component */ "PEKV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/exhibitions', pathMatch: 'full' },
    { path: 'exhibitions/:slug', component: _scene_scene_component__WEBPACK_IMPORTED_MODULE_2__["SceneComponent"] },
    { path: 'exhibitions', component: _exhibitions_exhibitions_component__WEBPACK_IMPORTED_MODULE_1__["ExhibitionsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map