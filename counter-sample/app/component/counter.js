define(
    [
        'components/flight/lib/component'
    ],
    
    function (defineComponent) {
        'use strict';
        var counter = function () {
            this.defaultAttrs({
                count: 0,
                labelSelector: 'h1',
                increaseButtonSelector: 'button.increase',
                decreaseButtonSelector: 'button.decrease'
            });
            this.increased = function () {
                this.attr.count += 1;
                this.select('labelSelector').text(this.attr.count);
            };
            this.decreased = function () {
                this.attr.count -= 1;
                this.select('labelSelector').text(this.attr.count);
            };
            this.after('initialize', function () {
                this.select('labelSelector').text(this.attr.count);
                this.on('click', {
                    increaseButtonSelector: this.increased,
                    decreaseButtonSelector: this.decreased
                });
            });
        };
        return defineComponent(counter);
    }
);