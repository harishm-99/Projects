import React,{useState} from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import {IoMdSend} from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs';


export default function ChatInput() {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState('');

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    // const handleEmojiClick = (event, emoji) => {
    //     console.log(emoji);
    //     let message = msg;
    //     message += emoji.emoji;
    //     setMsg(message);
    // };

    const handleEmojiClick = (event, emojiObject) => {
        console.log(emojiObject)
        setMsg(msg + emojiObject.emoji);
      };

  return (
      <Container>
          <div className="button-container">
              <div className="emoji">
                  <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                  {
                      showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>
                  }
              </div>
          </div>
          <form className="input-container">
              <input
                  type="text"
                  placeholder='type your message here'
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
              />
              <button className="submit">
                  <IoMdSend/>
              </button>
          </form>
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    .button-container{
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji{
            position: relative;
            svg{
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
            .epr_-6npj90 {
                position: absolute;
                top: -460px;
                left: -10px;
                background-color: #9a86f3;
            }
        }
    }
    .input-container{
        width: 100%;
        height: 80%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        background-color: #ffffff34;
        input{
            width: 90%;
            height: 60%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1,2rem;
            &::selection{
                background-color: #9186f3;
            }
            &:focus{
                outline: none;
            }
        }
        button{
            margin-left: 1rem;
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            svg{
                font-size: 2rem;
                color: white;
            }
        }
    }
`;