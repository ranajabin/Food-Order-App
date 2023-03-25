sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function (Controller, JQuery, JSONModel) {
    "use strict";

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.Dessert", {

        onInit: function () {


        },
        onNavBack: function () {
            history.go(-1);
        }

    });

});