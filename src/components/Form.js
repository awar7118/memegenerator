import react from "react";
import './Form.css'

export default function Form() {
    return (
        <form className="form">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"></input>
            <input type="submit" value="Get a new meme image 🎨"></input>
        </form>
    )
}