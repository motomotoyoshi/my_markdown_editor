const assert = require("assert");
const createApplication = require("./createApplication");

describe("アプリケーションの起動テスト", function() {
  let app;
  this.timeout(10000);

  beforeEach(function() {
    app = createApplication();
    return app.start();
  });
  afterEach(function() {
    return app.stop();
  });

  it("アプリケーションを起動するとウィンドウが1つ表示される", function() {
    return app.client.getWindowCount()
      .then((count) => assert.equal(count, 1));
  });
});