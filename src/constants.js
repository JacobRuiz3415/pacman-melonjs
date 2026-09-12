// src/constants.js
export const TILE_SIZE = 16;
export const HALF_TILE = TILE_SIZE / 2;
export const GRID_WIDTH = 28;
export const GRID_HEIGHT = 36;
export const CANVAS_WIDTH = GRID_WIDTH * TILE_SIZE;   // 448px
export const CANVAS_HEIGHT = GRID_HEIGHT * TILE_SIZE; // 576px

export const DIRECTION = Object.freeze({
    NONE:  { x:  0, y:  0, angle: 0 },
    UP:    { x:  0, y: -1, angle: -Math.PI / 2 },
    DOWN:  { x:  0, y:  1, angle: Math.PI / 2 },
    LEFT:  { x: -1, y:  0, angle: Math.PI },
    RIGHT: { x:  1, y:  0, angle: 0 }
});

export const GHOST_STATE = Object.freeze({
    CHASE: "CHASE",
    SCATTER: "SCATTER",
    FRIGHTENED: "FRIGHTENED",
    EATEN: "EATEN"
});

export const COLLISION_MASKS = {
    WALL: "wall",
    PLAYER: "player",
    GHOST: "ghost",
    COLLECTIBLE: "collectible"
};