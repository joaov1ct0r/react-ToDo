# Sistema de cadastro e Login de usuarios

<h1>EM DESENVOLVIMENTO</h1>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>React</li>
  <p><code>npx create-react-app react-todo</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>App para criar uma lista de tarefas, Inicialmente com 1 input para entrada do nome da tarefa e 1 botão para adicionar a tarefa a lista</p>

<p>Ao inserir o nome da tarefa no input e pressionar o botão de adicionar, a string é armazenada na var ToDos usando setState, e em seguida a var ToDos é armazenada no localStorage como propriedade: 'savedToDos'</p>

<p>Apos, um list item é criado com um botão 'Deletar'</p>

<p>Ao clicar no botão 'Deletar' uma função comparando o id dos list items é executada, somente os ids que não forem iguais ao do id do list item acionado serão armazenados na variavel filteredItems, que então enviar o novo valor ao ToDos pelo seu metodo setState, assim deletando o item, e salvando o novo valor no localStorage</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git clone git@github.com:joaov1ct0r/reactToDo.git</code></p>

<h3>INICIE O SERVER</h3>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA DIRECIONE-SE PARA O DIRETORIO DO REPOSITORIO E INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>npm start</code></p>

<p>APOS ISSO UMA NOVA ABA SERA ABERTA</p>

<p>A PAGINA DA LISTA DE TAREFAS SERA ABERTA E ESTARA PRONTA PARA CRIAR, ARMAZENAR, EDITAR E EXCLUIR SUAS TAREFAS</p>

<h2>Picture</h2>
