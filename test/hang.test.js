import { test, expect } from 'vitest';
import 
{ 
    getLetter, getWord, isInclude,
    letsTry, isLost,isAlreadyInsert,
    pushOnTable, showPlayerGuess, isWin
} from '../index.js';

test('return a valid letter', () => {
    expect(getLetter('j')).toBe('J')
    expect(getLetter('J')).toBe('J')
})

test('get a word from the table', () => {
    const table = ['HELLO', 'CAT', 'FLOWER']
    const word = getWord(table)
    expect(table).toContain(word)
})

test('contain letter on the word', () => {
    expect(isInclude('V','JORDAN')).toBe(false)
    expect(isInclude('J','JORDAN')).toBe(true)
})

test('lets try count down', () => {
    let countDown = 7;
    expect(letsTry(false)).toBe(6)
    expect(letsTry(true)).toBe(7)
})

test('verify if the player loses the game', () => {
    let countDown = 1
    let lastchance = 0
    expect(isLost(countDown)).toBe(false)
    expect(isLost(lastchance)).toBe(true)

})

test('letter already choose', () => {
    let table = ['H','E','L']
    expect(isAlreadyInsert('H',table)).toBe(true)
    expect(isAlreadyInsert('E',table)).toBe(true)
    expect(isAlreadyInsert('L',table)).toBe(true)
    expect(isAlreadyInsert('G',table)).toBe(false)
})

test('lets add it on the player table', () => {
    let table = []
    const word = 'HELLO'
    expect(pushOnTable('H', word, table)).toStrictEqual(['H'])
    expect(pushOnTable('E', word, table)).toStrictEqual(['H','E'])
    expect(pushOnTable('L', word, table)).toStrictEqual(['H','E','L'])
    expect(pushOnTable('O', word, table)).toStrictEqual(['H','E','L','O'])
    expect(pushOnTable('G', word, table)).toBe("I'm sorry")
})

test('show player words hidden', () => {
    const ho = ['H','O']
    const l = ['L']
    const eo = ['E','O']
    const el = ['E','L']
    const lo = ['L','O']
    const hello = ['H','E','L','O']
    const empty = []
    const word = 'HELLO'
    expect(showPlayerGuess(word,ho)).toBe('H---O')
    expect(showPlayerGuess(word,l)).toBe('--LL-')
    expect(showPlayerGuess(word,eo)).toBe('-E--O')
    expect(showPlayerGuess(word,el)).toBe('-ELL-')
    expect(showPlayerGuess(word,lo)).toBe('--LLO')
    expect(showPlayerGuess(word,hello)).toBe('HELLO')
    expect(showPlayerGuess(word,empty)).toBe('-----')
    console.log(showPlayerGuess(word,lo))
})

test('verify if the player win', () => {
    expect(isWin('HELLO', 'HELLO')).toBe(true)
    expect(isWin('HELLO', 'H-LL-')).toBe(false)
    expect(isWin('HELLO', 'HE--O')).toBe(false)
    expect(isWin('HELLO', '-----')).toBe(false)
})