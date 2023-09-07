import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FileReader) => void
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes
        </span>

        <Filters
            filterSelected={filterSelected}
            onFilterChange={handleFilterChange}
        />
        {
            completedCount > 0 && (
                <button
                className='clear-completed'
                 onClick={onClearCompleted}>
                    Borrar completadas
                </button>
            )
        }
    </footer>
  )
}
