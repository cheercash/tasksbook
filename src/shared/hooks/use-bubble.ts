import { useState } from "react";

export const useBubble = () => {
  const [bubbles, setBubbles] = useState<
    { x: number; y: number; key: string }[]
  >([]);

  const addBubble: React.MouseEventHandler<HTMLElement> = (e) => {
    setBubbles((prev) => [
      {
        key: Date.now().toString(),
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
      ...prev,
    ]);

    const timeout = setTimeout(() => {
      setBubbles((prev) =>
        prev.filter((_, idx, arr) => idx !== arr.length - 1),
      );

      clearTimeout(timeout);
    }, 360);
  };

  return { bubbles, addBubble };
};
