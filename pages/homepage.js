import { test, expect } from '@playwright/test';


class HomePage{
     constructor(page){
    this.page=page;

      // Create locators

      this.searchBox= page.locator("//div[@aria-label='search-input']//input[@id='initiative-searhInput']");
      this.bookmarkIcon = page.locator("//a[@aria-label='Bookmarks']");
      this.userProfile = page.locator("//p[@class='usernametxt small_title ng-binding']");
      this.aboutMe = page.locator("//div[@class='profilesection profile-menu-drowdown-opened']//a[@ui-sref='root.redprofile.aboutme']");
      this.mentorInfo = page.locator("//div[@class='profilesection profile-menu-drowdown-opened']//span[@class='left-menu-profile-nav-text ng-binding'][normalize-space()='Mentor info']");
      this.setting = page.locator("//div[@class='profilesection profile-menu-drowdown-opened']//span[@class='left-menu-profile-nav-text ng-scope'][normalize-space()='Settings']");
       this.welcomeText = page.locator("//h2[contains(@class,'home-main-title')]");

    }

  async validateDataOnHomepage (){

    await this.aboutMe.click();

  }



    }

module.exports=HomePage;