class GooglePO {

    constructor(page) {
        this.page = page;
        this.searchBtn = "//input[@role='button']";
    }

    getSearchBtnText() {
        return this.page.locator(this.searchBtn).last().getAttribute('value');
    }
}

module.exports = GooglePO;