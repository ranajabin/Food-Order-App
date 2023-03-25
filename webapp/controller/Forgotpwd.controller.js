sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
 /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */

function (Controller,  MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.Forgotpwd", {

        onInit: function () {
        },
       /* onpress: function(){   
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("View1");
            MessageBox.success("Welcome!");          
        },  */
        onNavBack:function(){
            history.go(-1);
        } ,
     /*   onpresend:function(){
          var router = sap.ui.core.UIComponent.getRouterFor(this);
          router.navTo("Verification"); 
        },  */
        onpresend: function () {
            var username = this.getView().byId("uname1");
            var password = this.getView().byId("pwd1");
            var rentpassword = this.getView().byId("pwd2");
    
            var user = "Rinki";
            var pass = "1234";
            var rentpass = "1234";
    
            if (username.getValue() === '') {
              //  alert("Enter Username");
             MessageToast.error("Please Enter Username");
              return;
            } else if (password.getValue() === '') {
              //  alert("Please enter Password");
              MessageToast.error("Please enter Password");
              return;
            }else if (rentpassword.getValue() === '') {
           //   alert("Please enter your Confirm pwd");
            MessageToast.error("Please enter your Confirm Password");
            return;
          }else if (rentpassword.getValue() != password.getValue()) {
          //  alert("Password Mismatch");
          MessageToast.error("Password Mismatch");
          return;
        }
             else {
              if (username.getValue() === user && password.getValue() === pass && rentpassword.getValue() === rentpass) {
              //  alert("Verification code Sent...!"); 
              MessageToast.success("Verification code Sent...!");   
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Verification");
              } else {
              //  alert("Invalid username and pwd");
               MessageToast.error("Invalid Username and Password!!");
                return;
              }
            }   
          } 
    });
});