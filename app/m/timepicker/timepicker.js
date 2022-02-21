define([
    "text!app/m/timepicker/timepicker-tpl.html",
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

        embed.init($("#embed"), "/timepicker");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" name="time" placeholder="select time" readonly />

<div class="offcanvas offcanvas-bottom" id="timepicker-bottom" style="height: 330px;">
    <div class="offcanvas-body" style="padding: 10px;" id="time">
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

        var htmlMonthTpl = `<input type="text" name="minute" placeholder="select minute" readonly />

<div class="offcanvas offcanvas-bottom" id="minute-bottom" style="height: 330px;">
    <div class="offcanvas-body" style="padding: 10px;" id="minute">
    </div>
</div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlMonthTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-hour").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-minute").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-second").get(0), {
            readOnly: true,
            mode: "javascript"
        });
    }

    return {
        name: "datepicker",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});