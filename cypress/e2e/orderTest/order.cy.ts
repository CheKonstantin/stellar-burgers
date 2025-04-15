import {
  mockBun,
  getIngr,
  mockSauce,
  mockMain,
  refModal,
  refCloseModal
} from '../constants';

describe('process forming order', () => {
  beforeEach(() => {
    getIngr();
  });
  before(() => {
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('refreshToken-test')
    );
    cy.setCookie('accessToken', 'mockAccessToken');

    cy.intercept('GET', 'api/auth/user', { fixture: 'mockUser.json' }).as(
      'user'
    );
    cy.intercept('POST', 'api/orders', { fixture: 'mockOrder.json' }).as(
      'order'
    );
  });
  after(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
  it('create order', () => {
    cy.get(mockBun).contains('Добавить').click();
    cy.get(mockSauce).contains('Добавить').click();
    cy.get(mockMain).contains('Добавить').click();

    cy.get('[data-cy=cyBtnOrder]')
      .contains('Оформить заказ')
      .click()
      .intercept('POST', 'api/orders', { fixture: 'mockOrder.json' })
      .as('order');

    cy.get(refModal).should('exist').contains('66666');

    cy.get(refCloseModal).click();
    cy.get(refModal).should('not.exist');
    cy.get('[data-cy=cyBun]').should('have.length', 0);
    cy.get('[data-cy=cyMain]').should('have.length', 0);
  });
});
