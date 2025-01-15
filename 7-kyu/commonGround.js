function commonGround(s1, s2) {
  const words1 = new Set(s1.split(" "));
  const words2 = new Set(s2.split(" "));

  const resArray = [];

  words2.forEach((word) => {
    if (words1.has(word)) resArray.push(word);
  });

  if (resArray.length === 0) return "death";

  return resArray.join(" ");
}
