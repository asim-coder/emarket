angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
	$scope.search = function(query){
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http.post('http://localhost/emarketserver/db.php', "query=" + query).
      success(function(data, status, headers, config) {
        alert("ok" + status + data);
      }).
      error(function(data, status, headers, config) {
        alert("error" + status);
      });
      window.location = "#/tab/dash/" + query;
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
})

.controller('FetchController', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.url = 'http-hello.html';

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        success(function(data, status) {
          $scope.status = status;
          $scope.data = data;
        }).
        error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
      });
    };

    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };
  }]);