const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.grouping', 'ngMap', 'ngMaterial', 'ngMessages']);

usersApp.config(['$stateProvider', function($stateProvider) {

    $stateProvider
        .state({
            name: 'users',
            url: '/',
            templateUrl: 'users/users.html'
        })
        .state({
            name: 'user-details',
            url: '/user-details/{id}',
            templateUrl: 'user-details/user-details.MAIN/user-details.html',
            controller: 'UserDetailsController',
            controllerAs: '$ctrl'
        });
}
]);