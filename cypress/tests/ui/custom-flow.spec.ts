describe('Custom Flow Test', () => {
    it('should complete the custom workflow', () => {
        cy.visit('/home');
        cy.contains('Start').click();  
        cy.url().should('include', '/step1');  
        cy.get('input[name="field1"]').type('test data');  
        cy.get('button[type="submit"]').click();  
        cy.url().should('include', '/step2');
        cy.contains('Finish').click();  
        cy.url().should('include', '/completed');  
    });
});
