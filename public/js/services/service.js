angular.module('FenrirService', [])
.factory('MainService', ['$http',function($http) {
	return {
		getTrips:function(body){
	        return $http.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDbAmS7MB_5SvcJgaIrcYndOgM9kQPpZRY', body);
	  },
		getDummy:function(){
			return $http.get('dummy.json');
		}
	}
}])
