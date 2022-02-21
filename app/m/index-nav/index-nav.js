define([
    "text!app/m/index-nav/index-nav-tpl.html",
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

        embed.init($("#embed"), "/index-nav");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-index-nav">
    <div class="address-list-title">Address List</div>
    <div class="anchor" p-anchor="A">A</div>
    <ul class="list">
        <li class="item">Andy</li>
        <li class="item">Abby</li>
        <li class="item">Amber</li>
        <li class="item">Anny</li>
    </ul>
    <div class="anchor" p-anchor="B">B</div>
    <ul class="list">
        <li class="item">Bob</li>
        <li class="item">Bobby</li>
        <li class="item">Buddy</li>
    </ul>
    ...
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "indexNav",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});