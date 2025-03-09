import LoginPage from '../pageobjects/login.page.js'
import './../utils/command.js'

//custom command example

// await browser.addCommand('getTitleAndLog', async () => {
//     const title = await browser.getTitle();
//     console.log("Title of the Page is " + title);
// })

describe('My Login application', () => {

    it('should login with valid credentials', async function () {
        this.retries(2);
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.getTitleAndLog();

    })
})


