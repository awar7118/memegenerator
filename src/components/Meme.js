import react, { useState } from 'react';
import './Meme.css'

const url = "https://api.imgflip.com/get_memes"

export default function Meme() {
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data.memes))
    
    return (
    <div className="meme-container">

    </div>
    )
}