import React from 'react'
import './style.scss'

const Todo = () => {
    return (
        <section className='section todo'>
        <div className='section_wrapper'>
            <div className='wrapper_tagline '><h5 className='bold'># What we did so far</h5></div>
            <div className='wrapper_info'>
                <div className='info_content'>
                    <div>Here is some of the  goals we want to achieve working together, feel you want to be involved? Start to chat with us</div>
                    
                </div>
                <div className='wrapper_todo'>
                        <div className='todo_item'>
                            <h4 className='item_checkbox' />
                            <h5>Create a stable cryptocurrency</h5>
                        </div>
                        <div className='todo_item'>
                            <h4 className='item_checkbox' />
                            <h5>Build a european cooperative framework</h5>
                        </div>
                        <div className='todo_item'>
                            <h4 className='item_checkbox' />
                            <h5>Build a Cooperative Bank</h5>
                        </div>
                        <div className='todo_item'>
                            <h4 className='item_checkbox' />
                            <h5>Create a secure cryptocurrency</h5>
                        </div>
                        <div className='todo_item'>
                            <h4 className='item_checkbox' />
                            <h5>Create a stable cryptocurrency</h5>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default Todo
