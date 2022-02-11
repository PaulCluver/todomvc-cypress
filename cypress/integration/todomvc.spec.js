/// <reference types="cypress" />
describe('automate the to-do mvc app', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/vanillajs/')
  })

  it.only('should allow me to add a todo', () => {
    cy.get('.new-todo').type(`Feed the cat{enter}`);
    cy.get('.todo-list li').should('have.length', 1);
    cy.get('.todo-list li').should('have.text', 'Feed the cat');
    /*
    cy.addToDo('.new-todo', 'Feed the cat');
    cy.assertShould('.todo-list li','have.length', 1)
    .first()
    .should('have.text', 'Feed the cat');
    */
  });

  it('should allow me to update a todo', () => {});
  it('should allow me to delete a todo', () => {});
  it('should allow me to mark a todo as complete', () => {});
  it('should allow me to un-mark a todo as complete', () => {});
  it('should allow me to view all todos', () => {});
  it('should allow me to view all active todos', () => {});
  it('should allow me to view all completed todos', () => {});
  it('should list the number of items left to complete', () => {});
})
