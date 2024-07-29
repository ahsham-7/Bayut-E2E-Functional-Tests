import TruValue from '../pageobjects/truValue.page.js'
import { expect } from 'chai';
describe('TruValue Test Cases Suite', async()=>{
    // it('Verify All Filters', async() => {
    //     TruValue.openE2E()
    //     await TruValue.SelectRentPurpose()
    //     await TruValue.SelectLocation()
    //     await TruValue.SelectPropertyTypeApartment()
    //     await TruValue.SelectBeds()   
    //     await TruValue.SelectBaths()
    //     await TruValue.SelectArea()
    //     await TruValue.GetEstimate.click()
    //     await TruValue.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     console.log("Current URL=" + currentUrl);
    //     console.log("Expected URL=" + TruValue.ExpectedUrl);
    //     expect(TruValue.ExpectedUrl).to.equal(currentUrl) 
    // }),
    it('Verify Search Agency Field at the bottom', async() => {
        TruValue.openE2E()
        await TruValue.SelectAgencyField("Johar")
       
    })

})