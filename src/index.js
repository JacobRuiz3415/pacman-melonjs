// src/index.js
import * as me from "melonjs";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants.js";
import { manifest } from "./manifest.js";
import { PlayScreen } from "./stages/play.js";
import { PacmanEntity } from "./entities/pacman.js";
import { GhostEntity } from "./entities/ghost.js";
import { PelletEntity, EnergizerEntity } from "./entities/collectibles.js";

me.device.onReady(() => {
    // Initialize WebGL/Canvas with pixel-perfect integer scaling
    if (!me.video.init(CANVAS_WIDTH, CANVAS_HEIGHT, {
        parent: "screen",
        scale: "auto",
        scaleMethod: "fit",
        antiAlias: false
    })) {
        alert("HTML5 Canvas/WebGL not supported by your browser.");
        return;
    }

    // Initialize audio pipeline
    me.audio.init("mp3,ogg");

    // Register entities with the melonJS object pool
    me.pool.register("player", PacmanEntity);
    me.pool.register("ghost", GhostEntity);
    me.pool.register("pellet", PelletEntity, true);
    me.pool.register("energizer", EnergizerEntity, true);

    // Map stages
    me.state.set(me.state.PLAY, new PlayScreen());

    // Preload all assets declared in the manifest
    me.loader.preload(manifest, () => {
        me.state.change(me.state.PLAY);
    });
});