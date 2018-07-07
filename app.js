(function () {
	'use strict';
	angular.module("ShoppingListCheckOff",[]).controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyList = this;
		toBuyList.itemList = ShoppingListCheckOffService.getToBuyList();
		toBuyList.addToBrought = function (itemIndex) {
			var tempItem = toBuyList.itemList[itemIndex];
			ShoppingListCheckOffService.addToBrought(tempItem);
			ShoppingListCheckOffService.deleteFromToBuy(itemIndex);
		}
		
	} 



	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var	bbb = this;
		bbb.itemList = ShoppingListCheckOffService.getBroughtList();
	}


	
	function ShoppingListCheckOffService() {
		var service = this;
		var toBuyItems = [];
		var broughtItems = [];
		

		service.addToToBuy = function (itemName,itemQuantity) {
			var tempItem = new Item(itemName,itemQuantity);
			toBuyItems.push(tempItem);
		}

		service.getToBuyList = function(){
			return toBuyItems;

		}
		service.getBroughtList = function () {
			console.log(broughtItems.length);
			return broughtItems;
		}

		service.addToBrought = function (item) {
			broughtItems.push(item);
		}

		service.deleteFromToBuy = function (itemIndex) {
			toBuyItems.splice(itemIndex,1);
		}

		// push a set of items into toBuy array
		for(var i=0;i<7;i++){
		 	var tempItemName = "Cookie type " + String.fromCharCode(i+65);
		 	var tempItemQuantity = (i+1).toString() + " bags";
		 	service.addToToBuy(tempItemName,tempItemQuantity);
		 }

		// debug only 
		// console.log(toBuyItems);

	}

	function Item(itemName,itemQuantity) {
		this.itemName = itemName;
		this.itemQuantity = itemQuantity;
	}



})();