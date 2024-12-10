import Quiz from "../../client/src/components/Quiz";

describe("Quiz", () => {
    beforeEach(() => {
        cy.intercept({
            method: "GET",
            url: '/api/questions/random'
        }, {
            fixture: "questions.json"
        }).as("getQuestions")
    });
    it("should start the quiz over once completed", () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});