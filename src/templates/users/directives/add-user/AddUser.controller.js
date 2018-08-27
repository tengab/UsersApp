class AddUserController {
    constructor(UserService, CountriesService, AddUserService) {
        this.AddUserService = AddUserService;
        this.CountriesService = CountriesService;
        this.UserService = UserService;
        this.newUser = this.UserService.create();
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

        if (this.newUser.nat != null && this.newUser.nat !== 'OTHER') {
            this.newUser.natFullName = this.CountriesService.getCountryFullName(this.newUser.nat);
        } else if (this.newUser.nat === 'OTHER') {
            this.newUser.natFullName = this.newUser.natFullName.capitalize();
        }

        this.newUser.gender = this.setGender();
        // test
        if (this.newUser.name.title && this.newUser.name.first && this.newUser.name.last && this.newUser.age && this.newUser.email !== null && this.newUser.nat !== null) {
            this.AddUserService.addUser(this.newUser);
            this.newUser = this.UserService.create();
        } else {
            alert('Fulfill all required fields');
        }

    }
}

AddUserController.$inject = ['UserService', 'CountriesService', 'AddUserService'];

usersApp.controller('AddUserController', AddUserController);  // eslint-disable-line no-undef