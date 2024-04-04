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
    
}
export default new TruValue()
