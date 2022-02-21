define([
    "text!app/m/calendar/calendar-tpl.html",
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

        embed.init($("#embed"), "/calendar");

        // Basic
        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" name="date" placeholder="select date" readonly />

<div class="offcanvas offcanvas-bottom" id="calendar-bottom" style="height: 540px;">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Date Select</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
    <div class="offcanvas-body" style="padding: 0" id="calendar">
    </div>
</div>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // range
        CodeMirror.fromTextArea($("#code-range-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlRangeTpl = `<input type="text" name="range" placeholder="select date range" readonly />

<div class="offcanvas offcanvas-bottom" id="range-bottom" style="height: 540px;">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Date Range Select</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
    <div class="offcanvas-body" style="padding: 0" id="range">
    </div>
</div>`;
        CodeMirror($("#code-range-html").get(0), {
            readOnly: true,
            value: htmlRangeTpl,
            mode: "htmlmixed"
        });

        // multiple
        CodeMirror.fromTextArea($("#code-multiple-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlMultipleTpl = `<input type="text" name="dates" placeholder="select dates" readonly />

<div class="offcanvas offcanvas-bottom" id="multiple-bottom" style="height: 540px;">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Dates Select</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
    <div class="offcanvas-body" style="padding: 0" id="multiple">
    </div>
</div>`;
        CodeMirror($("#code-multiple-html").get(0), {
            readOnly: true,
            value: htmlMultipleTpl,
            mode: "htmlmixed"
        });

        // options
        CodeMirror.fromTextArea($("#code-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlOptionsTpl = `<input type="text" name="options" placeholder="select date" readonly />

<div class="offcanvas offcanvas-bottom" id="options-bottom" style="height: 540px;">
    <div class="offcanvas-body" style="padding: 0" id="options">
    </div>
</div>`;
        CodeMirror($("#code-options-html").get(0), {
            readOnly: true,
            value: htmlOptionsTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-confirm").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-week").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-month").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-scope").get(0), {
            readOnly: true,
            mode: "javascript"
        });
    }

    return {
        name: "calendar",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});