var init_model = function () {
    this.length = 1;
};

var fn_model = {
    init: init_model,
    extend: function(){},
    each: function(){}
};

init_model.$$ = fn_model;//expected:prototype

var jQ_model = function () {
    return new init_model();
};

jQ_model.fn = fn_model;
window.jQ = jQ_model;
