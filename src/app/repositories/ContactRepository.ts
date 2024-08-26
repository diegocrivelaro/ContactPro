let contactsMock = [
  {
    id: crypto.randomUUID(),
    name: "Fulano",
    lastName: "De Tal",
    email: "fulano@gmail.com",
    phone: "999999999",
    category_id: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Ciclano",
    lastName: "De Tal",
    email: "ciclano@gmail.com",
    phone: "888888888",
    category_id: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Beltrano",
    lastName: "De Tal",
    email: "beltrano@gmail.com",
    phone: "777777777",
    category_id: crypto.randomUUID(),
  },
];

class ContactRepository {
  findAll() {
    return Promise.resolve(contactsMock);
  }

  findById(id: string) {
    return Promise.resolve(contactsMock.find((contact) => contact.id === id));
  }

  delete(id: string) {
    contactsMock = contactsMock.filter((contact) => contact.id !== id);

    Promise.resolve();
  }
}

export default new ContactRepository();
