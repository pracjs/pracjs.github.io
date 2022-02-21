define([
    "text!app/component/slider/slider-tpl.html",
    "bootstrap",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component"
], function (tpl, b, _, CodeMirror, html, javascript, $) {

    function _init(args) {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        // Basic
        $("#slider").slider();

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="slider" style="margin-top: 15px;"></div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        var btn = $("<div style='width:40px;height:25px;background-color:#198754;border-radius:2px;color:#fff;text-align:center;user-select:none;'>20</div>");
        $("#slider-options").slider({
            height: 5,                                       // progress bar height
            classes: ["progress-bar-striped", "bg-success"], // progress bar style
            min: 0,                                          // min value
            max: 100,                                        // max value
            default: 20,                                     // default value
            step: 5,                                         // step of slide
            btn: btn,                                        // slider button
            onChange: function (value) {                     // callback on slide
                btn.text(value);
            }
        });

        CodeMirror.fromTextArea($("#code-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<div id="slider-options" style="margin-top: 15px;"></div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "pagination",
        init: _init,
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});