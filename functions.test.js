const functions = require("./functions");

const mockObject = {
  name: "joe",
  age: 30,
  address: {
    street: "best street",
    zip: 2000,
  },
};

test("Test flattenObject", () => {
  expect(functions.flattenObject(mockObject)).toEqual({
    name: "joe",
    age: 30,
    "address.street": "best street",
    "address.zip": 2000,
  });
});

const mockFlatObj = {
  name: "joe",
  age: 30,
  "address.street": "best street",
  "address.zip": 2000,
};

test("Test generateQuerystring", () => {
  expect(functions.generateQuerystring(mockFlatObj)).toBe("name=joe&age=30&address.street=best street&address.zip=2000");
});
