var w4sApp = angular.module('w4sApp', [
	'ngRoute',
	'w4sMapCtrl',
	'w4sMoreCtrl',
	'w4sServices'
]);

w4sApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/map',{
			templateUrl: 'partials/map.html',
			controller: 'W4sMapCtrl',
			controllerAs: 'mapCtrl'
		})
		.when('/more',{
			templateUrl: 'partials/more.html',
			controller: 'W4sMoreCtrl',
			controllerAs: 'moreCtrl'
		})
		.otherwise({
			redirectTo:'/map'
		})
	}]);