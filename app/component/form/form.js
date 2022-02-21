define([
    "text!app/component/form/form-tpl.html",
    "bootstrap",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery", 
    "component"
], function (tpl, b, _, CodeMirror, html, javascript, $) {

    function _init() {
        CodeMirror.fromTextArea($("#code-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        // Basic
        $("#form").form({
            confirm: {
                label: "Save",
                class: "danger",
                onConfirm: function (notice) {
                    // async notice
                    setTimeout(function () {
                        notice();
                    }, 1500);
                }
            },
            cancel: {
                label: "Clear",
                onCancel: function () {
                    $("#form").find("input[type='text']").val("");
                    $("#form").find("select option[value='']").prop("selected", true);
                    $("#form").find("input[type='checkbox']").prop("checked", false);
                }
            }
        });

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `
<form class="row g-3 needs-validation" onsubmit="return false;" id="form">
    <div class="col-md-6">
        <label for="validationCustom01" class="form-label">First name</label>
        <input type="text" class="form-control" required>
        <div class="invalid-feedback">
            Please provide your first name.
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input type="text" class="form-control" required>
        <div class="invalid-feedback">
            Please provide your last name.
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom03" class="form-label">City</label>
        <input type="text" class="form-control" required>
        <div class="invalid-feedback">
            Please provide a city.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Zip</label>
        <input type="text" class="form-control" pattern="^[0-9]+$">
        <div class="invalid-feedback">
            Please provide a valid zip.
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Hobby</label>
        <select class="form-select" required>
            <option value="">Please select</option>
            <option value="1">Basketball</option>
            <option value="2">Travel</option>
            <option value="3">Movie</option>
        </select>
        <div class="invalid-feedback">
            Please select your hobby.
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom03" class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="validationCustom03" required p-integer min="1" max="99999">
        <div class="invalid-feedback">
            Please provide a phone number.
        </div>
    </div>
    <div class="col-12 position-relative">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-tooltip">
                You must agree before submitting.
            </div>
        </div>
    </div>   
</form>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        var patternTpl = `<input type="text" class="form-control" pattern="^[0-9]+$">`;
        CodeMirror($("#code-pattern").get(0), {
            readOnly: true,
            value: patternTpl,
            mode: "htmlmixed"
        });

        var limitTpl = `<input type="text" class="form-control" required p-integer min="1" max="99999">
<input type="text" class="form-control" required p-decimal min="1" max="100">`;
        CodeMirror($("#code-limit").get(0), {
            readOnly: true,
            value: limitTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "form",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});