import { GlothaitourPage } from './app.po';

describe('glothaitour App', () => {
  let page: GlothaitourPage;

  beforeEach(() => {
    page = new GlothaitourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
