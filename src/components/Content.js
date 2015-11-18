define(function (require) {
    var binder = require('binder');

    return binder.Component.extends(
        {
            tpl: [
                '<div>',
                    '<ui-input-row>',
                        '<ui-section width="100px">姓名：</ui-section>',
                        '<ui-section flex="1"><input type="text"></ui-section>',
                    '</ui-input-row>',
                '</div>'
            ].join('')
        },
        {
            getStyle: function () {
                return [
                    '#root# {flex: 1}'
                ].join('');
            }
        }
    );
});

