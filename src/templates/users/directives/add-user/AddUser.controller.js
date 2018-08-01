class AddUserController {
    constructor(APIService, User) {
        this.APIService = APIService;
        this.User = User;
        this.newUser = this.User.create();
        // this.newUser = this.User.createUser();
    }

    userAddForm() {
        this.newUser.name.first = (this.newUser.name.first != null) ? this.newUser.name.first.capitalize() : this.newUser.name.first;
        this.newUser.name.last = (this.newUser.name.last != null) ? this.newUser.name.last.capitalize() : this.newUser.name.last;

        this.APIService.addUser(this.newUser);
        this.newUser = this.User.create();
    }
}

AddUserController.$inject = ['APIService', 'User'];

usersApp.controller('AddUserController', AddUserController);  // eslint-disable-line no-undef