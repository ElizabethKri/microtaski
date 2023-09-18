import React from 'react';

export type MoneyPropsType = {
    banknots: string;
    value: number;
    number: string
}

type CurrentMoneyPropsType = {
    currentMoney: MoneyPropsType[]
    callback: (name: FilterType) => void
}

export type FilterType = 'all' | 'RUBLS' | 'Dollars'

export const NewComponent : React.FC <CurrentMoneyPropsType> = ({currentMoney, callback}) => {

    const onClickFilterHandler = (nameBtn: FilterType) => {
        callback(nameBtn)
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

