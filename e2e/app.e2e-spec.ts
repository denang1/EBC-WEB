import { EBCWebPage } from './app.po';

describe('ebc-web App', () => {
  let page: EBCWebPage;

  beforeEach(() => {
    page = new EBCWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
