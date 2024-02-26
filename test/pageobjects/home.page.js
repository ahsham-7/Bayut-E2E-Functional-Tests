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