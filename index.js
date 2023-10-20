// The user object
function User(name, color) {
    this.name = name;
    this.color = color;
}

function compareFn (a, b) {
    if (a.name == b.name)
        return a.color > b.color;
    return a.name > b.name;
}

// Create a user list
let users = new Array();

//Function for the create user button.
function createUser() {
    let name = prompt("Enter your full name:");
    let color = prompt("Enter the name of your favorite color:");

    users.push(new User(name, color));
    users.sort(compareFn);

    document.getElementById("users-output").innerHTML = JSON.stringify(users, null, 2);
}

function searchUser(target) {
    let usersFound = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === target)
            usersFound.push(users[i]);
    }

    return usersFound;
}

// Function for the search button
function searchRequest() {
    const searchInput = document.getElementById("search-name").value;
    const foundUsers = searchUser(searchInput);

    if (foundUsers.length > 0) {
        document.getElementById("users-output").innerHTML = `Users Found: ${JSON.stringify(foundUsers, null, 2)}`;
    } else {
        document.getElementById("users-output").innerHTML = "User not found.";
    }
}


// Function for the clear users betton
function clearUsersRequest() {
    users = [];
    clearOutputRequest();
}

// Say Something function
function saySomething(something) {
    document.getElementById("users-output").innerHTML += something + "<br>";
}

function callIt(callbackFn, number) {
    for (let i = 0; i < number; i++) {
        callbackFn();
    }
}

// Function for the saySomething button
function saySomethingRequest() {
    let something = document.getElementById("something-text").value;
    let number = parseInt(document.getElementById("call-count").value);
    callIt(() => {
        saySomething(something)
    }, number);
}

// Function for the clear button
function clearOutputRequest(){
    document.getElementById("users-output").innerHTML = "";
}


