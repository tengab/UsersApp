class APIService {
    constructor($http, User) {
        this.$http = $http;
        this.User = User;
        this.usersList = [];
        this.getUsers();
    }

    getUsers() {
        if (this.usersList.length === 0) {
            return this.$http.get('https://randomuser.me/api/?results=7&nat=US&seed=e')
                .then((response) => {
                    this.usersList = response.data.results.map(user => this.User.mapUser(user));
                });
        }
    }

    addUser(newUser) {
        this.usersList.push(newUser);

    }

    deleteUser(deletedUserId) {
        for (let i = 0; i < this.usersList.length; i++) {
            if (deletedUserId === this.usersList[i].id) {
                this.usersList.splice(i, 1);
            }
        }
    }
}

APIService.$inject = ['$http', 'User'];

usersApp.service('APIService', APIService); // eslint-disable-line no-undef