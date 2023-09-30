import { booking } from '../fixtures/booking';

context('POST /booking', () => {
  it('should return new booking with bookingid', () => {
    cy.request({
      method: 'POST',
      url: '/booking',
      body: booking,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
    });
  });
});
