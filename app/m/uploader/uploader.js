define([
    "text!app/m/uploader/uploader-tpl.html",
    "bootstrap",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "app/m/embed/embed",
    "jquery", 
    "component"
], function (tpl, b, _, CodeMirror, html, javascript, embed, $) {

    function _init() {
        embed.init($("#embed"), "/uploader");

        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="uploader"></div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        CodeMirror.fromTextArea($("#code-config-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="uploader-options"></div>`;
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