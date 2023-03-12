# React ToDo

<h1>EM DESENVOLVIMENTO</h1>

<h2>Sobre</h2>

<p>App para criar uma lista de tarefas, Inicialmente com 1 input para entrada do nome da tarefa e 1 botão para adicionar a tarefa a lista</p>

<p>Ao inserir o nome da tarefa no input e pressionar o botão de adicionar, a string é armazenada no state Text usando setState, e em seguida o state Text é enviado como parametro para o dispatch createToDo</p>

<p>Apos criado, a tarefa sera renderizada na tela com um botão "Deletar" e "Finalizar"</p>

<p>Ao clicar no botão "Deletar" um dispatch é acionado filtrando o id dos list items com a tarefa a ser filtrada, somente os ids que não forem iguais ao do id da tarefa acionado serão armazenados mantidos e um novo array sera retornado, assim deletando a tarefa</p>

<p>Ao clicar no botão "Finalizar" um dispatch é acionado realizando map no state e comparando os ids com o id da tarefa a ser finalizada, quando encontrar a tarefa a propriedade "Done" sera alterado para o oposto do seu valor atual, caso a propriedade se torne true uma text-decoration sera adicionada ao texto da tarefa.</p>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
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
