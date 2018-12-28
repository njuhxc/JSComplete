var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.$$;//expected:lastName
    }
}
myObject.fullName(); 
