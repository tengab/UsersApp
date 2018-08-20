class FriendsSearchService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.friendsList = [];
        this.markerIndexOfClickedFriend = null;
        this.areFriendsSearched = false;

    }

    getFriends(nationality) {

        this.$http.get(`https://randomuser.me/api/?results=6&nat=${nationality}`)
            .then((response) => {
                this.friendsList = response.data.results.map(user => this.User.mapUser(user));
            });
    }

    marker(index) {

        this.markerIndexOfClickedFriend = index;
    }

}

FriendsSearchService.$inject = ['$http', 'User'];

usersApp.service('FriendsSearch', FriendsSearchService); // eslint-disable-line no-undef