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
      data: newItem 
    })
  }
  self.editItem = (item, newItem) => {
    return $http({
      method: "PUT",
      url: `/cartitems/${item.id}`,
      data: newItem
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
