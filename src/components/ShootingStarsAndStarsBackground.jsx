import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function ShootingStarsAndStarsBackground() {
  return (
    <div className="absolute -z-10 h-full rounded-md flex flex-col items-center justify-center w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
