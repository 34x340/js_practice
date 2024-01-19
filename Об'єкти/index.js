const contact = {
    country:"Ukraine"
}

const contactLviv = Object.create(contact)

contactLviv.city = "Lviv"

// console.log(contactLviv);

const pasha = Object.create(contactLviv)

pasha.name = "Pavlo"

pasha.age = 16

console.log(pasha);