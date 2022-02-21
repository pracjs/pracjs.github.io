define([
    "text!app/m/collapse/collapse-tpl.html",
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

        embed.init($("#embed"), "/collapse");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-collapse" id="collapse">
    <div class="item">
        <div class="title">
            <span>Title 1</span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="content">
           ...
        </div>
    </div>
    <div class="item">
        <div class="title">
            <span>Title 2</span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="content">
            ...
        </div>
    </div>
    <div class="item">
        <div class="title">
            <span>Title 3</span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="content">
            ...
        </div>
    </div>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "collapse",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});