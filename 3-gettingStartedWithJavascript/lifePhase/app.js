const lifePhase = age => {
    return age < 0 ? 'This is not a valid age':
    age < 4 ? 'baby' :
    age < 13 ? 'child' :
    age < 20 ? 'teen' :
    age < 65 ? 'adult' :
    age < 140 ? 'senior citizen' : 'This is not a valid age';
}

console.log(lifePhase(100))