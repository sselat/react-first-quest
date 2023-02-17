import './textCard.css'

import React from 'react'

class TextCard extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div className='card' style={{backgroundColor:this.props.bgColor, color:this.props.txtColor}}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, itaque possimus illo harum architecto veniam autem veritatis, neque eum consequatur unde repudiandae nam velit voluptatem ipsam quos impedit ea adipisci?</p>
            </div>
        )
    }
}

TextCard.defaultProps = {
    bgColor: 'red',
    txtColor: 'white'
}

export default TextCard