const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.grouping', 'ngMap']);

usersApp.config(['$stateProvider', function($stateProvider) {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    $stateProvider
        .state({
            name: 'users',
            url: '/',
            templateUrl: 'views/users.html'
        })
        .state({
            name: 'user-details',
            url: '/user-details/{id}',
            templateUrl: '/views/user-details.html',
            controller: 'UserDetailsController',
            controllerAs: '$ctrl'
        });
}
]);