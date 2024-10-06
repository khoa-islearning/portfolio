import "@/styles/components/Action.sass";
import { useEffect, useState } from "react";

export default function Action1() {
    // TODO: 
    // take note on how i came up with this fadeout in blog
    const [opacity, setOpacity] = useState(1);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(0, 1 - scrollY / 500);
        setOpacity(curr => {
            if (curr) {
                return newOpacity;
            }
            return curr;
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="action" style={{ opacity }}>
            <div>
                <p>C'mon, I'll show you around</p>
                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>
            </div>
        </div>
    );
}
