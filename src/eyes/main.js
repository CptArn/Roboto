"use strict";
exports.__esModule = true;
var Config = require("../config/pinConfig");
var johnny_five_1 = require("johnny-five");
var Eyes = (function () {
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
exports.Eyes = Eyes;
//# sourceMappingURL=main.js.map