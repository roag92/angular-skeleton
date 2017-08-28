import { App } from './app.po';

describe('App', () => {
  let page: App;

  beforeEach(() => {
    page = new App();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
