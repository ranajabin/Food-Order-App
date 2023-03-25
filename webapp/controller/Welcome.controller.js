sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'sap/m/MessageBox'
], function (Controller, JQuery, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("bindingsample3.bindingsampleproject3.controller.Welcome", {

		onInit: function () {
			// set explored app's demo model on this sample
			/*	var path= jQuery.sap.getModulePath("bindingsample3.bindingsampleproject3","/model/products.json")
			let oModel = new sap.ui.model.json.JSONModel(path);
			this.getView().setModel(oModel,"products11"); */


		},
		onClickStarter: function () {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Starter");
		},
		onClickMCourse: function () {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("MCourse");
		},
		onClickItalian: function () {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Italian");
		},
		onClickDessert: function () {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Dessert");
		},
		onlog: function () {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("View1");
		},
		onpress: function () {
			MessageBox.success("Thanks!");
		},
		/*onpress1: function(){
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("Signin");
		} */
	});
});

