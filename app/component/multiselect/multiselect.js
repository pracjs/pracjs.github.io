define([
    "text!app/component/multiselect/multiselect-tpl.html",
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
        $("select[name='multi']").multiselect();

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<select class="form-select" name="multi" multiple>
    <option value="1">One</option>
    <option value="2" selected>Two</option>
    <option value="3">Three</option>
    <option value="4" selected>Four</option>
    <option value="5" selected>Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    <option value="9">Nine</option>
</select>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Filter
        $("select[name='multi-search']").multiselect({
            search: true
        });

        CodeMirror.fromTextArea($("#code-search-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlFilterTpl = `<select class="form-select" name="multi-search" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    <option value="9">Nine</option>
</select>`;
        CodeMirror($("#code-search-html").get(0), {
            readOnly: true,
            value: htmlFilterTpl,
            mode: "htmlmixed"
        });

        // Async
        $("select[name='multi-async']").multiselect({
            search: {
                async: function (keyword, callback) {
                    if (!keyword) {
                        callback([]);
                        return;
                    }

                    var data = [{
                        value: "1",
                        text: "One"
                    }, {
                        value: "2",
                        text: "Two"
                    }, {
                        value: "3",
                        text: "Three"
                    }, {
                        value: "4",
                        text: "Four"
                    }, {
                        value: "5",
                        text: "Five"
                    }, {
                        value: "6",
                        text: "Six"
                    }, {
                        value: "7",
                        text: "Seven"
                    }, {
                        value: "8",
                        text: "Eight"
                    }, {
                        value: "9",
                        text: "Nine"
                    }, {
                        value: "10",
                        text: "Ten"
                    }];
                    var r = data.filter(function (i) {
                        if (i.text.match(new RegExp(keyword, "i"))) {
                            return true;
                        }
                    });
                    setTimeout(function () {
                        callback(r);
                    }, 800);
                }
            }
        });

        CodeMirror.fromTextArea($("#code-async-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlAsyncTpl = `<select class="form-select" name="multi-async" multiple></select>`;
        CodeMirror($("#code-async-html").get(0), {
            readOnly: true,
            value: htmlAsyncTpl,
            mode: "htmlmixed"
        });

        // Validation
        $("#form").form({
            cancel: {
                disabled: true        
            }
        });
        $("select[name='multi-validation']").multiselect();

        CodeMirror.fromTextArea($("#code-validation-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlValidationTpl = `<form class="row g-3 needs-validation" onsubmit="return false;" id="form">
    <div class="col-md-12">
        <label class="form-label">Multi Select</label>
        <select class="form-select" name="multi-validation" multiple required>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
            <option value="9">Nine</option>
        </select>
        <div class="invalid-feedback">
            Please select something
        </div>
    </div>
</form>`;
        CodeMirror($("#code-validation-html").get(0), {
            readOnly: true,
            value: htmlValidationTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "multiselect",
        init: _init,
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});