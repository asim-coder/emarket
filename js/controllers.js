angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.search = function(){
		window.location = "#/tab/cart";
	}
})

.controller('QueryResultsCtrl', function($scope, $stateParams, Emarket) {
  $scope.query = $stateParams.query;
  $scope.products = Emarket.all();
  $scope.orderProp = "name";
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
  $scope.nci = $scope.cart.getTotalCount();
})

.controller('CartCtrl', function($scope, Emarket) {
//  $scope.items = Emarket.all();
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
  $scope.nci = $scope.cart.getTotalCount();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Emarket) {
  $scope.product = Emarket.get($stateParams.itemId);
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;
})

.controller('CartDetailCtrl', function($scope, $stateParams, Emarket) {
//  $scope.item = Emarket.get($stateParams.itemId);
  $scope.store = Emarket.store;
  $scope.cart = Emarket.cart;

})

.controller('AccountCtrl', function($scope) {
});
