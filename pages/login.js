import { test, expect } from '@playwright/test';


class GooglePage{

constructor(page){
    this.page=page;

    // Create locators
    this.search = page.locator("//textarea[@id='APjFqb']");
}

async testGoogle(searchtext){
    await this.page.goto("https://www.google.com/");
    await this.search.fill(searchtext);
    await this.page.waitForTimeout(3000);
   
    
}


}

module.exports=GooglePage;