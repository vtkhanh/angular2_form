import { Ng2FormsTemplateDrivenPage } from './app.po';

describe('ng2-forms-template-driven App', function() {
  let page: Ng2FormsTemplateDrivenPage;

  beforeEach(() => {
    page = new Ng2FormsTemplateDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
