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
export default class MyScript extends Node {
    @fromScene("Box_Left_Trigger")
    _Box_Left_Trigger :Mesh;

    @fromScene("Box_Left_Squeeze")
    _Box_Left_Squeeze :Mesh;

    @fromScene("Box_Left_ThumbStick")
    _Box_Left_ThumbStick :Mesh;

    @fromScene("Sphere_Left_XButton")
    _Sphere_Left_XButton :Mesh;

    @fromScene("Sphere_Left_YButton")
    _Sphere_Left_YButton :Mesh;


    @fromScene("Box_Right_Trigger")
    _Box_Right_Trigger :Mesh;

    @fromScene("Box_Right_Squeeze")
    _Box_Right_Squeeze :Mesh;

    @fromScene("Box_Right_ThumbStick")
    _Box_Right_ThumbStick :Mesh;

    @fromScene("Sphere_Right_AButton")
    _Sphere_Right_AButton :Mesh;

    @fromScene("Sphere_Right_BButton")
    _Sphere_Right_BButton :Mesh;





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
    public onInitialize():  void {

   //    let environment = this._scene.createDefaultEnvironment({ enableGroundShadow: true });
     //   environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"));

    }





    /**
     * Called on the scene starts.
     */
    public onStart(): void {

        let __scene = this._scene;
        let __Box_Left_Trigger =this._Box_Left_Trigger;
        let __Box_Left_Squeeze = this._Box_Left_Squeeze;
        let __Box_Left_ThumbStick =this._Box_Left_ThumbStick;
        let __Sphere_Left_XButton = this._Sphere_Left_XButton;
        let __Sphere_Left_YButton = this._Sphere_Left_YButton;
        let __Box_Right_Trigger =this._Box_Right_Trigger;
        let __Box_Right_Squeeze = this._Box_Right_Squeeze;
        let __Box_Right_ThumbStick = this._Box_Right_ThumbStick;
        let __Sphere_Right_AButton = this._Sphere_Right_AButton;
        let __Sphere_Right_BButton = this._Sphere_Right_BButton;


        let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;
        let wcf =async function WebXRConfigration():Promise<void>{

            let xr = await __scene.createDefaultXRExperienceAsync({
                //   floorMeshes: [env.ground]
               });
       
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
                         const xr_ids = motionController.getComponentIds();
                         let triggerComponent = motionController.getComponent(xr_ids[0]);//xr-standard-trigger
                         triggerComponent.onButtonStateChangedObservable.add(() => {
                             if (triggerComponent.pressed) {
                                __Box_Left_Trigger.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                             
                             }else{
                                __Box_Left_Trigger.scaling= new BABYLON.Vector3(1,1,1);
                             
                             }
                         });
                         let squeezeComponent = motionController.getComponent(xr_ids[1]);//xr-standard-squeeze
                         squeezeComponent.onButtonStateChangedObservable.add(() => {
                             if (squeezeComponent.pressed) {
                                __Box_Left_Squeeze.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                              
                             }else{
                                __Box_Left_Squeeze.scaling=new BABYLON.Vector3(1,1,1);
                             }
                         });
                         let thumbstickComponent = motionController.getComponent(xr_ids[2]);//xr-standard-thumbstick
                         thumbstickComponent.onButtonStateChangedObservable.add(() => {
                             if (thumbstickComponent.pressed) {
                                 __Box_Left_ThumbStick.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                             }else{
                                 __Box_Left_ThumbStick.scaling=new BABYLON.Vector3(1,1,1);
                             }
                         });
                         thumbstickComponent.onAxisValueChangedObservable.add((axes) => {
                             __Box_Left_ThumbStick.position.x += (axes.x)/100;
                             __Box_Left_ThumbStick.position.y -= (axes.y)/100;

                         });
         
                         let xbuttonComponent = motionController.getComponent(xr_ids[3]);//x-button
                         xbuttonComponent.onButtonStateChangedObservable.add(() => {
                             if (xbuttonComponent.pressed) {
                                 __Sphere_Left_XButton.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                
                             }else{
                                 __Sphere_Left_XButton.scaling=new BABYLON.Vector3(1,1,1);  
                             }
                         });
                         let ybuttonComponent = motionController.getComponent(xr_ids[4]);//y-button
                         ybuttonComponent.onButtonStateChangedObservable.add(() => {
                             if (ybuttonComponent.pressed) {
                                 __Sphere_Left_YButton.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                
                             }else{
                                 __Sphere_Left_YButton.scaling=new BABYLON.Vector3(1,1,1);  
                             }
                         });           
                    }
                    if (motionController.handness === 'right') {
                         const xr_ids = motionController.getComponentIds();
                         let triggerComponent = motionController.getComponent(xr_ids[0]);//xr-standard-trigger
                         triggerComponent.onButtonStateChangedObservable.add(() => {
                             if (triggerComponent.pressed) {
                                 __Box_Right_Trigger.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                             
                             }else{
                                 __Box_Right_Trigger.scaling= new BABYLON.Vector3(1,1,1);
                             
                             }
                         });
                         let squeezeComponent = motionController.getComponent(xr_ids[1]);//xr-standard-squeeze
                         squeezeComponent.onButtonStateChangedObservable.add(() => {
                             if (squeezeComponent.pressed) {
                                 __Box_Right_Squeeze.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                              
                             }else{
                                 __Box_Right_Squeeze.scaling=new BABYLON.Vector3(1,1,1);
                             }
                         });
                         let thumbstickComponent = motionController.getComponent(xr_ids[2]);//xr-standard-thumbstick
                         thumbstickComponent.onButtonStateChangedObservable.add(() => {
                             if (thumbstickComponent.pressed) {
                                 __Box_Right_ThumbStick.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                             }else{
                                 __Box_Right_ThumbStick.scaling=new BABYLON.Vector3(1,1,1);
                             }
         
                         });
                         thumbstickComponent.onAxisValueChangedObservable.add((axes) => {
                             //Box_Right_ThumbStick is moving according to stick axes but camera rotation is also changing..
                             __Box_Right_ThumbStick.position.x += (axes.x)/100;
                             __Box_Right_ThumbStick.position.y += (axes.y)/100;
                            // console.log(values.x, values.y);
                         });
         
                         let abuttonComponent = motionController.getComponent(xr_ids[3]);//a-button
                         abuttonComponent.onButtonStateChangedObservable.add(() => {
                             if (abuttonComponent.pressed) {
                                 __Sphere_Right_AButton.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                             }else{
                                 __Sphere_Right_AButton.scaling=new BABYLON.Vector3(1,1,1);  
                             }
                         });
                         let bbuttonComponent = motionController.getComponent(xr_ids[4]);//b-button
                         bbuttonComponent.onButtonStateChangedObservable.add(() => {
                             if (bbuttonComponent.pressed) {
                                 __Sphere_Right_BButton.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                
                             }else{
                                 __Sphere_Right_BButton.scaling=new BABYLON.Vector3(1,1,1);  
                             }
                         });

                    }
         
                })
         
            });
            
            
        }
        
    
    


        wcf();



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
