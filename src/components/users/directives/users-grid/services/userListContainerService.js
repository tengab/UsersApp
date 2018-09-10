class UserListContainerService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.usersList = [];
    }

    getUsers() {
        return this.$http.get('https://randomuser.me/api/?results=7&seed=a')
            .then((response) => {
                this.usersList = response.data.results.map(user => this.User.mapUser(user));
            });
    }

    addUser(newUser) {
        this.usersList.push(newUser);
    }

    deleteUser(deletedUserId) {
        _.remove(this.usersList, user => (user.id === deletedUserId));
    }
}

UserListContainerService.$inject = ['$http', 'User'];

usersApp.service('UserListContainerService', UserListContainerService); // eslint-disable-line no-undef