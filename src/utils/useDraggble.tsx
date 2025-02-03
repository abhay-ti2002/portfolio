import { useEffect } from "react";

const useDraggable = (elementId: string) => {
  useEffect(() => {
    const element = document.getElementById(elementId);

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      offsetX = e.clientX - element!.getBoundingClientRect().left;
      offsetY = e.clientY - element!.getBoundingClientRect().top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        element!.style.left = x + "px";
        element!.style.top = y + "px";
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    element?.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      element?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [elementId]);
};

export default useDraggable;
