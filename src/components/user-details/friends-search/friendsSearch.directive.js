usersApp.directive('friendsSearch', function() { // eslint-disable-line prefer-arrow-callback, no-undef
    return {
        restrict: 'E',
        templateUrl: 'user-details/friends-search/friends-search.html',
        controller: 'FriendsSearchCtrl',
        controllerAs: '$ctrl',
        scope: {},
        bindToController: {
            fetchedUser: '='
        }
    };
});
