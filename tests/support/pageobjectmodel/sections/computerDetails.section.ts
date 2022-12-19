import { Page } from "@playwright/test";
export default class ComputerDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators here
  createThisComputerButton = () => this.page.getByText("Create this computer");

  // Actions
  public async createComputer() {
    await this.createThisComputerButton().click();
  }
}
