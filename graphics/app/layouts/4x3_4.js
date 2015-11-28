/* global define */
define([
    'components/background',
    'components/speedrun'
], function(setBackground, setSpeedRunDimensions) {
    'use strict';

    var LAYOUT_NAME = '4x3_4';

    return function() {
        setBackground(LAYOUT_NAME);
        setSpeedRunDimensions(442, 154, 396, 170, {
            nameY: 20,
            categoryY: 81,
            nameMaxHeight: 70,
            showEstimate: true
        });
    };
});