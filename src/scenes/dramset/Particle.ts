import { TransformNode,KeyboardEventTypes } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { fromScene ,onKeyboardEvent} from "../tools";
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 * 
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
 let starParticleSystem;
export default class ParticleComponent extends TransformNode {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */

    public onStart(): void {
        starParticleSystem =  new BABYLON.ParticleSystem("particles", 200, this._scene);
        starParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/dramset/files/star.png",this._scene);
        starParticleSystem.emitter = new BABYLON.Vector3(0, 0.5, 0);
        starParticleSystem.minLifeTime = 5;
        starParticleSystem.maxLifeTime = 5;


    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }

    @onKeyboardEvent(65, KeyboardEventTypes.KEYDOWN)
    protected particlestart_test(): void {
        this.start_starParticle();
        console.log("start");
    }

    @onKeyboardEvent(68, KeyboardEventTypes.KEYDOWN)
    protected particlestop_test(): void {
        this.stop_starParticle();
        console.log("stop");
    }

    public start_starParticle():void{

        starParticleSystem.start();
        
    }

    public stop_starParticle():void{
        starParticleSystem.stop();
    }

}
