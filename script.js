// Create object of Phone Numbers

// const person1 = {
//     name: "Jane Doe",
//     phone: "204-495-3532",
// };

// const person2 = {
//     name: "Eli Parks",
//     phone: "305-320-0984",
// };

// const person3 = {
//     name: "Trish Jones",
//     phone: "503-596-0408",
// };

// console.log(person1);

// Create map of Phone Number Book
const phoneNumberBook = new Map([
    ["Jane Doe", "204-495-3532"],
    ["Eli Parks", "305-320-0984"],
    ["Trish Jones", "503-596-0408"],
]);

// const phoneNumberBook = [];

console.log(phoneNumberBook);
// Fixed value
// phoneNumberBook.set("Jane Doe", "391-938-9009");
// console.log(phoneNumberBook);
// phoneNumberBook.delete("Jane Doe");
// console.log(phoneNumberBook);
// console.log(phoneNumberBook.get("Trish Jones"));
// console.log(phoneNumberBook.entries());

// Main functionalities
// set function adds AND updates
function addContactInfo(name, phoneNumber) {
    phoneNumberBook.set(name, phoneNumber);
}

// Has and set is for Map 
function updateContactInfo(name, phoneNumber) {
    if (phoneNumberBook.has(name)) {
        phoneNumberBook.set(name, phoneNumber);
    }
}

// Give default values to parameters
// Can delete either with name or phone number
// later - Object Oriented Programming in Javascript
// Key: name, Value: Phone number
function deleteContactInfo({name = "", phoneNumber = ""}) {
    if (phoneNumberBook.has(name)) {
        phoneNumberBook.delete(name);
        // Terminates the function at the below point
        return;
    }
    // ONLY if name was not available
    // Each item in the map array represents an entry
    const phoneBookEntries = phoneNumberBook.entries(); // [ [name1, phoneNumber1],  [name2, phoneNumber2], .... ]

    // Can delete from the map only using KEY
    for (const entry of phoneBookEntries) {
        if (entry[1] === phoneNumber) {
            phoneNumberBook.delete(entry[0]);
            // Terminates the loop and continue with rest of code
            // Already found the item we're looking for
            break;
        }
    }
}

// deleteContactInfo("Trish Jones");
// console.log(phoneNumberBook);
// Positions of parameters matter
// deleteContactInfo(null,"305-320-0984");
// Positional parameters vs Named parameters
// deleteContactInfo({phoneNumber:"305-320-0984"});
// console.log(phoneNumberBook);

// Search function
// Use for loop
function searchContactInfo(name = "", phoneNumber = ""){}