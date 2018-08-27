class FriendsSearchService {
    constructor($http, UserService) {
        this.$http = $http;
        this.UserService = UserService;
        this.friendsList = [];
        // this.areFriendsSearched = false;

    }

    getFriends(nationality) {

        this.$http.get(`https://randomuser.me/api/?results=6&nat=${nationality}`)
            .then((response) => {
                this.friendsList = response.data.results.map(user => this.UserService.mapUser(user));
            });
    }

}

FriendsSearchService.$inject = ['$http', 'UserService'];

usersApp.service('FriendsSearchService', FriendsSearchService); // eslint-disable-line no-undef