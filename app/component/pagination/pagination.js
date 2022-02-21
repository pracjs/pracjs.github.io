define([
    "text!app/component/pagination/pagination-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component"
], function (tpl, _, CodeMirror, html, javascript, $) {

    function _init(args) {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#pagination").pagination(args.skip, args.limit, 102, "/component/pagination", {
            max: 3
        });

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="pagination"></div>`;
        CodeMirror($("#code-html").get(0), {
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