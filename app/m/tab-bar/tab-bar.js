define([
    "text!app/m/tab-bar/tab-bar-tpl.html",
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

        embed.init($("#embed"), "/tab-bar");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-tabbar" id="tabbar">
    <div class="contents">
        <div class="selected">Chat List</div>
        <div>Address List</div>
        <div>Setting</div>
        <div>Personal Info</div>
    </div>
    <ul class="nav">
        <li class="selected">
            <i class="bi bi-chat"></i>
            <span>Chat</span>
            <div class="badge">
                <span class="info">9</span>
            </div>
        </li>
        <li>
            <i class="bi bi-journal"></i>
            <span>Address</span>
            <div class="badge">
                <i class="bi bi-dash"></i>
            </div>
        </li>
        <li>
            <i class="bi bi-gear"></i>
            <span>Setting</span>
            <div class="badge">
                <span class="dot"></span>
            </div>
        </li>
        <li>
            <i class="bi bi-person"></i>
            <span>Profile</span>
        </li>
    </ul>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "tabBar",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});