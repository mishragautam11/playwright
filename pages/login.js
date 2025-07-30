import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';


class LoginPage {

    constructor(page) {
        this.page = page;

        // Create locators
        this.userName = page.locator("//input[@id='signInName']");
        this.password = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//button[@id='continue']");

    }

    async testGoogle(usrname, pass) {
        await this.page.goto(process.env.UAT_URL);
        await this.userName.fill(usrname);
        await this.password.fill(pass);
        await this.loginBtn.click();
        
        
    }


}

module.exports = LoginPage;