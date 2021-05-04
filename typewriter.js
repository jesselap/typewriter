const sentence = "hello there from lighthouse labs";
let timer = 50;
for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(`${sentence[i]}\n`);
    }, timer);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, timer);
    timer += 50;
  }
};

