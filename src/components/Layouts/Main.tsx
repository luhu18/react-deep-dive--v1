import '../../styles/Main.css'


const Main = () => {
   return (
     <>
     <main className="todo-app-main">
        <div className="task-card-manager">
        <form action="" className="task-form">
            <label htmlFor="new-task-input" className="visually-hidden">
                Type and then press Enter to creaete new task
            </label>
            <input type="text" placeholder="Press Enter to save task" id='new-task-input' className='input-card' />
        </form>
     <div className="task-list-manager">
        <ul className="task-list" aria-label='task-list control/container'>
            <p className="placeholder">
                Press Enter to save task
            </p>
        </ul>
        <div className="task-control-sec">
            <div className="items-left">item left</div>
            <div className="task-filters">
                <button className="filter-tab active" data-filter = 'all'>All</button>
                <button className="filter-tab" data-filter= 'active'>Active</button>
                <button className="filter-tab" data-filter= 'completed'>Completed</button>
            </div>
            <div className="clear-completed">
              <button>clear completed</button>
            </div>
        </div>
        </div>
        </div>
     </main>
     </>
   )
}

export default Main