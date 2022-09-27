function solution (roman) {
  let romanNums = ['I', 'IV', 'V', 'X', 'L', 'C', 'D', 'M']
  let arabNums = [1, 4, 5, 10, 50, 100, 500, 1000]
    if (!isNaN(roman)) {
    return roman;
  } 
  if (romanNums.includes(roman)) {
    return arabNums[romanNums.indexOf(roman)]
  }
  let number = [];
  let subtractedNums = [];
  for (const c of roman) {
    number.push(arabNums[romanNums.indexOf(c)])
    }
  let loopStop = number.length;
    for (let i = loopStop - 1; i >= 0; i--) {
      if (number[i] < number[i+1]) {
      subtractedNums.push(number[i+1] - number[i])
      number.splice(i, 2)
      }
    }
   return subtractedNums.reduce((a, b) => a + b, 0)
          + number.reduce((a, b) => a + b, 0);
}



const btn = document.getElementById("button");
btn.onclick = function submit() {
  const romanValue = document.getElementById("reps").value
  const roman = romanValue.toUpperCase();
  document.getElementById('info').innerHTML = `<h3><strong>The arabic number of ${roman} is ${solution(roman)}!</strong></h3>`
}


