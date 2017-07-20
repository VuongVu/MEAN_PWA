import { MEANPWAPage } from './app.po';

describe('mean-pwa App', () => {
  let page: MEANPWAPage;

  beforeEach(() => {
    page = new MEANPWAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
