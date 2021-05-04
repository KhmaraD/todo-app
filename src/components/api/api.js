import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:3004/',
    baseURL: 'http://my-json-server.typicode.com/KhmaraD/todo-app/blob/master/', // for gh-pages
})

export const listsAPI = {
    getAllLists(setLists) {
        return instance.get(`lists?_expand=color&_embed=tasks`)
            .then(response => {
                return setLists(response.data);
            });
    },
    deleteList(item, onRemove) {
        return instance.delete(`lists/${item.id}`)
            .then(() => {
                onRemove(item.id);
            });
    },
    editListTitle(list, newTitle) {
        return instance.patch(`lists/${list.id}`, {name: newTitle})
            .catch(() => {
            alert('Failed to update list title');
        });
    },
    addList(inputValue, colors, selectedColor, onAdd, onClose, setIsLoading) {
        return instance.post(`lists`, {
            name: inputValue,
            colorId: selectedColor
        })
            .then((response) => {
                const color = colors.filter(c => c.id === selectedColor)[0];
                const listObj = { ...response.data, color, tasks: [] };
                onAdd(listObj);
                onClose();
            })
            .catch(() => {
                alert('Error adding list!')
            })
            .finally(() => {
                setIsLoading(false);
            });
    },
}

export const tasksAPI = {
    editTask(taskObj, newTaskText) {
        return instance.patch(`tasks/${taskObj.id}`, {text: newTaskText})
            .catch(() => {
                alert('Failed to update task');
            });
    },
    deleteTask(taskId) {
        return instance.delete(`tasks/${taskId}`)
            .catch(() => {
                alert('Failed to delete task');
            });
    },
    completeTask(taskId, completed) {
        return instance.patch(`tasks/${taskId}`, {completed})
            .catch(() => {
                alert('Failed to update task');
            });
    },
    addTask(obj, onAddTask, list, toggleFormVisible, setIsLoading) {
        return instance.post(`tasks`, obj)
            .then(({data}) => {
                console.log(data);
                onAddTask(list.id, data);
                toggleFormVisible();
            })
            .catch(() => {
                alert('error adding task!')
            })
            .finally(() => {
                setIsLoading(false);
            });
    },
}

export const colorsAPI = {
    getColors(setColors) {
        return instance.get('colors')
            .then(response => {
                return setColors(response.data)
            });
    },
}
