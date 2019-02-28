"use strict";

const cartItems = {
  templateUrl: `./app/app.component.html`,
  controller: ["CartService", function(CartService){
    const vm = this;
    function handleResponse(response) {
      vm.cartList = response.data;}
    CartService.getAllItems().then(handleResponse);
    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then(handleResponse);
    }
    vm.increaseQty =function(item)  {
      item.qty++
      CartService.editQty(item).then(handleResponse);
    }
    vm.decrementQty = (item) => {
      item.qty--
      CartService.editQty(item).then(handleResponse);
    }
    vm.deleteItem = (item) => {
      CartService.deleteItem(item).then(handleResponse);
    }
  }]
}


angular.module("App").component("cartItems", cartItems)
