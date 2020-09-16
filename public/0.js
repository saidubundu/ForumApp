(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users */ "./resources/js/components/Admin/Users.vue");
/* harmony import */ var _BackendCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackendCategory */ "./resources/js/components/Admin/BackendCategory.vue");
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
  name: "AdminDashboard",
  components: {
    BackendCategory: _BackendCategory__WEBPACK_IMPORTED_MODULE_1__["default"],
    Users: _Users__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      users: {}
    };
  },
  created: function created() {
    if (!User.admin()) {
      this.router.push('/forum');
    }

    this.getUsers();
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios.get('/api/users').then(function (res) {
        return _this.users = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "BackendCategory",
  data: function data() {
    return {
      form: {
        name: null
      },
      categories: {},
      editSlug: null
    };
  },
  created: function created() {
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      axios.get('/api/category').then(function (res) {
        return _this.categories = res.data.data;
      });
    },
    submit: function submit() {
      this.editSlug ? this.update() : this.create();
    },
    update: function update() {
      var _this2 = this;

      axios.patch("/api/category/".concat(this.editSlug), this.form).then(function (res) {
        _this2.categories.unshift(res.data);

        _this2.form.name = null;
      });
    },
    create: function create() {
      var _this3 = this;

      axios.post('/api/category', this.form).then(function (res) {
        _this3.categories.unshift(res.data);

        _this3.form.name = null;
      });
    },
    destroy: function destroy(slug, index) {
      var _this4 = this;

      axios["delete"]("/api/category/".concat(slug)).then(function (res) {
        return _this4.categories.splice(index, 1);
      });
    },
    edit: function edit(index) {
      this.form.name = this.categories[index].name;
      this.editSlug = this.categories[index].slug;
      this.categories.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Users",
  props: ['data']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true& ***!
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
      _c("div", { staticClass: "tt-wrapper-section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "tt-user-header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tt-col-btn", attrs: { id: "js-settings-btn" } },
              [
                _c("div", { staticClass: "tt-list-btn" }, [
                  _c(
                    "a",
                    { staticClass: "tt-btn-icon", attrs: { href: "#" } },
                    [
                      _c("svg", { staticClass: "tt-icon" }, [
                        _c("use", {
                          attrs: { "xlink:href": "#icon-settings_fill" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-primary", attrs: { href: "#" } },
                    [_vm._v("Message")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-secondary", attrs: { href: "#" } },
                    [_vm._v("Follow")]
                  )
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "tt-tab-wrapper" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane tt-indent-none  show active",
                attrs: { id: "tt-tab-01", role: "tabpanel" }
              },
              [
                _c(
                  "div",
                  { staticClass: "tt-topic-list" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._l(_vm.users, function(user) {
                      return _vm.users
                        ? _c("users", { key: user, attrs: { data: user } })
                        : _vm._e()
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane tt-indent-none",
                attrs: { id: "tt-tab-02", role: "tabpanel" }
              },
              [
                _c(
                  "div",
                  { staticClass: "tt-topic-list" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("backend-category"),
                    _vm._v(" "),
                    _c("div", { staticClass: "tt-row-btn" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn-icon js-topiclist-showmore",
                          attrs: { type: "button" }
                        },
                        [
                          _c("svg", { staticClass: "tt-icon" }, [
                            _c("use", {
                              attrs: { "xlink:href": "#icon-load_lore_icon" }
                            })
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ])
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
    return _c("div", { staticClass: "tt-col-title" }, [
      _c("div", { staticClass: "tt-title" }, [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Admin Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tt-wrapper-inner" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs pt-tabs-default",
          attrs: { role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item show" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: { "data-toggle": "tab", href: "#tt-tab-01", role: "tab" }
              },
              [_c("span", [_vm._v("All Users")])]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-toggle": "tab", href: "#tt-tab-02", role: "tab" }
              },
              [_c("span", [_vm._v("All Categories")])]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tt-list-header" }, [
      _c("div", { staticClass: "tt-col-topic" }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("div", { staticClass: "tt-col-value-large hide-mobile" }, [
        _vm._v("Email")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tt-col-value-large hide-mobile" }, [
        _vm._v("Created")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tt-list-header" }, [
      _c("div", { staticClass: "tt-col-topic" }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("div", { staticClass: "tt-col-category" }, [_vm._v("Edit")]),
      _vm._v(" "),
      _c("div", { staticClass: "tt-col-value hide-mobile" }, [_vm._v("Delete")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-1",
                label: "Category name:",
                "label-for": "input-1"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-1",
                  required: "",
                  placeholder: "Enter email"
                },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.editSlug
            ? _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Update")]
              )
            : _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Create")]
              )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.categories, function(category, index) {
        return _vm.categories
          ? _c("div", { key: category.id }, [
              _c(
                "div",
                { staticClass: "tt-item" },
                [
                  _c("div", { staticClass: "tt-col-category" }, [
                    _c("span", { staticClass: "tt-color01 tt-badge" }, [
                      _vm._v(_vm._s(category.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-icon", {
                    attrs: { icon: "pencil-square" },
                    on: {
                      click: function($event) {
                        return _vm.edit(index)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("b-icon", {
                    attrs: { icon: "trash-fill" },
                    on: {
                      click: function($event) {
                        return _vm.destroy(index)
                      }
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tt-item" }, [
    _c("div", { staticClass: "tt-col-avatar" }, [
      _c("svg", { staticClass: "tt-icon" }, [
        _c("use", { attrs: { "xlink:href": "#icon-ava-n" } })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tt-col-description" }, [
      _c("h6", { staticClass: "tt-title" }, [
        _c("a", { attrs: { href: "#" } }, [
          _vm._v("\n           " + _vm._s(_vm.data.name) + "\n        ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row align-items-center no-gutters hide-desktope" },
        [
          _c("div", { staticClass: "col-9" }, [
            _c("ul", { staticClass: "tt-list-badge" }, [
              _c("li", { staticClass: "show-mobile" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("span", {}, [_vm._v(_vm._s(_vm.data.email))])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3 ml-auto show-mobile" }, [
            _c("div", { staticClass: "tt-value" }, [
              _vm._v(_vm._s(_vm.data.created))
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tt-col-category tt-col-value-large hide-mobile" },
      [_c("span", {}, [_vm._v(_vm._s(_vm.data.email))])]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "tt-col-value-large hide-mobile" }, [
      _vm._v(_vm._s(_vm.data.created))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/AdminDashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/AdminDashboard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true& */ "./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10df2950",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/AdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/AdminDashboard.vue?vue&type=template&id=10df2950&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_10df2950_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/BackendCategory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/BackendCategory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true& */ "./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true&");
/* harmony import */ var _BackendCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackendCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackendCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7d15b12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/BackendCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackendCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/BackendCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/BackendCategory.vue?vue&type=template&id=b7d15b12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackendCategory_vue_vue_type_template_id_b7d15b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Users.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Admin/Users.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=4782960d&scoped=true& */ "./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4782960d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Users.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=4782960d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users.vue?vue&type=template&id=4782960d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_4782960d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);