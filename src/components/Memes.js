import React, { useState } from "react";
import './Memes.css'
import memesData from '../memesData'

export default function Meme() {

    const random = Math.floor(Math.random() * memesData.data.memes.length);


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage:newURL}))
    }
    return (
        <div className="memes-container">
                <div className="form-cont   ainer">
                <form className="form">
                    <input type="text" placeholder="Top Text" className="form-input"></input>
                    <input type="text" placeholder="Bottom Text" className="form-input"></input>
                    <button className="form-button" onClick={getMemeImage}>Get a new meme image 🎨</button>
                </form>
                </div>
            <img src={meme.randomImage} className="meme-image" alt="memes"/>
        </div>
    )
}