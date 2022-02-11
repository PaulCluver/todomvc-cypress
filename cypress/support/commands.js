Cypress.Commands.add('addToDo', (id, todo) => {
  cy.get(id).type(todo + `{enter}`);
});
Cypress.Commands.add('assertShould', (id, statement, expectedValue) => {
  cy.get(id).should(statement, expectedValue);
});
