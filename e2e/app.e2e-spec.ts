import { MyFirstCRUDAppPage } from './app.po';

describe('my-first-crudapp App', () => {
  let page: MyFirstCRUDAppPage;

  beforeEach(() => {
    page = new MyFirstCRUDAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
