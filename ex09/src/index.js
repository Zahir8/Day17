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

function getUsers(){
    var output = "";

    for(let i=0; i<users.length; i++){
        console.log(users[i]);
    }
    console.log(output);
    return output;
}
function findUserById(id){
    try{
        var user = _.users(id);

        var iFindUser = user;

        return iFindUser;
    } catch (error) {
        return error.message;
    }
}

console.log(getUsers());
getUsers();
console.log(findUserById(users.firstName, users.gender));
findUserById(users);
module.exports = findUserById;