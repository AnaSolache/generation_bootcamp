package com.calculadora;

public class Calculadora {
	
	//metodo que no regresa nada, por eso void
	public void sumarMensaje() {
		System.out.println("Voy a sumar");
	}
	
	// Metodo que retorna datos
	//Para regresar un valor como return
	//modificador de acceso
	
	public String mensaje() {
		String mensaje ="Voy a realizar una operacion";
		return mensaje;
	}
	
	public int prueba() {
		return  2;
	}
	
	//Operaciones
	public int sumar(int a, int b) {
		return a + b;
	}
	
	public void sumaM(int a, int b) {
		System.out.println("El resultado de la suma es: " + (a+b));
	}
	
	public int resta(int a, int b) {
		return a - b;
	}
	
	public int multiplicar(int a, int b) {
		return a * b;
	}
	
	public double dividir(double a, double b) {
		if(b != 0){
			return a / b;
		}else;
			return -1;
	}
	
}
