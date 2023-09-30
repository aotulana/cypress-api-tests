import { faker } from '@faker-js/faker';
import { formatDate } from '../../src/utils/format-date';

const currentDate = new Date();

export const booking = {
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  totalprice: faker.number.int({ min: 10, max: 10000 }),
  depositpaid: true,
  bookingdates: {
    checkin: formatDate(currentDate),
    checkout: formatDate(
      new Date(currentDate.setDate(currentDate.getDate() + 1)) // next day
    ),
  },
  additionalneeds: 'Breakfast',
};
