import { tileSizePx } from "./constants";
import { getObjectViewOffset } from "./gridLogic";
import { Vector2 } from "./types";

type ViewOffsetTest = {
  viewCenterWorldPos: Vector2;
  objectWorldPos: Vector2;
  viewSizePx: Vector2;
  expected: Vector2;
};

const viewOffsetTests: ViewOffsetTest[] = [
  {
    viewCenterWorldPos: {
      x: 12,
      y: 3,
    },
    objectWorldPos: {
      x: 11,
      y: 2,
    },
    viewSizePx: {
      x: tileSizePx * 3,
      y: tileSizePx * 3,
    },
    expected: {
      x: 0,
      y: 0,
    },
  },
  {
    viewCenterWorldPos: {
      x: 9,
      y: 13,
    },
    objectWorldPos: {
      x: 9,
      y: 13,
    },
    viewSizePx: {
      x: tileSizePx * 5,
      y: tileSizePx * 3,
    },
    expected: {
      x: 64,
      y: 32,
    },
  },
  {
    viewCenterWorldPos: {
      x: 4,
      y: 4,
    },
    objectWorldPos: {
      x: 5,
      y: 3,
    },
    viewSizePx: {
      x: tileSizePx * 1,
      y: tileSizePx * 5,
    },
    expected: {
      x: 32,
      y: 32,
    },
  },
  {
    viewCenterWorldPos: {
      x: 5,
      y: 7,
    },
    objectWorldPos: {
      x: 4,
      y: 9,
    },
    viewSizePx: {
      x: tileSizePx * 3,
      y: tileSizePx * 5,
    },
    expected: {
      x: 0,
      y: 128,
    },
  },
  {
    viewCenterWorldPos: {
      x: 9.5,
      y: 13,
    },
    objectWorldPos: {
      x: 9,
      y: 12,
    },
    viewSizePx: {
      x: tileSizePx * 5,
      y: tileSizePx * 3,
    },
    expected: {
      x: 48,
      y: 0,
    },
  },
  {
    viewCenterWorldPos: {
      x: 12,
      y: 3.5,
    },
    objectWorldPos: {
      x: 13,
      y: 2,
    },
    viewSizePx: {
      x: tileSizePx * 3,
      y: tileSizePx * 3,
    },
    expected: {
      x: 64,
      y: -16,
    },
  },
  {
    viewCenterWorldPos: {
      x: 12,
      y: 5,
    },
    objectWorldPos: {
      x: 12,
      y: 5,
    },
    viewSizePx: {
      x: tileSizePx * 5,
      y: tileSizePx * 5,
    },
    expected: {
      x: 64,
      y: 64,
    },
  },
  {
    viewCenterWorldPos: {
      x: 12.2,
      y: 5,
    },
    objectWorldPos: {
      x: 12,
      y: 5,
    },
    viewSizePx: {
      x: tileSizePx * 5,
      y: tileSizePx * 5,
    },
    expected: {
      x: 57.6,
      y: 64,
    },
  },
  {
    viewCenterWorldPos: {
      x: 12.5,
      y: 5,
    },
    objectWorldPos: {
      x: 12,
      y: 5,
    },
    viewSizePx: {
      x: tileSizePx * 5,
      y: tileSizePx * 5,
    },
    expected: {
      x: 48,
      y: 64,
    },
  },
];

for (const t of viewOffsetTests) {
  test("", () => {
    const result = getObjectViewOffset(
      t.viewCenterWorldPos,
      t.objectWorldPos,
      t.viewSizePx
    );
    expect(result.x).toBeCloseTo(t.expected.x);
    expect(result.y).toBeCloseTo(t.expected.y);
  });
}
