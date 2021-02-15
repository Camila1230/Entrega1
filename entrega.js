let cursos = [{
    Curso1: 'Ingles',
    Id: 401,
    Duración: '32 Horas',
    Costo: 40000,
},
{
    Curso2: 'Dibujo',
    Id: 309,
    Duración: '10 Horas',
    Costo: 10000
},
{
    Curso3: 'Salud',
    Id: 211,
    Duración: '50 Horas',
    Costo: 50000
}];

var Curso1 = function(){
console.log(cursos[0]);
};
setTimeout(Curso1, 2000);

var Curso2 = function(){
console.log(cursos[1]);
};
setTimeout(Curso2, 4000);

var Curso3 = function(){
console.log(cursos[2]);
};
setTimeout(Curso3, 6000);








