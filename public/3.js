(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreateQuestion",
  data: function data() {
    return {
      form: {
        title: null,
        body: null,
        category_id: null
      },
      categories: {},
      errors: {},
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {// The configuration of the rich-text editor.
      }
    };
  },
  computed: {
    disabled: function disabled() {
      return !(this.form.title && this.form.body && this.form.category_id);
    }
  },
  created: function created() {
    var _this = this;

    axios.get('/api/category').then(function (res) {
      return _this.categories = res.data.data;
    })["catch"](function (error) {
      return console.log(error.response.data);
    });
  },
  methods: {
    create: function create() {
      var _this2 = this;

      axios.post('/api/question', this.form).then(function (res) {
        _this2.$router.push(res.data.path);

        _this2.$toast.success('Question Created successfully', "Success", {
          timeout: 3000
        });
      })["catch"](function (error) {
        return console.log(error.response.data.error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "tt-offset-small", attrs: { id: "tt-pageContent" } },
    [
      _c("div", { staticClass: "container" }, [
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "tt-wrapper-inner" }, [
          _c("h1", { staticClass: "tt-title-border" }, [
            _vm._v(
              "\n                        Create New Topic\n                    "
            )
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form-default form-create-topic",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.create($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "inputTopicTitle" } }, [
                    _vm._v("Topic Title")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tt-value-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.title,
                          expression: "form.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name",
                        id: "inputTopicTitle",
                        placeholder: "Subject of your topic"
                      },
                      domProps: { value: _vm.form.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "title", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "tt-value-input" }, [
                      _vm._v("99")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.errors.title
                    ? _c("b-form-invalid-feedback", [
                        _vm._v(
                          "\n                               " +
                            _vm._s(_vm.errors.name[0]) +
                            "\n                            "
                        )
                      ])
                    : _c("div", { staticClass: "tt-note" }, [
                        _vm._v(
                          "Describe your topic well, while keeping the subject as short as possible."
                        )
                      ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-editor" },
                [
                  _c("h6", { staticClass: "pt-title" }, [_vm._v("Topic Body")]),
                  _vm._v(" "),
                  _c("ckeditor", {
                    attrs: { editor: _vm.editor, config: _vm.editorConfig },
                    model: {
                      value: _vm.form.body,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "body", $$v)
                      },
                      expression: "form.body"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "inputTopicTitle" } }, [
                          _vm._v("Category")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.category_id,
                                expression: "form.category_id"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "category_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.categories, function(category) {
                            return _c(
                              "option",
                              {
                                key: category.id,
                                domProps: { value: category.id }
                              },
                              [_vm._v(_vm._s(category.name))]
                            )
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-auto ml-md-auto" },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "btn btn-secondary btn-width-lg",
                            attrs: {
                              disabled: _vm.disabled,
                              type: "submit",
                              size: "lg"
                            }
                          },
                          [_vm._v("Create Question")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "inputTopicTags" } }, [_vm._v("Tags")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "name",
            id: "inputTopicTags",
            placeholder: "Please leave this empty"
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/forum/CreateQuestion.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/forum/CreateQuestion.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true& */ "./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true&");
/* harmony import */ var _CreateQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72df249b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forum/CreateQuestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/CreateQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forum/CreateQuestion.vue?vue&type=template&id=72df249b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateQuestion_vue_vue_type_template_id_72df249b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);