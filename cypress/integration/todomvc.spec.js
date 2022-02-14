/// <reference types="cypress" />
describe('automate the to-do mvc app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addToDo('.new-todo', 'Feed the cat');
  });

  afterEach(() => {
    localStorage.clear();
  })

  it('should allow me to add a todo', () => {
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Feed the cat');
  });

  it('should allow me to update a todo', () => {
    cy.updateToDo('.todo-list li', 'Feed the dogs');
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Feed the dogs');
  });

  it('should allow me to delete a todo', () => {
    cy.get('body > section > section > ul > li:nth-child(1) > div > button').click({ force: true });
    cy.get('.todo-list li')
      .should('have.length', 0);
  });

  it('should allow me to mark a todo as complete', () => {
    cy.toggleToDo(0);
    cy.get('.todo-list li')
      .first()
      .should('have.class', 'completed');
  });

  it('should allow me to un-mark a todo as complete', () => {
    cy.toggleToDo(0);
    cy.toggleToDo(0);
    cy.get('.todo-list li')
      .first()
      .should('not.have.class', 'completed');
  });

  it('should allow me to view all todos', () => {
    cy.addToDo('.new-todo', 'Walk the dog');
    cy.filterClick(1);
    cy.get('.todo-list li')
      .should('have.length', 2);
  });

  it('should allow me to view all active todos', () => {
    cy.filterClick(2);
    cy.get('.todo-list li')
      .should('have.length', 1);
  });

  it('should allow me to view all completed todos', () => {
    cy.addToDo('.new-todo', 'Walk the dog');
    cy.toggleToDo(0);
    cy.filterClick(3);
    cy.get('.todo-list li')
      .should('have.length', 1);
  });

  it('should list the number of items left to complete', () => {
    cy.addToDo('.new-todo', 'Walk the dog');
    cy.toggleToDo(0);
    cy.get('span.todo-count')
      .should('have.text', '1 item left');
  });
})
