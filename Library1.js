function isTouching(fixedRec, movingRec) {
    if(movingRec.x - fixedRec.x<= movingRec.width/2+fixedRec.width/2 &&
      fixedRec.x-movingRec.x<= fixedRec.width/2 + movingRec.width/2 &&
      movingRec.y - fixedRec.y<= movingRec.height/2+fixedRec.height/2 &&
      fixedRec.y-movingRec.y<= fixedRec.height/2 + movingRec.height/2
      ){
      return true;
    }
    else {
      return false;
  }
}