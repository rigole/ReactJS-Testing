
const appTest = require("./App")


test("containt link", () => {
    expect(appTest).toMatchSnapshot("<a>")
})
