import React from 'react';

type HeaderPropsType = {
    title: string
}
const Header : React.FC <HeaderPropsType> = ({title}) => {
    return (
        <div>
            <>{title}</>
        </div>
    );
};

export default Header;