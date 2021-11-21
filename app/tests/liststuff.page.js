import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** checking. */
  async isDisplayed(testController) {
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const listStuffPage = new ListStuffPage();
