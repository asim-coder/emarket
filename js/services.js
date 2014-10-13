angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Basmati Rice' ,qty: 2, weight: '3kg', pic : 'a.png'},
    { id: 1, name: 'Sugar' ,qty: 1, weight: '1kg', pic : 'a.png'},
    { id: 2, name: 'Butter',qty: 10, weight: '50g', pic : 'a.png' },
    { id: 3, name: 'Oil',qty: 2, weight: '1l' , pic : 'a.png'}
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
