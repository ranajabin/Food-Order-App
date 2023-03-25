sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox'
], function (Controller, JQuery, JSONModel, MessageBox, MessageToast) {
    "use strict";

    var sResponsivePaddingClasses = "sapUiResponsivePadding--header sapUiResponsivePadding--content sapUiResponsivePadding--footer";

    return Controller.extend("bindingsample3.bindingsampleproject3.controller.Starter", {

        onInit: function () {


        },
        onNavBack: function () {
            history.go(-1);
        },

        onPress1: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "A veg burger is a hamburger patty that does not contain meat. It may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress2: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Moradabadi Dal is a delicious moong dal chaat recipe. This dal recipe originated in the city of Moradabad (Uttar Pradesh). It is a healthy and delicious appetizer.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress3: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "These cucumber cups with a dynamic filling of veggies, dates, spices, and chutneys are the ultimate dish for a burst of tangy, crunchy flavors!.The filling is Indian inspired but features a Middle Eastern twist with the incorporation of dates that add a nutty sweetness to balance the taste.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress4: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Kalmi kebab is a traditional Indian dish influenced by Mughlai cuisine, and it's especially popular in Punjab. The dish is made with chicken drumsticks that are marinated and shallow-fried on high heat in a pan until deep golden in color. The meat can also be prepared in a tandoor oven.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress5: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress6: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Chicken 65 is a South Indian deep fried chicken appetizer,originated in Hotel Buhari in Chennai. Chicken pieces are marinated with flour,spices,yogurt,egg, and curry leaves. These are later fried to perfection until golden and crisp. Apart from being super flavorful,Chicken 65 is crisp on the outside,Juicy & tender inside.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress7: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Rajma and Dalia Tikki Sandwich get substance from the vegetarian patty and fresh vegetables and gooey love from the mint mayonnaise. These red kidney beans tikki sandwiches are a perfect vegetarian version of any chicken sandwich and full of healthy ingredients – beans, broken wheat, and oats.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress8: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Raj Kachori is a type of Indian chaat dish that is usually served as a snack. It’s made up of deep-fried wheat dough balls that are filled with spiced potatoes and peas, and then topped with yogurt and sev. There are many variations of the dish with different shapes and fillings.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress9: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "What-A-Burger is the trading name used by a small group of restaurants which were established by entrepreneur brothers Jack Branch and Paul E. Branch Jr. and members of the Branch family beginning in 1957 though the first What-A-Burger was opened in 1950.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },

        onPress10: function () {
            MessageBox.information("Information", {
                title: "Information",
                id: "messageBoxId1",
                details: "Corn And Methi Kabab is an innovative recipe, truly delicious and nutritious. This wholesome kabab is made with corn, paneer and methi. The sweetness of corn, sharpness of methi leaves and the softness of homemade paneer are well balanced in this recipe.",
                contentWidth: "100px",
                styleClass: sResponsivePaddingClasses
            });
        },


        // onPress: function(){
        //     MessageBox.success("Items added to cart!");
        // },
        onPressOrder: function () {
            MessageBox.success("You have placed your order successfully!");
        },

    });

});