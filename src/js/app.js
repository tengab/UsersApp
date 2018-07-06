const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.grouping', 'ngMap']);

usersApp.config(['$stateProvider', function($stateProvider) {

    $stateProvider.state({
        name: 'users',
        url: '/',
        templateUrl: 'views/users.html',
        controller: 'usersController'
    })
        .state({
            name: 'user-details',
            url: '/user-details/:id',
            templateUrl: 'views/user-details.html',
            controller: 'userDetailsController'
        });
}
]);