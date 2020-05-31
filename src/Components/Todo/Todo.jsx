import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import ItemList from '../ItemList/ItemList';
import Input from "../Input/Input";
import CalcTodo from "../CalcTodo/CalcTodo";
import styles from './Todo.module.css';
import { DragDropContext } from "react-beautiful-dnd";

const buttonTasksName = {
    completed: 'Завершенные',
    uncomplited: 'Незавершенные',
    all: 'Все'
};

const Todo = () => {
    const [tasks, setTasks] = useState(
        [{  value: "Привет! Я - твой todo-list",
            isDone: false,
            isImportant: false,
            id: 1 }]
    );
    const [filtered, setFiltered] = useState(buttonTasksName.all);
    const [count, setCount] = useState(1);
    const [classNameForInputRepeat, setClassNameForInputRepeat] = useState(false);

    useEffect(() => {
        const tasks = localStorage.getItem('tasks');
        setTasks(JSON.parse(tasks))
    }, []);

    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(tasks))
    }, [tasks]);

    const onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) return;

        const newTodoItems = [...tasks];

        const [removed] = newTodoItems.splice(source.index, 1);
        newTodoItems.splice(destination.index, 0, removed);
        setTasks([
            ...newTodoItems
        ])
    };

    const onClickDone = id => {
        const newItemList = tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setTasks({ tasks: newItemList });
    };

    const onClickImportant = id => {
        const newItemList = tasks.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isImportant = !item.isImportant;
            }
            return newItem;
        });
        setTasks({ tasks: newItemList });
    };

    const onClickDelete = id => {
        const newItemList = tasks.filter(item => {
            return item.id !== id
        });

        setTasks({ tasks: newItemList });
        setCount((count) => count - 1);
    };

    const onClickAdd = value => {
        const item = tasks.filter(item => item.value === value);
        if (item.length === 0) {
            setTasks(tasks => ({
                tasks: [
                    ...tasks,
                    {
                        value,
                        isDone: false,
                        isImportant: false,
                        id: setCount + 1
                    }
                ],
                setCount: count + 1,
                setClassNameForInputRepeat: false
            }));
        } else {
            setClassNameForInputRepeat(true);
            setTimeout(() => {
                setClassNameForInputRepeat(false);
            }, 1500);
        }
    };

    const onClickFilteredTasks = filtered => setFiltered({ filtered: filtered });

    let filteredTasks;
    switch (filtered) {
        case buttonTasksName.completed:
            filteredTasks = tasks.filter(item => item.isDone);
            break;
        case buttonTasksName.uncomplited:
            filteredTasks = tasks.filter(item => !item.isDone);
            break;
        case buttonTasksName.all:
            filteredTasks = tasks;
            break;
    };

    console.log('filteredTasks2:', filteredTasks)

        return (
            <Card className={styles.container}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                        <div className={styles.todoHeader}>
                            <h1 className={styles.todoHeaderTitle}>Список моих дел</h1>
                            <CalcTodo
                                tasks={tasks}
                                onClickFilteredTasks={onClickFilteredTasks}
                                filtered={filtered}
                            />
                        </div>
                        <ItemList
                            filtered={filteredTasks}
                            filteredValue={filtered}
                            onClickDone={onClickDone}
                            onClickImportant={onClickImportant}
                            onClickDelete={onClickDelete} />

                        <Input items={tasks}
                               classNameForInputRepeat={classNameForInputRepeat}
                               onClickAdd={onClickAdd}
                        />
                    </div>
                </DragDropContext>
            </Card>
        )
};

export default Todo;