
describe('CheckBox', () => {

    it('valiadte whather checkbox checked/not', async function () {
        await browser.url("https://the-internet.herokuapp.com/checkboxes");
        const element1 = $('//*[@id="checkboxes"]/input[1]');
        console.log("CheckBox1 Status" + await element1.isSelected())


        const element2 = $('//*[@id="checkboxes"]/input[2]');
        console.log("CheckBox1 Status " + await element2.isSelected());

        /* if await is not used we can handle the promise by below means */

        element2.isSelected().then(function(value){
            console.log("CheckBox 2 Value selected/Not (then) "+ value);
        })

    })
})


