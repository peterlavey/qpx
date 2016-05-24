angular.module('FenrirCtrl', [])
.controller('MainCtrl', ['$scope', 'MainService', ($scope, MainService)=> {
	$scope.logo="img/logo.png";
	$scope.name="Fenrir";
	$scope.filter;
	$scope.order;
	$scope.loading=false;
	$scope.orderBy=(order)=>$scope.order=order;
	$scope.qwe={
	  "request": {
	    "slice": [
	      {
	        "origin": "BOS",
	        "destination": "LAX",
	        "date": "2016-09-13"
	      }
	    ],
	    "passengers": {
	      "adultCount": 1,
	      "infantInLapCount": 0,
	      "infantInSeatCount": 0,
	      "childCount": 0,
	      "seniorCount": 0
	    },
	    "solutions": 20,
	    "refundable": false
	  }
	};
	$scope.slice={
		'origin':"",
		'destination':"".toUpperCase(),
		'date':""
	};
	$scope.req={
		'request':{
			'slice':[],
			'passengers':{
				'adultCount':1,
				'infantInLapCount':0,
				'infantInSeatCount':0,
				'childCount':0,
				'seniorCount':0
			},
			'solutions':20,
			'refundable':false
		}
	};
	$scope.trips;
	$scope.trip;

	$scope.test=()=>{
		$scope.slice.origin=$scope.slice.origin.toUpperCase();
		$scope.slice.destination=$scope.slice.destination.toUpperCase();
		$scope.slice.date=$('#datetimepicker1').data('date');
		$scope.req.request.slice.push($scope.slice);
		console.info($scope.req);
		console.error($scope.qwe);
	};

	$scope.getTrips=()=>{
		$scope.loading=true;
		$scope.slice.origin=$scope.slice.origin.toUpperCase();
		$scope.slice.destination=$scope.slice.destination.toUpperCase();
		$scope.slice.date=$('#datetimepicker1').data('date');
		$scope.req.request.slice.push($scope.slice);

		MainService.getTrips($scope.req).success((data)=>{
			$scope.loading=false;
			$scope.trips=data;
			console.log(data);
			console.log(data.toString());
		}).error((error)=>{
			console.error(error);
		});
	};
	$scope.getDummy=()=>{
		$scope.loading=true;
		MainService.getDummy().success((data)=>{
			$scope.loading=false;
			$scope.trips=data;
			console.info(data);
			console.log("Return: "+$scope.getAircraft("320"));
		});
	};
	//$scope.getDummy();
	//$scope.getTrips($scope.req);
	$scope.getAircraft=(code)=>	_.filter($scope.trips.trips.data.aircraft, (data)=>data.code==code);
	$scope.getAirport=(code)=>	_.filter($scope.trips.trips.data.airport, (data)=>data.code==code);
	$scope.getCarrier=(code)=>	_.filter($scope.trips.trips.data.carrier, (data)=>data.code==code);
	$scope.getCity=(code)=>	_.filter($scope.trips.trips.data.city, (data)=>data.code==code);
	$scope.getTax=(id)=>	_.filter($scope.trips.trips.data.tax, (data)=>data.id==id);
}])
.controller('DetailCtrl', ['$scope', '$stateParams', ($scope, $stateParams)=> {
	$scope.test="detail!!!";
	$scope.trip=$scope.trips.trips.tripOption[$stateParams.tripID];
}]);
