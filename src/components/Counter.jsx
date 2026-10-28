import { useEffect, useState } from 'react';

export default function Counter({ target, trigger, suffix = '' }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        setCount(0);

        let current = 0;
        const duration = 1000;
        const step = 20;
        const increment = target / (duration / step);

        const interval = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            setCount(Math.floor(current));
        }, step);

        return () => clearInterval(interval);
    }, [trigger, target]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}
