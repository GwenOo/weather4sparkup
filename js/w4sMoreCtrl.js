var w4sController = angular.module('w4sMoreCtrl',['ngtweet']);

w4sController.controller('W4sMoreCtrl',['sharedProperties',function(sharedProperties){
	var vm = this;
	console.log('hello');
	console.log(sharedProperties.getProperty())
	vm.weatherInfo = sharedProperties.getProperty();
	//vm.getparis = GetParis.list();
	//vm.city = weatherInfo.name;
	//console.log(vm.weatherInfo.name);

	vm.widgetid = {
    'Paris': '782417789470511104',
    'Bordeaux': '782418723051343872'
	};
	console.log(vm.weatherInfo.name);
	console.log(vm.widgetid.Paris);
	console.log(vm.widgetid['Paris']);
	vm.currentwid = vm.widgetid[vm.weatherInfo.name];
	console.log(vm.currentwid);

}])
