import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

   const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
    }

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, []);

    
return currentPath === path
? children
: null;
}

export default Route;