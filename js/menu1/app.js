/*Fromulario*/

// Añadir una nueva lista
  var addList = document.getElementById('add-list');
  addList.addEventListener('click', function (){
    addList.style.display="none";
    document.getElementById('add-list-form').style.display="block";
    document.getElementById('new-list-title').focus();
  });

// boton guardar del formulario
  var saveList =document.getElementById('save-list');

  saveList.addEventListener('click', function(){
    document.getElementById('add-list-form').style.display="none";
    var listTitleValue=document.getElementById('new-list-title').value;
    document.getElementById('list-title').textContent=listTitleValue;
    document.getElementById('task').style.display="block";
  });

// boton agregar una nueva tarea
  var addTask = document.getElementById('task');
    addTask.addEventListener('click', function(){
    document.getElementById('new-task').style.display="block";
    addTask.style.display="none";
    document.getElementById('save-new-task-content').focus();
  });

// boton añadir una tarea
  var saveTask= document.getElementById('save-new-task-button');
  saveTask.addEventListener('click',function(){
    var createNewTask=document.getElementById('save-new-task-content').value;
    var newTask=document.createElement('p');
    newTask.textContent=createNewTask;
    document.getElementById('new-tasks-listed').appendChild(newTask);
    document.getElementById('save-new-task-content').value = '';
    document.getElementById('save-new-task-content').focus();
  });
