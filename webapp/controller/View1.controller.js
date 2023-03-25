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

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.View1", {

      onInit: function () {
      },
      /* onpress: function(){   
           var router = sap.ui.core.UIComponent.getRouterFor(this);
           router.navTo("View1");
           MessageBox.success("Welcome!");          
       },  */
      onpresspwd: function () {
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("Forgotpwd");
      },
      onclickfb: function () {
        var link = "https://www.facebook.com/"
        //open in same window
        window.location.href = link;
        //open in new window
        //   window.open(link);
        //Or we can use sap URLHelper control to redirect into a new page
        //  sap.m.URLHelper.redirect(link, true);
      },
      onclickinsta: function () {
        var link = "https://www.instagram.com/accounts/login/"
        //open in same window
        //   window.location.href = link;
        //open in new window
        window.open(link);
        //Or we can use sap URLHelper control to redirect into a new page
        //  sap.m.URLHelper.redirect(link, true);
      },
      onclicktwitter: function () {
        var link = "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
        //open in same window
        //  window.location.href = link;
        //open in new window
        // window.open(link);
        //Or we can use sap URLHelper control to redirect into a new page
        sap.m.URLHelper.redirect(link, true);
      },
      onNavBack: function () {
        history.go(-1);
      },
      onpress: function () {
        var username = this.getView().byId("uname");
        var password = this.getView().byId("pwd");

        var user = "Rinki";
        var pass = "1234";

        if (username.getValue() === '') {
          //  alert("Enter Username");
          MessageToast.error("Please enter Username");
          return;
        } else if (password.getValue() === '') {
          //   alert("Please enter pwd");
          MessageToast.error("Please enter Password");
          return;
        } else {
          if (username.getValue() === user && password.getValue() === pass) {
            //  alert("Login Successful");
            MessageToast.success("Login Successful!");

            debugger;
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("Welcome");
          } else {
            //   alert("Invalid username and pwd");
            MessageToast.error("Invalid Username and Password!!");
            return;
          }
        }
      }
    });
  });