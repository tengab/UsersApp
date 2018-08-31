usersApp.directive('addUser', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'users/directives/add-user/add-user.html',
        controller: 'AddUserController',
        controllerAs: '$ctrl',
        scope: {}
    };
});