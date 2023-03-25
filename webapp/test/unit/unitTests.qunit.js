/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bindingsample3/bindingsampleproject3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
