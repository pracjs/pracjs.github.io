define([
    "text!app/component/dialog/dialog-tpl.html",
    "underscore",
    "cm/lib/codemirror",
    "cm/mode/htmlmixed/htmlmixed",
    "cm/mode/javascript/javascript",
    "jquery",
    "component"
], function (tpl, _, CodeMirror, html, javascript, $) {

    function _init() {
        // Alert
        CodeMirror.fromTextArea($("#code-alert-bind-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#alert1").alert("Here is the alert message");

        CodeMirror.fromTextArea($("#code-alert-bind-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var alertBindTpl = `<button type="button" class="btn btn-danger" id="alert1">Alert</button>`;
        CodeMirror($("#code-alert-bind-html").get(0), {
            readOnly: true,
            value: alertBindTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-alert-trigger-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#alert2").on("click", function () {
            $.alert("Here is the alert message");
        });

        CodeMirror.fromTextArea($("#code-alert-trigger-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var alertTriggerTpl = `<button type="button" class="btn btn-danger" id="alert2">Alert</button>`;
        CodeMirror($("#code-alert-trigger-html").get(0), {
            readOnly: true,
            value: alertTriggerTpl,
            mode: "htmlmixed"
        });

        var alertAutoBindTpl = `<button type="button" class="btn btn-danger" p-alert="Here is the alert message">Alert</button>`;
        CodeMirror($("#code-auto-bind-html").get(0), {
            readOnly: true,
            value: alertAutoBindTpl,
            mode: "htmlmixed"
        });

        $("#alert3").alert("Here is the alert message", {
            confirm: {
                label: "OK", // Confirm button label
                waiting: "Please wait", // Waiting text
                onConfirm: function (notice) { // Called when click confirm button
                    // Async
                    setTimeout(function () {
                        notice();
                    }, 1000);
                }
            },
            size: "lg" // Dialog size
        });

        CodeMirror.fromTextArea($("#code-alert-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var alertOptionsTpl = `<button type="button" class="btn btn-danger" id="alert3">Alert</button>`;
        CodeMirror($("#code-alert-options-html").get(0), {
            readOnly: true,
            value: alertOptionsTpl,
            mode: "htmlmixed"
        });

        // Confirm
        CodeMirror.fromTextArea($("#code-confirm-bind-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#confirm1").confirm("Confirm Title", "Here is the confirm message");

        CodeMirror.fromTextArea($("#code-confirm-bind-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var confirmBindTpl = `<button type="button" class="btn btn-primary" id="confirm1">Confirm</button>`;
        CodeMirror($("#code-confirm-bind-html").get(0), {
            readOnly: true,
            value: confirmBindTpl,
            mode: "htmlmixed"
        });

        $("#confirm2").on("click", function () {
            $.confirm("Confirm Title", "Here is the confirm message");
        });

        CodeMirror.fromTextArea($("#code-confirm-trigger-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        CodeMirror.fromTextArea($("#code-confirm-trigger-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var confirmTriggerTpl = `<button type="button" class="btn btn-primary" id="confirm2">Confirm</button>`;
        CodeMirror($("#code-confirm-trigger-html").get(0), {
            readOnly: true,
            value: confirmTriggerTpl,
            mode: "htmlmixed"
        });

        $("#confirm3").confirm(
            "Confirm Title",
            "Here is the confirm message", {
            confirm: {
                label: "OK", // Confirm button label
                waiting: "Please wait", // Waiting text
                onConfirm: function (notice) { // Called when click confirm button
                    // Async
                    setTimeout(function () {
                        notice();
                    }, 1000);
                }
            },
            cancel: {
                label: "Cancel",
                onCancel: function () {
                    console.log("cancel");
                }
            },
            size: "lg" // Dialog size
        });

        CodeMirror.fromTextArea($("#code-confirm-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var confirmOptionsTpl = `<button type="button" class="btn btn-primary" id="confirm3">Confirm</button>`;
        CodeMirror($("#code-confirm-options-html").get(0), {
            readOnly: true,
            value: confirmOptionsTpl,
            mode: "htmlmixed"
        });

        // info
        CodeMirror.fromTextArea($("#code-info-bind-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#info1").info("Here is the message");

        CodeMirror.fromTextArea($("#code-info-bind-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var infoBindTpl = `<button type="button" class="btn btn-info" id="info1">Info</button>`;
        CodeMirror($("#code-info-bind-html").get(0), {
            readOnly: true,
            value: infoBindTpl,
            mode: "htmlmixed"
        });

        CodeMirror.fromTextArea($("#code-info-trigger-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        $("#info2").on("click", function () {
            $.info("Here is the message");
        });

        CodeMirror.fromTextArea($("#code-info-trigger-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var infoTriggerTpl = `<button type="button" class="btn btn-info" id="info2">Info</button>`;
        CodeMirror($("#code-info-trigger-html").get(0), {
            readOnly: true,
            value: infoTriggerTpl,
            mode: "htmlmixed"
        });

        var infoAutoBindTpl = `<button type="button" class="btn btn-info" p-info="Here is the message">Info</button>`;
        CodeMirror($("#code-auto-info-bind-html").get(0), {
            readOnly: true,
            value: infoAutoBindTpl,
            mode: "htmlmixed"
        });

        $("#info3").info("Here is the message", {
            size: "lg" // Dialog size
        });

        CodeMirror.fromTextArea($("#code-info-options-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var infoOptionsTpl = `<button type="button" class="btn btn-info" id="info3">Info</button>`;
        CodeMirror($("#code-info-options-html").get(0), {
            readOnly: true,
            value: infoOptionsTpl,
            mode: "htmlmixed"
        });

        // Modal
        CodeMirror.fromTextArea($("#code-modal-definition").get(0), {
            readOnly: true,
            mode: "javascript"
        });
        $("#modal").on("click", function () {
            $.dialog("This is title", $(_.template($("#form-tpl").html())()), {
                confirm: {
                    label: "Save",
                    waiting: "Please wait",
                    onConfirm: function (notice) {
                        setTimeout(function () {
                            notice();
                        }, 1000);
                    }
                },
                cancel: {
                    label: "Cancel",
                    onCancel: function () {
                        console.log("cancel");
                    }
                },
                size: "lg"
            });
        });

        CodeMirror.fromTextArea($("#code-modal-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var modalTpl = `
<script type="text/html" id="form-tpl">
    <form class="row g-3 needs-validation" novalidate onsubmit="return false;">
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="invalid-feedback">
                not good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required>
            <div class="invalid-feedback">
                not good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    required>
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required>
            <div class="invalid-feedback">
                Please provide a valid city.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" pattern="^[0-9]+$">
            <div class="invalid-feedback">
                Please provide a valid zip.
            </div>
        </div>
        <div class="col-md-6">
            <select class="form-select" aria-label="Default select example" required>
                <option value="">Please select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
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
    </form>
</script>`;
        CodeMirror($("#code-modal-html").get(0), {
            value: modalTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "dialog",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});