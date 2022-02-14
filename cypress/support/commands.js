Cypress.Commands.add('addToDo', (id, todo) => {
  cy.get(id).type(todo + `{enter}`);
});

Cypress.Commands.add('updateToDo', (id, todo) => {
  cy.get(id)
    .first()
    .dblclick()
    .clear()
    .type(todo+ `{enter}`);
});

Cypress.Commands.add('toggleToDo', (index) => {
  cy.get(`.todo-list li:nth-child(${index + 1}) .toggle`).click();
});

Cypress.Commands.add('filterClick', (index) => {
  cy.get(`.filters > :nth-child(${index}) > a`).click();
});


