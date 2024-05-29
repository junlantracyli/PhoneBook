
// Array of objects
const phoneNumberBookArray = [{name: "Jane", phoneNumber: "204-384-9384"}];

// set function adds AND updates
function addContactInfo() {
    // Gets id of HTML element, fetch element and then get value of element (mostly for input types)
    const nameElement = document.getElementById("name");
    const numberElement = document.getElementById("number");

    // Actual value user types 
    const name = nameElement.value;
    const phoneNumber = numberElement.value;
    // Finds name or phone number given as parameter
    const contact = phoneNumberBookArray.find((item) => item.name === name || item.phoneNumber === phoneNumber);
    // Truthy or falsey values
    // Objects evaluate to true in if statements for JS
    if(!contact){
        // Pushed as Javascript objects 
        phoneNumberBookArray.push({name, phoneNumber});
        // Like putting labels on boxes for storage
        //JSON key value - converts array to JSON string, parse does opposite 
        //Maintains same structure but just has string type 
        localStorage.setItem("phoneNumberBookArray", JSON.stringify(phoneNumberBookArray));
        window.location = "index.html";
    }
    
}

// Display contacts fetched from local storage
// function renderContactInfo(
// )

function updateContactInfo(name, phoneNumber){
    const contact = phoneNumberBookArray.find((item) => item.name === name || item.phoneNumber === phoneNumber);

    if(contact){
        phoneNumberBookArray.set({name, phoneNumber});
    }
}

function deleteContactInfo(name = "", phoneNumber = ""){
    const contact = phoneNumberBookArray.find((item) => item.name === name || item.phoneNumber === phoneNumber);
    console.log(contact);

    if(phoneNumberBookArray.has(contact[0])){
        phoneNumberBookArray.delete(contact[0]);
    }

    const phoneBookEntries = phoneNumberBookArray.entries();

    for (const entry of phoneBookEntries){
        if(entry[1] === name){
            phoneNumberBookArray.delete(entry[0]);
            break;
        }
    }
}

function searchContactInfo(name="", phoneNumber=""){
    const contact = phoneNumberBookArray.find((item) => item.name === name || item.phoneNumber === phoneNumber);

    if(!contact){
        return false;
    }
    else{
        return contact;
    }
}