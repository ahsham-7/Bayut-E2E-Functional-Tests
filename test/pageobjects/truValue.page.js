import Page from "./page.js";
class TruValue extends Page {
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run/tru-value')
    }
    openProduction() {
        super.openProduction('https://www.bayut.com/tru-value')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/tru-value')
    }
    get PurposeFilter(){
        return $('//div[@class="_9dc6d35d FilterDesign2022" and label[contains(text(), "purpose")]]//div[@role="button"]')
    }
    get PurposeDropDown(){
        return $('//div[@class="_3f35dbb9 FilterDesign2022 _0caec95d"]')
    }
    get Buy(){
        return $('//button[@aria-label="Buy"]')
    }
    get Rent(){
        return $('//button[@aria-label="Rent"]')
    }
    get Done(){
        return $('//button[@aria-label="Close"]')
    }
    get LocationField(){
        return $('//div[contains(@class, "b9e5541a") and contains(@class, "_6a3a3de9") and contains(@class, "_4f597301")]/div[@aria-label="Location filter"]//input[@type="text"]')
    }
    get PropertyType(){
        return $('//div[@class="_9dc6d35d FilterDesign2022" and label[contains(text(), "property type")]]//div[@role="button"]')
    }
    get PropertyTypeDropdown(){
        return $('//div[@class="_7d8106a0"]')
    }
    get Apartment(){
        return $('//li[text()="Apartment"]')
    }
    get Beds(){
        return $('//div[@class="_9dc6d35d FilterDesign2022" and label[contains(text(), "Beds")]]//div[@role="button"]')
    }
    get BedsDropdown(){
        return $('//div[contains(@class, "_3f35dbb9") and contains(@class, "_9c9e24b1")]//ul[@aria-label="Beds filter"]')
    }
    get Baths(){
        return $('//div[@class="_9dc6d35d FilterDesign2022" and label[contains(text(), "baths")]]//div[@role="button"]')
    }
    get BathsDropdown(){
        return $('//div[contains(@class, "_3f35dbb9") and contains(@class, "_9c9e24b1")]//ul[@aria-label="Baths filter"]')
    }
    get SelectBeds_Baths_2(){
        return $('//li[text()="2"]')
    }
    get SelectBeds_Baths_3(){
        return $('//li[text()="3"]')
    }
    get Area(){
        return $('//div[@class="ad62c515 d2f17631 FilterDesign2022" and @aria-label="Area filter"]//input[@placeholder="e.g. 1078 Sq. M."]')
    }
    async SelectRentPurpose(){
        await this.waitForElementDisplayed(this.PurposeFilter)
        await this.PurposeFilter.click()
        await this.waitForElementDisplayed(this.PurposeDropDown)
        await this.waitForElementDisplayed(this.Rent)
        await this.waitForElementDisplayed(this.Done)
        await this.Rent.click()
        await this.Done.click()
    }
    async SelectBuyPurpose(){
        await this.waitForElementDisplayed(this.PurposeFilter)
        await this.PurposeFilter.click()
        await this.waitForElementDisplayed(this.PurposeDropDown)
        await this.waitForElementDisplayed(this.Buy)
        await this.waitForElementDisplayed(this.Done)
        await this.Buy.click()
        await this.Done.click()
    }
    async SelectPropertyTypeApartment(){
        await this.PropertyType.click()
        await this.waitForElementDisplayed(this.PropertyTypeDropdown)
        await this.waitForElementDisplayed(this.Apartment)
        await this.Apartment.click()
        await this.Done.click()
    }
    async SelectBeds(){
        await this.Beds.click()
        await this.waitForElementDisplayed(this.BedsDropdown)
        await this.waitForElementDisplayed(this.SelectBeds_Baths_2)
        await this.SelectBeds_Baths_2.click()
        await this.Done.click()
    }
    async SelectBaths(){
        await this.Baths.click()
        await this.waitForElementDisplayed(this.BathsDropdown)
        await this.waitForElementDisplayed(this.SelectBeds_Baths_2)
        await this.SelectBeds_Baths_2.click()
        await this.Done.click()
    }
    async SelectArea(){
        await this.Area.click()
        await this.Area.setValue('1200')

    }
    
    
}
export default new TruValue()
