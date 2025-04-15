const refOverlay = '[data-cy=cyOverlay]';
import { mockBun, getIngr, refModal, refCloseModal } from '../constants';

beforeEach(() => {
  getIngr();
});

describe('modal test', () => {
  it('open modal', () => {
    cy.get(mockBun).click();
    cy.get(refModal).should('exist');
  });

  it('close modal on btn', () => {
    //сначала открываем окно
    cy.get(mockBun).click();
    cy.get(refModal).should('exist');
    cy.get(refCloseModal).click();
    cy.get(refModal).should('not.exist');
  });

  it('close modal on overlay', () => {
    //сначала открываем окно
    cy.get(mockBun).click();
    cy.get(refModal).should('exist');
    cy.get(refOverlay).click({ force: true });
    cy.get(refModal).should('not.exist');
  });
});
