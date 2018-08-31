class UserInfoCtrl {
    constructor(FriendsSearchService) {
        this.FriendsSearchService = FriendsSearchService;

        this.isInfoHidden = true;
    }

    searchForFriends() {
        this.FriendsSearchService.getFriends(this.fetchedUser.nat);
        this.FriendsSearchService.areFriendsSearched = true;
    }
}

UserInfoCtrl.$inject = ['FriendsSearchService'];

usersApp.controller('UserInfoCtrl', UserInfoCtrl); // eslint-disable-line no-undef