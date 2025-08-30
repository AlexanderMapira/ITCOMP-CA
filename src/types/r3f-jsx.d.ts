// Ensures React Three Fiber's JSX tags like <group />, <boxGeometry />, <meshStandardMaterial /> are typed.
import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    // Extending ThreeElements to provide type support for R3F JSX elements
    // This is intentionally empty as it inherits all members from ThreeElements
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
