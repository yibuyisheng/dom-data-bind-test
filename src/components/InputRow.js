define(function () {
    var binder = require('binder');

    function InputRow() {
        binder.Component.apply(this, arguments);
    }

    InputRow.prototype.tpl = [
        '<div class="input-row"><!-- children --></div>'
    ].join('');

    binder.inherit(InputRow, binder.Component);

    return InputRow;
});
