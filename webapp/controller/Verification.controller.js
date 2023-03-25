sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  "sap/m/MessageBox",
  "sap/m/MessageToast"
],
  /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */

  function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.Verification", {

      onInit: function () {
      },
      /* onpress: function(){   
           var router = sap.ui.core.UIComponent.getRouterFor(this);
           router.navTo("View1");
           MessageBox.success("Welcome!");          
       },  */
      /*  onpresend1:function(){
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("View1");
        },   */
      onNavBack: function () {
        history.go(-1);
      },
      onpresslnk: function () {
        MessageToast.success("Code Resent...!")
      },
      onpresend1: function () {
        var vcode = this.getView().byId("vcode1");

        var vcode2 = "123";

        if (vcode.getValue() === '') {
          //  alert("Enter Verification Code");
          MessageToast.error("Enter Verification Code");
          return;
        } else {
          if (vcode.getValue() === vcode2) {
            //  alert("Password Changed Successfully!");
            MessageToast.success("Password Changed Successfully!");

            debugger;
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("View1");
          } else {
            // alert("Invalid Code");
            MessageToast.error("Invalid Code");
            return;
          }
        }
      }
    });
  });