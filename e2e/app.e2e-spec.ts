import { SacloudTimerPage } from './app.po';

describe('sacloud-timer App', () => {
  let page: SacloudTimerPage;

  beforeEach(() => {
    page = new SacloudTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
