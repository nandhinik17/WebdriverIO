import LoginPage from '../pageobjects/login.page.js'



const testData = [
    { username: "standard_user", password: "secret_sauce" },
    { username: "locked_out_user", password: "secret_sauce" }
]


describe('My Login application', () => {

    testData.forEach((value) => {

        it('should login with valid credentials', async function () {
            this.retries(2);
            await LoginPage.open()
            await LoginPage.login(value.username, value.password);
            console.log("Title of the Page is" + await browser.getTitle());
        })
    })
})

