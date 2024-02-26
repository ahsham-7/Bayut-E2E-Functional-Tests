import Page from "./page.js";
class Footer extends Page {
    openStage() {
        super.openStage('https://sl:getin1@stage.bayut.sector.run')
    }
    openProduction() {
        super.openProduction('https://www.bayut.com/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev')
    }
    get AboutUs() {
        return $('//a[@aria-label="About us"]')
    }
    E2EAboutUs='https://sl:getin1@bayut-e2e-development.dubizzle.dev/about/aboutus.html'

    get Careers(){
        return $('//a[@aria-label="Careers"]')
    }
    get ContactUs(){
        return $('//a[@aria-label="Contact us"]')
    }
    E2EContactUs='https://sl:getin1@bayut-e2e-development.dubizzle.dev/contactus.html'

    get Terms_Privacy(){
        return $('//a[@aria-label="Terms and privacy policy"]')
    }
    E2ETerms_PrivacyPolicy='https://sl:getin1@bayut-e2e-development.dubizzle.dev/terms.html'

    get Facebook(){
        return $('//a[@aria-label="Follow us on facebook"]')
    }
    get Twitter(){
        return $('//a[@aria-label="Follow us on twitter"]')
    }
    get LinkedIn(){
        return $('//a[@aria-label="Follow us on linkedin"]')
    }
    get Instagram(){
        return $('//a[@aria-label="Follow us on instagram"]')
    }
    get Youtube(){
        return $('//a[@aria-label="Follow us on youtube"]')
    }
    get AppleAppStore(){
        return $('//div[@class="e6a18ca9 en"]')
    }
    get GooglePlay(){
        return $('//div[@class="d799b625 en"]')
    }
    get HuaweiAppGallery(){
        return $('//div[@class="_1f072239 en"]')
    }
    get CountryPickerButton(){
        return $('//button[@aria-label="Select country"]')
    }
    get CountriesDropdown(){
        return $('//ul[@class="ab17c37c _8fd21802"]')
    }
    get Zameen(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.zameen.com"]')
    }
    get BayutKSA(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.bayut.sa"]')
    }
    get BayutJO(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.bayut.jo"]')
    }
    get LamudiPH(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.lamudi.com.ph"]')
    }
    get LamudiID(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.lamudi.co.id"]')
    }
    get BayutEG(){
        return $('//ul[@class="ab17c37c _8fd21802"]/li/a[@href="https://www.bayut.eg"]')
    }
    get BackToTopBtn(){
        return $('//div[@class="e48a92dd"]')
    }
     E2EAboutUs='https://sl:getin1@bayut-e2e-development.dubizzle.dev/about/aboutus.html'
     E2EContactUs='https://sl:getin1@bayut-e2e-development.dubizzle.dev/contactus.html'
     E22Terms_PrivacyPolicy='https://sl:getin1@bayut-e2e-development.dubizzle.dev/terms.html'

    
}
export default new Footer()