const addTask = () => {
    const input = document.getElementById('input');
    const textList = document.getElementById('textList');

    const TaskList = input.value.trim();
    if(TaskList === "");

    const li = document.createElement('li');
    li.textContent = TaskList;
    li.classList.add('task');

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'x';
    deleteBtn.className='delete';
    deleteBtn.onclick = () => {
        textList.removeChild(li)
    }


    li.appendChild(deleteBtn);
    textList.appendChild(li);
    input.value = "";
}