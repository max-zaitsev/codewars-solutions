"use strict";
//https://www.codewars.com/kata/57a4c85de298a795210002da
// #Detail
// Countdown is a British game show with number and word puzzles.
// The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile.
// The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters -
// letters can not be used more than once unless there is another of the same character.
// #Task
// Given an uppercase 9 letter string, letters,
// find the longest word that can be made with some or all of the letters.
// The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you
// will have to loop through. Only return the longest word; if there is more than one, return
// the words of the same lengths in alphabetical order. If there are no words that can be
// made from the letters given, return None/nil/null.
// letters = "ZZZZZZZZZ"
// longest word = None
// letters = "POVMERKIA",
// longest word = ["VAMPIRE"]
// letters = "DVAVPALEM"
// longest word = ["PALMED", "VALVED", "VAMPED"]
const words = [];
function longestWord(letters) {
    function getCountOfLettersMap(str) {
        return [...str].reduce((acc, letter) => {
            acc[letter] = acc[letter] + 1 || 1;
            return acc;
        }, {});
    }
    const lettersCountMap = getCountOfLettersMap(letters);
    const wordsSortedByLenght = [...words].sort((word1, word2) => {
        return word2.length - word1.length;
    });
    function checkWord(word, lettersMap) {
        const wordMap = getCountOfLettersMap(word);
        for (const [key, value] of Object.entries(wordMap)) {
            if (!(key in lettersMap) || lettersMap[key] < value)
                return false;
        }
        return true;
    }
    const answer = [];
    for (const word of wordsSortedByLenght) {
        if (!checkWord(word, lettersCountMap)) {
            continue;
        }
        if (!answer.length) {
            answer.push(word);
            continue;
        }
        if (answer[answer.length - 1].length === word.length) {
            answer.push(word);
            continue;
        }
        break;
    }
    return answer.length ? answer.sort() : null;
}
