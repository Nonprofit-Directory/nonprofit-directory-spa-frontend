// src/hooks/navbar/useStickyObserver.ts
import { useEffect, useState } from "react";

export function useStickyObserver() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const onScroll = () => {
      // sticky = scrollTop > 0
      // scrollTop te dice cuantos pixeles se ha desplazado hacia abajo el contenido de un elemento
      setIsSticky(container.scrollTop > 20);
    };

    container.addEventListener("scroll", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isSticky;
}
