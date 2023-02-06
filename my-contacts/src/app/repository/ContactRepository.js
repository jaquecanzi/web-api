const {uuid} = require('uuidv4')

const contacts = [
    {
        id: uuid(),
        name: 'Jaque',
        email:'jaque@mail.com',
        phone:'123456',
        category_id: uuid() 
    },
]

class ContactRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts)
        })
    }
}

module.exports = new ContactRepository()