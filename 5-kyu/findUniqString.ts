//https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

//Решение, очевидно, не оптимальное и многословное. Лучше было использовать Set. Решил не переделывать, а решать следующие, раз тесты всё равно прошли

function findUniq(arr: Array<string>): string | undefined {
  type WordRecord = { current: string; original: string };
  let stringsWithoutSpaces = [...arr].map((s) => ({ current: s.replaceAll(" ", "").toLowerCase(), original: s }));

  function findUniqByChar(words: Array<WordRecord>, char: string) {
    let notFoundTimes = 0;
    let lastFoundWord: WordRecord | null = null;
    let foundTimes = 0;
    let lastNotFoundWord: WordRecord | null = null;

    for (const word of words) {
      if (!word.current.includes(char)) {
        notFoundTimes++;
        lastNotFoundWord = word;
      } else {
        foundTimes++;
        lastFoundWord = word;
      }
    }
    if (notFoundTimes === 1) return lastNotFoundWord;
    if (foundTimes === 1) return lastFoundWord;
  }

  while (stringsWithoutSpaces.length > 1) {
    if (stringsWithoutSpaces.length === 0) throw new Error("There must be uniq string");
    const char = stringsWithoutSpaces[0].current.charAt(0);
    const res = findUniqByChar(stringsWithoutSpaces, char);
    if (res) return res.original;

    stringsWithoutSpaces = stringsWithoutSpaces
      .map((str) => ({ ...str, current: str.current.replaceAll(char, "") }))
      .filter((str) => str.current.length > 0);
  }

  return stringsWithoutSpaces[0].original;
}

console.log(findUniq(["a", "b", "b", "b"]));
