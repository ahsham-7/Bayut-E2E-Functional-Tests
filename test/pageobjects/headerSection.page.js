import Page from "./page.js";
class Header extends Page{
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run')
    }
    openProduction() {
        super.openProduction('https://www.bayut.com/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev')
    }
get myBayuticon(){
return $('//a[@aria-label="Blogs"]')
}
get findMyAgentBtn(){
    return $('//a[@aria-label="Find my Agent"]')
}
get FloorPlans(){
    return $('//a[@title="Floor Plans"]')
}
FloorPlans="https://sl:getin1@bayut-e2e-development.dubizzle.dev/companies/"

get Guides(){
    return $('//div[@aria-label="Guides"]')
}
get AreaGuides(){
    return $('//li[@class="_67aaba06"]/a[text()="Area Guides"]')
}
get BuildingGuides(){
    return $('//li[@class="_67aaba06"]/a[text()="Building Guides"]')
}
get SchoolGuides(){
    return $('//li[@class="_67aaba06"]/a[text()="School Guides"]')
}
get MarketIntelligence(){
    return $('//div[@aria-label="Market intelligence"]')
}
get TruValue(){
    return $('//div[@class="dropdown__content f764de93"]//a[text()="TruValue™"]')
}
get PropertyPrices(){
    return $('//div[@class="dropdown__content f764de93"]//a[text()="Property Prices"]')
}
get DubaiTransactionPage(){
    return $('//div[@class="dropdown__content f764de93"]//a[text()="Dubai Transactions"]')
}
get Trends(){
    return $('//div[@class="dropdown__content f764de93"]//a[text()="Trends"]')
}
get New_Projects(){
    return $('//div[@class="dropdown__content f764de93"]//a[text()="New Projects"]')
}
get AgentPortal(){
return $('//a[@aria-label="Agent Portal"]')
}
get Events(){
    return $('//span[@class="ffebecbc" and text()="Events"]')
}
get B3DXB_2022(){
    return $('//div[@class="dropdown__content _2efe2d1a"]//div[text()="B3DXB 2022"]')
}
get YourHomeYourChoice(){
    return $('//div[@class="dropdown__content _2efe2d1a"]//div[text()="Your Home Your Choice"]')
}
async openGuidesPopUp(){
   await this.waitForElementDisplayed(await this.Guides)
    await this.Guides.click()
}
async openMarketIntelligence(){
    await this.waitForElementDisplayed(await this.MarketIntelligence)
    await this.MarketIntelligence.click()
}
async openEventsPopUp(){
    await this.waitForElementDisplayed(await this.Events)
    await this.Events.click()
}

}
export default new Header()