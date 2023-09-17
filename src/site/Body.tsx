import React from "react";

type BodyPropsType = {
    titleForBody: string
}
export const Body : React.FC <BodyPropsType> = ({titleForBody}) => {
    return (
        <div>{titleForBody}</div>
    )
}