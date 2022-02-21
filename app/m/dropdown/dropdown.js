define([
    "text!app/m/dropdown/dropdown-tpl.html",
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

        embed.init($("#embed"), "/dropdown");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-dropdown" id="dropdown">
    <div class="dropdown">
        <div class="select">
            <span>Dropdown</span>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <ul class="options">
            <li class="option" value="1">
                <span>Option 1</span>
            </li>
            <li class="option" value="2">
                <span>Option 2</span>
            </li>
            <li class="option" value="3">
                <span>Option 3</span>
            </li>
        </ul>
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

        var htmlOptionsTpl = `<div class="p-dropdown" id="dropdown-group">
    <div class="dropdown">
        <div class="select">
            <span>Dropdown 1</span>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <ul class="options">
            <li class="option" value="1">
                <span>Option 1</span>
            </li>
            <li class="option" value="2">
                <span>Option 2</span>
            </li>
            <li class="option" value="3">
                <span>Option 3</span>
            </li>
        </ul>
    </div>
    <div class="dropdown">
        <div class="select">
            <span>Dropdown 2</span>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <ul class="options">
            <li class="option" value="1">
                <span>Option 1</span>
            </li>
            <li class="option" value="2">
                <span>Option 2</span>
            </li>
            <li class="option" value="3">
                <span>Option 3</span>
            </li>
        </ul>
    </div>
    <div class="dropdown">
        <div class="select">
            <span>Dropdown 3</span>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <ul class="options">
            <li class="option" value="1">
                <span>Option 1</span>
            </li>
            <li class="option" value="2">
                <span>Option 2</span>
            </li>
            <li class="option" value="3">
                <span>Option 3</span>
            </li>
        </ul>
    </div>
</div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlOptionsTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "dropdown",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});