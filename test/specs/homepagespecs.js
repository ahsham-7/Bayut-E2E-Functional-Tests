import HomePage from '../pageobjects/home.page.js'
import { expect } from 'chai';
describe('HomePage', async () => {
    //    it('Verify Back to Top Button(Present at Bottom) ', async () => {
    //     HomePage.openE2E()
    //     const currentPosition = await browser.execute(() => window.scrollY);
    //     console.log('Current Scroll Position:', currentPosition);
    //     HomePage.openProduction()
    //     await HomePage.waitForElementDisplayed(HomePage.BackToTopBtn)
    //     await HomePage.BackToTopBtn.click()
    //     const currentProdPosition = await browser.execute(() => window.scrollY);
    //     console.log('Current Scroll Position:', currentProdPosition);
    //     expect(currentProdPosition).to.equal(currentPosition)
    // }),
    // it('Verify TruValue quicklink card ', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.TruValueQuickLinkCard)
    //     await HomePage.TruValueQuickLinkCard.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.TruValuecard).to.equal(currentUrl);
    // }),
    // it('Verify NBS quicklink card ', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.NBSQuickLinkCard)
    //     await HomePage.NBSQuickLinkCard.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.NBScard).to.equal(currentUrl);
    // }),
    // it('Verify MBS quicklink card ', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.MBSQuickLinkCard)
    //     await HomePage.MBSQuickLinkCard.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.NBScard).to.equal(currentUrl);
    // }),
    // it('Verify FloorPlan carousal', async () => {
    //     HomePage.openE2E()
    //     await HomePage.CarousalIsDisplayed(HomePage.FloorPlanBanner,HomePage.Carousal_1)
    //     await HomePage.ClickonCarousal(HomePage.Carousal_1,HomePage.FloorPlanBanner)
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.FloorPlan).to.equal(currentUrl); 
    // }),
    // it('Verify 360View carousal', async () => {
    //     HomePage.openE2E()
    //     await HomePage.CarousalIsDisplayed(HomePage.View360Banner,HomePage.Carousal_2)
    //     await HomePage.ClickonCarousal(HomePage.Carousal_2,HomePage.View360Banner)
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.View360).to.equal(currentUrl); 
    // }),
    // it('Verify Video Tours carousal', async () => {
    //     HomePage.openE2E()
    //     await HomePage.CarousalIsDisplayed(HomePage.VideoToursBanner,HomePage.Carousal_3)
    //     await HomePage.ClickonCarousal(HomePage.Carousal_3,HomePage.VideoToursBanner)
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl();
    //     expect(HomePage.VideoTours).to.equal(currentUrl); 
    // }),
    //  it('Buy Filter', async () => {
    //     HomePage.openE2E()
    //     await HomePage.SelectBuyFilter()
    //     await HomePage.FindButton.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl()
    //     HomePage.openProduction()
    //     await HomePage.SelectBuyFilter()
    //     await HomePage.waitForPageToLoad()
    //     await HomePage.FindButton.click()
    //     expect(HomePage.BuyUrl).to.equal(currentUrl); 
    // }),
    // it('Rent Filter', async () => {
    //     HomePage.openE2E()
    //     await HomePage.SelectRentFilter()
    //     await HomePage.FindButton.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl()
    //     HomePage.openProduction()
    //     await HomePage.SelectRentFilter()
    //     await HomePage.FindButton.click()
    //     await HomePage.waitForPageToLoad()
    //     expect(HomePage.RentUrl).to.equal(currentUrl); 
    // }),
    //  it('Verify Jazawat Streey', async () => {
    //     HomePage.openE2E()
    //    await HomePage.SelectBusinessBayLocation('jawazat street')
    //    await HomePage.FindButton.click()
    //    await HomePage.waitForPageToLoad()
    //    const currentUrl = await browser.getUrl()
    //    console.log('Current URL:', currentUrl);
    //    expect(currentUrl).to.include('jawazat');
    // }),
    // it('Verify Property Type', async () => {
    //     HomePage.openE2E()
    //     await HomePage.SelectPropertyType('apartment')
    //     await HomePage.FindButton.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl = await browser.getUrl()
    //     expect(currentUrl).to.include('apartment');
    // }),
    // var min = '10000'; // Ensure min and max are strings
    // var max = '200000';
    
    // it('Verify Property Type', async () => {
    //     HomePage.openE2E();
    //     await HomePage.waitForElementDisplayed(HomePage.PriceFilter);
    //     await HomePage.PriceFilter.click();
    //     await HomePage.waitForElementDisplayed(HomePage.MiniumField);
    //     await HomePage.waitForElementDisplayed(HomePage.MaximumField);
    
    //     // Clear existing values in the fields
    //     await HomePage.MiniumField.clearValue();
    //     await HomePage.MaximumField.clearValue();
    
    //     // Use setValue() to input values
    //     await HomePage.MiniumField.setValue(min);
    //     await HomePage.MaximumField.setValue(max);
    
    //     await HomePage.FindButton.click();
    //     await HomePage.waitForPageToLoad();
    //     const currentUrl = await browser.getUrl();
    
    //     // Convert min and max to numbers for inclusion in the URL check
    //     const minNumber = parseInt(min, 10);
    //     const maxNumber = parseInt(max, 10);
    
    //     expect(currentUrl).to.include(minNumber).and.to.include(maxNumber);
    // });
    
    // it('Verify Dubai Transaction Tab', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.DubaiTransactionsTab)
    //     await HomePage.DubaiTransactionsTab.click()
    //     await HomePage.waitForElementDisplayed(HomePage.HomePageTitleText)
    //     const text= await HomePage.HomePageTitleText
    //     const textVal= await text.getText()
    //     console.log(textVal)
    //     expect(textVal).to.equal(HomePage.Title_DT)
    // }),
    // it('Verify BayutGPT Tab', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.GptTab)
    //     await HomePage.GptTab.click()
    //     await HomePage.waitForElementDisplayed(HomePage.HomePageTitleText)
    //     const text= await HomePage.HomePageTitleText
    //     const textVal= await text.getText()
    //     console.log(textVal)
    //     expect(textVal).to.equal(HomePage.Tile_BayutGPT)
    // }),
    // it('Verify Property Search Tab', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.SearchPageTab)
    //     await HomePage.SearchPageTab.click()
    //     await HomePage.waitForElementDisplayed(HomePage.HomePageTitleText)
    //     const text= await HomePage.HomePageTitleText
    //     const textVal= await text.getText()
    //     console.log(textVal)
    //     expect(textVal).to.equal(HomePage.Title_Homepage)
    // }),
    // it('Verify Popular Links Sale: Dubai Aparmtents', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks00)
    //     await HomePage.PopularLinks00.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('dubai').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Dubai Marina', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks10)
    //     await HomePage.PopularLinks10.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('dubai-marina').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Jumeirah Lake Towers (JLT)', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks20)
    //     await HomePage.PopularLinks20.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('jumeirah-lake-towers-jlt').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Downtown Dubai)', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks30)
    //     await HomePage.PopularLinks30.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('downtown-dubai').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Business Bay', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks40)
    //     await HomePage.PopularLinks40.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('business-bay').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Palm Jumeirah', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks50)
    //     await HomePage.PopularLinks50.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('palm-jumeirah').and.to.include('sale') 
    // }),
    //   it('Verify Popular Links Sale: Jumeirah Village Circle(JVC)', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn)
    //     await HomePage.ViewAllBtn.click()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks60)
    //     await HomePage.PopularLinks60.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('jumeirah-village-circle-jvc').and.to.include('sale') 
    // })
    // it('Verify Popular Links Sale: Dubai Silicon Oasis', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn)
    //     await HomePage.ViewAllBtn.click()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks70)
    //     await HomePage.PopularLinks70.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('dubai-silicon-oasis').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Dubai Sports City', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn)
    //     await HomePage.ViewAllBtn.click()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks80)
    //     await HomePage.PopularLinks80.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('dubai-sports-city').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Jumeirah Beach Residence (JBR)', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn)
    //     await HomePage.ViewAllBtn.click()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks90)
    //     await HomePage.PopularLinks90.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('jumeirah-beach-residence-jbr').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Abu Dhabi Apartments', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks01)
    //     await HomePage.PopularLinks01.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('abu-dhabi').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Reem Islands', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks02)
    //     await HomePage.PopularLinks02.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-reem-island').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Reef', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks03)
    //     await HomePage.PopularLinks03.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-reef').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Ghadeer', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks04)
    //     await HomePage.PopularLinks04.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-ghadeer').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Raha Beech', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks05)
    //     await HomePage.PopularLinks05.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-raha-beach').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Saadiyat Islands', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks06)
    //     await HomePage.PopularLinks06.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('saadiyat-island').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Yas Islands', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn)
    //     await HomePage.ViewAllBtn.click()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks07)
    //     await HomePage.PopularLinks07.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('yas-island').and.to.include('sale') 
    // }),
     it('Verify Popular Links Sale: Sharjah', async () => {
        HomePage.openE2E()
        await HomePage.waitForElementDisplayed(HomePage.PopularLinks001)
        await HomePage.PopularLinks001.click()
        await HomePage.waitForPageToLoad()
        const currentUrl= await browser.getUrl()
        expect(currentUrl).to.include('sharjah').and.to.include('sale') 
    }),
    it('Verify Popular Links Sale: Ajman', async () => {
        HomePage.openE2E()
        //await HomePage.waitForElementDisplayed(HomePage.PopularLinks002)
        await HomePage.PopularLinks002.click()
        await HomePage.waitForPageToLoad()
        const currentUrl= await browser.getUrl()
        expect(currentUrl).to.include('ajman').and.to.include('sale') 
    })
    it('Verify Popular Links Sale: Ras AL Khaimah', async () => {
        HomePage.openE2E()
        await HomePage.waitForElementDisplayed(HomePage.PopularLinks003)
        await HomePage.PopularLinks003.click()
        await HomePage.waitForPageToLoad()
        const currentUrl= await browser.getUrl()
        expect(currentUrl).to.include('ras-al-khaimah').and.to.include('sale') 
    }),
    it('Verify Popular Links Sale: Al Sawan', async () => {
        HomePage.openE2E()
        await HomePage.waitForElementDisplayed(HomePage.PopularLinks004)
        await HomePage.PopularLinks004.click()
        await HomePage.waitForPageToLoad()
        const currentUrl= await browser.getUrl()
        expect(currentUrl).to.include('al-sawan').and.to.include('sale') 
    }),
    it('Verify Popular Links Sale: Al Nahda(Sharjah)', async () => {
        HomePage.openE2E()
        await HomePage.waitForElementDisplayed(HomePage.PopularLinks005)
        await HomePage.PopularLinks005.click()
        await HomePage.waitForPageToLoad()
        const currentUrl= await browser.getUrl()
        expect(currentUrl).to.include('al-nahda-sharjah').and.to.include('sale') 
    })


    
    
    
})


