class UserInfoCtrl {
    constructor(FriendsSearchService) {
        this.FriendsSearchService = FriendsSearchService;
    }

    searchForFriends() {
        this.FriendsSearchService.getFriends(this.fetchedUser.nat);
        this.FriendsSearchService.areFriendsSearched = true;
    }

}

UserInfoCtrl.$inject = ['FriendsSearchService'];
usersApp.controller('UserInfoCtrl', UserInfoCtrl); // eslint-disable-line no-undef