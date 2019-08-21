import { browser, by, element, WebElement } from 'protractor';
import { By } from 'selenium-webdriver';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  sendNum1(num : number) : any{
     element(by.id('num1')).sendKeys(num);
  }

  sendNum2(num : number) : any{
     element(by.id('num2')).sendKeys(num);
  }

  getSub(num1 , num2){
    this.sendNum1(num1);
    this.sendNum2(num2);
    element.all(by.tagName('option')).then(function (options) {
      options[2].click();
    });
    element(by.buttonText('Perform')).click();
    browser.sleep(1000);
    return element(by.css('p')).getText();
  }

  getSum(num1 , num2){
    this.sendNum1(num1);
    this.sendNum2(num2);
    element.all(by.tagName('option')).then(function (options) {
      options[0].click();
    });
    element(by.buttonText('Perform')).click();
    browser.sleep(1000);
    return element(by.css('p')).getText();
  }

  getMul(num1 , num2){
    this.sendNum1(num1);
    this.sendNum2(num2);
    element.all(by.tagName('option')).then(function (options) {
      options[1].click();
    });
    element(by.buttonText('Perform')).click();
    browser.sleep(1000);
    return element(by.css('p')).getText();
  }
  
  getDiv(num1 , num2){
    this.sendNum1(num1);
    this.sendNum2(num2);
    element.all(by.tagName('option')).then(function (options) {
      options[3].click();
    });
    element(by.buttonText('Perform')).click();
    browser.sleep(1000);
    return element(by.css('p')).getText();
    
  }
}
