export class PersonalInformation {
  private nameFieldSelector : string;
  private lastnameFieldSelector : string;
  private dateFieldSelector : string;
  private continentsFieldSelector : string;
  private submitButtonSelector : string;

  constructor() {
    this.nameFieldSelector = 'input[name="firstname"]';
    this.lastnameFieldSelector = 'input[name="lastname"]';
    this.dateFieldSelector = ':nth-child(5) > [width="65%"] > input';
    this.continentsFieldSelector ='select[name="continents"]';
    this.submitButtonSelector = 'button[name="submit"]';
  }

  public fillName(name: string) {
    cy.get(this.nameFieldSelector).type(name);
  }

  public fillLastName(lastname: string) {
    cy.get(this.lastnameFieldSelector).type(lastname);
  }

  public selectGender(gender: string) {
    cy.get(`input[value="${gender}"]`).click();
  }

  public selectExperience(experience: string) {
    cy.get(`input[name="exp"][value="${experience}"]`).click();
  }

  public fillDate(date: string){
    cy.get(this.dateFieldSelector).type(date);
  }

  public selectProfession(profession: string) {
    cy.get(`input[name="profession"][value="${profession}"]`).click();
  }

  public selectTool(tool: string) {
    cy.get(`input[name="tool"][value="${tool}"]`).click();
  }

  public selectContinent(tool: string) {
    cy.get(this.continentsFieldSelector).select(tool);
  }

  public submit() {
    cy.get(this.submitButtonSelector).click();
  }
}
