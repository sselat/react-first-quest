import './colorPicker.css'

const ColorPicker = () => {
    return (
        <div className="colorSelector">
            <div className="inputDiv">
                <input type="color" id="head" name="head" />
                <label for="head">Background</label>
            </div>

            <div className="inputDiv">
                <input type="color" id="body" name="body" />
                <label for="body">Texto</label>
            </div>
        </div>
    )
}
export default ColorPicker