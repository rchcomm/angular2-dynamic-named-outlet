import { DynamicRoutingPage } from './app.po';

describe('dynamic-routing App', function() {
  let page: DynamicRoutingPage;

  beforeEach(() => {
    page = new DynamicRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
