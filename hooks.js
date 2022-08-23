import { useRef, useEffect } from 'react';

// Хук для проверки на первый рендер
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};