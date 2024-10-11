export default function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*   function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const rndInt = randomIntFromInterval(1, 6);
   */
