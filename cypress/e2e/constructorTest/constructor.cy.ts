import { mockBun, getIngr, mockSauce, mockMain } from '../constants';

beforeEach(() => {
  getIngr();
});

describe('Constructor test', () => {
  it('get ingredients', () => {
    cy.wait('@ingredients');
  });
  it('add ingr in constructor', () => {
    cy.get(mockBun).contains('Добавить').click();
    cy.get('[data-cy=cyBun]').should('exist');
    cy.get(mockSauce).contains('Добавить').click();
    cy.get('[data-cy=cyMain]').should('exist');
    cy.get(mockMain).contains('Добавить').click();
    cy.get('[data-cy=cyMain]').should('exist');
  });
});
