usersApp.directive('userInfo', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'user-details/user-info/user-info.html',
        controller: 'UserInfoCtrl',
        controllerAs: '$ctrl',
        scope: {},
        bindToController: {
            fetchedUser: '='
        }
    };
});