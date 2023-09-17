import React from 'react';

const Button1 = () => {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I Eliza!")
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log("Hello I Eli!")
    // }

    const onClickHandler = (name:string)=>{
        console.log(name)
    }

    // const foo1 = () => {
    //     console.log(100200)
    //
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    return (
        <div className= "App">
            {/*<button onClick={(event)=> {console.log("Hello!")}}>My Youtube Chanel-1</button>*/}
            <button onClick = {(event) => onClickHandler("Eliza")}>My Youtube Chanel-1</button>
            <button onClick= {(event)=>onClickHandler("Eli")}>My Youtube Chanel-2</button>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event) => foo2(100500)}>2</button>*/}

        </div>
    );
};

export default Button1;