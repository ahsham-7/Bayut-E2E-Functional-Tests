import { expect } from 'chai'
import FloorPlan from '../pageobjects/floorplan.page.js' 
describe('FloorPlan Test Cases: Smoke Tests Only', async()=>{
    it('Verify Floor Plan Cards: Dubai', async() =>{
         FloorPlan.openStage()
         await FloorPlan.VerifyFloorPlanCardExists(FloorPlan.DubaiFloorPlan)
         await FloorPlan.DubaiFloorPlan.click()
         await FloorPlan.waitForPageToLoad()
         const currentUrl = await browser.getUrl();
         expect(currentUrl).to.include('dubai');
    }),

    it('Verify Floor Plan Cards: Abu Dhabi', async() =>{
        FloorPlan.openStage()
        await FloorPlan.VerifyFloorPlanCardExists(FloorPlan.AbuDhabiFloorPlan)
        await FloorPlan.AbuDhabiFloorPlan.click()
        await FloorPlan.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include('abu-dhabi');
   }),

   it('Verify Floor Plan Cards: Ajman', async() =>{
    FloorPlan.openStage()
    await FloorPlan.VerifyFloorPlanCardExists(FloorPlan.AjmanFloorPlan)
    await FloorPlan.AjmanFloorPlan.click()
    await FloorPlan.waitForPageToLoad()
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include('ajman');
}),

it('Verify Floor Plan Cards: Sharjah', async() =>{
    FloorPlan.openStage()
    await FloorPlan.VerifyFloorPlanCardExists(FloorPlan.SharjahFloorPlan)
    await FloorPlan.SharjahFloorPlan.click()
    await FloorPlan.waitForPageToLoad()
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include('sharjah');
}),

it('Verify Floor Plan Cards: Al-Ain', async() =>{
    FloorPlan.openStage()
    await FloorPlan.VerifyFloorPlanCardExists(FloorPlan.AlAinFloorPlan)
    await FloorPlan.AlAinFloorPlan.click()
    await FloorPlan.waitForPageToLoad()
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include('al-ain');
})

})