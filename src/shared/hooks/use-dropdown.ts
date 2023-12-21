import { useState, useEffect, createRef } from "react";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!dropdownRef) return;

    const clickHandler = (e: MouseEvent) => {
      if (!e.composedPath().includes(dropdownRef.current!)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, [dropdownRef]);

  return { isOpen, setIsOpen, dropdownRef };
};
