import './textCard.css'

const showLabel = (props) => {
    console.log(props.children)
}
const TextCard = (props) => {
    return (
        <div className='card' style={{backgroundColor:props.bgColor, color:props.txtColor}} onClick={showLabel(props)}>
            {props.children}
        </div>
    )
}


TextCard.defaultProps = {
    bgColor: 'gold',
    txtColor: 'blue'
}

export default TextCard