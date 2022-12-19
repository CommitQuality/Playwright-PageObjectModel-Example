import { test } from "./fixtures/basePage";

test("basic test POM with fixtures", async ({
  computersPage,
  addComputerPage,
}) => {
  await computersPage.goto();
  await computersPage.clickAddNewComputer();

  await addComputerPage.addNewComputer();

  await computersPage.assertNewComputerAdded();
});
