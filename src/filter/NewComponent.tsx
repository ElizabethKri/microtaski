import React from 'react';

export type MoneyPropsType = {
    banknots: string;
    value: number;
    number: string
}

type CurrentMoneyPropsType = {
    currentMoney: MoneyPropsType[]
    callback: (name: string) => void
}

export const NewComponent : React.FC <CurrentMoneyPropsType> = ({currentMoney, callback}) => {

    const onClickFilterHandler = (name: string) => {
        callback(name)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objectFromMoneyArr, index) => {
                    return(
                        <li key={index}>
                            <span>{objectFromMoneyArr.banknots}</span>
                            <span>{objectFromMoneyArr.number}</span>
                            <span>{objectFromMoneyArr.value}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')} >all</button>
                <button onClick={() => onClickFilterHandler ('Dollars')} >Dollars</button>
                <button onClick={() => onClickFilterHandler ('RUBLS')}>RUBLS</button>
            </div>
        </>
    );
};

