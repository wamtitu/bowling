function totalScore(rolls){
  let score = 0;
  let frameIndex = 0;
  for(let frame = 0; frame <10; frame++){
    
    const firstThrow = rolls[frameIndex];
    if(firstThrow === 10){
      //it is strike
      score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
      frameIndex++;
    }else{
      const secondThrow = rolls[frameIndex+1];
    score += secondThrow + firstThrow;

    if(firstThrow+secondThrow === 10){
      score += rolls[frameIndex+2];
    }
    }
    frameIndex = frameIndex+2;
    
  }
  return score;
}

export {totalScore};