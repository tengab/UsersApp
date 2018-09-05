class AddUserController {
    constructor(User, Countries, UserListContainerService) {
        this.User = User;
        this.Countries = Countries;
        this.UserListContainerService = UserListContainerService;

        this.newUser = this.User.create();
        this.isAddUserHidden = true;
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

    setCountryFullName(countryCode) {
        return this.Countries.getCountryFullName(countryCode);
    }

    userAddForm() {
        this.newUser.name.first = (this.newUser.name.first != null) ? _.startCase(this.newUser.name.first) : this.newUser.name.first;

        this.newUser.name.last = (this.newUser.name.last != null) ? _.startCase(this.newUser.name.last) : this.newUser.name.last;

        if (this.newUser.nat === 'OTHER') {
            this.newUser.natFullName = _.startCase(this.newUser.natFullName);
        } else if (this.newUser.nat != null) {
            this.newUser.natFullName = this.Countries.getCountryFullName(this.newUser.nat);
        }

        this.newUser.gender = this.setGender();

        if (this.newUser.name.title &&
            this.newUser.name.first &&
            this.newUser.name.last &&
            this.newUser.age &&
            this.newUser.email &&
            this.newUser.nat &&
            this.newUser.natFullName !== null) {
            this.UserListContainerService.addUser(this.newUser);
            this.newUser = this.User.create();
        } else {
            alert('Fulfill all required fields');
        }

    }
}

AddUserController.$inject = ['User', 'Countries', 'UserListContainerService'];

usersApp.controller('AddUserController', AddUserController);  // eslint-disable-line no-undef