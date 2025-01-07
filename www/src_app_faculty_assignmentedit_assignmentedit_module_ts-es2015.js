(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_assignmentedit_assignmentedit_module_ts"],{

/***/ 26376:
/*!************************************************!*\
  !*** ./src/assets/js/quill.imageCompressor.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function warnAboutOptions(options) {
  if (options.maxWidth && typeof options.maxWidth !== "number") {
    console.warn(
      `[config error] 'maxWidth' is required to be a "number" (in pixels), 
  recieved: ${options.maxWidth}
  -> using default 1000`
    );
    options.maxWidth = 1000;
  }
  if (options.quality && typeof options.quality !== "number") {
    console.warn(
      `quill.imageCompressor: [config error] 'quality' is required to be a "number", 
  recieved: ${options.quality}
  -> using default 0.7`
    );
    options.quality = 0.7;
  }
  if (
    options.imageType &&
    (typeof options.imageType !== "string" ||
      !options.imageType.startsWith("image/"))
  ) {
    console.warn(
      `quill.imageCompressor: [config error] 'imageType' is required be in the form of "image/png" or "image/jpeg" etc ..., 
  recieved: ${options.imageType}
  -> using default image/jpeg`
    );
    options.imageType = "image/jpeg";
  }
}

class imageCompressor {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.range = null;
    this.debug = options.debug == null || options.debug == true;

    warnAboutOptions(options);

    var toolbar = this.quill.getModule("toolbar");
    toolbar.addHandler("image", this.selectLocalImage.bind(this));
  }

  selectLocalImage() {
    this.range = this.quill.getSelection();
    this.fileHolder = document.createElement("input");
    this.fileHolder.setAttribute("type", "file");
    this.fileHolder.setAttribute("accept", "image/*");
    this.fileHolder.setAttribute("style", "visibility:hidden");

    this.fileHolder.onchange = this.fileChanged.bind(this);

    document.body.appendChild(this.fileHolder);

    this.fileHolder.click();

    window.requestAnimationFrame(() => {
      document.body.removeChild(this.fileHolder);
    });
  }

  fileChanged() {
    const file = this.fileHolder.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onloadend = async evt => {
      const base64ImageSrc = evt.target.result;
      console.log(evt.target.result);

      const base64ImageSrcNew = await downscaleImage(
        base64ImageSrc,
        this.options.maxWidth,
        this.options.imageType,
        this.options.quality,
        this.debug
      );
      this.insertToEditor(base64ImageSrcNew);
    };

    fileReader.readAsDataURL(file);
  }

  insertToEditor(url) {
    const range = this.range;
    // Insert the compressed image
    this.logFileSize(url);
    this.quill.insertEmbed(range.index, "image", `${url}`);
    // Move cursor to next position
    range.index++;
    this.quill.setSelection(range, "api");
  }

  logFileSize(dataUrl) {
    const head = "data:image/png;base64,";
    const fileSizeBytes = Math.round(((dataUrl.length - head.length) * 3) / 4);
    const fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);
    if (this.debug) {
      console.log(
        "quill.imageCompressor: estimated img size: " +
          fileSizeKiloBytes +
          " kb"
      );
    }
  }
}

// Take an image URL, downscale it to the given width, and return a new image URL.
async function downscaleImage(
  dataUrl,
  newWidth,
  imageType,
  imageQuality,
  debug
) {
  "use strict";
  // Provide default values
  imageType = imageType || "image/jpeg";
  imageQuality = imageQuality || 0.7;

  // Create a temporary image so that we can compute the height of the downscaled image.
  const image = new Image();
  image.src = dataUrl;
  await new Promise(resolve => {
    image.onload = () => {
      resolve();
    };
  });
  const oldWidth = image.width;
  const oldHeight = image.height;
  const newHeight = Math.floor((oldHeight / oldWidth) * newWidth);

  // Create a temporary canvas to draw the downscaled image on.
  const canvas = document.createElement("canvas");
  canvas.width = newWidth;
  canvas.height = newHeight;

  // Draw the downscaled image on the canvas and return the new data URL.
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, newWidth, newHeight);
  const newDataUrl = canvas.toDataURL(imageType, imageQuality);

  return newDataUrl;
}

/* harmony default export */ __webpack_exports__["default"] = (imageCompressor);


/***/ }),

/***/ 39044:
/*!*************************************************************************!*\
  !*** ./src/app/faculty/assignmentedit/assignmentedit-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmenteditPageRoutingModule": function() { return /* binding */ AssignmenteditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _assignmentedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignmentedit.page */ 7527);




const routes = [
    {
        path: '',
        component: _assignmentedit_page__WEBPACK_IMPORTED_MODULE_0__.AssignmenteditPage
    }
];
let AssignmenteditPageRoutingModule = class AssignmenteditPageRoutingModule {
};
AssignmenteditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssignmenteditPageRoutingModule);



/***/ }),

/***/ 20062:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/assignmentedit/assignmentedit.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmenteditPageModule": function() { return /* binding */ AssignmenteditPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _assignmentedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignmentedit-routing.module */ 39044);
/* harmony import */ var _assignmentedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignmentedit.page */ 7527);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 67185);








// Quill.register('modules/imageCompress', ImageCompress);
let AssignmenteditPageModule = class AssignmenteditPageModule {
};
AssignmenteditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            // QuillModule.forRoot({
            //   modules: {
            //     syntax: false,
            //     toolbar: [
            //       ["bold", "italic", "underline"],
            //       [{ list: "bullet" }],
            //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
            //       [{ font: [] }],
            //       [{ align: [] }],
            //     ],
            //   },
            // }),
            ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule.forRoot({
                modules: {
                    syntax: false,
                    // imageCompress: {
                    //   quality: 0.5, // default
                    //   maxWidth: 1000, // default
                    //   maxHeight: 1000, // default
                    //   imageType: "image/jpeg", // default
                    //   debug: true, // default
                    // },
                },
            }),
            _assignmentedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignmenteditPageRoutingModule,
        ],
        declarations: [_assignmentedit_page__WEBPACK_IMPORTED_MODULE_1__.AssignmenteditPage],
    })
], AssignmenteditPageModule);



/***/ }),

/***/ 7527:
/*!***************************************************************!*\
  !*** ./src/app/faculty/assignmentedit/assignmentedit.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmenteditPage": function() { return /* binding */ AssignmenteditPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_assignmentedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assignmentedit.page.html */ 61449);
/* harmony import */ var _assignmentedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignmentedit.page.scss */ 13837);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _assets_js_quill_imageCompressor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/quill.imageCompressor.js */ 26376);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill */ 72161);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);










// import * as Quill from "quill";

// Quill.register("modules/imageCompress", imageCompressor);


// import { FileChooser } from "@ionic-native/file-chooser/ngx";
// import { FilePath } from "@ionic-native/file-path/ngx";
// import { Base64 } from "@ionic-native/base64/ngx";
// import { DocumentViewer, DocumentViewerOptions } from "@ionic-native/document-viewer/ngx";

const Quill = quill__WEBPACK_IMPORTED_MODULE_6__;
// Use quill as normal...
Quill.register("modules/imageCompress", _assets_js_quill_imageCompressor_js__WEBPACK_IMPORTED_MODULE_5__.default);
let AssignmenteditPage = class AssignmenteditPage {
    constructor(route, router, location, authService, general, formBuilder, actionSheetController, camera, 
    // public fileChooser: FileChooser,
    // public filePath: FilePath,
    // public base64: Base64,
    // private documents: DocumentViewer,
    previewAnyFile) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.authService = authService;
        this.general = general;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.previewAnyFile = previewAnyFile;
        this.assignID = "";
        this.listData = [];
        this.headerr = null;
        this.facultyDivisionId = "";
        this.textFormat = "";
        this.loadData = false;
        this.img = '';
        this.modules = {
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ["video"],
                ["clean"],
                ["link", "image", "code-block"] // link and image and code
            ],
            imageCompress: {
                quality: 0.5,
                maxWidth: 1000,
                imageType: "image/jpeg" // default
            },
        };
        this.document = [];
        this.isType = false;
        this.fileType = 'file';
        this.fileList = [];
        this.count = 0;
        this.indx = 1;
        this.hide = false;
        this.selectedAll = false;
        this.selectStudentIds = [];
        this.sendAssign = false;
        this.s = [];
        this.isEdit = false;
        this.studentId = [];
        this.checkStudents = [];
    }
    ngOnInit() {
        this.changeForm = this.formBuilder.group({
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            desc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            fileType: [""],
        });
        this.document = [];
        this.isEdit = false;
        this.edits = this.isEdit;
    }
    save() {
        console.log(this.textFormat, "fas");
    }
    submit() {
        console.log(this.typ, this.desc, this.tittl);
    }
    onEditorContentChange(sdfa) {
        console.log(sdfa, "sdfa.html", this.desc);
        this.desc = sdfa.html;
    }
    changedEditor(event) {
        console.log(event);
    }
    // update() {
    //   console.log(
    //     this.typ,
    //     this.desc,
    //     this.tittl,
    //     "123//",
    //     this.route.snapshot.paramMap.get("data"),
    //     "update data"
    //   );
    //   let dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
    //   let notice = {
    //     notice: {
    //       type: "DOCS",
    //       title: this.tittl,
    //       content: this.desc,
    //       plugin_notices_type_id: this.typ,
    //     },
    //     // "documents[0]": [],
    //     academicYearId: this.academicYearId,
    //     facultyDivisionId: parseInt(this.facultyDivisionId),
    //   };
    //   this.general.loadingPresent();
    //   this.authService
    //     .g_postt_fac(notice, "teaching-staff/notices/update-notice", this.token)
    //     .subscribe(
    //       (data) => {
    //         let response = data;
    //         console.log(response, "me Data");
    //         this.general.loadingDismiss()
    //       },
    //       (error) => {
    //         alert(error);
    //         console.log(error);
    //         this.general.loadingDismiss()
    //       }
    //     );
    // }
    back() {
        this.location.back();
    }
    ionViewWillEnter() {
        this.document = [];
        this.removeFileId = '';
        this.token = localStorage.getItem("pas_faculty");
        this.LoadList();
        this.headerr = this.route.snapshot.paramMap.get("topic");
        this.facultyDivisionId =
            this.route.snapshot.paramMap.get("facultyDivisionId");
        this.academicYearId = this.route.snapshot.paramMap.get("academicYearId");
        console.log(this.facultyDivisionId, "academicYearId111", this.academicYearId);
        if (
        // [undefined, null, ""].indexOf(this.route.snapshot.paramMap.get("data")) >
        //   -1 &&
        this.headerr == "Edit Notices") {
            console.log("getDatas45", JSON.parse(this.route.snapshot.paramMap.get("data")));
            this.assignID = JSON.parse(this.route.snapshot.paramMap.get("data")).plugin_notice_id;
            this.getDatas();
        }
    }
    getDatas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isEdit = true;
            this.edits = this.isEdit;
            const load = yield this.general.loading("Loading ...");
            load.present();
            let page = "teaching-staff/notices/edit-notice?notice_id=" + this.assignID;
            this.authService.get_fac_t(page, this.token).subscribe((data) => {
                load.dismiss();
                console.log(data, "getDatas");
                let editData = data.notice;
                this.files = data.files.length != 0 ? data.files : '';
                this.tittl = editData.title;
                this.desc = editData.content;
                // this.listData = data;
                this.typ = editData.plugin_notices_type_id;
                this.changeForm.patchValue({
                    title: editData.title,
                    type: editData.plugin_notices_type_id,
                    desc: editData.content
                });
                let a = data.studentIds;
                // a.forEach(v => {
                //   this.studentId.push()
                // })
                this.studentId = a;
                this.selectStudentIds = this.studentId;
                console.log(this.studentId);
            }, (err) => {
                if (err.status == 401 || err.status == 422 || err.status == 0) {
                    if (err.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
                load.dismiss();
            });
        });
    }
    LoadList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.general.loading("Loading ...");
            load.present();
            let page = "teaching-staff/notices/get-notices-types";
            this.authService.get_fac_t(page, this.token).subscribe((data) => {
                load.dismiss();
                this.loadData = true;
                console.log(data, "sd");
                this.listData = data;
                if (this.listData.length != 0) {
                    let v = this.listData[0];
                    console.log(v['id']);
                    this.changeForm.patchValue({
                        type: v['id']
                    });
                }
                console.log(this.changeForm);
            }, (err) => {
                console.log(err.status, "err");
                if (err.status == 401 || err.status == 422 || err.status == 0) {
                    if (err.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
                else {
                    alert("server issue");
                }
                load.dismiss();
            });
        });
    }
    edit() {
        console.log(this.typ, this.desc, this.tittl, "123//", this.route.snapshot.paramMap.get("data"), "update data");
        let dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
        console.log("dd.academic_year_id,", this.academicYearId);
        this.selectStudentIds.forEach(v => {
            console.log({ 'id': v }, 'ad');
            this.s.push({ 'id': v });
        });
        let notice = {
            notice: {
                type: "DOCS",
                title: this.changeForm.value.title,
                content: this.changeForm.value.desc,
                plugin_notices_type_id: this.changeForm.value.type,
                plugin_notice_id: this.assignID,
                notice_to: "STUDENTS",
                notice_type: "PERMANENT",
                academic_year_id: this.academicYearId,
                selectedStudents: this.s
            },
            academicYearId: parseInt(this.academicYearId),
            facultyDivisionId: parseInt(this.facultyDivisionId),
            removedAttachementIds: this.removeFileId,
            documents: this.document
        };
        console.log(notice);
        this.general.loadingPresent();
        this.authService
            .g_postt_fac(notice, "teaching-staff/notices/update-notice", this.token)
            .subscribe((data) => {
            let response = data;
            console.log(response, "me Data");
            this.location.back();
            this.general.loadingDismiss();
        }, (error) => {
            console.log(error);
            this.general.loadingDismiss();
            if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl("/opem");
                }
            }
        });
    }
    uploadFile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 50,
                correctOrientation: true,
                allowEdit: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                targetWidth: 2732,
                targetHeight: 2732,
            };
            this.camera.getPicture(options).then(imageData => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image = "data:image/jpeg;base64," + imageData;
                console.log(base64Image);
                this.document.push(base64Image);
                if (this.fileList.length == '0') {
                    this.count = 1;
                }
                else {
                    ++this.count;
                }
                let file = {
                    fileId: this.count,
                    fileType: this.fileType,
                    fileName: '',
                    base64: base64Image
                };
                this.fileList.push(file);
            }).catch((error) => console.error(error));
            console.log(this.fileList, this.count, 'ashok');
        });
    }
    onFileChange(event) {
        console.log(event.target.files.length);
        var filename = event.target.files[0].name;
        console.log("File Name");
        console.log(filename);
        var fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => {
            console.log(fileReader.result, 'FG');
            this.document.push(fileReader.result);
            if (this.fileList.length == '0') {
                this.count = 1;
            }
            else {
                ++this.count;
            }
            let file = {
                fileId: this.count,
                fileType: this.fileType,
                fileName: filename,
                base64: fileReader.result
            };
            this.fileList.push(file);
            // here this method will return base64 string enjoy 
        };
        console.log(this.fileList, 'ashok');
    }
    getFile() {
        console.log('dsfd');
        document.getElementById('fileInput').click();
    }
    changeValue(fileType) {
        console.log(fileType);
        if (fileType == 'image')
            this.isType = true;
        if (fileType == 'file')
            this.isType = false;
    }
    create() {
        if (this.changeForm.invalid) {
            console.log('invalid');
        }
        else {
            console.log(this.changeForm.value, "this.typ,");
            let dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
            console.log("dd.academic_year_id,", this.academicYearId);
            console.log(this.document);
            this.selectStudentIds.forEach(v => {
                console.log({ 'id': v }, 'ad');
                this.s.push({ 'id': v });
            });
            let notice = {
                notice: {
                    type: "DOCS",
                    title: this.changeForm.value.title,
                    content: this.changeForm.value.desc,
                    plugin_notices_type_id: this.changeForm.value.type,
                    selectedStudents: this.s
                },
                academicYearId: parseInt(this.academicYearId),
                facultyDivisionId: parseInt(this.facultyDivisionId),
                documents: this.document,
                // documents: [
                //   // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZCAYAAACtvpV",
                //   // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZCAYAAACtvpV",
                // ],
            };
            console.log(notice);
            //dev.pacifyca.com/pacifyca-v2/school-demo/api/teaching-staff/notices/save-notice
            //dev.pacifyca.com/pacifyca-v2/school-demo/api/teaching-staff/notices/save-notice
            this.general.loadingPresent();
            this.authService
                .g_postt_fac(notice, "teaching-staff/notices/save-notice", this.token)
                .subscribe((data) => {
                let response = data;
                // this.router.navigate(["/assign-faculty"]);
                this.location.back();
                console.log(response, "me Data");
                this.general.loadingDismiss();
            }, (error) => {
                console.log(error);
                this.general.loadingDismiss();
                if (error.status == 401 || error.status == 422 || error.status == 0) {
                    if (error.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
            });
        }
    }
    removeFile(id) {
        console.log(id);
        this.fileList.splice(id, 1);
        console.log(this.fileList);
        this.document = [];
        this.fileList.forEach(element => {
            this.document.push(element.base64);
        });
    }
    removeUFile(i, file_id) {
        console.log(file_id);
        this.files.splice(i, 1);
        this.removeFileId = (this.removeFileId) ? this.removeFileId + ',' + file_id : file_id;
    }
    viewDocument(file) {
        // 
        this.previewAnyFile.preview(file.name)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    viewDocument1(a) {
        window.open(a.base64);
    }
    continue() {
        this.hide = true;
        let a = [];
        let page = "teaching-staff/notices/students?faculty_division_allocation_id=" + this.facultyDivisionId;
        this.general.loadingPresent();
        this.authService.get_fac_t(page, this.token).subscribe((data) => {
            console.log(data);
            let v = [];
            this.studentList = data;
            this.students = this.studentList;
            this.students.forEach(s => {
                v[s.id] = false;
            });
            //console.log(v);
            this.checkStudents = v;
            if (this.isEdit) {
                console.log(this.studentId);
                let i = 0;
                this.studentId.forEach(s => {
                    this.checkStudents[s] = true;
                    i++;
                });
                if (i === this.students.length)
                    this.chec = true;
                else
                    this.chec = false;
                console.log(i, this.students.length, this.checkStudents, 'edit');
                //this.studentId = a;
            }
            this.general.loadingDismiss();
        }, (error) => {
            console.log(error);
            this.general.loadingDismiss();
            if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl("/opem");
                }
            }
        });
    }
    selectAll(c) {
        console.log(c);
        let a = [];
        if (c == true) {
            this.selectedAll = true;
            // if(this.edits) {
            //   this.isEdit = false;
            //   this.sendAssign = true;
            // }
            // console.log(this.items);
        }
        else {
            this.selectedAll = false;
            // if(this.edits) {
            //   this.isEdit = true;
            //   this.sendAssign = false;
            // }
            // this.postAssignmnet.selectStudentIds = [];
        }
        Object.keys(this.checkStudents).forEach(s => {
            a[s] = c;
        });
        this.checkStudents = a;
        console.log(this.checkStudents, 'ashok');
    }
    getStudent(id, event) {
        console.log(this.selectAll, 'df');
        console.log(event.detail, 'sd');
        // if(event.detail['checked'] == true) {
        if (this.selectStudentIds.indexOf(id) == -1) {
            this.selectStudentIds.push(id);
        }
        // }
        if (event.detail['checked'] == false) {
            const index = this.selectStudentIds.indexOf(id);
            if (index !== -1) {
                this.selectStudentIds.splice(index, 1);
            }
        }
        if (this.selectStudentIds.length > 0) {
            this.sendAssign = true;
        }
        else {
            this.sendAssign = false;
        }
        console.log(this.selectStudentIds);
    }
    getItems(et) {
        //this.IntiliazeItmes;
        const val = et.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.studentList = this.students.filter((item) => {
                return (item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            console.log(this.students);
            this.content.scrollToTop(400);
            this.studentList = this.students;
            //this.pushEnable = false;
            // this.getStudentList = this.getStudentList;
            //this.load_studentList()
            // this.IntiliazeItmes();
        }
    }
};
AssignmenteditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__.PreviewAnyFile }
];
AssignmenteditPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, { static: false },] }],
    fileInputClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['fileInput',] }]
};
AssignmenteditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-assignmentedit",
        template: _raw_loader_assignmentedit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assignmentedit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssignmenteditPage);



/***/ }),

/***/ 13837:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/assignmentedit/assignmentedit.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file {\n  background: #690d01fc;\n  color: #690d01fc;\n  width: 90%;\n  padding: 10px;\n  border-radius: 10px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n#yourBtn {\n  position: relative;\n  width: 75%;\n  padding: 8px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  text-align: center;\n  background-color: #690d01fc;\n  color: #FFFF;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.footer-btn {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  color: white;\n  text-align: center;\n  z-index: 5;\n  padding: 15px;\n}\n\n.label {\n  color: #ae5c50;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnRlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNVLHFCQUFBO0VBQ04sZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiYXNzaWdubWVudGVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2OTBkMDFmYztcbiAgICBjb2xvcjogIzY5MGQwMWZjO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3lvdXJCdG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgIzY5MGQwMWZjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjkwZDAxZmM7XG4gICAgY29sb3I6ICNGRkZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4uZm9vdGVyLWJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmxhYmVsIHtcbiAgICBjb2xvcjogICNhZTVjNTA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */");

/***/ }),

/***/ 61449:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/assignmentedit/assignmentedit.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"headerr == 'Edit Notices'\"> Edit Assignment / Notice </ion-title>\n        <ion-title *ngIf=\"headerr == 'Add Notices'\"> Add Assignment / Notice </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form  [formGroup]=\"changeForm\">\n        <span *ngIf=\"!hide\">\n            <ion-item *ngIf=\"listData.length>0\">\n                <ion-label style=\"width: 50%;\" class=\"label\">Type</ion-label>\n                <ion-select slot=\"end\" placeholder=\"Select Type\"  formControlName=\"type\">\n                    <ion-select-option *ngFor=\"let data of listData\" [value]=\"data.id\">{{data.notices_type}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label class=\"label\">Title</ion-label>\n                <ion-input formControlName=\"title\"></ion-input>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label position=\"floating\">Description</ion-label>\n                <ion-textarea [(ngModel)]=\"desc\"></ion-textarea>\n            </ion-item> -->\n            <br/>\n            <ion-label style=\"padding-left: 15px\" class=\"label\" >Description</ion-label>\n            <br/><br/>\n            <div *ngIf=\"loadData\">\n                <quill-editor    \n                [modules]=\"modules\"\n                formControlName=\"desc\"\n                (ContentChanged)=\"onEditorContentChange($event)\"\n                placeholder=\"Insert Description here...\"\n                ></quill-editor>\n            </div>\n            <br/>\n            <ion-label style=\"padding-left: 15px\" class=\"label\" >Upload Files</ion-label>\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"8\">\n                        <!-- <ion-button *ngIf=\"isType\" (click)=\"uploadFile()\"> Choose Image</ion-button> -->\n                        <div  *ngIf=\"isType\">\n                            <div id=\"yourBtn\" (click)=\"getFile()\">Choose Image</div>\n                            <!-- this is your file input tag, so i hide it!-->\n                            <!-- i used the onchange event to fire the form submission-->\n                            <div style='height: 0px;width: 0px; overflow:hidden;'> \n                                <input  accept=\"image/*\" class=\"file\"  id='fileInput' type=\"file\" (change)=\"onFileChange($event)\" class=\"custom-file-upload\" />\n                            </div>\n                        </div>\n                        <div  *ngIf=\"!isType\">\n                            <div id=\"yourBtn\" (click)=\"getFile()\">Choose File</div>\n                            <!-- this is your file input tag, so i hide it!-->\n                            <!-- i used the onchange event to fire the form submission-->\n                            <div style='height: 0px;width: 0px; overflow:hidden;'> \n                                <input  accept=\"application/pdf\" class=\"file\"  id='fileInput' type=\"file\" (change)=\"onFileChange($event)\" class=\"custom-file-upload\" />\n                            </div>\n                        </div>\n                       \n                       \n                         \n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-select  formControlName=\"fileType\" [(ngModel)]=\"fileType\" (ionChange)=\"changeValue(fileType)\"  placeholder=\"Select Type\"  >\n                            <ion-select-option value=\"file\">File</ion-select-option>\n                            <ion-select-option value=\"image\">Image</ion-select-option>\n                            \n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row *ngFor=\"let a of fileList; let i=index\">\n                    <ion-col size=\"9\" *ngIf=\"a.fileType == 'file'\"> <span>{{ a.fileName }}</span> </ion-col>\n                    <ion-col size=\"9\" *ngIf=\"a.fileType == 'image'\"> \n                        <img [src]=\"a.base64\" alt=\"\">\n                    </ion-col>\n                    <ion-col size=\"3\"><span style=\"color: #690d01fc;\" (click)=\"removeFile(i)\">Remove</span></ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf=\"files\">\n                <ion-row>\n                    <ion-col class=\"ion-text-center\"><h3>Uploaded Files</h3></ion-col>\n                </ion-row>\n                <ion-row *ngFor=\"let file of files; let i=index\">\n                    <ion-col size=\"9\" *ngIf=\"file.upload_type == 'FILE'\">\n                        <span style=\"color: #06c;\" (click)=\"viewDocument(file)\">View Document -  {{i+1}}</span>\n                    </ion-col>\n                    <ion-col size=\"9\" *ngIf=\"file.upload_type == 'IMAGE'\"> <img [src]=\"file.name\" alt=\"\"></ion-col>\n                    <ion-col size=\"3\"><span style=\"color: #690d01fc;\" (click)=\"removeUFile(i, file.file_id)\">Remove</span></ion-col>\n                </ion-row>\n            </ion-grid>\n           \n          \n            <div style=\"text-align: center; padding-top: 15px\">\n                <!-- <ion-button (click)=\"edit()\" [disabled]=\"!changeForm.valid\" *ngIf=\"headerr == 'Edit Notices'\">\n                    Update</ion-button>\n                <ion-button (click)=\"create()\" [disabled]=\"!changeForm.valid\" *ngIf=\"headerr != 'Edit Notices'\">\n                    Submit</ion-button> -->\n    \n                <ion-button [disabled]=\"!changeForm.valid\" (click)=\"continue()\">Continue</ion-button>\n            </div>\n        </span>\n         </form>\n        <span *ngIf=\"hide\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                      <ion-toolbar class=\"search\">\n                        <ion-searchbar class=\"search-col\"  color=\"primary\"\n                          debounce=\"500\" [(ngModel)]=\"searchTerm\" (ionInput)=\"getItems($event)\"  ></ion-searchbar>\n                      </ion-toolbar>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-grid class=\"animated lightSpeedIn item-wrap\">\n                            <ion-row>\n                                <ion-col size=\"1\"><ion-checkbox [(ngModel)]=\"chec\" (ionChange)=\"selectAll(chec)\" ></ion-checkbox></ion-col>\n                                <ion-col size=\"3\">Roll No.</ion-col>\n                                <ion-col size=\"8\">Name</ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                        <ion-grid class=\"animated lightSpeedIn item-wrap\">\n                            <ion-row class=\"border\" *ngFor=\"let student of studentList\">\n                                <ion-col size=\"1\">\n                                    <ion-checkbox  [checked]=\" checkStudents[student.id]\" [value]=\"student.id\"  (ionChange)=\"getStudent(student.id, $event)\"></ion-checkbox>\n                                </ion-col>\n                                <ion-col size=\"3\"> <ion-label class=\"label_ion\" >{{student.roll_no}}</ion-label></ion-col>\n                                <ion-col size=\"8\"> <ion-label class=\"label_ion\" >{{student.student_name}}</ion-label></ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <br/><br/><br/>\n            <div class=\"footer-btn\">\n                <ion-button (click)=\"edit()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr == 'Edit Notices'\">\n                    Update</ion-button>\n                <ion-button (click)=\"create()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr != 'Edit Notices'\">\n                    Submit</ion-button>\n    \n                \n            </div>\n        </span>\n        \n   \n    \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_assignmentedit_assignmentedit_module_ts-es2015.js.map