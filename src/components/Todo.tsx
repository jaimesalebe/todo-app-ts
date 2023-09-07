import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
  return (
    <div className='view'>
        <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={(e) => {
          handleCompleted({ id, completed: e.target.checked })
        }}
        />
        <label htmlFor="">{title}</label>
        <button
        className='destroy'
        onClick={() => {
          handleRemove({ id })
        }}/>
    </div>
  )
}

export default Todo
