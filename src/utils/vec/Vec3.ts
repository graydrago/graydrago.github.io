import { Vec2 } from './Vec2';
import { Vec4 } from './Vec4';
import { ColorComponent, UVComponent } from './types';

export type Vec3Component = 'x' | 'y' | 'z';
export type Swizzling = Vec3Component | UVComponent | ColorComponent;

export class Vec3 {
  public x;
  public y;
  public z;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get r() {
    return this.x;
  }

  set r(v: number) {
    this.x = v;
  }

  get g() {
    return this.y;
  }

  set g(v: number) {
    this.y = v;
  }

  get b() {
    return this.z;
  }

  set b(v: number) {
    this.z = v;
  }

  get u() {
    return this.x;
  }

  set u(v: number) {
    this.x = v;
  }

  get v() {
    return this.y;
  }

  set v(v: number) {
    this.y = v;
  }

  add(other: Vec3) {
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  sub(other: Vec3) {
    return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  mulScalar(scalar: number) {
    return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  swiz(...mask: [Swizzling]): number;
  swiz(...mask: [Swizzling, Swizzling]): Vec2;
  swiz(...mask: [Swizzling, Swizzling, Swizzling]): Vec3;
  swiz(...mask: [Swizzling, Swizzling, Swizzling, Swizzling]): Vec4;
  swiz(...mask: Swizzling[]): number | Vec2 | Vec3 | Vec4 {
    switch (mask.length) {
      case 1: {
        return this[mask[0] as Swizzling];
      }
      case 2: {
        const x = this[mask[0] as Swizzling];
        const y = this[mask[1] as Swizzling];
        return new Vec2(x, y);
      }
      case 3: {
        const x = this[mask[0] as Swizzling];
        const y = this[mask[1] as Swizzling];
        const z = this[mask[2] as Swizzling];
        return new Vec3(x, y, z);
      }
      case 4: {
        const x = this[mask[0] as Swizzling];
        const y = this[mask[1] as Swizzling];
        const z = this[mask[2] as Swizzling];
        const w = this[mask[4] as Swizzling];
        return new Vec4(x, y, z, w);
      }
      default:
        throw new Error('Wrong mask');
    }
  }
}
