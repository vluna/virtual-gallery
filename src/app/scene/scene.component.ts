import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, ArcRotateCamera, StandardMaterial, Texture } from '@babylonjs/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit, AfterViewInit {
	@ViewChild('renderCanvas') renderCanvas;
	
	scene: Scene;
  engine: Engine;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scene = this.createScene(this.renderCanvas.nativeElement);

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene(canvas: HTMLCanvasElement) {

    this.engine = new Engine(canvas);

    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(this.engine);


    // This creates and positions a free camera (non-mesh)
    const camera = new ArcRotateCamera("camera", 0, 0, 10, new Vector3(0, 0, 0), scene);
    // const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'box' shape.
    const box = MeshBuilder.CreateBox('box', {width: 300, height: 40}, scene);
		const boxMat = new StandardMaterial("boxMat", scene);
		boxMat.diffuseTexture = new Texture("/assets/images/textures/concrete.jpg", scene);
		box.material = boxMat;

    // Move the box upward 1/2 its height
    box.position.y = 20;

    // Our built-in 'ground' shape.
    const ground = MeshBuilder.CreateGround('ground', {width: 1000, height: 1000}, scene);
		const groundMat = new StandardMaterial("groundMat", scene);
		groundMat.diffuseTexture = new Texture("/assets/images/textures/wood.jpg", scene);
		ground.material = groundMat;

    return scene;
  }

}