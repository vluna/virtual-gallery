import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, ArcRotateCamera, StandardMaterial, Texture, PBRMetallicRoughnessMaterial, Mesh, ActionManager, InterpolateValueAction, Color3, EasingFunction, Animation, CubicEase, ExecuteCodeAction, DynamicTexture, MultiMaterial, SubMesh } from '@babylonjs/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})

export class SceneComponent implements OnInit, AfterViewInit {
	@ViewChild('renderCanvas') renderCanvas;
	
	scene: Scene;
  engine: Engine;
  exhibitions: any = [];
  loading: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  	// this.exhibition.exhibitions.then(() => {
  	// 	console.log("S");
  	// });
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
    // Add gravity to keep movement to x and z
		scene.gravity = new Vector3(0, -0.9, 0);
		scene.collisionsEnabled = true;


		// This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera('camera1', new Vector3(-240, 10, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(new Vector3(0, 0, 0));
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
		camera.checkCollisions = true;
		camera.ellipsoid = new Vector3(4, 6, 4);
    camera.applyGravity = true;


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
		front_wall.position = new Vector3(250, 20, 0);
		front_wall.material = wall_material;
		front_wall.checkCollisions = true;
		front_wall.rotation = new Vector3(0, Math.PI / 2, 0);

    const back_wall = MeshBuilder.CreateBox('box', {width: 500, height: 40}, scene);
		back_wall.position = new Vector3(-250, 20, 0);
		back_wall.material = wall_material;
		back_wall.checkCollisions = true;
		back_wall.rotation = new Vector3(0, Math.PI / 2, 0);

    
		// Create ground
    const ground = MeshBuilder.CreateGround('ground', {width: 500, height: 500}, scene);
		const ground_material = new StandardMaterial("ground_material", scene);
		ground_material.diffuseTexture = new Texture("/assets/images/textures/wood.jpg", scene);
		ground.material = ground_material;
		ground.checkCollisions = true;

		// Create painting
		var starting_point = 0
		for(var idx = 1; idx <= 2; idx++) {
			var artwork = new Texture("https://www.collectionartnb.ca/uploads/artworks/805/image/small_2014-03-2-Edward__Ned__Bea.jpg", scene);
			
							var artwork_size = artwork.getBaseSize();
				console.log(artwork);
				var plane = MeshBuilder.CreatePlane("plane", {width: 30, height: 30}, scene);
		    var mat = new StandardMaterial("", scene);
				plane.position = new Vector3(-249, 15, 30 * idx);
				plane.rotation = new Vector3(0, -Math.PI / 2, 0);
		    mat.diffuseTexture = artwork
		    plane.material = mat;

		    plane.actionManager = new ActionManager(scene);
		    plane.actionManager.registerAction(
		    	new ExecuteCodeAction(
		      ActionManager.OnPickTrigger, function (ev) {
		      	console.log(artwork);
		      	setCamLateralLeft(idx);
		        }
		      )
				);
		}


		 //Set font type
    var font_type = "Arial";
	
	//Set width an height for plane
    var planeWidth = 100;
    var planeHeight = 30;

    //Create plane
    var plane = MeshBuilder.CreatePlane("plane", {width:planeWidth, height:planeHeight}, scene);

    //Set width and height for dynamic texture using same multiplier
    var DTWidth = planeWidth * 60;
    var DTHeight = planeHeight * 60;

    //Set text
    var text = "Some words to fit";
    
    //Create dynamic texture
    var dynamicTexture = new DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene, true);

    //Check width of text for given font type at any size of font
    var ctx = dynamicTexture.getContext();
	var size = 12; //any value will work
    ctx.font = size + "px " + font_type;
    var textWidth = ctx.measureText(text).width;
    
    //Calculate ratio of text width to size of font used
    var ratio = textWidth/size;
	
	//set font to be actually used to write text on dynamic texture
    var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
    var font = font_size + "px " + font_type;
	
	//Draw text
    dynamicTexture.drawText(text, null, null, font, "#000000", "#ffffff", true);

    //create material
    var mat = new StandardMaterial("mat", scene);
    mat.diffuseTexture = dynamicTexture;
    
    //apply material
    plane.material = mat;


	  var speed = 45;
	  var frameCount = 200;
		var setCamLateralLeft = function(idx) {
	  	animateCameraTargetToPosition(camera, speed, frameCount, new Vector3(-240, 15, 10 * idx));
	  	animateCameraToPosition(camera, speed, frameCount, new Vector3(-200, 15, 10 * idx));
	  };

	    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
	        var ease = new CubicEase();
	        ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);

	        var aable1 = Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
	        aable1.disposeOnEnd = true;
	    }

	  var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
	  	var ease = new CubicEase();
	    ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
	    var aable2 = Animation.CreateAndStartAnimation('at4', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
	    aable2.disposeOnEnd = true;
	  }


		var artworkTest = function(artwork, idx) {

		}

    return scene;
  }



}
// var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
//       }

//     var speed = 45;
//     var frameCount = 200;
// ar setCamLateralLeft = function() {
//         animateCameraTargetToPosition(camera, speed, frameCount, new BABYLON.Vector3(5, 15, 0));
//         animateCameraToPosition(camera, speed, frameCount, new BABYLON.Vector3(-85, 15, 0));
//     };