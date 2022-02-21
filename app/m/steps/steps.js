define([
    "text!app/m/steps/steps-tpl.html",
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
        embed.init($("#embed"), "/steps");

        var htmlTpl = `<div class="p-steps">
    <div class="steps">
        <div class="step">
            <span>Step1<i class="bi bi-check2"></i></span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="step">
            <span>Step2<i class="bi bi-check2"></i></span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="step current">
            <span>Step3<i class="bi bi-check2"></i></span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="step">
            <span>Step4<i class="bi bi-check2"></i></span>
            <i class="bi bi-chevron-right"></i>
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
        name: "steps",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});