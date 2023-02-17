import './textCard.css'

const TextCard = (props) => {
    return (
        <div className='card' style={{backgroundColor:props.bgColor, color:props.txtColor}}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, itaque possimus illo harum architecto veniam autem veritatis, neque eum consequatur unde repudiandae nam velit voluptatem ipsam quos impedit ea adipisci?</p>
        </div>
    )
}


TextCard.defaultProps = {
    bgColor: 'gold',
    txtColor: 'blue'
}

export default TextCard