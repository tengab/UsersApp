class UserMapCtrl {
    constructor(MarkerMapClickService, FriendsSearchService) {
        this.FriendsSearchService = FriendsSearchService;
        this.MarkerMapClickService = MarkerMapClickService;
        this.touchMarker = this.touchMarker.bind(this);
    }

    touchMarker(event, index) {
        this.MarkerMapClickService.markerIndexOfClickedFriend = index;
    }

}

UserMapCtrl.$inject = ['MarkerMapClickService', 'FriendsSearchService'];

usersApp.controller('UserMapCtrl', UserMapCtrl); // eslint-disable-line no-undef