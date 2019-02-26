"use strict";

const cartItems = {
  template: `

  <p>Cart Items</p>

  <form ng-submit="$ctrl.addItem(newItem);" class="newItem">
    <input type="number" ng-model="newItem.id" ng-required="true" placeholder="ID">
    <input type="text" ng-model="newItem.product" ng-required="true" placeholder="Product">
    <input type="number" ng-model="newItem.price" ng-required="true" placeholder="Price">
    <input type="number" ng-model="newItem.quantity" ng-required="true" placeholder="Quantity">
    <button>Add Item</button>
  </form> 

  <p ng-repeat="item in $ctrl.cartList">
  <span>ID:</span> {{item.id}}
  <span>Product:</span> {{item.product}} 
  <span>Price:</span> {{item.price | currency}}  
  <span>Quantity:</span> {{item.quantity}}
  <button ng-click="$ctrl.editItem(item, newItem)">
  <i class="fas fa-edit"></i>
  </button>
  <button ng-click="$ctrl.deleteItem(item)">
    <i class="fas fa-trash-alt"></i>
  </button>
  </p>
  `,
  controller: ["CartService", function(CartService){
    const vm = this;
    function handleResponse(response) {
      vm.cartList = response.data;}
    CartService.getAllItems().then(handleResponse);
    vm.addItem = function(newItem) {
      CartService.addItem(newItem).then(handleResponse);
    }
    vm.editItem = function(item, newItem) {
      CartService.editItem(item, newItem).then(handleResponse);
    }
    vm.deleteItem = function(item) {
      CartService.deleteItem(item).then(handleResponse);
    }
  }]
}


angular.module("App").component("cartItems", cartItems)
