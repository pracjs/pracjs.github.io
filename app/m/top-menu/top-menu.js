define([
    "text!app/m/top-menu/top-menu-tpl.html",
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

        embed.init($("#embed"), "/top-menu");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-top-menu">
    <ul class="menu">
        <li>
            <a href="javascript:void(0)" class="item">
                <i class="bi bi-chevron-right"></i>
                <span>From</span>
            </a>
            <ul>
                <li>
                    <a href="/picker" class="item selected" p-router>
                        <i class="bi bi-dash"></i>
                        <span>Picker</span>
                    </a>
                </li>
                ...
            </ul>
        </li>
        ...
    </ul>
</div>

<a href="javascript:void(0)" p-top-menu-toggle>
    <i class="bi bi-list"></i>
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