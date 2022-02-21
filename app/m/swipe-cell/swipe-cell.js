define([
    "text!app/m/swipe-cell/swipe-cell-tpl.html",
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

        embed.init($("#embed"), "/swipe-cell");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlAutobindTpl = `<div class="p-swipe-cell" p-swipe>
    <div class="wrapper">
        <div class="left">
            ...
        </div>
        <div class="content">
            ...
        </div>
        <div class="right">
            ...
        </div>
    </div>
</div>`;
        CodeMirror($("#code-html-autobind").get(0), {
            readOnly: true,
            value: htmlAutobindTpl,
            mode: "htmlmixed"
        });

        var htmlTpl = `<div class="p-swipe-cell">
    <div class="wrapper">
        <div class="left">
            <button type="button" class="btn btn-primary">Mark</button>
        </div>
        <div class="content">
            <div class="customer">
                <div class="thumbnail">
                    <span></span>
                </div>
                <div class="item">
                    <div class="name">Swipe Cell 1</div>
                    <div class="message">Swipe me left or right</div>
                </div>
                <div class="date">2022/01/30</div>
            </div>
        </div>
        <div class="right">
            <button type="button" class="btn btn-danger" id="delete">Delete</button>
            <button type="button" class="btn btn-secondary">Cancel</button>
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
        name: "swipeCell",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});