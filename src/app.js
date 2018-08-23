const usersApp = angular.module('usersApp', ['ui.router', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.grouping', 'ngMap', 'ngMaterial', 'ngMessages']);

usersApp.config(['$stateProvider', function($stateProvider) {

    String.prototype.capitalize = function() {
        return this.toLowerCase().replace( /\b./g, firstLetter => (firstLetter.toUpperCase()));
    };

    $stateProvider
        .state({
            name: 'users',
            url: '/',
            templateUrl: 'users/users.html'
        })
        .state({
            name: 'user-details',
            url: '/user-details/{id}',
            templateUrl: 'user-details/user-details.html',
            controller: 'UserDetailsController',
            controllerAs: '$ctrl'
        });
}
]);