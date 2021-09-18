import React, { useState } from "react";
import "./App.css";

/**
 * concept notes: styling in react
 */

const emojiDictionary = {
  "😀": "Grinning Face",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "😴": "Sleeping Face",
  "👿": "Angry Face with Horns",
  "🎤": "Mic",
  "💘": "Heart with Arrow",
  "💓": "Beating Heart",
  "💔": "Broken Heart",
  "💚": "Green Heart",
  "🌀": "Cyclone",
  "♣️": "Club Suit",
  "🔇": "Muted Speaker",
  "🔔": "Bell",
  "🚮": "Litter in Bin Sign",
  "📵": "No Mobile Phones",
  "⬆️": "Up Arrow",
  "➡️ ": "Right Arrow",
  "⬇️": "Down Arrow",
  "⬅️": "Left Arrow",
  "⚛️": "Atom Symbol",
  "▶️": "Play Button",
  "⏸️": "Pause Button",
  "🎦": "Cinema",
  "📴": "Mobile Phone Off",
  "♾️": "Infinity",
  "♻️": "Recycling Symbol",
  " ©️": "Copyright",
  "🔺": "Red Triangle Pointed Up",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className="head">Emoji's World</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
      />
      <h2 className="output"> {emoji} </h2>
      <h3 className="output"> {meaning} </h3>
      <div className="container">
        {emojis.map((emoji) => (
          <span
            className="emoji"
            key={emojiDictionary[emoji]}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
