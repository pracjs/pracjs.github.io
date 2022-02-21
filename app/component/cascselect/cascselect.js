define([
    "text!app/component/cascselect/cascselect-tpl.html",
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
        $.cascadeSelect([{
            selector: $("#province"),
            data: { 1: "Liaoning", 2: "Jilin" },
            selected: 1
        }, {
            selector: $("#city"),
            data: {
                1: {
                    11: "Shenyang",
                    12: "Dalian",
                    13: "Anshan",
                },
                2: {
                    21: "Changchun",
                    22: "Jilin",
                }
            },
            selected: 12
        }, {
            selector: $("#district"),
            data: {
                11: {
                    111: 'Heping',
                    112: 'Shenhe',
                    113: 'Dadong',
                    114: 'Huanggu'
                },
                12: {
                    121: 'Zhongshan',
                    122: 'Xigang',
                    123: 'Shahekou',
                    124: 'Ganjingzi'
                },
                13: {
                    131: 'Tiedong',
                    132: 'Tiexi',
                    133: 'Lishan'
                },
                21: {
                    211: 'Nanguan',
                    212: 'Kuancheng',
                    213: 'Chaoyang'
                },
                22: {
                    221: 'Changyi',
                    222: 'Longtan',
                    223: 'Chuanying'
                }
            },
            selected: 122
        }]);

        CodeMirror.fromTextArea($("#code-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlTpl = `<form class="row">
    <div class="col-md-4">
        <label class="form-label">Province</label>
        <select class="form-select" name="province" required id="province"></select>
    </div>
    <div class="col-md-4">
        <label class="form-label">City</label>
        <select class="form-select" name="city" required id="city"></select>
    </div>
    <div class="col-md-4">
        <label class="form-label">District</label>
        <select class="form-select" name="district" required id="district"></select>
    </div>
</form>`;
        CodeMirror($("#code-html").get(0), {
            readOnly: true,
            value: htmlTpl,
            mode: "htmlmixed"
        });

        // Async
        $.cascadeSelect([{
            selector: $("#province-async"),
            async: function (value, callback) {
                setTimeout(function () {
                    callback({ 1: "Liaoning", 2: "Jilin" }, 1);
                }, 500);
            }
        }, {
            selector: $("#city-async"),
            async: function (value, callback) {
                var data =  {
                    1: {
                        11: "Shenyang",
                        12: "Dalian",
                        13: "Anshan",
                    },
                    2: {
                        21: "Changchun",
                        22: "Jilin",
                    }
                };

                setTimeout(function () {
                    callback(data[value], 12);
                }, 500);
            }
        }, {
            selector: $("#district-async"),
            async: function (value, callback) {
                var data = {
                    11: {
                        111: 'Heping',
                        112: 'Shenhe',
                        113: 'Dadong',
                        114: 'Huanggu'
                    },
                    12: {
                        121: 'Zhongshan',
                        122: 'Xigang',
                        123: 'Shahekou',
                        124: 'Ganjingzi'
                    },
                    13: {
                        131: 'Tiedong',
                        132: 'Tiexi',
                        133: 'Lishan'
                    },
                    21: {
                        211: 'Nanguan',
                        212: 'Kuancheng',
                        213: 'Chaoyang'
                    },
                    22: {
                        221: 'Changyi',
                        222: 'Longtan',
                        223: 'Chuanying'
                    }
                };

                setTimeout(function () {
                    callback(data[value], 122);
                }, 500);
            }
        }]);

        CodeMirror.fromTextArea($("#code-async-js").get(0), {
            readOnly: true,
            mode: "javascript"
        });

        var htmlAsyncTpl = `<form class="row">
    <div class="col-md-4">
        <label class="form-label">Province</label>
        <select class="form-select" name="province" required id="province-async"></select>
    </div>
    <div class="col-md-4">
        <label class="form-label">City</label>
        <select class="form-select" name="city" required id="city-async"></select>
    </div>
    <div class="col-md-4">
        <label class="form-label">District</label>
        <select class="form-select" name="district" required id="district-async"></select>
    </div>
</form>`;
        CodeMirror($("#code-async-html").get(0), {
            readOnly: true,
            value: htmlAsyncTpl,
            mode: "htmlmixed"
        });
    }

    return {
        name: "cascselect",
        init: _init,
        render: function (ctx, args, onload) {
            ctx.html(_.template(tpl)());
            onload(args);
        }
    }
});