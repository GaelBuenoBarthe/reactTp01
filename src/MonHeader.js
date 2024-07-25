import React, { useState, useEffect } from 'react';

function MonHeader() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('fr-FR'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString('fr-FR'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <header className="bg-gray-400 text-black p-4 text-xl">{currentTime}</header>;
}

export default MonHeader;