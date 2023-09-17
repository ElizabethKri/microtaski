
type FooterPropsType = {
    titleForFooter: string
}
export const Footer : React.FC <FooterPropsType> = ({titleForFooter}) =>{
    return (
        <div>{titleForFooter}</div>
    )
}