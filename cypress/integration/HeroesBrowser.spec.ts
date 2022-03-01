it('renders main page with search form and random 3 heroes', () => {
  cy.visit('http://localhost:3000/');
  cy.contains('Check out these randomly selected superheroes!');
  cy.get('input[type="search"]').should('be.visible');
  cy.get('ul a').should('have.length', 3);
});

it('redirects to details page', () => {
  cy.visit('http://localhost:3000/');
  cy.get('ul a').first().click();
  cy.location('pathname').should('not.be', '/');
});
