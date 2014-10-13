angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.search = function(){
	  //window.location = "#/tab/cart";
	   alert($scope.query);
	   return $scope.query;
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.itemId);
})

.controller('AccountCtrl', function($scope) {
});
