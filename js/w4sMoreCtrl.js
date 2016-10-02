var w4sController = angular.module('w4sMoreCtrl',[]);

w4sController.controller('W4sMoreCtrl',['sharedProperties','$window','$scope',function(sharedProperties,$window,$scope){
	var vm = this;
	vm.weatherInfo = sharedProperties.getProperty();

	vm.widgetid = {
    'Paris': '782417789470511104',
    'Bordeaux': '782418723051343872'
	};

	vm.currentwid = vm.widgetid[vm.weatherInfo.name];

}]);

w4sController.directive('twitterdiv',function(){
    return {
    	restrict: 'E',
    	template : '<a class="twitter-timeline"  href="https://twitter.com/search?q=%23Meteo%20Paris" data-widget-id="{{currentwid}}">Tweets sur #Meteo Paris</a>',
        scope: {currentwid:'@currentwid'},
        link: function (scope, Element, Attrs) {
        	vm.currentwid = Attrs.currentwid
	            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	            twttr.ready(function (twttr) {
				 	twttr.widgets.load()
				});
        }
    
    }
});
