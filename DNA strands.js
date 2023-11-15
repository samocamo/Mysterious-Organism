// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  /* these are global varaibles to use for a couple things. the newArray ...array is used in the .mutate method to combine the new words into a mutated array. the combinedarray is used the .compareDNA method where we take the two different dna strains and push the same words into the array to calcuate how similar they are*/
  let newArray = []
  let combinedArray = []
  
  /* this is my function to check if the letter in the this.dna and returns the opposite of it. We do this by creating arrays with the oppsite of each letter A,T,C,G. And then using an if statement to check the letter in the array. Then we use the math random and math flor method to choose a random index inside that array. The random index is chosen (and therfore a random letter) and then its returned */
  
  const checkTheLetter = (letter) => {
    ifItsA =  ["T","C","G"]
    ifItsT = ["A","C","G"]
    ifItsG = ["A","T","C",]
    ifItsC = ["A","T","G"]
  if(letter === "A") {
  resultA = ifItsA[Math.floor(Math.random()*3)]
  
  return resultA
  }
  else if (letter === "T") {
    resultT = ifItsT[Math.floor(Math.random()*3)]
   
    return resultT
  }
  else if (letter === "C") {
    resultC = ifItsC[Math.floor(Math.random()*3)]
    return resultC
  }
  else if (letter === "G") {
    resultG = ifItsG[Math.floor(Math.random()*3)]
    return resultG
  }
  }
  /* used for the willLikelySurvive method. it takes the this.dna array and loops through it pushing g and c letter into a seprate array called letter array. We then take that and calculate through simple division to find the precentage of g and c letters in that dna strain and determing if its above 60 percent*/
  const findTwoLetters = (array) => {
    let letterArray = []
  for(let i=0;i<array.length;i++) {
    if(array[i] === "C" || array[i] === "G") {
      
      letterArray.push(array[i])
      
    }
  }
  let calc = letterArray.length/15
  let calcF = calc.toFixed(2)
  return Math.floor(calcF*100)
  }
  
  /* math function to calculate the percentage that each specimen is alike */
  const percentageShare = (array1,array2) => {
  const percentage = array1.length / array2.length 
   let percentageF = percentage.toFixed(2)
   return Math.floor(percentageF*100)
  }
  
  /* huge factory function */
  
  const paequorFactory = (number,dnabase) => {
  return {
  specimen: number,
  dna: dnabase,
  mutate() {
    const myArray = this.dna
    /* checknum varaible basically selects a random letter or element inside the this.dna array. It does this by using mathfloor and math random to select a random number and putting that in [] brakckets attaches that random number to the this.dna index. IN short it chooses a random index number in the array*/
  checkNum = this.dna[Math.floor(Math.random())]
  /*this variable pushes the checknum or randomly selcted index letter into the checkTheLetter Function which then returns a random letter through a few simply arrays and math random stuff. We use this variable to check against the current dna strain and then pushing the changed letter instead */
   const changeLetter = checkTheLetter(checkNum)
   /* here is the for loop we use to iterate through this.dna strain to check every letter with the randomly selected one. If they match we push the change leter function or varible in this case to change the letter and push it into a newArray*/
  for (let i = 0; i< myArray.length;i++) {
    if(myArray[i] === checkNum) {
      newArray.push(changeLetter)
    }
    else {
      /*if the letter doesnt match that randomly selected letter throught he checkNum variable it just pushes the normal letter to the myArray*/
      newArray.push(myArray[i])
    }
   
  }
  return newArray
  },
  compareDNA() {
    /* standard double for loop to iterate the first dna strain and then check that letter against each letter in the new one. If any of them match we push that letter to the new array variable so they can be calculated against each other*/
  for(let i = 0; i<this.dna.length; i++) {
    for(let j = 0; j<newArray.length;j++) {
      if(j === i) {
        if(newArray[j]===this.dna[i]) {
        
          combinedArray.push(newArray[j])
        }
      }
      
  
  }
    }
    /* calculation part for the method. we just take the combined array and the orginal array and plug it into the percentageshare function which will calculate how much dna they share(just simply division of the new array vs old). */
   const  dnainCommon = percentageShare(combinedArray,this.dna)
   console.log(` specimen #1 and speicman #2 have ${dnainCommon}% DNA in common`)
    return combinedArray
  },
  willLikelySurvive() {
    /*very simply method, just uses the find two letters to determine how much g and c letter are in the dna strain and then we pass it through this function to determine if its more then 60 using an if statement*/
    if( findTwoLetters(this.dna) > 59) {
      return true
    }
    else{
      return false
    }
  }
  }
  }
  
  
  console.log("below is the output for step 4: mutating the DNA")
  
  console.log(paequorFactory(15,mockUpStrand()).mutate())
  
  console.log("below is the output for step 5: comparing two different DNA")
  
  console.log(paequorFactory(15,mockUpStrand()).compareDNA())
  
  console.log("below is the output for step 6: Checking if DNA has at least 60% C or G bases")
  
  console.log(paequorFactory(15,mockUpStrand()).willLikelySurvive())
  
  console.log("below is the output for step 7: 30 instances of pAequor")
  /* below is a simple function outputs a random number and uses an if statement to choose either c or g. The reason why will be explain better below but basically we want to create new DNA strains that dont hit 60 percent or more c and g strains */
   const chooseRandom = () => {
    let random = Math.floor(Math.random()*2)
    if( random === 0) {
      return "C"
    }
    else if( random === 1) {
      return "G"
    }
  
   }
  /* we take that random function and use it to push the random letters into an array we choose up to 15 times. This allows us to fix the dna strains that arent above 60 percent becuase we will push the needed  g or c mutations into place to make them correct( explained how we do that more below) */
  const makeBt = (array) => {
  
    for(let i = 0; array.length < 15 ; i++) {
    array.push(chooseRandom())
  
    }
  return array
  }
  
  let newArray2 = []
  /* this method uses slice to take off anything from the 0 index to the 6th index of an array. Doing this opens up an area to have makeBt function push random g or c mutations in until it reaches 15. Therfore making our DNA hit over 60 percent and solving the issue where not every DNA strain would hit above 60 percent when making 30 instances of it. */
  const sliceUp = (array) => {
  let answer = array.slice(0,6)
  return answer
  }
  /* this method is used to determine the amount of g and c letter in an array and push it normally if its over 60 percent. if not we use an if statement to find the length of that array and return instead or combination of makeBt, sliceUp and the array parameter. This combination allows use to push the less than 60 percent arrays into the slice up funciton where it cuts off 60 percent of it and then take that and push it into makeBt where it gets random g and c letters pushed into it completing our task of ensrueing that all 30 instances of arrays are over 60 percent */
  const findTwoLettersAdjusted = (array) => {
    let letterArray = []
  for(let i=0;i<array.length;i++) {
    if(array[i] === "C" || array[i] === "G") {
      
      letterArray.push(array[i])
      
    }
  }
  if(letterArray.length >= 9) {
    return array
  }
  if (letterArray.length < 9) {
    
  return makeBt(sliceUp(array))
  }  
  
  
  }
  
  /* this is the function where we push the 30 instances of DNA strains and we use a huge combo of functions to achive the results. find two letters was already talked about above so all we do is use a for loop and push that interpreted funciton into a new array so we cna see all the different 30 instances of the DNA strain */
  let finArray = []
  const finalStudy = () => {
    for(let i=0;i<30;i++) {
  finArray.push(findTwoLettersAdjusted(paequorFactory(15,mockUpStrand()).dna))
    }
    finArray.forEach(e => console.log(e))
  }
  console.log(finalStudy())

 
  
  
  