class FriendsSearchService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.friendsList = [];
    }

    getFriends(nationality) {

        this.$http.get(`https://randomuser.me/api/?results=6&nat=${nationality}`)
            .then((response) => {
                this.friendsList = response.data.results.map(user => this.User.mapUser(user));
            });
    }

}

FriendsSearchService.$inject = ['$http', 'User'];

usersApp.service('FriendsSearchService', FriendsSearchService); // eslint-disable-line no-undef