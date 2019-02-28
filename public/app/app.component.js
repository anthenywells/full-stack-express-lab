"use strict";

const cartItems = {
  templateUrl: `/app.component.html`,
  controller: ["CartService", function(CartService){
    const vm = this;
    function handleResponse(response) {
      vm.cartList = response.data;}
    CartService.getAllItems().then(handleResponse);
    vm.addItem = (newItem) => {
      newItem.id = vm.cartList.length;
      CartService.addItem(newItem).then(handleResponse);
    }
    vm.editItem = (item, newItem) => {
      CartService.editItem(item, newItem).then(handleResponse);
    }
    vm.deleteItem = (item) => {
      CartService.deleteItem(item).then(handleResponse);
    }
  }]
}


angular.module("App").component("cartItems", cartItems)
