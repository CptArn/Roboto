var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("config/pinConfig", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters: [],
        execute: function () {
            config = {
                "left-eye": 2,
                "right-eye": 3
            };
            exports_1("default", config);
        }
    };
});
System.register("eyes/main", ["config/pinConfig", "johnny-five"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Config, johnny_five_1, Eyes;
    return {
        setters: [
            function (Config_1) {
                Config = Config_1;
            },
            function (johnny_five_1_1) {
                johnny_five_1 = johnny_five_1_1;
            }
        ],
        execute: function () {
            Eyes = (function () {
                function Eyes() {
                    var _this = this;
                    this.rightLed = new johnny_five_1.Led(Config['right-eye']);
                    this.wink = function () {
                        _this.leftLed.on();
                        setTimeout(function () {
                            _this.leftLed.off();
                        }, 500);
                    };
                    this.leftLed = new johnny_five_1.Led(Config['left-eye']);
                    this.rightLed = new johnny_five_1.Led(Config['right-eye']);
                }
                return Eyes;
            }());
            exports_2("Eyes", Eyes);
        }
    };
});
System.register("ai/main", ["events"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var events_1, Test;
    return {
        setters: [
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            Test = (function (_super) {
                __extends(Test, _super);
                function Test() {
                    return _super.call(this) || this;
                }
                Test.prototype.start = function () {
                    var _this = this;
                    var time = Math.floor(Math.random() * 1500) + 500;
                    setTimeout(function () {
                        _this.emit('wink');
                    }, time);
                };
                return Test;
            }(events_1.EventEmitter));
            exports_3("Test", Test);
        }
    };
});
System.register("main", ["johnny-five"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var johnny_five_2, board;
    return {
        setters: [
            function (johnny_five_2_1) {
                johnny_five_2 = johnny_five_2_1;
            }
        ],
        execute: function () {
            board = new johnny_five_2.Board();
            board.on('ready', function () {
            });
        }
    };
});
//# sourceMappingURL=app.js.map