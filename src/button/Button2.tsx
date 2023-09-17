import React from 'react';
import {Button} from "../components/Button";

const Button2 = () => {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Stupid Button')
    }

    return (
        <div className={"App"}>
            <Button name={"My Youtube Chanel-1"} callBack={() =>Button1Foo("Eliza", 21, "live in Spb")}/>
            <Button name={"My Youtube Chanel-2"} callBack={() =>Button2Foo("Elizabeth")}/>
            <Button name={"Stupid Button"} callBack={Button3Foo}/>
            {/*<button>My Youtube Chanel-2</button>*/}
        </div>
    );
};

export default Button2;