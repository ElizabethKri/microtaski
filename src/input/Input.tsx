import React, {useState} from 'react';
import {FullInput} from "../components/FullInput";
import {InputBtn} from "../components/InputBtn";
import {ButtonInput} from "../components/ButtonInput";

export const Input = () => {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let[title, setTitle] = useState('')

    const addMessage = (title: string) =>{
        // console.log(title)
        let newMessage = {message: title};
        setMessage([newMessage,...message])
    }

    const callBackButtonHandler = () =>{
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
           {/*<FullInput addMessage = {addMessage}/>*/}
            <InputBtn title={title} setTitle={setTitle}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};