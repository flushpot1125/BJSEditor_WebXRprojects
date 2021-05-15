import { Node } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {MeshBuilder,Vector3,Mesh} from "@babylonjs/core";
import { fromScene } from "../tools";

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
export default class WebXRConfigDramset extends Node {
    @fromScene("Dram0")
    _Dram0 :Mesh;

    @fromScene("Dram1")
    _Dram1 :Mesh;
    
    @fromScene("Dram2")
    _Dram2 :Mesh;

    @fromScene("Dram3")
    _Dram3 :Mesh;

    @fromScene("Dram4")
    _Dram4 :Mesh;

    @fromScene("cymbal1")
    _cymbal1 :Mesh;

    @fromScene("cymbal2")
    _cymbal2 :Mesh;

    @fromScene("cymbal3")
    _cymbal3 :Mesh;

    @fromScene("cymbal4")
    _cymbal4 :Mesh;

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
        let __scene = this._scene;
        let __Dram0 = this._Dram0;
        let __Dram1 = this._Dram1;
        let __Dram2 = this._Dram2;
        let __Dram3 = this._Dram3;
        let __Dram4 = this._Dram4;
        let __cymbal1 = this._cymbal1;
        let __cymbal2 = this._cymbal2;
        let __cymbal3 = this._cymbal3;
        let __cymbal4 = this._cymbal4;

        let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;

        let wcf =async function WebXRConfigration():Promise<void>{
            let xr = await __scene.createDefaultXRExperienceAsync({
                //   floorMeshes: [env.ground]
            });

            /* avoid low performance thanks for @ninisan_drumath */
            __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("ssao", __scene.activeCamera);
            __scene.postProcessRenderPipelineManager.supportedPipelines.forEach(pp=>{
                __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(
                    pp.name,
                    __scene.activeCamera
                );
           });

           xr.input.onControllerAddedObservable.add((controller) => {
                controller.onMotionControllerInitObservable.add((motionController) => {
                    if (motionController.handness === 'left') {
                    }
                    if (motionController.handness === 'right') {
                    }
                })
           });

        }
        wcf();
        // ...
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
}
