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
})

.controller('CartCtrl', function($scope, Emarket) {
  $scope.items = Emarket.all();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Emarket) {
  $scope.item = Emarket.get($stateParams.itemId);
})

.controller('CartDetailCtrl', function($scope, $stateParams, Emarket) {
  $scope.item = Emarket.get($stateParams.itemId);
})

.controller('AccountCtrl', function($scope) {
});
