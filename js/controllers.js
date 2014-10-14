angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.search = function(){
		window.location = "#/tab/cart";
	}
})

.controller('QueryResultsCtrl', function($scope, $stateParams, Friends) {
  $scope.query = $stateParams.query;
  $scope.items = Friends.all();
  $scope.orderProp = "name";
})

.controller('CartCtrl', function($scope, Friends) {
  $scope.items = Friends.all();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.item = Friends.get($stateParams.itemId);
})

.controller('CartDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.item = Friends.get($stateParams.itemId);
})

.controller('AccountCtrl', function($scope) {
});
