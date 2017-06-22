import { HtmlToPdfPage } from './app.po';

describe('html-to-pdf App', () => {
  let page: HtmlToPdfPage;

  beforeEach(() => {
    page = new HtmlToPdfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
