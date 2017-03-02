import { SeatingChartPage } from './app.po';

describe('seating-chart App', function() {
  let page: SeatingChartPage;

  beforeEach(() => {
    page = new SeatingChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
