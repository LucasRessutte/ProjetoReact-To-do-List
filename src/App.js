import React, { useState } from "react";
import List from "./components/List"
import TodoForm from "./components/TodoForm"
import Modal from "./components/Modal";
import './Todo.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import listReducer from "./reducers/listReducer";



const SAVED_ITEMS = "savedItems"

function presistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));

}
function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState)
        return JSON.parse(actualState)
    else
        return []
}
const store = createStore(listReducer, loadState())

store.subscribe(() => {
    presistState(store.getState())
})

function App() {

    const [showModal, setShowModal] = useState(false);

    function onHideModal(e) {
        setShowModal(false)
    }

    return (<div className="container">
        <Provider store={store}>
            <header className="header"><h1>To do list</h1><button onClick={() => setShowModal(true)} className="addButton">+</button></header>
            <List></List>

            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
        </Provider>
    </div>)


}






export default App