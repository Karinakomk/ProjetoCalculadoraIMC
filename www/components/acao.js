function somar() {
	var peso;
	var altura;
	var resultado;

	peso = parseFloat(document.getElementById('peso').value);

	altura = parseFloat(document.getElementById('altura').value);

	resultado = peso /(altura*altura);

  alert(resultado);
     if(resultado <18.5){
         document.getElementById('divimg').src = "css/foto/Figura3.png";
     }
     else if(resultado >18.5 &&  resultado <24.9){
       document.getElementById('divimg').src = "css/foto/Figura4.png";
     } 
     else{
       document.getElementById('divimg').src = "css/foto/Figura5.png";
     }
    }