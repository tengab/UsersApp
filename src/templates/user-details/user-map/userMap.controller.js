class UserMapCtrl {
    constructor(FriendsSearch) {
        this.FriendsSearch = FriendsSearch;
        this.touchMarker = this.touchMarker.bind(this);
    }

    touchMarker(event, index) {
        this.FriendsSearch.markerIndexOfClickedFriend = index;
    }

}

UserMapCtrl.$inject = ['FriendsSearch'];

usersApp.controller('UserMapCtrl', UserMapCtrl); // eslint-disable-line no-undef