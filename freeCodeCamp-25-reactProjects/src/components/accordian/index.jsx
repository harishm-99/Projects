
// import { useState } from "react";
// import data from './data';

// export default function Accordian() {
    
//     const [selected, setSelected] = useState(null);

//     function handleSingleSelection(getCurrentId) {
//         console.log(getCurrentId);
//         setSelected(getCurrentId===selected?null:getCurrentId);
//     }

//     return (
//         <div className="wrapper">
//             <div className="accordian">
//                 {
//                     data && data.length > 0 ?
//                         data.map(dataItem => <div className="item" key={dataItem.id}>
//                             <div className="title" onClick={()=>handleSingleSelection(dataItem.id)}>
//                                 <h3>{dataItem.question}</h3>
//                                 <span>+</span>
//                             </div>
//                             {
//                                 selected === dataItem.id ?
//                                     <div className="content">{dataItem.answer}</div>:null
//                             }
//                     </div>) : <div>
//                         Data not found!
//                     </div>
//                 }
//             </div>
//         </div>
//     )
// }

import "./styles.css";
import {useState} from "react";
import data from './data';

export default function Accordian() {

    const [selected, setSelected] = useState(null);

    function handleButtonClick(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId===selected?null:getCurrentId)
    }

    return (
        <div className="wrapper">
            <button>Enable Multi Selection </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem =>
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={()=>handleButtonClick(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected===dataItem.id? dataItem.answer:null
                                }
                            </div>
                        )
                    :
                    <div>Data not found</div>
                }
            </div>
        </div>
    )
}