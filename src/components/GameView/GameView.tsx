import { viewHeightPx, viewWidthPx } from "../../constants";
import { getObjectViewOffset, getViewElements } from "../../gridLogic";
import { Vector2 } from "../../types";
import { useState } from "react";
import "./GameView.css";
import { world } from "../../testworld";
import { GameTile } from "../GameTile/GameTile";

export function GameView() {
  const [viewX, setViewX] = useState(12);
  const [viewY, setViewY] = useState(5);
  const viewCoords: Vector2 = {
    x: viewX,
    y: viewY,
  };
  const viewSizePx: Vector2 = {
    x: viewWidthPx,
    y: viewHeightPx,
  };
  const viewTiles = getViewElements(viewCoords, viewSizePx, world);
  return (
    <>
      <div
        className="game-view"
        style={{ width: `${viewWidthPx}px`, height: `${viewHeightPx}px` }}
      >
        {viewTiles.map((row, y) =>
          row.map((tile, x) => {
            const tileWorldPos: Vector2 = {
              x: Math.round(viewX) - Math.floor(viewTiles[0].length / 2) + x,
              y: Math.round(viewY) - Math.floor(viewTiles.length / 2) + y,
            };
            const viewOffset = getObjectViewOffset(
              viewCoords,
              tileWorldPos,
              viewSizePx
            );
            return <GameTile tile={tile} viewOffset={viewOffset} />;
          })
        )}
      </div>
      <div>
        <input
          type="number"
          name="x"
          id="x"
          value={viewX}
          onChange={(e) => setViewX(+e.target.value)}
          step={0.1}
        />
      </div>
      <div>
        <input
          type="number"
          name="y"
          id="y"
          value={viewY}
          onChange={(e) => setViewY(+e.target.value)}
          step={0.1}
        />
      </div>
    </>
  );
}
