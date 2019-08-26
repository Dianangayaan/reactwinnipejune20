function getShapePerimiter  (base ,height){    
    let perimeter = (base === height) ? 4*base : 2*( height + base );
    let message = `${perimeter} is the shape perimiter & `;
    console.log("")
    message += (perimeter > 100) ? 'The perimiter is to big' : 'The perimiter is fine';
    return message;
}
console.log(getShapePerimiter(5,10));
console.log(getShapePerimiter(15,30));
console.log(getShapePerimiter(20,25));