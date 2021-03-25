const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {

    var output = "";

    for(let i=0; i<users.length; i++){
        console.log(users[i]);
    }
    console.log(output);
    return output;
};

function findUser(lastName, gender) {
    try{
        var user = _.users(lastName, gender);

        var iFindUser = {firstName} + {lastName} + "is" + {age} + ", " + {gender};

        console.log(iFindUser);

        return iFindUser;
    } catch (error) {
        error = "Cannot read property 'firstName' of undefined";
        console.log(error.message);
        return error.message;
    }
}
console.log(getUsers());
getUsers();
console.log(findUser(users.firstName, users.gender));
findUser(users);
module.exports = findUser;