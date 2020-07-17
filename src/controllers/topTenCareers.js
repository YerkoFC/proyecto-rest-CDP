
let calculateScore = ( scores, career ) => {

    let nem = parseInt(scores.nem) * (career.nem / 100),
        rank = parseInt(scores.ranking) * (career.ranking / 100),
        mate = parseInt(scores.matematica) * (career.matematica / 100),
        leng = parseInt(scores.lenguaje) * (career.lenguaje / 100),
        hist = parseInt(scores.historia) * (career.histcien / 100),
        cien = parseInt(scores.nem) * (career.histcien / 100);
    
    let mayorHistCien;
    hist > cien ? mayorHistCien = hist : mayorHistCien = cien;

    let result = nem + rank + mate + leng + mayorHistCien; 
    
    return {
        careerCode: career.codigo,
        careerName: career.carrera,
        postulationScore: result,
        place: placeTentative(result, career)
    }
}

let placeTentative = ( score, career ) => {

    let placeValue = (career.primero - career.ultimo) / career.vacantes;
    
    if (score >= career.primero) {
        return 1;
    } else {
        let result = (career.primero - score) / placeValue;

        if(Math.round(result) === 0) {
            return 1;
        } else {
            return Math.round(result);
        }   
    }   
}

let topTenScores =  ( scores, careers ) => {

    let scoresArray = [];

    careers.forEach( element => {
        scoresArray.push(calculateScore(scores, element));
    });

    scoresArray.sort( (a, b) => {

        if( a.postulationScore > b.postulationScore ) {
            return -1;
        } 
        if( a.postulationScore < b.postulationScore )  {
            return 1;
        }
        return 0; 
    });
    
    return scoresArray.slice(0, 10);

}


module.exports = {
    topTenScores
}