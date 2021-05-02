import { useEffect } from 'react';

export let useClickOutside = (handler, domNode) => {
    useEffect(() => {
        let handleNode = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler(); // called
            }
        }

        document.addEventListener('mousedown', handleNode);

        return () => {
            document.removeEventListener('mousedown', handleNode);
        }
    });


    return domNode;
}