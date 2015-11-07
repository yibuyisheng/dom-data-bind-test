define(function () {
    var binder = require('binder');

    function InputRow() {
        binder.Component.apply(this, arguments);
    }

    InputRow.prototype.tpl = [
        '<div><!-- children --></div>'
    ].join('');

    InputRow.getStyle = function () {
        return [
            '#root# {',
                'display: flex',
            '}'
        ].join('');
    };

    binder.inherit(InputRow, binder.Component);

    return InputRow;
});
