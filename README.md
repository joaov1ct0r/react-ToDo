# React ToDo

<h1>EM DESENVOLVIMENTO</h1>

<h2>Sobre</h2>

<p>App para criar uma lista de tarefas, Inicialmente com 1 input para entrada do nome da tarefa e 1 botão para adicionar a tarefa a lista</p>

<p>Ao inserir o nome da tarefa no input e pressionar o botão de adicionar, a string é armazenada na var ToDos usando setState, e em seguida a var ToDos é armazenada no localStorage como propriedade: 'savedToDos'</p>

<p>Apos, um list item é criado com um botão 'Deletar'</p>

<p>Ao clicar no botão 'Deletar' uma função comparando o id dos list items é executada, somente os ids que não forem iguais ao do id do list item acionado serão armazenados na variavel filteredItems, que então enviar o novo valor ao ToDos pelo seu metodo setState, assim deletando o item, e salvando o novo valor no localStorage</p>

<h2>Requisitos</h2>

<ul>
  <li>NPM</li>
  <br>
  <li>Docker</li>
  <br>
  <li>Docker Compose</li>
  <br>
</ul>

<h2>MODO DE USO</h2>

<h3>GIT</h3>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE SSH:<br><code>git clone git@github.com:joaov1ct0r/reactToDo.git</code></p>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA ESCOLHA O MODO EM QUE QUER RODAR O PROJETO:

<br>DESENVOLVIMENTO: <code>sudo docker compose -f docker-compose.dev.yaml up --build -d</code>

</p>

<h2>Picture</h2>

![reactTodO](https://user-images.githubusercontent.com/79015823/149587500-bf71a25c-1551-4789-a047-313d891034be.jpg)
