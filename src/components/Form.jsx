import React, { Component, useState } from 'react';

function Form() {

 const   styles ={
            border:"3px solid black",
            backgroundColor : "transparent",
            borderRadius :'3px',
            color : 'black',
            height : '30px',
            weight : "50px",
            margin : '10px'
    }

    const [initial, final] = useState('Hello World');
    const [fullname, setFullName] = useState();

    const inputEvent = (e) =>{
        console.log(e.target.value);
        final(e.target.value);
    }

    const onSubmits = (e)=>{
        e.preventDefault();
        setFullName(initial);

    }
    return ( 
    <>
    <form onSubmit={onSubmits}>
    <div >
    <h1>Welcome {initial}</h1>
    <h1> {fullname}</h1>
<input style={styles} type="text" placeholder='Enter your Email' onChange={inputEvent} value={initial}/>
        <button style={styles} type="submit">Click </button>
        </div>
        </form>
    </> 
    );
}

export default Form;