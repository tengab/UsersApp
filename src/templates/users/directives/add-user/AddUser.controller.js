class AddUserController {
    constructor(APIService, User) {
        this.APIService = APIService;
        this.User = User;
        this.newUser = this.User.create();
        // this.newUser = this.User.createUser();
    }

    setGender() {
        switch (this.newUser.name.title) {
            case 'Mr':
            case 'Mister':
                return this.newUser.gender = 'male';
            case 'Mrs':
            case 'Miss':
                return this.newUser.gender = 'female';
            default:
                return this.newUser.gender = null;
        }
    }

    userAddForm() {
        this.newUser.name.first = (this.newUser.name.first != null) ? this.newUser.name.first.capitalize() : this.newUser.name.first;
        this.newUser.name.last = (this.newUser.name.last != null) ? this.newUser.name.last.capitalize() : this.newUser.name.last;
        this.newUser.gender = this.setGender();

        if (this.newUser.name.title && this.newUser.name.first && this.newUser.name.last && this.newUser.age && this.newUser.email !== null) {
            this.APIService.addUser(this.newUser);
            this.newUser = this.User.create();
        } else {
            alert('Fulfill all required fields');
        }
    }
}

AddUserController.$inject = ['APIService', 'User'];

usersApp.controller('AddUserController', AddUserController);  // eslint-disable-line no-undef