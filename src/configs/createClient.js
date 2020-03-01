import faker from 'faker/locale/en';

const fields = {
    primaryContactFirstName: faker.name.firstName(),
    primaryContactLastName: faker.name.lastName(),
    primaryContactRole: faker.name.jobTitle(),
    primaryContactPhone: faker.phone.phoneNumber(),
    primaryContactEmail: faker.internet.email(),
    primaryLocationStreetAddress: faker.address.streetAddress(),
    primaryLocationCity: faker.address.city(),
    primaryLocationZipCode: faker.address.zipCode(),
    adminNotes: faker.lorem.text(),
};

export default fields;