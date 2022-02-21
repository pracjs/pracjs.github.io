define([
    "text!app/interceptor/interceptor-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", "component"
], function (tpl, _, CodeMirror, html, javascript, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-config").get(0), {
            readOnly: true,
            mode: "javascript"
        });
    }

    return {
        name: "interceptor",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});