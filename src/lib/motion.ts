// src/lib/motion.ts
export const fadeIn = (delay: number = 0, direction: "up" | "down" | "left" | "right" = "up") => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 30;
      break;
    case "down":
      y = -30;
      break;
    case "left":
      x = 30;
      break;
    case "right":
      x = -30;
      break;
  }

  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
    viewport: { once: true },
  };
};
