define([
    "text!app/m/lazy-load/lazy-load-tpl.html",
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

        embed.init($("#embed"), "/lazy-load");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-img-list" id="lazyload">
    <div class="row" style="padding: 1rem 2rem;">
        <div class="col col-12">
            <img data-src="/res/images/1.jpeg" />
        </div>
        ...
    </div>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "lazyLoad",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});