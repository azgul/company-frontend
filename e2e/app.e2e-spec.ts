import { CompanyFrontendPage } from './app.po';

describe('company-frontend App', () => {
  let page: CompanyFrontendPage;

  beforeEach(() => {
    page = new CompanyFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
