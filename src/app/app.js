angular.module( 'ngBoilerplate', [
  'templates',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

