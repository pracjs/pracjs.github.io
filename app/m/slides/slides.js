define([
    "text!app/m/slides/slides-tpl.html",
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

        embed.init($("#embed"), "/slides");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div class="p-slides" style="height: 200px;" id="slides">
    <div class="wrapper">
        <div style="background-color:rosybrown;"></div>
        <div style="background-color:royalblue"></div>
        <div style="background-color:seagreen"></div>
        <div style="background-color:tomato"></div>
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

        var htmlOptionsTpl = `<div class="p-slides" id="slides-options" style="height: 300px;">
    <div class="wrapper">
        <div style="background-color:rosybrown;"></div>
        <div style="background-color:royalblue"></div>
        <div style="background-color:seagreen"></div>
        <div style="background-color:tomato"></div>
    </div>
</div>
<div class="ci">
    <span id="index">1</span>&nbsp;/ 4
</div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlOptionsTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "slides",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});