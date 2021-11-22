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

  async hasTable(testController) {
    const rowCount = Selector('tr').count; // select  <tr>
    await testController.expect(rowCount).gte(2);
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listStuffPage = new ListStuffPage();
