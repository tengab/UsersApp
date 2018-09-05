class GetForeignFriendsService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.foreignFriendsList = [];
        this.twins = [];
    }

    getForeignFriends(nationality, fetchedUser) {

        this.$http.get(`https://randomuser.me/api/?results=30&nat=${nationality}`)
            .then((response) => {
                this.foreignFriendsList.push({
                    groupName: nationality,
                    friends: response.data.results.map(user => this.User.mapUser(user))
                });
            })
            .then(() => {
                this.connectedForeignFriends = this.foreignFriendsList
                    .reduce((r, el) => (r.concat(el.friends)), [])
                    .map(el => (el));

                this.twins = _.filter(this.connectedForeignFriends, user => (user.picture.thumbnail === fetchedUser.picture.thumbnail));
            });
    }

}

GetForeignFriendsService.$inject = ['$http', 'User'];

usersApp.service('GetForeignFriendsService', GetForeignFriendsService); // eslint-disable-line no-undef