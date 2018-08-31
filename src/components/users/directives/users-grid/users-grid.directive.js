usersApp.directive('usersGrid', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'users/directives/users-grid/users-grid.html',
        controller: 'UsersGridController',
        controllerAs: '$ctrl',
        scope: {}
    };
});