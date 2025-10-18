import { useLayoutEffect } from "react";

export function LockBodyScroll(lock) {

    useLayoutEffect(() => {
        if (!lock) return;

        // Сохраняем текущую позицию скролла
        const scrollY = window.scrollY;

        // Блокируем скролл
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.width = "100%";

        // Очистка при разблокировке или размонтировании
        return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.width = "";
        
        // Восстанавливаем позицию скролла
        window.scrollTo(0, scrollY);
        };

    }, [lock]);
}
