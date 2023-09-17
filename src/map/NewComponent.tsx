import React from 'react';

type NewComponentPropsType = {
    cars: CarPropsType[],
}

type CarPropsType = {
    manufacturer: string,
    model: string
}

export const NewComponent : React.FC <NewComponentPropsType> = ({cars}) => {
    return (
        <table>
            {cars.map((ObjectCarArray, index) => {
                return <tr>
                    <th>{index +=1}</th>
                    <th>{ObjectCarArray.manufacturer}</th>
                    <th>{ObjectCarArray.model}</th>
                </tr>
            })}

        </table>
    );
};

