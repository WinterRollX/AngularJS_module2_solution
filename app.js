(function () {
	'use strict';
	angular.module("ShoppingListCheckOff",[]).controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyList = this;
		toBuyList.itemName = ShoppingListCheckOffService.itemName;
		
	}





	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var	boughtList = this;

	}


	
	function ShoppingListCheckOffService() {
		var service = this;
		


	}



})();