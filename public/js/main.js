angular.module('FenrirApp', ['FenrirCtrl', 'FenrirService', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=> {
   $stateProvider.state('list',{
      url: '/list',
      templateUrl: 'views/trips-list.html'
   })
   .state('detail',{
      url: '/detail/:tripID',
      templateUrl: 'views/trip-detail.html'
   })
   $urlRouterProvider.otherwise('/list');
  }]);
