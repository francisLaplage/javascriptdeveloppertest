const funct = require("./functions");
const data = require("./data");

describe("test filtreData", () => {
  it("test filter ry", () => {
    const o = funct.filtreData(data.data, "ry");
    expect(o).toEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });

  it("test filter Di", () => {
    const o = funct.filtreData(data.data, "Di");
    expect(o).toEqual([
      {
        name: "Dillauti",
        people: [
          {
            name: "Philip Murray",
            animals: [
              {
                name: "Dinosaur",
              },
            ],
          },
        ],
      },
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lina Allen",
            animals: [
              {
                name: "Jaguarundi",
              },
            ],
          },
        ],
      },
    ]);
  });
});
