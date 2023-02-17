import './colorPicker.css'

const ColorPicker = ({backgroundColor, textColor}) => {
    return (
        <div className="colorSelector">
            <div className="inputDiv">
                <input type="color" id="head" name="head" value={backgroundColor}/>
                <label for="head">Background</label>
            </div>

            <div className="inputDiv">
                <input type="color" id="body" name="body" value={textColor}/>
                <label for="body">Texto</label>
            </div>
        </div>
    )
}

ColorPicker.defaultProps = {
    backgroundColor: '#fff',
    textColor: '#000'
}
export default ColorPicker