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
    
}
export default new FloorPlan()



