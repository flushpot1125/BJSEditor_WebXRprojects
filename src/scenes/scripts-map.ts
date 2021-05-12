import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
	"src/scenes/scene/WebXRconfig_dram.ts": any;
	"src/scenes/scene/WebXRconfig.ts": any;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/scene/WebXRconfig_dram.ts": require("./scene/WebXRconfig_dram"),
	"src/scenes/scene/WebXRconfig.ts": require("./scene/WebXRconfig"),
}
