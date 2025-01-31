//https://www.codewars.com/kata/57212c55b6fa235edc0002a2

// Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.
// The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

// Compare the proposals with the following function:

// function commonGround(s1, s2)
// The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

// Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

// If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

function commonGround(s1: string, s2: string): string {
  const words1 = new Set(s1.split(" "));
  const words2 = new Set(s2.split(" "));

  const resArray: string[] = [];

  words2.forEach((word) => {
    if (words1.has(word)) resArray.push(word);
  });

  if (resArray.length === 0) return "death";

  return resArray.join(" ");
}
