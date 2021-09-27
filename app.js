const color1=document.querySelector('#color1');
const color2=document.querySelector('#color2');
const body=document.querySelector('body');
const prevw=document.querySelector('.previw-color');
const codecss=document.querySelector('.codigocss');
const dr=document.querySelector('#rotate');
const randm=document.querySelector('#rand');

let valor='to right'
let contador;
let savecolor={}

document.addEventListener('DOMContentLoaded',()=>{

	color1.addEventListener('input', function(e) {
		colores()
	});
	color2.addEventListener('input', function(e) {
		colores()		
	});
	extraerdatoslocalstorage()
	
})
function extraerdatoslocalstorage(){
	savecolor=JSON.parse(localStorage.getItem('color'))
	if(savecolor===null){
		return colores()
	}
	const{colo1v,colo2v,valordeg}=savecolor
	color1.value=colo1v
	color2.value=colo2v
	valor=valordeg
	colores()
}

const randomarray=['1','2','3','4','a','b','c','d','e','5','6','7','8','9','0','f']

randm.addEventListener('click',(e)=>{
	e.preventDefault()
 
	let colo2v='#'
	let colo1v='#'
	for (let i = 0; i < 6; i++) {
		colo2v +=randomarray[Math.floor(Math.random()*randomarray.length)]
		colo1v +=randomarray[Math.floor(Math.random()*randomarray.length)]
	}
	color1.value=colo1v
	color2.value=colo2v
	colores()
})

dr.addEventListener('click',cambiar);

function colores(){

	savecolor={
		colo2v:color2.value,
		colo1v:color1.value,
		valordeg:valor
	}
	const{colo1v,colo2v,valordeg}=savecolor
	let codigo='';
	body.style.background=`linear-gradient(${valordeg},${colo1v}, ${colo2v})`
	codigo=`
	<p>background: ${colo1v};</p>
	<p>background: linear-gradient(${valordeg}, ${colo1v}, ${colo2v});</p>
	`
	codecss.innerHTML = codigo;
	localstoragecolor()
}

function localstoragecolor(){
	localStorage.setItem('color',JSON.stringify(savecolor))
}

function cambiar(e){

	const positioncr = ['to bottom','to right','to top','to left','50deg','300deg']

	e.preventDefault()
	if (contador < positioncr.length - 1 ) {
		contador++	
	}
	else{contador=0
	}

	valor=positioncr[contador]
	colores()
}