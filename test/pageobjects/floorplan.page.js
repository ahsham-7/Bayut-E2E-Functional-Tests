import Page from "./page.js";
class FloorPlan extends Page {
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run/floorplans/')
    }
    openProduction() {
        super.openProduction('https://www.bayut.com/floorplans/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/floorplans/')
    }
    get AjmanFloorPlan(){
        return $('//a[@title="Ajman Floor plans"]')
    }
    get DubaiFloorPlan(){
        return $('//a[@title="Dubai Floor plans"]')
    }
    get AbuDhabiFloorPlan(){
        return $('//a[@title="Abu Dhabi Floor plans"]')
    }
    get SharjahFloorPlan(){
        return $('//a[@title="Sharjah Floor plans"]')
    }
    get AlAinFloorPlan(){
        return $('//a[@title="Al Ain Floor plans"]')
    }

    async VerifyFloorPlanCardExists(element){
        await this.waitForElementDisplayed(element)
    }
    
}
export default new FloorPlan()



