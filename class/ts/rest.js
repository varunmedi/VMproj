function getCustomerInfo(firstname, age) {
    var hobbies = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        hobbies[_i - 2] = arguments[_i];
    }
    console.log(firstname, age);
    console.log(hobbies);
}
getCustomerInfo('varun', 25);
getCustomerInfo('varun', 25, 'Cricket', 'Tv');
