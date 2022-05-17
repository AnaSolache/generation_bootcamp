package com.calculadora;
import java.util.Scanner;

public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");
		
		
		//Instanciar - Crear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
		
		//metodo que no retorna nada
		cal.sumarMensaje();
	
		//metodo que regresa un valor
		String mensaje = cal.mensaje();
		System.out.println(mensaje);
		
		//metodos con parametros
		
		int suma = cal.sumar(10, 20);
		System.out.println(suma);
	
		//Instanciar
		
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int cuadrado = calAreas.areaCuadrado(8);
		System.out.println(cuadrado);
		
	}

}
