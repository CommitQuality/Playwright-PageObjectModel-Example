import { test, expect } from "@playwright/test";
import AddComputerPage from "./support/pageobjectmodel/pages/addComputer.page";
import ComputersPage from "./support/pageobjectmodel/pages/computers.page";

test("basic test", async ({ page }) => {
  await page.goto("https://computer-database.gatling.io/computers");
  await page.getByText("Add a new computer").click();
  await page.locator("#name").fill("CommitQuality");
  await page.locator("#introduced").fill("1999-12-12");
  await page.locator("#introduced").fill("1999-12-12");
  await page.locator("#discontinued").fill("2000-12-12");
  await page.locator("#company").selectOption({ label: "Apple Inc." });
  await page.getByText("Create this computer").click();
  await expect(
    page.getByText("Done ! Computer CommitQuality has been created")
  ).toBeVisible();
});

test("basic test with POM", async ({ page }) => {
  const computersPage = new ComputersPage(page);
  const addComputerPage = new AddComputerPage(page);
  await computersPage.goto();
  await computersPage.clickAddNewComputer();

  await addComputerPage.addNewComputer();

  await computersPage.assertNewComputerAdded();
});
