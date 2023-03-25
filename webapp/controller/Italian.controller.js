sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.Italian", {

        onInit: function () {


        },
        onNavBack: function () {
            history.go(-1);
        },
        onPressNoodles: function () {
            var msg = "Proceed to Pay...!";
            MessageToast.show(msg);
        }


    });

});