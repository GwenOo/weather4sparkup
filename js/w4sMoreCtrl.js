var w4sController = angular.module('w4sMoreCtrl',[]);

w4sController.controller('W4sMoreCtrl',['sharedProperties','$window','$scope',function(sharedProperties,$window,$scope){
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


	vm.currentwid = vm.widgetid[vm.weatherInfo.name];
	console.log(vm.currentwid);

	 // var svg = angular.element('<a class="twitter-timeline"  href="https://twitter.com/search?q=%23Meteo%20Paris" data-widget-id="782417789470511104">Tweets sur #Meteo Paris</a>');
 	//  iElement.append(svg)
	// console.log(vm.currentwid);
	// vm.$watch('widgetId', function() {
	// vm.element.find('.ng-twt-widget-preview').remove();
 //    vm.element.find('iframe').remove();
 //    vm.element.append('<a class="twitter-timeline ng-twt-widget-preview" href="#" data-widget-id="' + 782418723051343872 + '"></a>');
 //    twttr.widgets.load();
	
	// });
				// console.log($window._twttr);

	
}]);

w4sController.directive('twitterdiv',function(){
	console.log('inside directive');
    return {
    	restrict: 'E',
    	
    	template : '<a class="twitter-timeline"  href="https://twitter.com/search?q=%23Meteo%20Paris" data-widget-id="{{currentwid}}">Tweets sur #Meteo Paris</a>',
        scope: {currentwid:'@currentwid'},
        link: function (scope, Element, Attrs) {
        	vm.currentwid = Attrs.currentwid
        	// scope.$watch('twitterdiv',function(value)
        	// {
	            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	            // var dirtweet = angular.element('<a class="twitter-timeline"  href="https://twitter.com/search?q=%23Meteo%20Paris" data-widget-id={{currentwid}}>Tweets sur #Meteo Paris</a>');
	            // Element.append(dirtweet);
	            twttr.ready(function (twttr) {
				 	twttr.widgets.load()
				});
        	// });
        }
    
    }
});
