import { Matrix4 } from '../matrix';
import { Object3D } from './object3d';
import { Mesh } from './mesh';

export class Scene {
    children: Array<Object3D>;
    bin: Array<string | ArrayBuffer>;
    matrixWorld: Matrix4;
    matrix: Matrix4;
    transparentChildren: Array<Mesh>;
    opaqueChildren: Array<Mesh>;
    meshes: Array<Mesh>;

    constructor() {
        this.opaqueChildren = [];
        this.transparentChildren = [];
        this.meshes = [];
        this.children = [];
        this.bin = [];
        this.matrixWorld = new Matrix4();
        this.matrix = new Matrix4();
    }
}
