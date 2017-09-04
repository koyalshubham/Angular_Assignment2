(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){

		var controller = this;
		controller.items=ShoppingListCheckOffService.itemTobuy();

		controller.buyItem = function(index){
			ShoppingListCheckOffService.boughtItem(index);
		}


	}


	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var controller = this;
		controller.boughtItems=ShoppingListCheckOffService.itemsBought();
	}

	function ShoppingListCheckOffService(){
		var service = this;

		var itemsToBuy=[{ name: "Cookies", quantity: 10 },
				{ name: "Chocolates", quantity: 5 },
				{ name: "M&M", quantity: 15 },
				{ name: "Juice", quantity: 5 },
				{ name: "Chips", quantity: 20 }];

		service.itemTobuy = function(){
				return itemsToBuy;
		}

		var bought = [];

		service.itemsBought = function(){
			return bought;
		}

		service.boughtItem = function(index){
			console.log("in boughtItem");
			bought.push(itemsToBuy[index]);
			itemsToBuy.splice(index,1);
		}
	}
})();