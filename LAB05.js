// Sample contacts array
let contacts = [
    { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
    { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
    { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// Function to sort contacts
function sortContactsBy(field) {
    contacts.sort((a, b) => {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
    });
}

// Function to display contacts
function displayContacts() {
    contacts.forEach(c => console.log(`${c.name} | ${c.phone} | ${c.email}`));
}

// Simulating user choice
let userChoice = prompt("Sort contacts by: name, phone, or email?");

// Validate input and sort
if (["name", "phone", "email"].includes(userChoice)) {
    sortContactsBy(userChoice);
    console.log(`Contacts sorted by ${userChoice}:`);
    displayContacts();
} else {
    console.log("Invalid choice. Please choose name, phone, or email.");
}

