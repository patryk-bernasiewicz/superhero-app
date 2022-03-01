it('renders main page with search form and random 3 heroes', () => {
  cy.visit('http://localhost:3000/69-batman');
  cy.get('button').should('contain', 'Back to search list');
  cy.get('h1').should('contain', 'Batman');
  cy.get('img').should('have.length', 1);
  cy.get('dl').should('have.length', 5);
});

it('redirects to main page on button click', () => {
  cy.visit('http://localhost:3000/69-batman');
  cy.get('button').click();
  cy.location('pathname').should('equal', '/');
});
