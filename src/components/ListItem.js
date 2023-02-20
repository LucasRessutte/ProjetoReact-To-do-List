import React from "react"
import Card from "./Card"
import { useDispatch } from 'react-redux'
import { deleteItem, changeDone } from '../actions/listAction'

function DoneImg(props) {
    if (props.done) {
        return (<img alt="Check" src="./Assets/check.png"></img>)
    } else {
        return (<img alt="Uncheck" src="./Assets/unchecked.png"></img>)
    }
}

function ListItem(props) {
    const dispatch = useDispatch()
    return (<li >
        <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
                <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="delete" src="./Assets/recycle-bin.png"></img></button>
            </div>
        </Card>
    </li>)
}



export default ListItem;