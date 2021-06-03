import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Engine, Scene, FreeCamera, Vector2, Vector3, HemisphericLight, MeshBuilder, SceneLoader, ArcRotateCamera, StandardMaterial, Texture, PBRMetallicRoughnessMaterial, Mesh, ActionManager, InterpolateValueAction, Color3, EasingFunction, Animation, CubicEase, ExecuteCodeAction, DynamicTexture, PointLight, SpotLight, HighlightLayer } from '@babylonjs/core';
import { ExhibitionsService } from '../services/exhibitions.service';
import { SceneDetailsComponent } from '../scene-details/scene-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})

export class SceneComponent implements OnInit, AfterViewInit {
	@ViewChild('renderCanvas') renderCanvas;
	
	scene: Scene;
  engine: Engine;
  exhibition: any;
  exhibition_slug: string;
  loading: boolean = true;

  constructor(
  	private exhibitionsService: ExhibitionsService,
  	private snackBar: MatSnackBar,
  	private actRoute: ActivatedRoute,
  	private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  	this.actRoute.paramMap.subscribe(params => {
      this.exhibition_slug = params.get('slug');
    });

  	this.loading = true;
    this.exhibitionsService.getById(this.exhibition_slug).then((res) => {
    	this.exhibition = res;
    	this.loading = false;

	    this.scene = this.createScene(this.renderCanvas.nativeElement);

	    this.engine.runRenderLoop(() => {
	      this.scene.render();
	    });
    }, (err) => {
		  this.snackBar.open(err, "", {
    		horizontalPosition: "center",
    		verticalPosition: "top"
		  });
    });
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = data;

    this.dialog.open(SceneDetailsComponent, dialogConfig);
       
  }

  createScene(canvas: HTMLCanvasElement) {
 		// Dynamic constants from api
  	const artwork_per_wall = Math.ceil(this.exhibition.total / 4)
  	const wall_height = 200;
  	const wall_width = (artwork_per_wall * 75);
  	const half_wall_width = Math.ceil(wall_width / 2);
  	const floor_height = wall_width;
  	const floor_width = wall_width;

    this.engine = new Engine(canvas);

    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(this.engine);
    // Add gravity to keep movement to x and z
		scene.gravity = new Vector3(0, -0.9, 0);
		scene.collisionsEnabled = true;


		// This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera('camera-movement', new Vector3(-(half_wall_width/2), 32, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(new Vector3(0, 32, 0));
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
		camera.checkCollisions = true;
		camera.ellipsoid = new Vector3(4, 16, 4);
    camera.applyGravity = true;

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;



    // Build walls
    const wall_material = new StandardMaterial("wall_material", scene);
		wall_material.diffuseTexture = new Texture("assets/images/textures/concrete.jpg", scene);

    const left_wall = MeshBuilder.CreateBox('left-wall', {width: wall_width, height: wall_height}, scene);
		left_wall.position = new Vector3(0, 20, -half_wall_width);
		left_wall.material = wall_material;
		left_wall.checkCollisions = true;
		left_wall.position.y = 20;

    const right_wall = MeshBuilder.CreateBox('right-wall', {width: wall_width, height: wall_height}, scene);
		right_wall.position = new Vector3(0, 20, half_wall_width);
		right_wall.material = wall_material;
		right_wall.checkCollisions = true;
		right_wall.position.y = 20;

    const front_wall = MeshBuilder.CreateBox('front-wall', {width: wall_width, height: wall_height}, scene);
		front_wall.position = new Vector3(half_wall_width, 20, 0);
		front_wall.material = wall_material;
		front_wall.checkCollisions = true;
		front_wall.rotation = new Vector3(0, Math.PI / 2, 0);

    const back_wall = MeshBuilder.CreateBox('back-wall', {width: wall_width, height: wall_height}, scene);
		back_wall.position = new Vector3(-half_wall_width, 20, 0);
		back_wall.material = wall_material;
		back_wall.checkCollisions = true;
		back_wall.rotation = new Vector3(0, -Math.PI / 2, 0);

    
		// Create ground
    const ground = MeshBuilder.CreateGround('ground', {width: floor_width, height: floor_width}, scene);
		const ground_material = new StandardMaterial("ground_material", scene);
		ground_material.diffuseTexture = new Texture("assets/images/textures/wood.jpg", scene);
		ground.material = ground_material;
		ground.checkCollisions = true;


    const roof = MeshBuilder.CreateBox('roof', {width: floor_width, height: wall_height}, scene);
		const roof_material = new StandardMaterial("roof_material", scene);
		roof_material.diffuseTexture = new Texture("assets/images/textures/wood.jpg", scene);
		roof.material = roof_material;
		roof.checkCollisions = true;
		roof.position = new Vector3(0, 100, 0);
		roof.rotation = new Vector3(Math.PI/2, 0, 0);

		// Create painting
		var idx_artwork = 0;
		var idx_wall = 0;

		var artwork_space = 0;
		if(artwork_per_wall > 1) {
			artwork_space = -half_wall_width/((artwork_per_wall/2) <= 1 ? 2 : (artwork_per_wall/2));
		}

    const speed = 45;
	  const frameCount = 200;
	  var cameraPosition, cameratargetPosition;

		// Set font type
    const font_type = "Arial";
		// Set width an height for plane
    const plane_width = 5;
    const plane_height = 2;
    const size = 12;

		const walls = {
			0: { // Front Wall
				id: "front",
				rotation: [0, (Math.PI / 2), 0],
				position: [half_wall_width-1, 40, 0],
				frame_position: [half_wall_width-.75, 40, 0],
				label_position: [half_wall_width-1, 40, 0]
			}, 
			1: { // Back Wall
				id: "back",
				rotation: [0, (-Math.PI / 2), 0],
				position: [-(half_wall_width-1), 40, 0],
				frame_position: [-(half_wall_width-.75), 40, 0],
				label_position: [-(half_wall_width-1), 40, 0]
			}, 
			2: { // Left Wall
				id: "left",
				rotation: [],
				position: [0, 40, half_wall_width-1],
				frame_position: [0, 40, half_wall_width-.75],
				label_position: [0, 40, half_wall_width-1]
			}, 
			3: { // Right Wall
				id: "right",
				rotation: [0, Math.PI, 0],
				position: [0, 40, -(half_wall_width-1)],
				frame_position: [0, 40, -(half_wall_width-.75)],
				label_position: [0, 40, -(half_wall_width-1)]
			}
		};



		console.log(this.exhibition.artworks);

		while(idx_artwork < this.exhibition.total) {
			for(let idx = 0; (idx < artwork_per_wall && idx_artwork < this.exhibition.total); idx++) {
			  let artwork = this.exhibition.artworks[idx_artwork];
				let current_wall_position = walls[idx_wall]["position"];
				let current_wall_frame_position = walls[idx_wall]["frame_position"];
				let current_wall_label_position = walls[idx_wall]["label_position"];
				let current_wall_rotation = walls[idx_wall]["rotation"];
	  		
				let current_artwork_width = artwork.width / 10;
				let current_artwork_height = artwork.height / 10;

				var artwork_texture = new Texture(`https://www.collectionartnb.ca/${artwork.image}`, scene);
				var artwork_plane = MeshBuilder.CreatePlane(`artwork-${artwork.slug}`, { width: current_artwork_width, height: current_artwork_height }, scene);
			  var artwork_material = new StandardMaterial(`artwork-material-${artwork.slug}`, scene);
			  artwork_material.diffuseTexture = artwork_texture;
			  artwork_plane.material = artwork_material;

			  var frame_texture = new Texture('assets/images/textures/wood.jpg', scene);
				var frame_plane = MeshBuilder.CreatePlane(`frame-${artwork.slug}`, { width: current_artwork_width+2, height: current_artwork_height+2 }, scene);
			  var frame_material = new StandardMaterial(`frame-material-${artwork.slug}`, scene);
			  frame_material.diffuseTexture = frame_texture;
			  frame_plane.material = frame_material;

			 //  var label_texture = new Texture('assets/images/textures/gold.jpg', scene);
				// var label_plane = MeshBuilder.CreatePlane(`label-${artwork.slug}`, { width: 5, height: 2 }, scene);
			 //  var label_material = new StandardMaterial(`label-material-${artwork.slug}`, scene);
			 //  label_material.diffuseTexture = label_texture;
			 //  label_plane.material = label_material;

		    //Create plane
		    var label_plane = MeshBuilder.CreatePlane(`label-${artwork.slug}`, { width: plane_width, height: plane_height }, scene);

		    //Set width and height for dynamic texture using same multiplier
		    var dynamic_texture_width = plane_width * 60;
		    var dynamic_texture_height = plane_height * 60;

		    //Set text
		    var text = ` ${artwork.title} `;
		    
		    //Create dynamic texture
		    var dynamic_texture = new DynamicTexture(`label-texture-${artwork.slug}`, { width: dynamic_texture_width, height: dynamic_texture_height }, scene, true);

		    //Check width of text for given font type at any size of font
		    var ctx = dynamic_texture.getContext();
				
		    ctx.font = size + "px " + font_type;
		    var text_width = ctx.measureText(text).width;
		    
		    //Calculate ratio of text width to size of font used
		    var ratio = text_width/size;
			
				//set font to be actually used to write text on dynamic texture
		    var font_size = Math.floor(dynamic_texture_width / (ratio * 2)); //size of multiplier (1) can be adjusted, increase for smaller text
		    var font = 16 + "px " + font_type;
			
				//Draw text
		    dynamic_texture.drawText(text, null, null, font, "#000000", "#FFD700", true);

		    //create material
		    var label_material = new StandardMaterial(`label-material-${artwork.slug}`, scene);
		    label_material.diffuseTexture = dynamic_texture;
		    
		    //apply material
		    label_plane.material = label_material;


			 //  var artwork_lamp = MeshBuilder.CreateSphere(`lamp-${artwork.slug}`, { diameter: 5 }, scene);
    //     var artwork_lamp_material = new StandardMaterial(`lamp-material-${artwork.slug}`, scene)
    //     artwork_lamp_material.emissiveColor = new Color3(1.0, 1.0, 0.7);
    //     artwork_lamp.material = artwork_lamp_material;

    //     var artwork_lamp_glow = new HighlightLayer(`lamp-glow-${artwork.slug}`, scene);
		  //   artwork_lamp_glow.addMesh(artwork_lamp, new Color3(.9, .9, .9))

				// var artwork_lamp_light = new SpotLight(`lamp-light-${artwork.slug}`, new Vector3(0, 0, 0), new Vector3(0, -1, 0), Math.PI, 10, scene);
	  	// 	artwork_lamp_light.range = 40;
 			// 	artwork_lamp_light.diffuse = new Color3(255, 255, 255);
  		// 	artwork_lamp_light.specular = new Color3(255, 255, 255);

  		// 	artwork_lamp_light.parent = artwork_lamp;


			  if(walls[idx_wall]['id'] == 'left' || walls[idx_wall]['id'] == 'right') {
					artwork_plane.position = new Vector3(artwork_space, current_wall_position[1], current_wall_position[2]);
					frame_plane.position = new Vector3(artwork_space, current_wall_frame_position[1], current_wall_frame_position[2]);
					label_plane.position = new Vector3(artwork_space, (38 - current_artwork_height/2), current_wall_label_position[2]);
					//artwork_lamp.position = new Vector3(artwork_space, (current_wall_frame_position[1] + 17), current_wall_frame_position[2]-1);
					if(walls[idx_wall]['id'] == 'left') {
						//var light = new SpotLight("spotLight---", new Vector3(0, 40, 0), new Vector3(0, -1, 0), Math.PI, 10, scene);
						//artwork_lamp.position = new Vector3(0, 20, 0);

					} else {
						//var light = new SpotLight("spotLight---", new Vector3(0, 20, 0), new Vector3(0, -1, 0), Math.PI, 10, scene);
						//console.log(light);
					}
			  } else {
					artwork_plane.position = new Vector3(current_wall_position[0], current_wall_position[1], artwork_space);
					frame_plane.position = new Vector3(current_wall_frame_position[0], current_wall_frame_position[1], artwork_space);
					label_plane.position = new Vector3(current_wall_label_position[0], (38 - current_artwork_height/2), artwork_space);
					if(walls[idx_wall]['id'] == 'front') {
						//cameraPosition = new Vector3(current_wall_position[0]+20, 20, -100);
						//cameratargetPosition = new Vector3(current_wall_position[0]+60, 20, -100);
						// artwork_lamp.position = new Vector3(current_wall_frame_position[0]-1, (current_wall_frame_position[1] + 17), artwork_space);
					} else {
						//cameraPosition = new Vector3(artwork_space+40, current_wall_position[1], current_wall_position[2]);
						//cameratargetPosition = new Vector3(artwork_space+40, current_wall_position[1], current_wall_position[2]);
						// artwork_lamp.position = new Vector3(current_wall_frame_position[0]+1, (current_wall_frame_position[1] + 17), artwork_space);
					}
				}

				artwork_plane.actionManager = new ActionManager(scene);
				label_plane.actionManager = new ActionManager(scene);
				var _this = this
		    artwork_plane.actionManager.registerAction(
		    	new ExecuteCodeAction(
		      	ActionManager.OnPickTrigger, function (ev) {
		      		//setCamLateralLeft(cameraPosition);
							_this.openDialog(artwork);
		      		
		        }
		      )
				);
		    label_plane.actionManager.registerAction(
		    	new ExecuteCodeAction(
		      	ActionManager.OnPickTrigger, function (ev) {
		      		//setCamLateralLeft(cameraPosition);
							_this.openDialog(artwork);
		      		
		        }
		      )
				);

				if(current_wall_rotation.length > 0) {
					artwork_plane.rotation = new Vector3(current_wall_rotation[0], current_wall_rotation[1], current_wall_rotation[2]);
					frame_plane.rotation = new Vector3(current_wall_rotation[0], current_wall_rotation[1], current_wall_rotation[2]);
					label_plane.rotation = new Vector3(current_wall_rotation[0], current_wall_rotation[1], current_wall_rotation[2]);
				}

			  idx_artwork += 1;
			  artwork_space += 50;
		  }

		  idx_wall += 1
		  var artwork_space = 0;
			if(artwork_per_wall > 1) {
				artwork_space = -half_wall_width/((artwork_per_wall/2) <= 1 ? 2 : (artwork_per_wall/2));
			}
		}



		// var setCamLateralLeft = function(position) {
	 //  	animateCameraTargetToPosition(camera, speed, frameCount, cameraPosition);
	 //  	animateCameraToPosition(camera, speed, frameCount, cameraPosition);
	 //  };

	 //  var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
	 //  	var ease = new CubicEase();
	 //  	ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
	 //    var aable1 = Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
	 //    aable1.disposeOnEnd = true;
	 //  }

	 //  var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
	 //  	var ease = new CubicEase();
	 //    ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
	 //    var aable2 = Animation.CreateAndStartAnimation('at4', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
	 //    aable2.disposeOnEnd = true;
	 //  }




    return scene;
  }
}