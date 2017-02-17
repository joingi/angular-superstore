import { AngularSupersportPage } from './app.po';

describe('angular-supersport App', function() {
  let page: AngularSupersportPage;

  beforeEach(() => {
    page = new AngularSupersportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
