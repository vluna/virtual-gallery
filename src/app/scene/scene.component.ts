import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, ArcRotateCamera, StandardMaterial, Texture, PBRMetallicRoughnessMaterial, Mesh } from '@babylonjs/core';

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
    // Add gravity
    const assumedFramesPerSecond = 60;
		const earthGravity = -9.81;
		scene.gravity = new Vector3(0, earthGravity / assumedFramesPerSecond, 0);
		scene.collisionsEnabled = true;


		// This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera('camera1', new Vector3(0, 10, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(new Vector3(-100, 0, 40));
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
		camera.checkCollisions = true;
		camera.ellipsoid = new Vector3(3, 3, 3);


    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight('light', new Vector3(1, 1, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Build walls
    const wall_material = new StandardMaterial("wall_material", scene);
		wall_material.diffuseTexture = new Texture("/assets/images/textures/concrete.jpg", scene);

    const left_wall = MeshBuilder.CreateBox('box', {width: 500, height: 40}, scene);
		left_wall.position = new Vector3(0, 20, -250);
		left_wall.material = wall_material;
		left_wall.checkCollisions = true;
		left_wall.position.y = 20;

    const right_wall = MeshBuilder.CreateBox('box', {width: 500, height: 40}, scene);
		right_wall.position = new Vector3(0, 20, 250);
		right_wall.material = wall_material;
		right_wall.checkCollisions = true;
		right_wall.position.y = 20;

    const front_wall = MeshBuilder.CreateBox('box', {width: 500, height: 40}, scene);
		front_wall.position = new Vector3(-250, 20, 0);
		front_wall.material = wall_material;
		front_wall.checkCollisions = true;
		front_wall.rotation = new Vector3(0, Math.PI / 2, 0);

    const back_wall = MeshBuilder.CreateBox('box', {width: 500, height: 40}, scene);
		back_wall.position = new Vector3(250, 20, 0);
		back_wall.material = wall_material;
		back_wall.checkCollisions = true;
		back_wall.rotation = new Vector3(0, Math.PI / 2, 0);

    
		// Create ground
    const ground = MeshBuilder.CreateGround('ground', {width: 500, height: 500}, scene);
		const ground_material = new StandardMaterial("ground_material", scene);
		ground_material.diffuseTexture = new Texture("/assets/images/textures/wood.jpg", scene);
		ground.material = ground_material;
		ground.checkCollisions = true;

    return scene;
  }

}