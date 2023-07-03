
export function hanging (letter, word) {
    let convertLetter = letter.toLowerCase()
    let convertWord = word.toLowerCase()
    return convertWord.includes(convertLetter)
}

// export function letsPlay ()