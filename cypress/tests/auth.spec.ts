context('POST /auth', () => {
  it('should return token', () => {
    cy.request({
      method: 'POST',
      url: '/auth',
      body: {
        username: Cypress.env('USERNAME'),
        password: Cypress.env('PASSWORD'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  const invalidCredentials = [
    { username: '', password: '' },
    { username: 'user', password: '' },
    { username: '', password: 'pass' },
    { username: null, password: null },
    {},
  ];

  invalidCredentials.forEach((invalidCredential) => {
    it(`should return "Bad credentials" for ${JSON.stringify(
      invalidCredential
    )}`, () => {
      cy.request({
        method: 'POST',
        url: '/auth',
        body: invalidCredential,
      }).then((response) => {
        expect(response.body.reason).to.equal('Bad credentials');
      });
    });
  });
});
