import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
}

export default ScrollToTopOnRouteChange;
