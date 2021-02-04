import {
  PersonalInformation
} from '../page';

describe('Practice automation Workshop 1, Fill a form', () => {

  const personalInformation =  new PersonalInformation();
  before(() => {
    cy.fixture('formTest').as('form');
  });

  it('The order is completed', function () {
    cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    personalInformation.fillName(this.form.firstname);
    personalInformation.fillLastName(this.form.lastname);
    personalInformation.selectGender(this.form.sex);
    personalInformation.selectExperience(this.form.experience);
    personalInformation.fillDate(this.form.date);
    personalInformation.selectProfession(this.form.profession);
    personalInformation.selectTool(this.form.tool);
    personalInformation.selectContinent(this.form.continent);

    cy.get('.mui-col-md-6 > :nth-child(1)').should('have.text', 'Selenium - Automation Practice Form');
  });
});
