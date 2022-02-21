define([
    "text!app/component/stepper/stepper-tpl.html",
    "bootstrap",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component"
], function (tpl, b, _, CodeMirror, html, javascript, $) {

    function _init(args) {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        // Basic
        $("#stepper").stepper();

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="stepper">`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        $("#stepper-options").stepper({
            class: "outline-secondary",
            default: 2.2,
            min: 2,
            max: 10,
            step: 2,
            decimal: 1
        });

        CodeMirror.fromTextArea($("#code-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="stepper-options">`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "pagination",
        init: _init,
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});