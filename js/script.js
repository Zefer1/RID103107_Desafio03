// 1) CAPTURAÇÃO DE ELEMENTOS DO DOM
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskLabelInput = document.getElementById('task-label');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

// 2) ARRAY INICIAL DE TAREFAS 
let tasks = [
  {
    id: 1,
    title: 'Implementar tela de listagem de tarefas',
    label: 'frontend',
    createdAt: '21/08/2024',
    completed: false,
  },
  {
    id: 2,
    title: 'Criar endpoint para cadastro de tarefas',
    label: 'backend',
    createdAt: '21/08/2024',
    completed: false,
  },
  {
    id: 3,
    title: 'Implementar protótipo da listagem de tarefas',
    label: 'ux',
    createdAt: '21/08/2024',
    completed: true,
  },
];

// 3) FUNÇÃO QUE ATUALIZA O RODAPÉ COM O CONTADOR
function updateTaskCounter() {
  const pendentes = tasks.filter((t) => !t.completed).length;
  const concluídas = tasks.filter((t) => t.completed).length;

  // Se quiser exibir “X tarefas pendentes” ou “X tarefa pendente”:
  if (pendentes > 0) {
    taskCounter.innerText = `${pendentes} tarefa${pendentes !== 1 ? 's' : ''} pendente${
      pendentes !== 1 ? 's' : ''
    }`;
  } else {
    // Se não houver pendentes, exibe “X tarefa(s) concluída(s)”
    taskCounter.innerText = `${concluídas} tarefa${concluídas !== 1 ? 's' : ''} concluída${
      concluídas !== 1 ? 's' : ''
    }`;
  }
}

// 4) FUNÇÃO QUE RENDERIZA TODOS OS CARDS NA TELA
function renderTasks() {
  // Limpa todo o conteúdo atual
  taskList.innerHTML = '';

  // Percorre cada tarefa e cria DOM
  tasks.forEach((task) => {
    
    const li = document.createElement('li');
    li.classList.add('task-card');
    if (task.completed) li.classList.add('completed');

    // 4.1) Área de conteúdo do card
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('task-card__content');

    // Título da tarefa
    const h2 = document.createElement('h2');
    h2.classList.add('task-card__title');
    h2.innerText = task.title;

    // Container de info (tag + data)
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('task-card__info');

    // Etiqueta (tag)
    const tagSpan = document.createElement('span');
    tagSpan.classList.add('task-card__tag');
    tagSpan.innerText = task.label;

    // Data de criação
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('task-card__date');
    dateSpan.innerText = `Criado em: ${task.createdAt}`;

    infoDiv.appendChild(tagSpan);
    infoDiv.appendChild(dateSpan);

    contentDiv.appendChild(h2);
    contentDiv.appendChild(infoDiv);

    // 4.2) Área de ações (botão ou ícone de check)
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-card__actions');

    // Botão “Concluir” (se não estiver concluída)
    if (!task.completed) {
      const btn = document.createElement('button');
      btn.classList.add('task-card__btn-complete');
      btn.innerText = 'Concluir';
      btn.addEventListener('click', () => toggleTaskCompletion(task.id));
      actionsDiv.appendChild(btn);
    }
    // Se já estiver concluída, o CSS (pseudo-elemento) já desenha o ✔ via .task-card.completed .task-card__actions::before

    // Montagem final do <li>
    li.appendChild(contentDiv);
    li.appendChild(actionsDiv);
    taskList.appendChild(li);
  });

  // Atualiza o contador de tarefas pendentes/concluídas
  updateTaskCounter();
}

// 5) FUNÇÃO PARA ADICIONAR NOVA TAREFA
function addTask(event) {
  event.preventDefault();

  const titleText = taskTitleInput.value.trim();
  const labelText = taskLabelInput.value.trim();

  if (titleText === '' || labelText === '') {
    
    return;
  }

  // Cria novo objeto de tarefa
  const newTask = {
    id: Date.now(), // id único rápido
    title: titleText,
    label: labelText.toLowerCase(), // armazena em lowercase
    // Pega a data de hoje no formato DD/MM/AAAA
    createdAt: new Date().toLocaleDateString('pt-BR'),
    completed: false,
  };

  // Insere no array e limpa inputs
  tasks.unshift(newTask); // unshift para adicionar no topo da lista
  taskTitleInput.value = '';
  taskLabelInput.value = '';

  // Re-renderiza
  renderTasks();
}

// 6) FUNÇÃO PARA MARCAR/DESMARCAR COMO “COMPLETED”
function toggleTaskCompletion(taskId) {
  tasks = tasks.map((t) =>
    t.id === taskId ? { ...t, completed: !t.completed } : t
  );
  renderTasks();
}

// 7) EVENTOS INICIAIS
taskForm.addEventListener('submit', addTask);
window.addEventListener('DOMContentLoaded', renderTasks);
