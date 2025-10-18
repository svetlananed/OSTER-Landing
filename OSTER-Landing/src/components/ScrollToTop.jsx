import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop () {

    const [visible, setVisible] = useState(false);

    // Tracking scroll

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
        }, []);

        // Scrollung Up

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-7 md:bottom-10 xl:bottom-13 right-7 md:right-10 xl:right-13 w-11 h-11 bg-slate-400 dark:bg-cyan-300 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black shadow-[8px_8px_12px_rgba(0,0,0,0.5)] transition-opacity duration-500 
                    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <ChevronUp />
            </button>
        </>
    );
}


export default ScrollToTop