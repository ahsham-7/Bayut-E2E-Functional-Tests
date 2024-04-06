import TruValue from '../pageobjects/truValue.page.js' 
describe('TruValue Test Cases Suite', async()=>{
    it('Verify Purpose filter', async() => {
        TruValue.openE2E()
        await TruValue.SelectRentPurpose()
        await TruValue.SelectBeds()   
        await TruValue.SelectBaths()
        await TruValue.SelectArea()   
    })   
})