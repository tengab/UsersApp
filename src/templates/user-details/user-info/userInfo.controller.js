class UserInfoCtrl {
    constructor(FriendsSearch) {
        this.FriendsSearch = FriendsSearch;
    }

    searchForFriends() {
        this.FriendsSearch.getFriends(this.fetchedUser.nat);
        this.FriendsSearch.areFriendsSearched = true

    }

}

UserInfoCtrl.$inject = ['FriendsSearch'];
usersApp.controller('UserInfoCtrl', UserInfoCtrl);