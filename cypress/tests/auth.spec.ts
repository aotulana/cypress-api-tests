context('POST /auth', () => {
  it('get user token', () => {
    cy.request({
      method: 'POST',
      url: '/auth',
      body: {
        username: 'admin',
        password: 'password123',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });
});
