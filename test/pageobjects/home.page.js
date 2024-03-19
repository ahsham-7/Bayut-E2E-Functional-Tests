import Page from "./page.js";
class HomePage extends Page {
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run')
    }
    openProduction() {
        super.openProduction('https://www.bayut.com/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev')
    }
    get TruValueQuickLinkCard(){
        return $('//div[@aria-label="Quick link cards"]//div[text()="TruValue™"]')
    }
    TruValuecard="https://sl:getin1@bayut-e2e-development.dubizzle.dev/tru-value"

    get NBSQuickLinkCard(){
        return $('//div[@aria-label="Quick link cards"]//div[text()="Search 2.0"]')
    }
    NBScard="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?map_active=true&commute_active=true"

    get MBSQuickLinkCard(){
        return $('//div[@aria-label="Quick link cards"]//div[text()="Map View"]')
    }
    MBScard="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?map_active=true"

    get CarousalSection(){
        return $('//div[@class="db481140"]')
    }
    get Carousal_1(){
        return $('//div[@class="a7ae69a9"][1]')
    }
    get Carousal_2(){
        return $('//div[@class="a7ae69a9"][2]')
    }
    get Carousal_3(){
        return $('//div[@class="a7ae69a9"][3]')
    }
    get FloorPlanBanner(){
        return $('//a[@class="_5724ddba _446b4b9b"]')
    }
    get View360Banner(){
        return $('//a[@class="_5724ddba _7bcc0a66"]')
    }
    get VideoToursBanner(){
        return $('//a[@class="_5724ddba ab6b39b4"]')
    }
    get PurposeFilter(){
        return $('//div[@aria-label="Purpose filter"]')
    }
    get BuyFilter(){
        return $('//button[@aria-label="Buy"]')
    }
    get RentFilter(){
        return $('//button[@aria-label="Rent"]')
    }
    get LocationField(){
        return $('//div[@aria-label="Location filter" and @class="c97c9f73 _20376027"]//input')
    }
    get PropertyTypeFilter(){
        return $('//div[@aria-label="Category filter"]')
    }
    get Beds_BathsFilter(){
        return $('//div[@aria-label="Beds & Baths filter" and @role="button"]')
    }
    get AreaFilter(){
        return $('//div[@aria-label="Area filter" and @role="button"]')
    }
    get PriceFilter(){
        return $('//div//span//span[@class="fontCompensation" and contains(text(), "Price")]')
    }
    get FindButton(){
        return $('//a[@aria-label="Find button"]')
    }
    get DoneButton(){
        return $('//button[@aria-label="Close"]')
    }
    get LocationDropdown(){
        return $('//ul[@class="_65d3c306"]')
    }
    get BusinessBayLoc(){
        return $('//header//ul/div[1]/div[1]/li/button')
    }
    get PropertyType(){
        return $('//div[@aria-label="Category filter"]')
    }
    get PropertyTypeMenu(){
        return $('//div[@class="a11c4a06"]')
    }
    get PriceFilter(){
        return $('//div[contains(@class, "e7c6503c")]//span[text()="Price (AED)"]')
    }
    get MiniumField(){
        return $('//span[text()="Minimum"]/../div//input[@id="activeNumericInput"]')
    }
    get MaximumField(){
        return $('//span[@class="_5af635f0 FilterDesign2022" and text()="Maximum"]/following::input[@id="inactiveNumericInput"]')
    }
    async ExistenceofProperties(){
        await this.waitForElementDisplayed(this.PropertyType)
        await this.PropertyType.click()
        await this.waitForElementDisplayed(this.PropertyTypeMenu)
    }
    get Apartment(){
        return $('//div//li[text()="Apartment"]')
    }
    get Townhouse(){
        return $('//div//li[text()="Townhouse"]')
    }
    get Area(){

    }
    get SearchPageTab(){
        return $('//button[@aria-label="Property search"]')
    }
    get DubaiTransactionsTab(){
        return $('//button[@aria-label="Transactions"]')
    }
    get GptTab(){
        return $('//button[@aria-label="BayutGPT button"]')
    }
    get DubaiTransactionHomaPageLabel(){
        return $('//div[@aria-label="Home Title"]/h1[text()="Check out the latest transactions in Dubai real estate!"]')
    }
    get HomaPageLabel(){
        return $('//div[@aria-label="Home Title"]/h1[text()="Real homes live here"]')
    }
    get BayutGptHomePageLabel(){
        return $("//div[@aria-label='Home Title']/h1[text()='Get help from the UAE's First AI Property Search Assistant!']")
    }
    get HomePageTitleText(){
        return $('//div[@aria-label="Home Title"]/h1')
    }
    Title_Homepage="Real homes live here"
    Title_DT="Check out the latest transactions in Dubai real estate!" 
    Tile_BayutGPT="Get help from the UAE's First AI Property Search Assistant!"

    get PopularLinks00(){
        return $('//div[@class="_6944f1d2"]/a[.="Dubai Apartments" and contains(@href, "sale")]')
    }
    get PopularLinks10(){
        return $('//a[contains(text(), "Dubai Marina") and contains(@href, "sale")]')
    }
    get PopularLinks20(){
        return $('//a[contains(text(), "Jumeirah Lake Towers (JLT)") and contains(@href, "sale")]')
    }
    get PopularLinks30(){
        return $('//a[contains(text(), "Downtown Dubai") and contains(@href, "sale")]')
    }
    get PopularLinks40(){
        return $('//a[contains(text(), "Business Bay") and contains(@href, "sale")]')
    }
    get PopularLinks50(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Palm Jumeirah" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks60(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Jumeirah Village Circle (JVC)" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks70(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Dubai Silicon Oasis" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks80(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Dubai Sports City" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks90(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Jumeirah Beach Residence (JBR)" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks100(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="International City" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks01(){
        return $('//a[contains(text(), "Abu Dhabi Apartments") and contains(@href, "sale")]')
    }
    get PopularLinks02(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Reem Island" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks03(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Reef" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks04(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Ghadeer" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks05(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Raha Beach" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks06(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Saadiyat Island" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks07(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Yas Island" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks001(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Sharjah" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks002(){
        return $('//a[contains(text(), "Ajman") and contains(@href, "sale/apartments")]')
    }
    get PopularLinks003(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Ras Al Khaimah" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks004(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Sawan" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks005(){
        return $('//li[contains(@class, "_76ddbf32") and contains(@class, "af2d23c9")]//a[text()="Al Nahda (Sharjah)" and contains(@href, "sale/apartments")]')
    }
    get PopularLinks2000(){
        return $('//a[contains(text(), "Dubai Villas") and contains(@href, "sale/villas")]')
    }
    get PopularLinks2001(){
        return $('//a[text()="Arabian Ranches" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2002(){
        return $('//a[text()="Dubailand" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2003(){
        return $('//a[text()="Dubai Hills Estate" and contains(@href, "sale/villas")]')

    } get PopularLinks2004(){
        return $('//a[text()="Palm Jumeirah" and contains(@href, "sale/villas")]')

    } 
    get PopularLinks2005(){
        return $('//a[text()="The Springs" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2006(){
        return $('//a[text()="Arabian Ranches 2" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2007(){
        return $('//a[text()="DAMAC Hills" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2008(){
        return $('//a[text()="Jumeirah Park" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2009(){
        return $('//a[text()="Mudon" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2010(){
        return $('//a[text()="Al Furjan" and contains(@href, "sale/villas")]')
    } 
    get PopularLinks2011(){
        return $('//a[text()="The Meadows" and contains(@href, "sale/villas")]')
    }

    
    get PopularLinks3000(){
        return $('//a[text()="Abu Dhabi Villas" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3001(){
        return $('//a[text()="Al Reef" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3002(){
        return $('//a[text()="Yas Island" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3003(){
        return $('//a[text()="Saadiyat Island" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3004(){
        return $('//a[text()="Al Raha Gardens" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3005(){
        return $('//a[text()="Mohammed Bin Zayed City" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3006(){
        return $('//a[text()="Al Raha Golf Gardens" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3007(){
        return $('//a[text()="Khalifa City" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3009(){
        return $('//a[text()="Hydra Village" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3010(){
        return $('//a[text()="Shakhbout City" and contains(@href, "sale/villas")]')
    }
    get PopularLinks3001(){
        return $('//a[text()="Al Mushrif" and contains(@href, "sale/villas")]')
    }


    get ForwardBtn(){
        return $('//button[@aria-label="Carousel next button"]')
    }

    get BackwardBtn(){
        return $('//button[@class="b55ba3bb _9dd6c0c3"]')
    }

    get AgencyCarousalElement(){
        return $('//div[@class="_197a6aa3"]')
    }

    get DTLocationField(){
        return $('//div[@aria-label="Location filter"]//input')
    }
    get DTRentPurposeType(){
        return $('//button[@class="f481d4d9" and text()="Rent"]')
    }
    get DTPropertyType(){
        return $('//div[@class="_3a42e70b"]//div[@aria-label="Category filter"]')
    }
    get DTBedsFilter(){
        return $('//div[@aria-label="Beds filter"]')
    }
    get DTShowDataFor(){
        return $('//div[@aria-label="Time interval filter"]')
    }
    get DTShowDataForMenu(){
        return $('')
    }
    get DTShowDataForValue(){
        return $('')
    }
    get GptChatBtn(){
        return $('//button[text()="Chat"]')
    }
    get ChatGptSuggestion1(){
        return $('//div[text()="Average Rental yield in Dubai"]')
    }
    get GptAnswer1(){
        return $('//div[@aria-label="User message" and text()="Average Rental yield in Dubai"]')
    }
    get ChatGptSuggestion2(){
        return $('//div[text()="Best areas to invest in Dubai"]')
    }
    get GptAnswer2(){
        return $('//div[@aria-label="User message" and text()="Best areas to invest in Dubai"]')
    }
    get ChatGptSuggestion3(){
        return $('//div[text()="Properties with swimming pool in Dubai"]')
    }
    get GptAnswer3(){
        return $('//div[@aria-label="User message" and text()="Properties with swimming pool in Dubai"]')
    }
    get ChatGptPopUp(){
        return $('//div[@class="ed791840" and @aria-label="Dialog"]')
    }
    get BayutGptTerms(){
        return $('//button[text()="terms"]')
    }
    get BayutGptTermsPopUp(){
        return $('//div[@class="_1075545d d059c029"]/ancestor::div[@aria-label="Dialog"]')
    }
    get Login_SignupPopup(){
        return $('//div[@class="_1075545d _8e32ea1d d059c029"]')
    }
    get LoginPopUp(){
        return $('//div[@class="_46bac131 a1ba5ced"]')
    }
    get GptLoginBtn(){
        return $('//button[@class="_954aad1f"]')
    }
    get GptSignUpBtn(){
        return $('//button[@class="_206ff854"]')
    }
    get SignupPopUp(){
        return $('//div[@class="_46bac131 a1ba5ced"]')
    }
    get BayutGptInput(){
        return $('//input[@placeholder="Ask me anything about UAE real estate."]')
    }
    VerifyInputText2(value){
        return $('')
    }
    get VerifyInputText(){
        return $('//div[@aria-label="User message" and text()="Best properties for sale in DUBAI"]')
    }
    VerifyInputText2(value){
        return $('//div[@aria-label="User message" and text()="' + value + '"]');
    }




    



    get ViewAllBtn(){
        return $('//main/div[5]/div/div[2]/div[1]/div[1]/div/div[1]/div[2]')
    }
    get ViewAllBtn2(){
        return $('//main/div[5]/div/div[2]/div[1]/div[1]/div/div[2]/div[2]')
    }
    async SelectPropertyType(element){
         if (element ==='apartment') {
            await this.waitForElementDisplayed(this.PropertyType)
            await this.PropertyType.click()
            await this.PropertyTypeMenu.waitForVisible({ timeout: 5000 });
            await this.PropertyTypeMenu.waitForClickable({ timeout: 5000 })
             await this.waitForElementDisplayed(this.PropertyTypeMenu)
              await this.Apartment.click()
        }
    //    else if(element==='townhouse'){
    //         await this.ExistenceofProperties()
    //        // await this.Townhouse.click()
    //     }
    }


    Apartment="https://bayut-e2e-development.dubizzle.dev/to-rent/apartments/uae/"
    Townhouse="https://bayut-e2e-development.dubizzle.dev/to-rent/townhouses/uae/"    
    FloorPlan="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?has_floorplan=true"
    View360="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?panoramas_min=1"
    VideoTours="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?videos_min=1"

    get BackToTopBtn(){
        return $('//div[@class="e48a92dd"]')
    }

    async Click_DoneButton(){
        await this.waitForElementDisplayed(this.DoneButton)
        await this.DoneButton.click()
    }
    async SelectBuyFilter(){
        await this.waitForElementDisplayed(this.PurposeFilter)
        await this.PurposeFilter.click()

        await this.waitForElementDisplayed(this.BuyFilter)
        await this.BuyFilter.click()

        await this.Click_DoneButton()
    }
    async SelectRentFilter(){
        await this.SelectBuyFilter()

        await this.waitForElementDisplayed(this.PurposeFilter)
        await this.PurposeFilter.click()

        await this.waitForElementDisplayed(this.RentFilter)
        await this.RentFilter.click()

        await this.Click_DoneButton()
    }
    async SelectResidentialPropertytype(){
        await this
    }
    async SelectBusinessBayLocation(loc_name){
        await this.waitForElementDisplayed(this.LocationField)
        await this.LocationField.setValue(loc_name)

        await this.waitForElementDisplayed(this.LocationDropdown)
        await this.waitForElementDisplayed(this.BusinessBayLoc)

        await this.BusinessBayLoc.click()
    }
    BuyUrl="https://sl:getin1@bayut-e2e-development.dubizzle.dev/for-sale/property/uae/"
    RentUrl="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/"
    BusinessBayUrl="https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/dubai/business-bay/"


    async CarousalIsDisplayed(element,element1){
        await this.waitForElementDisplayed(await this.CarousalSection)
        await this.waitForElementDisplayed(await element1)
        await element1.click()
        await this.waitForElementDisplayed(await element)
    }
    async ClickonCarousal(element1,element2){
        await element1.click()
        await element2.click()
    }
    async VerifyPriceFilter(min,max){
        this.openE2E()
        await HomePage.waitForElementDisplayed(HomePage.PriceFilter)
        await HomePage.PriceFilter.click()
        await HomePage.waitForElementDisplayed(HomePage.MiniumField)
        await HomePage.waitForElementDisplayed(HomePage.MaximumField)
        await HomePage.MiniumField.setValue("10000")
        await HomePage.MaximumField.setValue("100000")
        await HomePage.FindButton.click()
        await HomePage.waitForPageToLoad()
        const currentUrl = await browser.getUrl()
        expect(currentUrl).to.include('10000').and.to.include('100000')
    }
     
    
}
export default new HomePage()