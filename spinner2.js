const sentence = ["\r|   ","\r/   ","\r-   ","\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   "]
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  time += 200;
  setTimeout( () => {
    process.stdout.write(sentence[i]);
  }, time);
}
setTimeout(() =>{
  console.log('\n')
}, time)