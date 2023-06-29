export class Vec2 {
  public x;
  public y;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  sub(other: Vec2) {
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  norm() {
    const length = this.len();
    return new Vec2(this.x / length, this.y / length);
  }

  mulScalar(scalar: number) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  static ZERO = Object.freeze(new Vec2(0, 0));
}
