// Cards Task
document.getElementById('btn-complete').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card1Title = document.getElementById('card1-title');
    const title1 = card1Title.innerText;
    p.innerText = 'You have completed "' + title1 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Fix Mobile Button Issue"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }   
});
document.getElementById('btn-complete2').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete2');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card2Title = document.getElementById('card2-title');
    const title2 = card2Title.innerText;
    p.innerText = 'You have completed "' + title2 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Add Dark Mode"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }
});
document.getElementById('btn-complete3').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete3');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card3Title = document.getElementById('card3-title');
    const title3 = card3Title.innerText;
    p.innerText = 'You have completed "' + title3 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Optimize Home Page"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }
});
document.getElementById('btn-complete4').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete4');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card4Title = document.getElementById('card4-title');
    const title4 = card4Title.innerText;
    p.innerText = 'You have completed "' + title4 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Add New Emoji"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }
});
document.getElementById('btn-complete5').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete5');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card5Title = document.getElementById('card5-title');
    const title5 = card5Title.innerText;
    p.innerText = 'You have completed "' + title5 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Intregate OpenAI API"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }
});
document.getElementById('btn-complete6').addEventListener('click', function (event) {
    event.preventDefault();
    const totalCompletedTask = document.getElementById('total-completed-task');
    const totalCompletedTaskValue = totalCompletedTask.innerText;
    const totalCompletedTaskConverted = parseInt(totalCompletedTaskValue);
    totalCompletedTask.innerText = totalCompletedTaskConverted+1;
    const btnComplete = document.getElementById('btn-complete6');
    btnComplete.setAttribute('disabled',true);
    btnComplete.style.backgroundColor='gray';

    const taskCompleted = document.getElementById('task-completed');
    const taskCompletedValue = taskCompleted.innerText;
    const totalCompletedTaskConverte = parseInt(taskCompletedValue);
    taskCompleted.innerText = totalCompletedTaskConverte-1;

    const p = document.createElement('p');
    const card6Title = document.getElementById('card6-title');
    const title6 = card6Title.innerText;
    p.innerText = 'You have completed "' + title6 + '" on ' + updateTime();
    p.style.backgroundColor = 'gray';

    p.style.color = 'white';
    p.style.padding = '6px';
    p.style.marginBottom = '6px';
    const historyList = document.getElementById('history-list');
    historyList.appendChild(p);
    alert('You have completed the task "Improve Job Searching"');
        if(taskCompleted.innerText == 0){
        alert('Congratulations! You have successfully completed asigned tasks :)');
        console.log(taskCompleted.value)
    }
});



// Clear History
document.getElementById('btn-clear-history').addEventListener('click', function (event) {
    const historyList = document.getElementById('history-list');
    historyList.innerText='';
});
//discover something new today
document.getElementById('discover-something').addEventListener('click', function(event){
    window.location.href = 'blogs.html';
});
