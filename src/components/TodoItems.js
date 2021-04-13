import React from 'react'
import './TodoItems.css'
import Checkbox from '@material-ui/core/Checkbox'

const TodoItems = ({ name, done, id }) => {
    const handleCheck = () => {

    }
    return (
        <div className="todoItems">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}> {name}</p>
        </div>
    )
}

export default TodoItems;