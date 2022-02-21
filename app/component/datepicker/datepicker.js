define([
    "text!app/component/datepicker/datepicker-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component",
    "datepicker"
], function (tpl, _, CodeMirror, html, javascript, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        // Basic
        $("#date").datepicker();

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="date">`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Date Range
        $("#date-range").datepicker({
            range: true
        });

        CodeMirror.fromTextArea($("#code-date-range-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="date-range">`;
        CodeMirror($("#code-date-range-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Multiple Date
        $("#date-multiple").datepicker({
            multiple: true
        });

        CodeMirror.fromTextArea($("#code-date-multiple-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="date-multiple">`;
        CodeMirror($("#code-date-multiple-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Month
        $("#month").datepicker({
            type: "month"
        });

        CodeMirror.fromTextArea($("#code-month-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="month">`;
        CodeMirror($("#code-month-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Year
        $("#year").datepicker({
            type: "year"
        });

        CodeMirror.fromTextArea($("#code-year-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="year">`;
        CodeMirror($("#code-year-html").get(0), {
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Config
        $("#date-options").datepicker({
            format: "YYYY年MM月DD日",
            week: {
                days: ["日", "一", "二", "三", "四", "五", "六"],
                firstDay: 1 // 0: Sun, 1: Mon
            },
            month: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                format: "MM月",
            },
            year: {
                format: "YYYY年"
            },
            btns: {
                back: {
                    label: "返回"
                },
                clear: {
                    label: "清空"
                },
                confirm: {
                    label: "确认",
                    onConfirm: function (date) {
                        console.log(date);
                    }
                }
            }
        });

        CodeMirror.fromTextArea($("#code-date-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<input type="text" class="form-control" id="date-options" style="width: 200px;" value="2022年01月08日">`;
        CodeMirror($("#code-date-options-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Options
        CodeMirror.fromTextArea($("#code-scope").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        CodeMirror.fromTextArea($("#code-btns").get(0), {
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
        CodeMirror.fromTextArea($("#code-year").get(0), {
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