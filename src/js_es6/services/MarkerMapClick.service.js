class MarkerMapClickService {
    constructor() {
        this.markerIndexOfClickedFriend = null;
    }

    marker(index) {

        this.markerIndexOfClickedFriend = index;
    }

}

MarkerMapClickService.$inject = [];

usersApp.service('MarkerMapClickService', MarkerMapClickService); // eslint-disable-line no-undef