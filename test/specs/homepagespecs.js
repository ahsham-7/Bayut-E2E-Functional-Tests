import homePage from '../pageobjects/home.page.js';
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
    //  it('Verify Popular Links Sale: Sharjah', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks001)
    //     await HomePage.PopularLinks001.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('sharjah').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Ajman', async () => {
    //     HomePage.openE2E()
    //     //await HomePage.waitForElementDisplayed(HomePage.PopularLinks002)
    //     await HomePage.PopularLinks002.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('ajman').and.to.include('sale') 
    // })
    // it('Verify Popular Links Sale: Ras AL Khaimah', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks003)
    //     await HomePage.PopularLinks003.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('ras-al-khaimah').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Sawan', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks004)
    //     await HomePage.PopularLinks004.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-sawan').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Al Nahda(Sharjah)', async () => {
    //     HomePage.openE2E()
    //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks005)
    //     await HomePage.PopularLinks005.click()
    //     await HomePage.waitForPageToLoad()
    //     const currentUrl= await browser.getUrl()
    //     expect(currentUrl).to.include('al-nahda-sharjah').and.to.include('sale') 
    // }),
    // it('Verify Popular Links Sale: Dubai Villas', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2000)
    //         await HomePage.PopularLinks2000.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('dubai').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Arabian Ranches', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2001)
    //         await HomePage.PopularLinks2001.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('arabian-ranches').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Dubailand', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2002)
    //         await HomePage.PopularLinks2002.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('dubailand').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Dubai Hills Estate', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2003)
    //         await HomePage.PopularLinks2003.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('dubai-hills-estate').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Palm Jumeirah', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2004)
    //         await HomePage.PopularLinks2004.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('palm-jumeirah').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: The Springs', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2005)
    //         await HomePage.PopularLinks2005.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('the-springs').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Arabian Ranches 2', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2006)
    //         await HomePage.PopularLinks2006.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('arabian-ranches-2').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Damac Hills', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2007)
    //         await HomePage.PopularLinks2007.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('damac-hills').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Jumeirah Park', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2008)
    //         await HomePage.PopularLinks2008.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('jumeirah-park').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Mudon', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2009)
    //         await HomePage.PopularLinks2009.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('mudon').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: Al Furjan', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2010)
    //         await HomePage.PopularLinks2010.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('al-furjan').and.to.include('villas') 
    //     }),

    //     it('Verify Popular Links Sale: The Meadows', async () => {
    //         HomePage.openE2E()
    //         await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
    //         await HomePage.ViewAllBtn2.click()
    //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks2011)
    //         await HomePage.PopularLinks2011.click()
    //         await HomePage.waitForPageToLoad()
    //         const currentUrl= await browser.getUrl()
    //         expect(currentUrl).to.include('the-meadows').and.to.include('villas') 
    //     }),
        //  it('Verify Popular Links| Villas for Sale: Abu Dhabi', async () => {
        //         HomePage.openE2E()
        //         await HomePage.waitForElementDisplayed(HomePage.PopularLinks3000)
        //         await HomePage.PopularLinks3000.click()
        //         await HomePage.waitForPageToLoad()
        //         const currentUrl= await browser.getUrl()
        //         expect(currentUrl).to.include('abu-dhabi').and.to.include('villas') 
        //     }),
            // it('Verify Popular Links| Villas for Sale: Al Reef', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3001)
            //     await HomePage.PopularLinks3001.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('al-reef').and.to.include('villas') 
            // }),
            // it('Verify Popular Links| Villas for Sale: Yas Islands', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3002)
            //     await HomePage.PopularLinks3002.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('yas-island').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Sadiyat Islands', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3003)
            //     await HomePage.PopularLinks3003.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('saadiyat-island').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Al Raha Gardens', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3004)
            //     await HomePage.PopularLinks3004.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('al-raha-gardens').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Mohammad Bin Zayed City', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3005)
            //     await HomePage.PopularLinks3005.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('mohammed-bin-zayed-city').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Al Raha Golf Gardens', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
            //     await HomePage.ViewAllBtn2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3006)
            //     await HomePage.PopularLinks3006.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('al-raha-golf-gardens').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Khalifa City', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
            //     await HomePage.ViewAllBtn2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3007)
            //     await HomePage.PopularLinks3007.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('khalifa-city').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Hydra Village', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
            //     await HomePage.ViewAllBtn2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3008)
            //     await HomePage.PopularLinks3008.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('hydra-village').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Shakhbout City', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
            //     await HomePage.ViewAllBtn2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3009)
            //     await HomePage.PopularLinks3009.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('shakhbout-city').and.to.include('villas') 
            // }),

            // it('Verify Popular Links| Villas for Sale: Al Mushrif', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ViewAllBtn2)
            //     await HomePage.ViewAllBtn2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.PopularLinks3010)
            //     await HomePage.PopularLinks3010.click()
            //     await HomePage.waitForPageToLoad()
            //     const currentUrl= await browser.getUrl()
            //     expect(currentUrl).to.include('al-mushrif').and.to.include('villas') 
            // }),
            //   it('Verify Carousals', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.ForwardBtn)
            //     await HomePage.waitForElementDisplayed(HomePage.BackwardBtn)
            //     const desiredText = "Explorer Real Estate"
            //     const elementText =''
            //     while (elementText !== desiredText) {
            //       await HomePage.ForwardBtn.click();
            //       await HomePage.waitForElementDisplayed(HomePage.AgencyCarousalElement)
            //       const element = await browser.$(HomePage.AgencyCarousalElement);
            //       elementText = await element.getText();
            //       if (elementText === desiredText) {
            //         console.log('Desired text found:', elementText);
            //         break;
            //       }
            //     }
            // }),
            // it('Verify ChatGPT popup', async () => {
            //    HomePage.openE2E()
            //    await HomePage.GptTab.click()
            //    await HomePage.GptChatBtn.click()
            //    expect(await HomePage.ChatGptPopUp.waitForDisplayed()).to.be.true
            // }),

            // it('Verify ChatGPT 1st Suggestion', async () => {
            //     HomePage.openE2E()
            //     await HomePage.GptTab.click()
            //     await HomePage.ChatGptSuggestion1.click()
            //     await HomePage.waitForElementDisplayed(HomePage.ChatGptPopUp)
            //     await HomePage.waitForElementDisplayed(HomePage.GptAnswer1)
            //     expect(await HomePage.GptAnswer1.waitForDisplayed()).to.be.true
            //  }),

            //  it('Verify ChatGPT 2nd Suggestion', async () => {
            //     HomePage.openE2E()
            //     await HomePage.GptTab.click()
            //     await HomePage.ChatGptSuggestion2.click()
            //     await HomePage.waitForElementDisplayed(HomePage.ChatGptPopUp)
            //     await HomePage.waitForElementDisplayed(HomePage.GptAnswer2)
            //     expect(await HomePage.GptAnswer2.waitForDisplayed()).to.be.true
            //  }),

            //  it('Verify ChatGPT 3rd Suggestion', async () => {
            //     HomePage.openE2E()
            //     await HomePage.GptTab.click()
            //     await HomePage.ChatGptSuggestion3.click()
            //     await HomePage.waitForElementDisplayed(HomePage.ChatGptPopUp)
            //     await HomePage.waitForElementDisplayed(HomePage.GptAnswer3)
            //     expect(await HomePage.GptAnswer3.waitForDisplayed()).to.be.true
            //  }),
            //   it('Verify ChatGPT Terms Dialogue', async () => {
            //     HomePage.openE2E()
            //     await HomePage.GptTab.click()
            //     await HomePage.waitForElementDisplayed(HomePage.GptChatBtn)
            //     await HomePage.GptChatBtn.click()
            //     await HomePage.waitForElementDisplayed(HomePage.BayutGptTerms)
            //     await HomePage.BayutGptTerms.click()
            //     expect(await HomePage.BayutGptTermsPopUp.waitForDisplayed()).to.be.true
            //  }),

            //  it('Verify Login Form on Bayut Gpt', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.GptTab)
            //     await HomePage.GptTab.click()
            //     await HomePage.waitForElementDisplayed(HomePage.ChatGptSuggestion3)
            //     await HomePage.ChatGptSuggestion3.click()
            //     await HomePage.waitForElementDisplayed(HomePage.Login_SignupPopup)
            //     await HomePage.waitForElementDisplayed(HomePage.GptLoginBtn)
            //     await HomePage.GptLoginBtn.click()
            //     expect(await HomePage.LoginPopUp.waitForDisplayed()).to.be.true
            //  }),

            //  it('Verify Signup Form on Bayut Gpt', async () => {
            //     HomePage.openE2E()
            //     await HomePage.waitForElementDisplayed(HomePage.GptTab)
            //     await HomePage.GptTab.click()
            //     await HomePage.waitForElementDisplayed(HomePage.ChatGptSuggestion3)
            //     await HomePage.ChatGptSuggestion3.click()
            //     await HomePage.waitForElementDisplayed(HomePage.Login_SignupPopup)
            //     await HomePage.waitForElementDisplayed(HomePage.GptSignUpBtn)
            //     await HomePage.GptLoginBtn.click()
            //     expect(await HomePage.SignupPopUp.waitForDisplayed()).to.be.true
            //  }),

             it('Verify Input Text Field on BayutGpt PopUp', async () => {
                HomePage.openE2E()
                await HomePage.waitForElementDisplayed(HomePage.GptTab)
                await HomePage.GptTab.click()
                await HomePage.waitForElementDisplayed(HomePage.BayutGptInput)
                const value='Best properties for sale in DUBAI'
                await HomePage.BayutGptInput.setValue('Best properties for sale in DUBAI')
                await browser.keys("\uE007")
                await HomePage.waitForElementDisplayed(HomePage.ChatGptPopUp)
                const TypedVal= await HomePage.VerifyInputText2.getValue()
                await console.log(TypedVal)
                await console.log('123')
                // await HomePage.VerifyInputText2(TypedVal)
                // const FetchedVal= await HomePage.VerifyInputText2(TypedVal).getValue()
                // console.log(FetchedVal)
                // expect (TypedVal).to.equal(FetchedVal)
             })

             




            


})


