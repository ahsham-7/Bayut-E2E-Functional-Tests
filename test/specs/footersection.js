import Footer from '../pageobjects/footerSection.page.js'
import { expect } from 'chai';
describe('Footer Sector', async () => {
    it('Verfiy Redirection of About Us Section ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.AboutUs)
        await Footer.AboutUs.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(await browser.getTitle())
        expect(Footer.E2EAboutUs).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Careers Section ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Careers)
        await Footer.Careers.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.Careers)
        await Footer.Careers.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        expect(expectedUrl).to.equal(currentUrl);
        })
    it('Verfiy Redirection of Contact Us Section ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.ContactUs)
        await Footer.ContactUs.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        expect(Footer.E2EContactUs).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Terms & Privacy Section ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Terms_Privacy)
        await Footer.Terms_Privacy.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        expect(Footer.E22Terms_PrivacyPolicy).to.equal(currentUrl)
    }),
    it('Verfiy Redirection of Facebook ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Facebook)
        await Footer.Facebook.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.Facebook)
        await Footer.Facebook.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Twitter ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Twitter)
        await Footer.Twitter.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.Twitter)
        await Footer.Twitter.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of LinkedIn ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.LinkedIn)
        await Footer.LinkedIn.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.LinkedIn)
        await Footer.LinkedIn.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Intagram', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Instagram)
        await Footer.Instagram.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.Instagram)
        await Footer.Instagram.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of YouTube ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.Youtube)
        await Footer.Youtube.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.Youtube)
        await Footer.Youtube.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Apple Store ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.AppleAppStore)
        await Footer.AppleAppStore.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.AppleAppStore)
        await Footer.AppleAppStore.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Google Play Store ', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.AppleAppStore)
        await Footer.AppleAppStore.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.AppleAppStore)
        await Footer.AppleAppStore.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Redirection of Huawei App Gallery', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.HuaweiAppGallery)
        await Footer.HuaweiAppGallery.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.HuaweiAppGallery)
        await Footer.HuaweiAppGallery.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy Zameen Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.Zameen)
        await Footer.Zameen.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.Zameen)
        await Footer.Zameen.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy BayutKSA Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutKSA)
        await Footer.BayutKSA.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutKSA)
        await Footer.BayutKSA.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy BayutJO Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutJO)
        await Footer.BayutJO.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutJO)
        await Footer.BayutJO.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy LamudiPH Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.LamudiPH)
        await Footer.LamudiPH.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.LamudiPH)
        await Footer.LamudiPH.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy LamudiID Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.LamudiID)
        await Footer.LamudiID.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.LamudiID)
        await Footer.LamudiID.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
    }),
    it('Verfiy BayutEG Redirection', async () => {
        Footer.openE2E()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutEG)
        await Footer.BayutEG.click()
        await Footer.waitForPageToLoad()
        const currentUrl = await browser.getUrl();
        console.log(currentUrl);
        Footer.openProduction()
        await Footer.waitForElementDisplayed(Footer.CountryPickerButton)
        await Footer.CountryPickerButton.click()
        await Footer.waitForElementDisplayed(Footer.CountriesDropdown)
        await Footer.waitForElementDisplayed(Footer.BayutEG)
        await Footer.BayutEG.click()
        await Footer.waitForPageToLoad()
        const expectedUrl = await browser.getUrl();
        console.log(expectedUrl);
        expect(expectedUrl).to.equal(currentUrl);
     })
    


})


