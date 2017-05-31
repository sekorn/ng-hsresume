import { NgHsresumePage } from './app.po';

describe('ng-hsresume App', () => {
  let page: NgHsresumePage;

  beforeEach(() => {
    page = new NgHsresumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
