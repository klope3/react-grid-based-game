import { tileSizePx } from "../../constants";
import { Vector2 } from "../../types";

type GameTileProps = {
  tile: number;
  viewOffset: Vector2;
};

export function GameTile({ tile, viewOffset }: GameTileProps) {
  return (
    <div
      className="temp-tile"
      style={{
        backgroundColor: tile ? "white" : "black",
        position: "absolute",
        width: `${tileSizePx}px`,
        height: `${tileSizePx}px`,
        left: `${viewOffset.x}px`,
        top: `${viewOffset.y}px`,
      }}
    ></div>
  );
}
