import react from "react";
import './Form.css'

export default function Form() {
function MemeHandler(){
    let memeAPIURL = "https://api.imgflip.com/get_memes"
}
    return (
<div className="form-container">
        <form className="form">
            <input type="text" placeholder="Top Text" className="form-input"></input>
            <input type="text" placeholder="Bottom Text" className="form-input"></input>
            <button onClick={MemeHandler}className="form-button">Get a new meme image 🎨</button>
        </form>
</div>
    )
}