import { test, expect } from '@playwright/test';


class LogOutPage {
   constructor(page) {
      this.page = page;

      // Create locators
      this.logoutBtn = page.locator("//span[@class='left-mobile-menu-nav-text ng-scope'][normalize-space()='Logout']");

   }

   async tearDown() {
      await this.logoutBtn.scrollIntoViewIfNeeded();
      //await expect(this.logoutBtn).toBeVisible();
      await this.logoutBtn.click();

   }



}

module.exports = LogOutPage;