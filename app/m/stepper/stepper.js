define([
    "text!app/m/stepper/stepper-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/shell/shell",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "app/m/embed/embed",
    "jquery", 
    "component"
], function (tpl, _, CodeMirror, shell, html, javascript, embed, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        embed.init($("#embed"), "/stepper");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="stepper" style="width: 4rem;" />`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        CodeMirror.fromTextArea($("#code-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlOptionsTpl = `<input type="text" class="form-control" id="stepper-options" style="width: 4rem;" />`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlOptionsTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "slider",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});