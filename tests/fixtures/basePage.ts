import { test as base } from "@playwright/test";
import ComputersPage from "../support/pageobjectmodel/pages/computers.page";
import AddComputerPage from "../support/pageobjectmodel/pages/addComputer.page";

// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  computersPage: ComputersPage;
  addComputerPage: AddComputerPage;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  computersPage: async ({ page }, use) => {
    await use(new ComputersPage(page));
  },
  addComputerPage: async ({ page }, use) => {
    await use(new AddComputerPage(page));
  },
});
