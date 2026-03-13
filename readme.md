<h1>Desafio de projeto do Felipão: Mario Kart.TS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 4</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador gera uma quantidade aleatória de personagens a partir da lista de personagens disponíveis</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória e o número de rodadas vai ser gerado aleatóriamente(as rodadas possíveis são: 3, 5 ou 7)</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou eliminação</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, e os pontos são distribuídos conforme a posição final na rodada</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, e os pontos são distribuídos conforme a posição final na rodada</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja ELIMINAÇÃO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, o último colocado da rodada é eliminado</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

<b>Observações:</b>

<label for="obs-1-item">Além do proposto no projeto inicial, alterei e adicionei alguns novos funcionamentos, como a geração aleatória de jogadores participantes e do número de rodadas, também alterei o modo confronto para eliminação, uma vez que não tenho apenas 2 jogadores por partida para se confrontarem.</label>

<label for="obs-2-item">Adicionei também typescript, utilizado para a tipagem das funções e entidades.</label>

<h3>🚀 Evoluções e Desafios Superados</h3>

<p>Além do escopo inicial, implementei melhorias que elevaram a complexidade técnica do projeto e exigiram soluções criativas:</p>

<ul>
  <li>
    <strong>Dinâmica de Jogo Aleatória:</strong> Implementei a geração randômica tanto dos jogadores participantes quanto do número total de rodadas. O maior desafio foi garantir que a lógica de pontuação e o equilíbrio do jogo permanecessem consistentes, independentemente da duração da partida ou da combinação de atributos de cada personagem.
  </li>
  <li>
    <strong>Novo Modo Eliminação:</strong> Substituindo o modo confronto, reestruturei o sistema original para um modelo de eliminação, que se encaixava melhor para mais de 2 jogadroes. Essa mudança trouxe uma complexidade maior na gestão de estados e na lógica de comparação, para fazer a eliminação de quem se saiu pior nessas rodadas.
  </li>
  <li>
    <strong>Migração para TypeScript:</strong> A transição para TypeScript foi um passo fundamental para a robustez do projeto. O desafio principal foi a tipagem de objetos e funções, mas superar os erros de compilação iniciais resultou em um código muito mais seguro, previsível e fácil de manter.
  </li>
</ul>
