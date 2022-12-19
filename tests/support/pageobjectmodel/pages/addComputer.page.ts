import { Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.section";
import ComputerDetails from "../sections/computerDetails.section";
export default class AddComputerPage {
  page: Page;
  computerDetails: ComputerDetails;
  computerActions: ComputerActions;

  constructor(page: Page) {
    this.page = page;
    this.computerActions = new ComputerActions(this.page);
    this.computerDetails = new ComputerDetails(this.page);
  }

  // I like to add a goto method into each page I create
  public async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers");
  }

  // Locators here
  addComputerButton = () => this.page.getByText("Add a new computer");

  // Actions
  public async clickAddNewComputer() {
    await this.addComputerButton().click();
  }

  public async addNewComputer() {
    await this.computerActions.enterComputerDetails();
    await this.computerDetails.createComputer();
  }
}
