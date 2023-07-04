// demander le prompt et le traité
export function getLetter(letter) {
    return letter.toUpperCase()
}

// choisir un mot du tableau aléatoirement
export function getWord(table) {
    return table[Math.floor(Math.random() * table.length)].toUpperCase();
}  

// comparé la lettre et le mot
export function isInclude (letter, word) {
    return word.includes(letter)
}

// condition pour la lettre correspond au mot on l'ajoute au tableau sinon on réduit le compteur d'essai
 export function letsTry (bool){
    let countDown = 7;
    if (!bool){
        return countDown -= 1     
    }
    return countDown
 }

  // condition pour le compteur d'essai arrive a zero c'est perdu
  export function isLost (count){
    if (count === 0){
        return true
    }
        return false
  }

  // condition pour eviter le doublon
  export function isAlreadyInsert (letter, table) {
    if (!table.includes(letter)){
        return false
    }
    return true
  }

 // condition pour le succes on ajoute la lettre au tableau
 export function pushOnTable (letter, word, table) {
    if (!word.includes(letter)) {
        const message = "I'm sorry"
        return message
    }
    table.push(letter)
    return table
 }

 // affichage du mot cache
 export function showPlayerGuess (word, wordsGuess) {
    let wordHidden = ''
    for (let letter of word) {
        if (wordsGuess.includes(letter)) {
            wordHidden += letter
        } else {
            wordHidden += '-'
        }
    }
    return wordHidden
 }

 // verifier si c'est gagne
 export function isWin (word, wordHidden) {
    if(wordHidden === word){
        return true
    } else {
        return false
    }
 }