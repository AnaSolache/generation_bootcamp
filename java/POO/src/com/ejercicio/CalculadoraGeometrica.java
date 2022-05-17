package com.ejercicio;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		
		System.out.println("Vamos a calcular");
		
		Areas calAreas = new Areas();
			int areaCuadrado = calAreas.areaCuadrado(8);
			System.out.println("El area del cuadrado es: " + areaCuadrado);
			
			double areaTriangulo = calAreas.areaTriangulo(4,8);
			System.out.println("El area del triangulo es: " + areaTriangulo);
			
			double areaCirculo = calAreas.areaCirculo(6);
			System.out.println("El area del circulo es: " + areaCirculo);
			
			
		
		Perimetro calPeri = new Perimetro();
			double periCuadrado = calPeri.pericuadrado(3);
			System.out.println("El perimetro del cuadrado es: " + periCuadrado);
			
			double periTriangulo = calPeri.periTriangulo(5, 6, 7);
			System.out.println("El perimetro del cuadrado es: " + periTriangulo);
			
			double periCirculo = calPeri.pericirculo(5);
			System.out.println("El perimetro del cuadrado es: " + periCirculo);
			
			
		
		
	}

}
