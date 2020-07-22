 var getUserInput = function (name,role){

switch(role){

case "Admin":
    return ` ${name}, Access to all the features`;
    break;

    case "Subadmin":
    return ` ${name}, Access to all the courses to delete and create`;
    break;

    case "Testprep":
    return ` ${name}, prepare the test`;
    break;

    case "User":
    return ` ${name}, Access to the content resume`;
    break;

    default:
        return ` trial user`;
        break;

}

 }
 var get = getUserInput("Naeem","User");
 console.log(get);

 console.log(getUserInput("Naeem","User"));