define([
    "text!app/m/dialog/dialog-tpl.html",
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

        embed.init($("#embed"), "/dialog");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-card">
    <div class="p-cell-group">
        <div class="p-cell" id="alert">
            <div class="content">
                <div>
                    <span>Click to show alert</span>
                </div>
                <div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
        <div class="p-cell" id="confirm">
            <div class="content">
                <div>
                    <span>Click to show confirm</span>
                </div>
                <div>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</div>`;
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

        var htmlOptionsTpl = `<div class="p-cell" id="confirm-options">...</div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlOptionsTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "dialog",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});