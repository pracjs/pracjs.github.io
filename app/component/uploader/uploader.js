define([
    "text!app/component/uploader/uploader-tpl.html",
    "bootstrap",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component",
    "uploader"
], function (tpl, b, _, CodeMirror, html, javascript, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        // Basic
        $("#upload").uploader();

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="upload"></div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        var myUploader = $("#upload-options").uploader({
            url: "/upload",
            width: "10rem",
            limit: 3,
            accept: "image/*",
            validation: {
                size: function (size, index) {
                    // file size cannot be bigger than 100K
                    if (size > 100 * 1024) {
                        $("#file-size-toast").toast("show");
                        return false;
                    }
                    return true;
                },
                type: function (type) {
                    // must be image
                    if (type.name != "image") {
                        return false;
                    }
                    return true;
                }
            },
            onProgress: function (loaded, total) {
                console.log(loaded / total);
            },
            onSuccess: function (result, textStatus, xhr) {
                // You can do some process using result
                console.log(result);

                // must return this
                return {
                    name: result.name,
                    path: result.path
                };
            },
            onError: function (xhr, textStatus, errorThrown) {
                // Do you process
            },
            onComplete: function (index) {
                // Do you process
                console.log("complete index = ", index);
                console.log(myUploader.files());
            },
            onRemove: function (file, index) {
                // Do you process
                console.log("remove index = ", index);
                console.log("remove file = ", file);
                console.log(myUploader.files());
            }
        });

        CodeMirror.fromTextArea($("#code-config-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="upload-options"></div>`;
        CodeMirror($("#code-config-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Options
        CodeMirror.fromTextArea($("#code-validation").get(0), {
            readOnly: true,
            mode: "javascript"
        });
    }

    return {
        name: "uploader",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});