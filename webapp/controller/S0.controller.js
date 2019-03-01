sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.traducao.controller.S0", {
		onInit: function () {
			var oTranslationModel = this.getOwnerComponent().getModel("i18n");
			var oBundle = oTranslationModel.getResourceBundle();

			this.oViewModel = new JSONModel({
				createMode: false,
				pageTitle: oBundle.getText("view1_page_title")
			});
			this.getView().setModel(this.oViewModel, "view");
		},
		onCreate: function (oEvent) {
			var oTranslationModel = this.getView().getModel("i18n");
			var oBundle = oTranslationModel.getResourceBundle();
			var sText = oBundle.getText("view1_mode", ["CREATE"]);
			// alert(sText);
			this.oViewModel.setProperty("/pageTitle", sText);
		},

		onEdit: function (oEvent) {
			var oTranslationModel = this.getOwnerComponent().getModel("i18n");
			var oBundle = oTranslationModel.getResourceBundle();
			var sText = oBundle.getText("view1_mode", ["EDIT"]);
			// alert(sText);
			this.oViewModel.setProperty("/pageTitle", sText);
		}
	});
});