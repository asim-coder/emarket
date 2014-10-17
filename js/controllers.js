angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.search = function(){
		window.location = "#/tab/cart";
	}
})

.controller('QueryResultsCtrl', function($scope, $stateParams, Emarket) {
  $scope.query = $stateParams.query;
  $scope.items = Emarket.all();
  $scope.orderProp = "name";
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
})

.controller('CartCtrl', function($scope, Emarket) {
  $scope.items = Emarket.all();
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Emarket) {
  $scope.item = Emarket.get($stateParams.itemId);
  $scope.itemcarted = function () {
  	$scope.carted = 1;
  	alert("carted" + $scope.carted);
  };
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
})

.controller('CartDetailCtrl', function($scope, $stateParams, Emarket) {
  $scope.item = Emarket.get($stateParams.itemId);
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;

})

.controller('AccountCtrl', function($scope) {
});
