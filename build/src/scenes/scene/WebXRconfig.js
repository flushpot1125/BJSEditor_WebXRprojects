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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var BABYLON = require("@babylonjs/core/Legacy/legacy");
var tools_1 = require("../tools");
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
        //    let environment = this._scene.createDefaultEnvironment({ enableGroundShadow: true });
        //   environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"));
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        var __scene = this._scene;
        var __Box_Left_Trigger = this._Box_Left_Trigger;
        var __Box_Left_Squeeze = this._Box_Left_Squeeze;
        var __Box_Left_ThumbStick = this._Box_Left_ThumbStick;
        var __Sphere_Left_XButton = this._Sphere_Left_XButton;
        var __Sphere_Left_YButton = this._Sphere_Left_YButton;
        var __Box_Right_Trigger = this._Box_Right_Trigger;
        var __Box_Right_Squeeze = this._Box_Right_Squeeze;
        var __Box_Right_ThumbStick = this._Box_Right_ThumbStick;
        var __Sphere_Right_AButton = this._Sphere_Right_AButton;
        var __Sphere_Right_BButton = this._Sphere_Right_BButton;
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;
        var wcf = function WebXRConfigration() {
            return __awaiter(this, void 0, void 0, function () {
                var xr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, __scene.createDefaultXRExperienceAsync({
                            //   floorMeshes: [env.ground]
                            })];
                        case 1:
                            xr = _a.sent();
                            __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("ssao", __scene.activeCamera);
                            __scene.postProcessRenderPipelineManager.supportedPipelines.forEach(function (pp) {
                                __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(pp.name, __scene.activeCamera);
                            });
                            xr.input.onControllerAddedObservable.add(function (controller) {
                                controller.onMotionControllerInitObservable.add(function (motionController) {
                                    if (motionController.handness === 'left') {
                                        var xr_ids = motionController.getComponentIds();
                                        var triggerComponent_1 = motionController.getComponent(xr_ids[0]); //xr-standard-trigger
                                        triggerComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (triggerComponent_1.pressed) {
                                                __Box_Left_Trigger.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Left_Trigger.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var squeezeComponent_1 = motionController.getComponent(xr_ids[1]); //xr-standard-squeeze
                                        squeezeComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (squeezeComponent_1.pressed) {
                                                __Box_Left_Squeeze.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Left_Squeeze.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var thumbstickComponent_1 = motionController.getComponent(xr_ids[2]); //xr-standard-thumbstick
                                        thumbstickComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (thumbstickComponent_1.pressed) {
                                                __Box_Left_ThumbStick.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Left_ThumbStick.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        thumbstickComponent_1.onAxisValueChangedObservable.add(function (axes) {
                                            __Box_Left_ThumbStick.position.x += (axes.x) / 100;
                                            __Box_Left_ThumbStick.position.y -= (axes.y) / 100;
                                        });
                                        var xbuttonComponent_1 = motionController.getComponent(xr_ids[3]); //x-button
                                        xbuttonComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (xbuttonComponent_1.pressed) {
                                                __Sphere_Left_XButton.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Sphere_Left_XButton.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var ybuttonComponent_1 = motionController.getComponent(xr_ids[4]); //y-button
                                        ybuttonComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (ybuttonComponent_1.pressed) {
                                                __Sphere_Left_YButton.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Sphere_Left_YButton.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                    }
                                    if (motionController.handness === 'right') {
                                        var xr_ids = motionController.getComponentIds();
                                        var triggerComponent_2 = motionController.getComponent(xr_ids[0]); //xr-standard-trigger
                                        triggerComponent_2.onButtonStateChangedObservable.add(function () {
                                            if (triggerComponent_2.pressed) {
                                                __Box_Right_Trigger.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Right_Trigger.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var squeezeComponent_2 = motionController.getComponent(xr_ids[1]); //xr-standard-squeeze
                                        squeezeComponent_2.onButtonStateChangedObservable.add(function () {
                                            if (squeezeComponent_2.pressed) {
                                                __Box_Right_Squeeze.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Right_Squeeze.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var thumbstickComponent_2 = motionController.getComponent(xr_ids[2]); //xr-standard-thumbstick
                                        thumbstickComponent_2.onButtonStateChangedObservable.add(function () {
                                            if (thumbstickComponent_2.pressed) {
                                                __Box_Right_ThumbStick.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Box_Right_ThumbStick.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        thumbstickComponent_2.onAxisValueChangedObservable.add(function (axes) {
                                            //Box_Right_ThumbStick is moving according to stick axes but camera rotation is also changing..
                                            __Box_Right_ThumbStick.position.x += (axes.x) / 100;
                                            __Box_Right_ThumbStick.position.y += (axes.y) / 100;
                                            // console.log(values.x, values.y);
                                        });
                                        var abuttonComponent_1 = motionController.getComponent(xr_ids[3]); //a-button
                                        abuttonComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (abuttonComponent_1.pressed) {
                                                __Sphere_Right_AButton.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Sphere_Right_AButton.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var bbuttonComponent_1 = motionController.getComponent(xr_ids[4]); //b-button
                                        bbuttonComponent_1.onButtonStateChangedObservable.add(function () {
                                            if (bbuttonComponent_1.pressed) {
                                                __Sphere_Right_BButton.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Sphere_Right_BButton.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                    }
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        wcf();
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
    __decorate([
        tools_1.fromScene("Box_Left_Trigger")
    ], MyScript.prototype, "_Box_Left_Trigger", void 0);
    __decorate([
        tools_1.fromScene("Box_Left_Squeeze")
    ], MyScript.prototype, "_Box_Left_Squeeze", void 0);
    __decorate([
        tools_1.fromScene("Box_Left_ThumbStick")
    ], MyScript.prototype, "_Box_Left_ThumbStick", void 0);
    __decorate([
        tools_1.fromScene("Sphere_Left_XButton")
    ], MyScript.prototype, "_Sphere_Left_XButton", void 0);
    __decorate([
        tools_1.fromScene("Sphere_Left_YButton")
    ], MyScript.prototype, "_Sphere_Left_YButton", void 0);
    __decorate([
        tools_1.fromScene("Box_Right_Trigger")
    ], MyScript.prototype, "_Box_Right_Trigger", void 0);
    __decorate([
        tools_1.fromScene("Box_Right_Squeeze")
    ], MyScript.prototype, "_Box_Right_Squeeze", void 0);
    __decorate([
        tools_1.fromScene("Box_Right_ThumbStick")
    ], MyScript.prototype, "_Box_Right_ThumbStick", void 0);
    __decorate([
        tools_1.fromScene("Sphere_Right_AButton")
    ], MyScript.prototype, "_Sphere_Right_AButton", void 0);
    __decorate([
        tools_1.fromScene("Sphere_Right_BButton")
    ], MyScript.prototype, "_Sphere_Right_BButton", void 0);
    return MyScript;
}(core_1.Node));
exports.default = MyScript;
//# sourceMappingURL=WebXRconfig.js.map