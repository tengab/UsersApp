usersApp.directive('grid', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'users/directives/grid/grid.html',
        controller: 'UsersGridController',
        controllerAs: '$ctrl',
        scope: true
    };
});