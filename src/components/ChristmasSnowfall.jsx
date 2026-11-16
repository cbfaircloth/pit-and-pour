
import { useEffect, useState } from "react";

const SNOWFLAKE_COUNT = 55;

function createSnowflakes(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 12 + 12,
    delay: -(Math.random() * 24),
    drift: Math.random() * 100 - 50,
    opacity: Math.random() * 0.5 + 0.3,
  }));
}

export default function ChristmasSnowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const width = window.innerWidth;

    const count =
      width <= 600
        ? 15
        : width <= 1000
          ? 30
          : SNOWFLAKE_COUNT;

    setSnowflakes(createSnowflakes(count));
  }, []);

  return (
    <div className="christmas-snowfall" aria-hidden="true">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="christmas-snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            "--snow-drift": `${flake.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
