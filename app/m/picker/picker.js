define([
    "text!app/m/picker/picker-tpl.html",
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

        embed.init($("#embed"), "/picker");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" name="city" placeholder="select city" readonly />

<div class="offcanvas offcanvas-bottom" id="city-picker-bottom" style="height: 300px;">
    <div class="offcanvas-body" style="padding: 10px;" id="city">
    </div>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Multiple Columns
        CodeMirror.fromTextArea($("#code-mc-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" name="day" placeholder="select weekday" readonly />

<div class="offcanvas offcanvas-bottom" id="day-picker-bottom" style="height: 320px;">
    <div class="offcanvas-body" style="padding: 10px;" id="day">
    </div>
</div>`;
        CodeMirror($("#code-mc-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Cascade Select
        CodeMirror.fromTextArea($("#code-cs-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" name="address" placeholder="select address" readonly />

<div class="offcanvas offcanvas-bottom" id="address-picker-bottom" style="height: 380px;">
    <div class="offcanvas-body" style="padding: 10px;" id="address">
    </div>
</div>`;
        CodeMirror($("#code-cs-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "picker",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});