// src/stages/play.js
import * as me from "melonjs";

export class PlayScreen extends me.Stage {
    onResetEvent() {
        // Load the TMX map level into the world container
        me.level.load("maze");

        // Bind arcade directional keys
        me.input.bindKey(me.input.KEY.UP, "up");
        me.input.bindKey(me.input.KEY.DOWN, "down");
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.W, "up");
        me.input.bindKey(me.input.KEY.S, "down");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");

        // Track level-wide score and counters
        me.game.world.sortOn = "z";
    }

    onDestroyEvent() {
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
    }
}