import { ITask } from '../../App';
import { Task } from '../Task'
import styles from './tasks.module.css'
import { ClipboardText} from 'phosphor-react'

interface Props {
    tasks:ITask[];
    onDelete: (taskId:string) => void;
    onComplete: (taskId:string) => void;
}

export function Tasks({tasks, onDelete, onComplete}:Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                
                <div>
                    <p className={styles.completedTasks}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.taskList}>
                {tasks.map((task) => (
                    <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete}
                    onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}> 
                        <ClipboardText size= {50}/>
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span> Crie tarefas e organize seus intens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}