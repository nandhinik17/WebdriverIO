import { browser } from '@wdio/globals';

 browser.addCommand('getTitleAndLog', async () => {
    const title = await browser.getTitle();
    console.log("Title of the Page is " + title);
})