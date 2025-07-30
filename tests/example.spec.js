
const { test, expect } =require('@playwright/test');
const LoginPage = require("../pages/login");
const LogOutPage = require("../pages/logout")
const dataset =JSON.parse(JSON.stringify(require("../utils/testdata.json")));

/**
 This test is for demo purpose
 */

test('UAT Login LHH', async ({page}) => {

  const loginpage = new LoginPage(page);
  const logoutpage = new LogOutPage(page);

  await loginpage.testGoogle(dataset.username,dataset.password);
  await logoutpage.tearDown();

  await page.waitForTimeout(3000);
  


});
