const mockUrl = 'http://localhost:3002/';
const mockBun = `[data-cy="643d69a5c3f7b9001cfa093c"]`;
const mockSauce = `[data-cy="643d69a5c3f7b9001cfa0942"]`;

beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'mockIngredients.json' }).as('getIngredients');
  
    cy.visit(mockUrl);
});

describe('Constructor test', () => {
    it('get ingredients', async () => {
        cy.wait('@ingredients');
    });

    it('add ingr in constructor', async () => {
        const btn = cy.get(mockBun).contains('Добавить')
        btn.click();
        alert(btn)

    });
});
