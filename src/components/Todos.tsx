import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompleted }) => {
  return (
        <ul className='todo-list'>
            {todos?.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        handleCompleted={handleCompleted}
                        handleRemove={handleRemove}
                    />
                </li>
            ))}
        </ul>
  )
}
