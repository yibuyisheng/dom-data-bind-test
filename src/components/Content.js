define(function (require) {
    var binder = require('binder');
    var InputRow = require('./InputRow');
    var Section = require('./Section');

    return binder.Component.extends(
        {
            literalAttrReady: function () {
                
            },
            componentClasses: {
                InputRow: InputRow,
                Section: Section
            },
            tpl: [
                '<div>',
                    '<ui-input-row ref="row">',
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

