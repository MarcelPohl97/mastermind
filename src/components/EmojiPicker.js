import React, {useState, useContext} from 'react';
import Picker from 'emoji-picker-react';
import { GlobalContext } from '../provider/GlobalProvider';

const EmojiPicker = ({loadBgColor}) => {
    const {Emoji, setEmoji, getEmoji} = useContext(GlobalContext);
    const [EmojiVisible, setEmojiVisible] = useState(false);

    return (
        <>  
            <div className="absolute right-0 top-0">
                <button onClick={() => {setEmojiVisible(!EmojiVisible)}} type="button" style={{color:`${loadBgColor.colors[0]}`, borderColor:`${loadBgColor.colors[0]}`}} className="bg-white py-2 px-9 shadow-lg rounded-md text-green-400 text-base border-2 border-green-400 uppercase group"><span className="transform inline-block group-hover:animate-bounce">😃</span> Emojis</button>
                {EmojiVisible ? <Picker onEmojiClick={getEmoji} pickerStyle={{zIndex: 1000 }} /> : ''}
            </div>
        </>
    )
}

export default EmojiPicker;
