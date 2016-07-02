import { Appfire2Page } from './app.po';

describe('appfire2 App', function() {
  let page: Appfire2Page;

  beforeEach(() => {
    page = new Appfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
