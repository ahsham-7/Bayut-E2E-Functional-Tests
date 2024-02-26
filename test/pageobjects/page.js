/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openStage (path) {
         browser.url(path)
         browser.maximizeWindow()
    }
    openE2E (path) {
        browser.url(path)
        browser.maximizeWindow()
        browser.deleteCookies()
   }
    openProduction (path) {
        browser.url(path)
        browser.maximizeWindow()
        browser.deleteCookies()
   }
   async waitForPageToLoad() {
    browser.waitUntil(
        () => {
            // You can customize this condition based on your application
            return browser.execute(() => document.readyState === 'complete');
        },
        {
            timeout: 7000,
            timeoutMsg: 'Page did not load within the specified time',
            interval: 500, // Polling interval in milliseconds
        }
    );   
}
async waitForElementDisplayed(element, options = { timeout: 3000 }) {
        return element.waitForDisplayed(options);
  }
  
}
    
       
     
         
   


   
    

