sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("bindingsample3.bindingsampleproject3.controller.MCourse", {
            onInit: function () {


            },
            onPressConfirm: function () {
                MessageBox.success("Order Confirmed!");
            },

            onNavBack: function () {
                history.go(-1);
            }


        });

    });