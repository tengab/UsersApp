usersApp.directive('userInfo', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        templateUrl: 'directives/user-info.html'
    };
});

usersApp.directive('userMap', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        templateUrl: 'directives/user-map.html'
    };
});

usersApp.directive('addUser', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        templateUrl: 'directives/add-user.html'
    };
});

usersApp.directive('addedUserInfo', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'AEC',
        templateUrl: 'directives/added-user-info.html'
    };
});