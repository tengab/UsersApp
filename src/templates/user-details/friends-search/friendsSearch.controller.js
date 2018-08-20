class FriendsSearchCtrl {
    constructor(FriendsSearch) {
        this.FriendsSearch = FriendsSearch;
        this.chosenFriend = null;
        this.FriendsSearch.marker(null);
        this.FriendsSearch.areFriendsSearched = false;
    }

    clickedFriend(index) {
        this.chosenFriend = index;
        this.FriendsSearch.marker(index);
    }

    selectTab(index) {

        this.FriendsSearch.marker(index);
    }


}

FriendsSearchCtrl.$inject = ['FriendsSearch'];

usersApp.controller('FriendsSearchCtrl', FriendsSearchCtrl); // eslint-disable-line no-undef