import React from 'react'
import './style.scss'

const Todo = () => {
    return (
        <section className='todo'>
            <div className='todo_wrapper'>
                <div className='wrapper_info'>
                    <h1>Do you like<br /> Todo List</h1>
                    <div className='info_desc'>Here is some of the goals we want to achieve working together, feel you want to be involved? Start to chat with us</div>
                </div>
                <div className='wrapper_todo'>
                    <div className='todo_item'>
                        <div className='item_checkbox'></div> 
                        <h5>Create a stable and secure cryptocurrency</h5>
                    </div>
                    <div className='todo_item'>
                        <div className='item_checkbox'></div> 
                        <h5>Build a european cooperative framework</h5>
                    </div>
                    <div className='todo_item'>
                        <div className='item_checkbox'></div> 
                        <h5>Build a Cooperative Bank that includes cryptos</h5>
                    </div>
                    <div className='todo_item'>
                        <div className='item_checkbox'></div> 
                        <h5>Create a stable and secure cryptocurrency</h5>
                    </div>
                    <div className='todo_item'>
                        <div className='item_checkbox'></div> 
                        <h5>Create a stable and secure cryptocurrency</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Todo
