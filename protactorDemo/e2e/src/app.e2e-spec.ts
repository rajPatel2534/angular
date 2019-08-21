import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('Welcome to protactorDemo!');
  // });


  it('should display sum', () => {
    page.navigateTo();
    expect(page.getSum(20,10)).toEqual('30');
  });

  
  it('should display substraction', () => {
    page.navigateTo();
    expect(page.getSub(20,10)).toEqual('10');
  });

  it('should display multiplication', () => {
    page.navigateTo();
    expect(page.getMul(20,10)).toEqual('200');
  });

  it('should display division', () => {
    page.navigateTo();
    expect(page.getDiv(20,10)).toEqual('2');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
