import { browser, by, element } from 'protractor';

export class MyFirstCRUDAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
