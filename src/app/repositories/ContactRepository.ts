import contactsMock from "../mocks/contactsMock";

class ContactRepository {
  findAll() {
    return Promise.resolve(contactsMock);
  }

  findById(id: string) {
    return Promise.resolve(contactsMock.find((contact) => contact.id === id));
  }
}

export default new ContactRepository();
