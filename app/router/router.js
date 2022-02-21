define([
    "text!app/router/router-tpl.html",
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

        var routeTpl = `<a href="/router" p-router></a>`;
        CodeMirror($("#code-route-a").get(0), {
            value: routeTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-route-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-path-var").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-var-pass").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-module-args").get(0), {
            readOnly: true,
            mode: "javascript"
        });
    }

    return {
        name: "router",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});