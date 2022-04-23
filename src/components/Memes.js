import React, { useState } from "react";
import './Memes.css'
import memesData from '../memesData'

export default function Meme() {

    const random = Math.floor(Math.random() * memesData.data.memes.length);
    const [memeImage, setMemeImage] = useState(memesData.data.memes[random].url)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url
        setMemeImage(newURL)
    }
    console.log(memeImage)
    return (
        <div className="memes-container">
                <div className="form-cont   ainer">
                <form className="form">
                    <input type="text" placeholder="Top Text" className="form-input"></input>
                    <input type="text" placeholder="Bottom Text" className="form-input"></input>
                    <button className="form-button" onClick={getMemeImage}>Get a new meme image 🎨</button>
                </form>
                </div>
            <img src={memeImage}  alt="memes"/>
        </div>
    )
}