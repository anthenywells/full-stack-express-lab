"use strict";

function CartService($http) {
  const self = this;
  self.getAllItems = () => {
    return $http({
      method: "GET",
      url:"/cartitems"
    });
  };
  self.addItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/cartitems",
      data: { ...newItem, price: Number(newItem.price), quantity: Number(newItem.qty)}
    })
  }
  self.editQty = (item) => {
    return $http({
      method: "PUT",
      url: `/cartitems/${item.id}`,
      data: item
    })
  }
  self.deleteItem = (item) => {
    return $http({
      method: "DELETE",
      url: `/cartitems/${item.id}`
    })
}
}

angular.module("App").service("CartService", CartService)
