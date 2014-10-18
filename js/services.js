angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Emarket', ['$http',
  function($http) {
  // Might use a resource here that returns a JSON array
/*  var items = [];
  $http.get('http://asim.net16.net/index.html').
    success(function(data) {
      var res = data.substring(0, data.length - 154); 
      items = JSON.parse(res);
       alert(items[0].name); 
    }).
    error(function(status) {
      alert("ERROR" + status);
    });*/ 
  // Some fake testing data
   products = [
    { id: 0, name: 'Basmati Rice' ,price: 2, weight: '3kg', pic : 'a.png', desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, porro.'},
    { id: 1, name: 'Sugar' ,price: 1, weight: '1kg', pic : 'a.png', desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, porro.'},
    { id: 2, name: 'Butter',price: 10, weight: '50g', pic : 'a.png' , desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, porro.'},
    { id: 3, name: 'Oil',price: 2, weight: '1l' , pic : 'a.png', desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, porro.'}
  ];
/*
  items = $http.jsonp('https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')
            .success(function(data){
              var datagot = data;
              alert("OK" + datagot);})
            .error(function(data) { alert("errorerr");});*/
  // create store
  var myStore = new store();

  // create shopping cart
  var myCart = new shoppingCart("AngularStore");

  return {
    all: function() {
      return products;
    },
    get: function(itemId) {
      // Simple index lookup
      return products[itemId];
    },
    store: myStore,
    cart: myCart
  }
}]);
