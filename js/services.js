var w4sServices = angular.module('w4sServices',['ngResource']);

var apiUrl = 'http://api.openweathermap.org/data/2.5/';
var apiId = '2de8ade46abed9009d50da420673f7dd';

w4sServices.factory('GetParis',function($http){
	return {
    list: function(callback){
      $http.get(apiUrl+'group?id=6455259,6455058,6454573,6448047,6618424,6454414,6455273,6456451,6454251,6432801,6456407,6453634,6454307,6441375,6434483,6454060,6453767,6451740,6453974,6447142&units=metric&lang=fr&appid='+apiId).success(callback);
    }
	}
});

w4sServices.service('sharedProperties',function(){
	var property;
    return {
        getProperty: function () {
            return property;
        },
        setProperty: function(value) {
            property = value;
        }
    };
});
