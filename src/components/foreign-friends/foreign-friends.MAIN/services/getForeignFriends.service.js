class GetForeignFriendsService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
    }

    getForeignFriends(countryCode, fetchedUser) {

        this.$http.get(`https://randomuser.me/api/?results=30&nat=${countryCode}`)
            .then((response) => {

                const foreignFriendsByCountry = response.data.results.map(user => this.User.mapUser(user));

                fetchedUser.friends.foreignFriends.push({
                    groupName: countryCode,
                    friends: foreignFriendsByCountry
                });

                const twins = _.filter(foreignFriendsByCountry, user => (user.picture.thumbnail === fetchedUser.picture.thumbnail));

                if (twins.length) {
                    twins.map(el => (el.friends.isTwin = true));
                    fetchedUser.friends.twins.push(...twins);
                }
            });
    }

}

GetForeignFriendsService.$inject = ['$http', 'User'];

usersApp.service('GetForeignFriendsService', GetForeignFriendsService); // eslint-disable-line no-undef