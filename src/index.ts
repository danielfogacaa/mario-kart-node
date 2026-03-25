import { PLAYERS } from "./players.ts"
import type { Attribute, Block, Player } from "./types.ts"

// guarda os jogadores selecionados para a corrida, que serão escolhidos aleatoriamente a partir do array de jogadores disponíveis
let selectedPlayers: Player[] = []
// define a quantidade de rodadas possíveis para a corrida, que serão escolhidas aleatoriamente
const possibleRounds = [3, 5, 7]
// define a quantidade de pontos ganhos para os 3 primeiros colocados de cada rodada
const points = [
  { value: 3, medal: "🥇" },
  { value: 2, medal: "🥈" },
  { value: 1, medal: "🥉" }
]

//gera o resultado de um dado de 1 a 6
const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1
}

//gera o bloco aleatoriamente pode ser "RETA", "CURVA" ou "ELIMINAÇÃO".
const getRandomBlock = (): Block => {
  let random = Math.random()
  let result: Block

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break
    case random < 0.66:
      result = "CURVA"
      break
    default:
      //Caso exista apenas 2 jogadores, não será gerado o bloco de "ELIMINAÇÃO"
      result = selectedPlayers.length > 2 ? "ELIMINAÇÃO" : "RETA"
  }

  return result
}

//gera a quantidade de players(entre 2 e o total de players disponíveis) e seleciona os players aleatoriamente
const selectRandomPlayers = (players: Player[]) => {
  const selectedPlayers: Player[] = []
  const totalPlayers = Math.floor(Math.random() * (players.length - 1)) + 2

  while (selectedPlayers.length < totalPlayers) {
    const randomIndex = Math.floor(Math.random() * players.length)
    const player = players[randomIndex]

    if (player && !selectedPlayers.includes(player)) {
      selectedPlayers.push(player)
    }
  }

  return selectedPlayers
}

// função para traduzir o nome do atributo para português
const getAttributeTranslation = (attr: Attribute) => {
  switch (attr) {
    case "speed":
      return "velocidade"
    case "maneuverability":
      return "manobrabilidade"
    default:
      return "poder"
  }
}

// função para rolar o dado e calcular o resultado da rodada para cada jogador, além de eliminar o jogador com o menor resultado caso o bloco seja de eliminação
const logRollResult = async (block: Block) => {
  for (const player of selectedPlayers) {
    player.diceRoll = rollDice()
    //define qual atributo será utilizado para calcular o resultado da rodada, dependendo do tipo de bloco gerado
    const attrToUse =
      block === "RETA"
        ? "speed"
        : block === "CURVA"
        ? "maneuverability"
        : "power"
    player.lastResult = player[attrToUse] + player.diceRoll
    console.log(
      `${player.name} rolou o dado de ${getAttributeTranslation(
        attrToUse
      )} e obteve ${player.diceRoll}. Habilidade total: ${
        player[attrToUse]
      } + ${player.diceRoll} = ${player[attrToUse] + player.diceRoll}`
    )
  }

  // Se o bloco for de eliminação, remove o jogador com o menor resultado da rodada
  if (block === "ELIMINAÇÃO") {
    // Encontra o jogador com o menor lastResult
    const playerWithLowestResult = selectedPlayers.reduce((prev, curr) =>
      (prev?.lastResult ?? 0) < (curr?.lastResult ?? 0) ? prev : curr
    )

    // Remove o jogador com o menor lastResult
    selectedPlayers = selectedPlayers.filter(
      (player) => player !== playerWithLowestResult
    )

    console.log(
      `\n${playerWithLowestResult.name} ficou na última posição e sofreu eliminação! ❌`
    )
  }
}

//função para exibir os resultados da rodada, ordenando os jogadores pelo resultado da rodada e em caso de empate, pelo total de pontos acumulados. Além disso, atribui os pontos para os 3 primeiros colocados
const logBlockResult = async () => {
  //ordena os jogadores com base no resultado da rodada e em caso de empate, pelo total de pontos
  const ordenedPlayers = [...selectedPlayers].sort((a, b) => {
    // 1. Primeiro, tenta ordenar pelo resultado da última rodada (Maior -> Menor)
    const diffLastResult = (b?.lastResult ?? 0) - (a?.lastResult ?? 0)

    // 2. Se a diferença NÃO for zero (não houve empate), retorna ela
    if (diffLastResult !== 0) {
      return diffLastResult
    }

    // 3. Se deu empate no dado/confronto, o critério de desempate é o Total de Pontos
    return b.totalPoints - a.totalPoints
  })
  for (const [index, player] of ordenedPlayers.entries()) {
    const pointsToAdd = points[index]?.value || 0
    player.totalPoints += pointsToAdd
    console.log(
      `${index + 1}º lugar: `,
      player.name,
      player.lastResult,
      ` - ${
        points[index]
          ? `Ganhou ${pointsToAdd} ${pointsToAdd > 1 ? "pontos" : "ponto"} ${
              points[index]?.medal ? points[index]?.medal : ""
            }`
          : `Não ganhou pontos 😞`
      }`
    )
  }
}

//função para exibir o resultado final da corrida, ordenando os jogadores pelo total de pontos acumulados e exibindo o vencedor
const generateRaceResult = () => {
  const ordenedPlayers = [...selectedPlayers].sort((a, b) => {
    return b.totalPoints - a.totalPoints
  })

  console.log(
    `\nFim da corrida! 🏁🏁🏁\n\nResultados finais:\n${ordenedPlayers
      .map(
        (player, index) =>
          `${index + 1}º lugar: ${player.name} - ${player.totalPoints} ${
            player.totalPoints > 1 ? "pontos" : "ponto"
          }`
      )
      .join("\n")}`
  )
  console.log(`\n${ordenedPlayers?.[0]?.name} venceu a corrida! 🎉\n`)
}

//função para gerar a corrida, que seleciona os jogadores aleatoriamente, define a quantidade de rodadas, gera o bloco de cada rodada e exibe os resultados de cada rodada e o resultado final da corrida
const manageGame = () => {
  console.log(`\nA corrida iniciou! 🚦\n`)
  selectedPlayers = selectRandomPlayers(PLAYERS)

  console.log(`Número de jogadores: ${selectedPlayers.length}\n`)
  console.log(
    `Jogadores selecionados:\n${selectedPlayers
      .map((player, index) => `${index + 1}º lugar: ${player.name}`)
      .join("\n")}\n`
  )

  //gera a quantidade de rodadas aleatoriamente a partir do array de rodadas disponíveis
  const totalRounds =
    possibleRounds[Math.floor(Math.random() * possibleRounds.length)] ?? 3
  console.log(`Número de rodadas: ${totalRounds}`)
  for (let round = 1; round <= totalRounds; round++) {
    console.log(`\n🏁 Rodada ${round}`)
    const block = getRandomBlock()
    console.log(`Bloco: ${block} \n`)

    logRollResult(block)

    if (block !== "ELIMINAÇÃO") {
      console.log(`\nResultados da rodada: `)
      logBlockResult()
    }
  }

  generateRaceResult()
}

manageGame()
