import faker from 'faker/locale/en';
import { randomNumberGenerator } from '../utils/utils';

const fields = {
    name: () => `${faker.company.companyName()} ${faker.company.companySuffix()}`,
    website: faker.internet.url,
    fein: () => `${randomNumberGenerator(2)}-${randomNumberGenerator(8)}`,
    businessDescription: faker.lorem.text,
    naicsCode: () => randomNumberGenerator(2),
    sicCode: () => `${randomNumberGenerator(4)}-${randomNumberGenerator(4)}`,
    cslbLicense: () => randomNumberGenerator(7),
    cslbState: 'SELECT',
    primaryContactFirstName: faker.name.firstName,
    primaryContactLastName: faker.name.lastName,
    primaryContactRole: faker.name.jobTitle,
    primaryContactPhone: faker.phone.phoneNumber,
    primaryContactEmail: faker.internet.email,
    primaryLocationStreetAddress: faker.address.streetAddress,
    primaryLocationCity: faker.address.city,
    primaryLocationZipCode: faker.address.zipCode,
    primaryLocationState: 'SELECT',
    producer: 'SELECT',
    accountManager: 'SELECT',
    legalEntityType: 'SELECT',
};

export default fields;