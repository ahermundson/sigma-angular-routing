var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/philby' ,{
      templateUrl: '/views/templates/philby.html',
      controller: 'PhilbyController',
      controllerAs: 'philby'
    })
    .when('/lawrence' ,{
      templateUrl: '/views/templates/lawrence.html',
      controller: 'LawrenceController',
      controllerAs: 'lawrence'
    })
    .when('/marshall' ,{
      templateUrl: '/views/templates/marshall.html',
      controller: 'MarshallController',
      controllerAs: 'marshall'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";
});

app.controller('PhilbyController', function() {
  console.log('philby controller running');
  var self = this;
  this.message = "Philby controller is running.";
});

app.controller('LawrenceController', function() {
  console.log('lawrence controller running');
  var self = this;
  this.message = "Lawrence controller is running.";
});

app.controller('MarshallController', function() {
  console.log('marshall controller running');
  var self = this;
  this.message = "Marshall controller is running.";
});
