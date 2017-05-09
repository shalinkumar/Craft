import { CraftersPage } from './app.po';

describe('crafters App', () => {
  let page: CraftersPage;

  beforeEach(() => {
    page = new CraftersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
