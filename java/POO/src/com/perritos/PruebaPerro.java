package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
		
		//Instanciar
		
		Perro perro1 = new Perro("Patitas", 3);
		
		//cambiar sus atributos
		perro1.edad = 3;
		perro1.raza = "husky";
		perro1.tamanio = "mediano";
		
		//metodo
		perro1.ladrar();
		
		int edadP = perro1.edadPerruna();
		System.out.println(edadP);
		
		Perro perro2 = new Perro("Cookies", 1);
		perro2.edad = 1;
		perro2.raza = "Dalmata";
		perro2.tamanio = "Grande";
		
		perro2.ladrar();
		
		Perro.mensaje();
		
		
		
		
		
	}

}
