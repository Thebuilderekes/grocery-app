let scrimbaUsers = {
	0: "example0@mail.com",
	1: "example1@mail.com",
	2: "example2@mail.com",
};

let scrimbaUsersEmails = Object.values(scrimbaUsers);

console.log(scrimbaUsersEmails);

let scrimbaUsersIDs = Object.keys(scrimbaUsers);

console.log(scrimbaUsersIDs);

let scrimbaUsersEntries = Object.entries(scrimbaUsers);

console.log(scrimbaUsersEntries);
