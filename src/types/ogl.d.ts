declare module 'ogl' {
  export class Renderer {
    gl: GL;
    constructor(options: { alpha?: boolean; antialias?: boolean; dpr?: number });
    setSize(width: number, height: number): void;
    render(options: { scene: Transform; camera: Camera }): void;
  }

  export class Camera {
    gl: GL;
    fov: number;
    position: { x: number; y: number; z: number };
    aspect: number;
    constructor(gl: GL);
    perspective(options: { aspect: number }): void;
  }

  interface Vec3 {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): void;
  }

  export class Transform {
    position: Vec3;
    rotation: Vec3;
    scale: Vec3;
    constructor();
    setParent(parent: Transform): void;
  }

  export class Mesh extends Transform {
    gl: GL;
    program: Program;
    constructor(gl: GL, options: { geometry: Plane; program: Program });
  }

  export class Geometry {
    constructor(gl: GL, options?: any);
  }

  export class Plane extends Geometry {
    constructor(gl: GL, options?: { widthSegments?: number; heightSegments?: number });
  }

  export class Program {
    uniforms: Record<string, { value: any }>;
    constructor(
      gl: GL,
      options: {
        vertex: string;
        fragment: string;
        uniforms?: Record<string, { value: any }>;
        transparent?: boolean;
        depthTest?: boolean;
        depthWrite?: boolean;
      }
    );
  }

  export class Texture {
    image: HTMLImageElement | HTMLCanvasElement | null;
    constructor(gl: GL, options?: { generateMipmaps?: boolean });
  }

  type GL = WebGLRenderingContext | WebGL2RenderingContext;
}
