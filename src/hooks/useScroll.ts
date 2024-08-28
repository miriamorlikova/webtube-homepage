import { useState, useEffect, useRef } from "react";

const TRANSLATE_AMOUNT = 350;

export function useScroll(categories: string[]) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    setTranslate((currTranslate) => {
      const newTranslate = currTranslate - TRANSLATE_AMOUNT;

      if (newTranslate <= 0) {
        return 0;
      }
      return newTranslate;
    });
  }

  function scrollRight() {
    setTranslate((currTranslate) => {
      if (containerRef.current == null) return translate;
      const newTranslate = currTranslate + TRANSLATE_AMOUNT;

      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;

      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  }

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;

      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [translate, categories]);

  return {
    scrollLeft,
    scrollRight,
    translate,
    containerRef,
    isLeftVisible,
    isRightVisible,
  };
}
