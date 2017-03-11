
import '../../node_modules/three/src/polyfills.js';
import { WebGLRenderer as WebGLRenderer } from '../../node_modules/three/src/renderers/WebGLRenderer.js';
import { PerspectiveCamera as PerspectiveCamera } from '../../node_modules/three/src/cameras/PerspectiveCamera.js';
import { Scene as Scene } from '../../node_modules/three/src/scenes/Scene.js';
import { MeshBasicMaterial as MeshBasicMaterial } from '../../node_modules/three/src/materials/MeshBasicMaterial.js';
import { Mesh as Mesh } from '../../node_modules/three/src/objects/Mesh.js';
import { BoxGeometry as BoxGeometry } from '../../node_modules/three/src/geometries/BoxGeometry.js';
import { AmbientLight as AmbientLight } from '../../node_modules/three/src/lights/AmbientLight.js';
import { DirectionalLight as DirectionalLight } from '../../node_modules/three/src/lights/DirectionalLight.js';

var App = {
  canvasContainer: document.getElementById('three-container'),
  init: function(){
    this.createCanvas();
    this.animate();
  },
  createCanvas: function(){
    var size = this.canvasContainer.getBoundingClientRect();
    this.renderer = new WebGLRenderer({antialias: true});
    this.renderer.setSize(size.width, size.height);
    this.canvasContainer.appendChild(this.renderer.domElement);

    this.camera = new PerspectiveCamera(70, size.width / size.height, 1, 1000);
    this.camera.position.z = 400;

    this.material = new MeshBasicMaterial();

    this.mesh = new Mesh(new BoxGeometry(200, 200, 200), this.material);

    this.scene = new Scene();
    this.scene.add(this.mesh);

    var light = new AmbientLight(0x404040); // soft white light
    this.scene.add(light);

    var directionalLight = new DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);

    window.addEventListener('resize', this.onWindowResize.bind(this));
    
  },
  animate: function(){
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  },
  render: function(){
    this.renderer.render(this.scene, this.camera);
  },
  onWindowResize: function(){
    var size = this.canvasContainer.getBoundingClientRect();
    this.camera.aspect = size.width / size.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(size.width, size.height);
  }
}
App.init();