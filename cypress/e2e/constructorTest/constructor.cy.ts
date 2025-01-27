const mockUrl = 'http://localhost:3002/';
const mockBun = `[data-cy="643d69a5c3f7b9001cfa093c"]`;
const mockSauce = `[data-cy="643d69a5c3f7b9001cfa0942"]`;
const mockMain = `[data-cy="643d69a5c3f7b9001cfa0941"]`;

const refModal = `[data-cy=cyModal]`;
const refCloseModal = `[data-cy=closeModal]`;

beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'mockIngredients.json' }).as('getIngredients');
  
    cy.visit(mockUrl);
});

describe('Constructor test', () => {
    it('get ingredients', async () => {
        cy.wait('@ingredients');
    });

    it('add ingr in constructor', async () => {
        const btnBun = cy.get(mockBun).contains('Добавить');
        btnBun.click();
        cy.get('[data-cy=cyBun]').should('exist');

        const btnIngrSauce = cy.get(mockSauce).contains('Добавить');
        btnIngrSauce.click();
        cy.get('[data-cy=cyMain]').should('exist');
        
        const btnIngrMain = cy.get(mockMain).contains('Добавить');
        btnIngrMain.click();
        cy.get('[data-cy=cyMain]').should('exist');

    });

    it('open modal', () => {
        cy.get(mockBun).click();
        cy.get(refModal).should('exist');
    });

});
