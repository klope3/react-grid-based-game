import { tileSizePx } from "./constants";
import { world } from "./testworld";
import { Vector2 } from "./types";

function getViewRange(viewCenter: Vector2, viewSizePx: Vector2) {
  const tilesX = viewSizePx.x / tileSizePx + 2;
  const tilesY = viewSizePx.y / tileSizePx + 2;
  const topLeftCorner: Vector2 = {
    x: Math.floor(viewCenter.x - tilesX / 2) + 1,
    y: Math.floor(viewCenter.y - tilesY / 2) + 1,
  };
  const bottomRightCorner: Vector2 = {
    x: Math.floor(viewCenter.x + tilesX / 2),
    y: Math.floor(viewCenter.y + tilesY / 2),
  };
  return {
    topLeftCorner,
    bottomRightCorner,
  };
}

export function getVisibleTiles(viewCenter: Vector2, viewSizePx: Vector2) {
  const viewRange = getViewRange(viewCenter, viewSizePx);
  const minX = viewRange.topLeftCorner.x;
  const maxX = viewRange.bottomRightCorner.x;
  const minY = viewRange.topLeftCorner.y;
  const maxY = viewRange.bottomRightCorner.y;

  const rows = world.slice(minY, maxY + 1);
  const visible = rows.map((row) => row.slice(minX, maxX + 1));
  return visible;
}

export function getObjectViewOffset(
  viewCenterWorldPos: Vector2,
  objectWorldPos: Vector2,
  viewSizePx: Vector2
) {
  const viewDimsInCells: Vector2 = {
    x: viewSizePx.x / tileSizePx,
    y: viewSizePx.y / tileSizePx,
  };
  const topLeftCoords: Vector2 = {
    x: viewCenterWorldPos.x - Math.floor(viewDimsInCells.x / 2),
    y: viewCenterWorldPos.y - Math.floor(viewDimsInCells.y / 2),
  };
  const viewOffset: Vector2 = {
    x: objectWorldPos.x - topLeftCoords.x,
    y: objectWorldPos.y - topLeftCoords.y,
  };
  return vectorProduct(viewOffset, tileSizePx);
  // const viewToObjDiff = vectorDifference(objectWorldPos, viewCenterWorldPos);
  // const topLeft = getViewRange(viewCenterWorldPos, viewSizePx).topLeftCorner;
  // const diff = vectorDifference(objectWorldPos, topLeft);
  // const product = vectorProduct(viewToObjDiff, tileSizePx);
  // return {
  //   left: product.x + viewSizePx.x / 2 - tileSizePx / 2,
  //   top: product.y + viewSizePx.y / 2 - tileSizePx / 2,
  // };
}

export function vectorSum(a: Vector2, b: Vector2): Vector2 {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

export function vectorDifference(a: Vector2, b: Vector2): Vector2 {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

export function vectorProduct(a: Vector2, b: number) {
  return {
    x: a.x * b,
    y: a.y * b,
  };
}
