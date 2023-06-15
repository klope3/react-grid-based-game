import { viewHeightPx, viewWidthPx } from "../../constants";
import { getObjectViewOffset, getViewElements } from "../../gridLogic";
import { Vector2 } from "../../types";
import "./GameView.css";
import { world } from "../../testworld";
import { GameTile } from "../GameTile/GameTile";

type GameViewProps = {
  playerPos: Vector2;
};

export function GameView({ playerPos }: GameViewProps) {
  const viewSizePx: Vector2 = {
    x: viewWidthPx,
    y: viewHeightPx,
  };
  const viewTiles = getViewElements(playerPos, viewSizePx, world);
  return (
    <>
      <div
        className="game-view"
        style={{ width: `${viewWidthPx}px`, height: `${viewHeightPx}px` }}
      >
        {viewTiles.map((row, y) =>
          row.map((tile, x) => {
            const tileWorldPos: Vector2 = {
              x:
                Math.round(playerPos.x) -
                Math.floor(viewTiles[0].length / 2) +
                x,
              y: Math.round(playerPos.y) - Math.floor(viewTiles.length / 2) + y,
            };
            const viewOffset = getObjectViewOffset(
              playerPos,
              tileWorldPos,
              viewSizePx
            );
            return <GameTile tile={tile} viewOffset={viewOffset} />;
          })
        )}
      </div>
    </>
  );
}
