import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordation() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    console.log(enableMultiSelection);
    function handleSingleClick(getCurrentId) {
        setSelected(selected===getCurrentId?null:getCurrentId)
        console.log(getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        const copyMultiple = [...multiple];
        let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        
        setMultiple(copyMultiple);
    }

    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
            <div className="accordation">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={enableMultiSelection ?
                                    () => handleMultiSelection(dataItem.id):
                                    () => handleSingleClick(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div> :
                                        selected === dataItem.id && <div>{dataItem.answer }</div>
                                }

                                {/* {
                                    selected===dataItem.id || multiple.indexOf(dataItem.id)? dataItem.answer:null
                                } */}
                        </div>
                    ))
                    : <div>Data Not Found</div>
                }
            </div>
        </div>
    )
}