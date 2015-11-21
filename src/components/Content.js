define(function (require) {
    var binder = require('binder');
    var InputRow = require('./InputRow');
    var Section = require('./Section');

    return binder.Component.extends(
        {
            literalAttrReady: function () {
                console.log(this.ref('div'));
            },
            componentClasses: {
                InputRow: InputRow,
                Section: Section
            },
            tpl: [
                '<div>',
                    '<div ref="div"></div>',
                    '<ui-input-row ref="row">',
                        '<ui-section width="100px">姓名：</ui-section>',
                        '<ui-section flex="1"><input type="text"></ui-section>',
                    '</ui-input-row>',
                    '<div class="hahaha"></div>',
                    '<p></p>',
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

