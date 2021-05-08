"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var BABYLON = require("@babylonjs/core/Legacy/legacy");
var core_2 = require("@babylonjs/core");
var core_3 = require("@babylonjs/core");
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
var MyScript = /** @class */ (function (_super) {
    __extends(MyScript, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function MyScript() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    MyScript.prototype.onInitialize = function () {
        var _this = this;
        // ...
        var env = this._scene.createDefaultEnvironment();
        this._scene.createDefaultXRExperienceAsync({
        //   floorMeshes: [env.ground]
        });
        //this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("ssao", this._scene.activeCamera);
        this._scene._postProcessRenderPipelineManager.supportedPipelines.forEach(function (pp) {
            _this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(pp.name, _this._scene.activeCamera);
        });
        var Box_Left_Trigger = core_2.MeshBuilder.CreateBox("Box_Left_Trigger", {}, this._scene);
        Box_Left_Trigger.position = new core_3.Vector3(-2.5, 1, 3);
        var Box_Left_Squeeze = BABYLON.MeshBuilder.CreateBox("Box_Left_Squeeze", {}, this._scene);
        Box_Left_Squeeze.position = new BABYLON.Vector3(-2.5, -1, 3);
        var Sphere_Left_YButton = BABYLON.MeshBuilder.CreateSphere("Sphere_Left_YButton", { diameter: 1 }, this._scene);
        Sphere_Left_YButton.position = new BABYLON.Vector3(-2, 0, 3);
        var Sphere_Left_XButton = BABYLON.MeshBuilder.CreateSphere("Sphere_Left_XButton", { diameter: 1 }, this._scene);
        Sphere_Left_XButton.position = new BABYLON.Vector3(-2, 0, 2);
        var Box_Left_ThumbStick = BABYLON.MeshBuilder.CreateBox("Box_Left_ThumbStick", { size: 0.5 }, this._scene);
        Box_Left_ThumbStick.position = new BABYLON.Vector3(-1, 0, 1);
        var Box_Right_Trigger = BABYLON.MeshBuilder.CreateBox("Box_Right_Trigger", {}, this._scene);
        Box_Right_Trigger.position = new BABYLON.Vector3(2.5, 1, 3);
        var Box_Right_Squeeze = BABYLON.MeshBuilder.CreateBox("Box_Right_Squeeze", {}, this._scene);
        Box_Right_Squeeze.position = new BABYLON.Vector3(2.5, -1, 3);
        var Sphere_Right_BButton = BABYLON.MeshBuilder.CreateSphere("Sphere_Right_BButton", { diameter: 1 }, this._scene);
        Sphere_Right_BButton.position = new BABYLON.Vector3(2, 0, 3);
        var Sphere_Right_AButton = BABYLON.MeshBuilder.CreateSphere("Sphere_Right_AButton", { diameter: 1 }, this._scene);
        Sphere_Right_AButton.position = new BABYLON.Vector3(2, 0, 2);
        //  var Box_Right_ThumbStick = BABYLON.MeshBuilder.CreateBox("Box_Right_ThumbStick",{size:0.5},this._scene);
        //  Box_Right_ThumbStick.position = new BABYLON.Vector3(1,0,1);
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        var Box_Right_ThumbStick = core_2.MeshBuilder.CreateBox("Box_Right_ThumbStick", { size: 0.5 }, this._scene);
        Box_Right_ThumbStick.position = new core_3.Vector3(1, 0, 1);
        // ...
    };
    /**
     * Called each frame.
     */
    MyScript.prototype.onUpdate = function () {
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    MyScript.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    return MyScript;
}(core_1.Node));
exports.default = MyScript;
//# sourceMappingURL=WebXRconfig.js.map