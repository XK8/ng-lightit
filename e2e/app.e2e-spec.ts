import { NgLightitPage } from './app.po';

describe('ng-lightit App', function() {
  let page: NgLightitPage;

  beforeEach(() => {
    page = new NgLightitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
