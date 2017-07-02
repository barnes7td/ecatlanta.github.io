(function() {
     function config($locationProvider, $stateProvider) {
        //  $locationProvider
        //      .html5Mode({
        //          enabled: true,
        //          requireBase: false
        //       });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
             .state('schedule', {
                 url: '/schedule',
                 controller: 'ScheduleCtrl as schedule',
                 templateUrl: '/templates/schedule.html'
             })
             .state('admin', {
                 url: '/admin',
                 controller: 'AdminCtrl as admin',
                 templateUrl: '/templates/admin.html'
             });
     }
     
     angular
         .module('ECAtlSite', ['ui.router', 'firebase'])
         .config(config);
 })();
