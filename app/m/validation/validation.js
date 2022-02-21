define([
    "text!app/m/validation/validation-tpl.html",
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

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlAutobindTpl = `<div class="p-form" p-form>
    ...
    <button type="button" class="btn btn-primary" p-submit>Sumbit</button>
<div>`;
        CodeMirror($("#code-html-autobind").get(0), {
            readOnly: true,
            value: htmlAutobindTpl,
            mode: "htmlmixed"
        });

        var htmlTpl = `<div class="p-form">
    <div class="p-card">
        <div class="p-cell">
            <div class="control">
                <label>Username</label>
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="text" name="username" placeholder="please input username" validation="username" autocomplete="off" />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                    </div>
                    <div class="msg invalid">Please input your username</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Password</label>
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="text" name="password" placeholder="please input password" required autocomplete="off" />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                    </div>
                    <div class="msg invalid">Please input your password</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Mobile</label>
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="number" placeholder="please input phone no" pattern="^[0-9]+$" />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                    </div>
                    <div class="msg invalid">Please provide a valid phone no</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="number" placeholder="input the verification code" name="vcode" validation="vcode" />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                        <a href="javascript:void(0)" style="width: 120px;">Send</a>
                    </div>
                    <div class="msg invalid">Please provide a valid valid v-code</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Date</label>
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="text" name="date" placeholder="click to select a date" readonly required />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <div class="msg invalid">Please select a date</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>City</label>
                <div>
                    <div class="input">
                        <div class="content">
                            <input type="text" name="city" placeholder="click to select city" readonly required />
                            <i class="bi bi-exclamation-circle invalid"></i>
                            <i class="bi bi-check-lg text-success valid"></i>
                        </div>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <div class="msg invalid">Please select a city</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Slider</label>
                <div>
                    <div id="slider"></div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Stepper</label>
                <div style="width: 9rem;">
                    <input type="text" class="form-control" id="stepper" />
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Checkbox</label>
                <div>
                    <div class="check">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="check1" value="1" id="c1" required>
                            <label class="form-check-label" for="c1">One</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="check1" value="2" id="c2" required>
                            <label class="form-check-label" for="c2">Two</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="check1" value="3" id="c3" required>
                            <label class="form-check-label" for="c3">Three</label>
                        </div>
                    </div>
                    <div class="msg invalid">Please check</div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Radio</label>
                <div>
                    <div class="check">
                        <div class="form-check">
                            <input class="form-check-input" name="gender" type="radio" value="1" id="r1" checked>
                            <label class="form-check-label" for="r1">Male</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="gender" type="radio" value="2" id="r2">
                            <label class="form-check-label" for="r2">Female</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Rate</label>
                <div>
                    <div id="rate"></div>
                </div>
            </div>
        </div>
        <div class="p-cell">
            <div class="control">
                <label>Upload</label>
                <div>
                    <div id="uploader"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-card">
        <div class="p-cell">
            <div class="control space-between">
                <label style="width: 80%;">Setting above address as the shipping address?</label>
                <div>
                    <div class="form-switch auto-width">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-card">
        <div class="p-cell-group">
            <div class="p-cell" id="to-share">
                <div class="content">
                    <div>
                        <span>Share</span>
                    </div>
                    <div>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="action row">
        <div class="col-12">
            <button type="button" class="btn btn-primary" p-submit style="width: 100%;" id="submit">Sumbit</button>
        </div>
        <div class="col-12 mt-1">
            <button type="button" class="btn btn-light" style="width: 100%;" id="cancel">Cancel</button>
        </div>
    </div>
</div>`;

        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        embed.init($("#embed"), "/validation");
    }

    return {
        name: "slider",
        init: function () {
            _init();
        },
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});