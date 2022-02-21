define([
    "text!app/m/side-bar/side-bar-tpl.html",
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

        embed.init($("#embed"), "/side-bar");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-sidebar">
    <div class="header">
        <span>PracJS</span>
        <a href="javascript:void(0)" class="close">
            <i class="bi bi-x-lg"></i>
        </a>
    </div>
    <div class="body">
        <ul class="menu">
            <li>
                <span></span>
                <a href="javascript:void(0)">Profile</a>
            </li>
            <li class="selected">
                <span></span>
                <a href="javascript:void(0)">Others</a>
            </li>
            <li>
                <span></span>
                <a href="javascript:void(0)">Settings</a>
            </li>
        </ul>
    </div>
    <div class="footer">
        Power by @inuggets
    </div>
</div>

<a href="javascript:void(0)" p-sidebar-toggle>
    <i class="bi bi-gear"></i>
</a>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "sideBar",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});