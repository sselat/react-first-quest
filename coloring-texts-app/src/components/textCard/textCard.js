import './textCard.css'

const TextCard = ({backgroundColor, textColor}) => {
    return (
        <div className='card' style={{ backgroundColor: backgroundColor, color: textColor}}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, itaque possimus illo harum architecto veniam autem veritatis, neque eum consequatur unde repudiandae nam velit voluptatem ipsam quos impedit ea adipisci?</p>
        </div>
    )
}

TextCard.defaultProps = {
    backgroundColor: 'white',
    textColor: 'black'
}
export default TextCard