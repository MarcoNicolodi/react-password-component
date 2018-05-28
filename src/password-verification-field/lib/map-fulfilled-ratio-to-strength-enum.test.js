import map from "./map-fulfilled-ratio-to-strength-enum";

describe("map-fulfilled-ratio-to-strength-enum", () => {
  it("should return weak if ratio is lower than 1/3", () => {
    expect(map(0.3333)).toEqual("weak");
  });

  it("should return strong if ratio is greater than 1/3 but doesnt meet all criterias", () => {
    expect(map(0.34)).toEqual("strong");
    expect(map(0.9)).toEqual("strong");
  });

  it("should return very strong if ratio is 1", () => {
    expect(map(1)).toEqual("very-strong");
  });
});
