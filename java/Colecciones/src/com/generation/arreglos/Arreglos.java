package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main (String [] args) {
		//Matrices / arreglos / arrays
		//solo pueden tener un tipo de dato 
		//debemos especificar su tama�o
		/*
		 * numero - 0
		 * string - null
		 * booleanos - false
		 */
		
		int [] arrNumeros = new int [5];
		//numeracion basada en 0
		arrNumeros [0]= 1;
		arrNumeros [1]= Integer.parseInt("1");
		arrNumeros [2]= 1123;
		arrNumeros [3]= 11313;
		arrNumeros [4]= -123123;
		
		System.out.println(Arrays.toString(arrNumeros )); 

		//si no se agrega, �nicamente muestra la referencia de la memoria en donde se est� guardando el arreglo
		
		System.out.println(arrNumeros[0]);
		System.out.println(arrNumeros[1]);
		System.out.println(arrNumeros[2]);
		
		
		for(int i=0; i<5; i++) {
			System.out.println(arrNumeros[i]);
		};
		
		//forEach
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento" + conteo + "=" + elemento);
		}
		
		//arreglo que guarda objetos
		
		Persona persona1 = new Persona("Carlos", 12);
		Persona persona2 = new Persona("Mariana", 40);
		
		//Object arrPersona[] = new Object[3];
		Persona arrPersonas[] = new Persona[3];
		
		arrPersonas [0] = persona1;
		arrPersonas [1] = persona2;
		arrPersonas [2] = new Persona("Juan", 25);
		
		
		System.out.println(Arrays.toString(arrPersonas));
		
		for(Persona e : arrPersonas) {
			System.out.println(e.nombre + " - " + e.edad);
		}
		
		
		//Arreglos literales
		String []arrString = {"Hola", "mi", "nombre", "es"};
		
		
		
		}
}

