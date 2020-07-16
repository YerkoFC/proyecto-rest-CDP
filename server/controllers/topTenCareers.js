
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
        postulationScore: result 
    }

}

let topTenScores =  ( scores, careers ) => {

    let scoresArray = [];

    careers.forEach( (element, index) => {
        scoresArray.push(calculateScore(scores, careers[index]));
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