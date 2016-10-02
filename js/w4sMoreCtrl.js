var w4sController = angular.module('w4sMoreCtrl',['ngTwitter']);

w4sController.controller('W4sMoreCtrl',['sharedProperties',function(sharedProperties){
	var vm = this;
	console.log('hello');
	console.log(sharedProperties.getProperty())
	vm.weatherInfo = sharedProperties.getProperty();
	//vm.getparis = GetParis.list();
	vm.hashtag = 'football';

}])
