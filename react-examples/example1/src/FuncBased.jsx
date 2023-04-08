import React, { useState, useEffect, useRef } from 'react';

const FuncBased = () => {
    const [value, setValue] = useState(0);
    const [str, setStr] = useState('');

    useEffect(() => {
        console.log('func component mounted!');
        setStr('value 1');
        return () => console.log('func component will unmount');
    }, [])

    useEffect(() => {
        console.log('func component did update');
    })

    useEffect(() => {
        if (str === '' || str === 'value 2') return;
        console.log('str changed!');
        setStr('value 2');
    }, [str])

    const time = useRef(null);

    useEffect(() => {
        return () => {
            console.log("CLEAN UP!");
            clearTimeout(time.current);
        };
    }, [])

    useEffect(() => {
        time.current = setTimeout(() => {
        console.log("checking validity!");
        setFormIsValid(emailIsValid &&passwordIsValid);
        }, 500); 
    }, [emailIsValid, passwordIsValid]);

    return (
        <div>
            <div className="value-container">
                { value }
            </div>
            <div className="string-container">
                { str }
            </div>
        </div>
    )
}

export default FuncBased;