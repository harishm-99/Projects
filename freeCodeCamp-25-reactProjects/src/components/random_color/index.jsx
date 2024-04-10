import { useState } from 'react';

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000")

    // function randomColorUtil(length) {
    //     return Math.floor(Math.random);
    // }
    
    function createRandomHexColor() {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';

        for (let i = 0; i < 6; i++){
            hexColor += hex[Math.floor(Math.random()*hex.length)];
        }

        console.log(hexColor);
        setColor(hexColor);
    }

    function createRandomRGBColor() {
        
    }

    return (
        <div className="container"
            style={{
                alignContent: "center",
                width: "80vw",
                height: "80vh",
                background: color,
            }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create Hex</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB</button>
            <button onClick={typeOfColor==='hex'?createRandomHexColor:createRandomRGBColor}>Generate Random Color</button>
        </div>
    )
}