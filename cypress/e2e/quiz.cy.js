describe("Quiz", () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it("should start the quiz over once completed", () => {
        cy.get('button').contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();}
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});