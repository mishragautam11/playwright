
const { test, expect } =require('@playwright/test');
const LoginPage = require("../pages/login");
const dataset =JSON.parse(JSON.stringify(require("../utils/testdata.json")));

/**
 This test is for demo purpose
 */

test('Google test', async ({page}) => {

  const loginpage = new LoginPage(page);

  await loginpage.testGoogle(dataset.textinput);
  


});
