import Header from '../pageobjects/headerSection.page.js'
import { expect } from 'chai';
describe('Header Section', async () => {
    //    it('Verify my Bayut button present in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.waitForElementDisplayed(Header.myBayuticon)
    //     await Header.myBayuticon.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.waitForElementDisplayed(Header.myBayuticon)
    //     await Header.myBayuticon.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify Find My Agent Page present in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.waitForElementDisplayed(Header.findMyAgentBtn)
    //     await Header.findMyAgentBtn.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     const expectedUrl= await Header.FloorPlans
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    //     it('Verify Agent Portal in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.waitForElementDisplayed(Header.AgentPortal)
    //     await Header.AgentPortal.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.waitForElementDisplayed(Header.AgentPortal)
    //     await Header.AgentPortal.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify Area Guides in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.AreaGuides)
    //     await Header.AreaGuides.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.AreaGuides)
    //     await Header.AreaGuides.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify Building Guides in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.BuildingGuides)
    //     await Header.BuildingGuides.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.BuildingGuides)
    //     await Header.BuildingGuides.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify School Guides in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.SchoolGuides)
    //     await Header.SchoolGuides.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openGuidesPopUp()
    //     await Header.waitForElementDisplayed(Header.SchoolGuides)
    //     await Header.SchoolGuides.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify TruValue in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openMarketIntelligence()
    //     await Header.waitForElementDisplayed(Header.TruValue)
    //     await Header.TruValue.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openMarketIntelligence()
    //     await Header.waitForElementDisplayed(Header.TruValue)
    //     await Header.TruValue.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify Property Prices in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openMarketIntelligence()
    //     await Header.waitForElementDisplayed(Header.PropertyPrices)
    //     await Header.PropertyPrices.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openMarketIntelligence()
    //     await Header.waitForElementDisplayed(Header.PropertyPrices)
    //     await Header.PropertyPrices.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    // it('Verify B3DXB 2022 in NavBar ', async () => {
    //     Header.openE2E()
    //     await Header.openEventsPopUp()
    //     await Header.waitForElementDisplayed(Header.B3DXB_2022)
    //     await Header.B3DXB_2022.click()
    //     await Header.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     Header.openProduction()
    //     await Header.openEventsPopUp()
    //     await Header.waitForElementDisplayed(Header.B3DXB_2022)
    //     await Header.B3DXB_2022.click()
    //     await Header.waitForPageToLoad()
    //     const expectedUrl = await browser.getUrl();
    //     expect(expectedUrl).to.equal(currentUrl);
    // }),
    it('Verify Your Home Your Choice in NavBar ', async () => {
        Header.openE2E()
        await Header.openEventsPopUp()
        await Header.waitForElementDisplayed(Header.YourHomeYourChoice)
        await Header.YourHomeYourChoice.click()
        await Header.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        Header.openProduction()
        await Header.openEventsPopUp()
        await Header.waitForElementDisplayed(Header.YourHomeYourChoice)
        await Header.YourHomeYourChoice.click()
        await Header.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        expect(expectedUrl).to.equal(currentUrl);
    })

})


