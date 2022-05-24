package com.calculadora;

public class Calculadora {
	//atributos o propiedades
	private int a;
	private int b;
	private int c;
	private int resultado;
	
	//constructor
	public Calculadora(int a, int b) {
		this.a = a;
		this.b = b;
	}
	
	public Calculadora(int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;
	
	}
	
	//metodo
	public void sumar(int a, int b) {
		resultado = a+b;
		System.out.println("El resultado de la suma es: " + resultado);
	}
	public void sumar(int a, int b, int c) {
		resultado = a+b+c;
		System.out.println("Segundo método");
	} //dependiendo de la cantidad de parámetros se pueda usar de dif. forma
	public int getA() {
		return a;
	}
	public void setA(int a) {
		this.a = a;
	}
	public int getB() {
		return b;
	}
	public void setB(int b) {
		this.b = b;
	}
	public int getC() {
		return c;
	}
	public void setC(int c) {
		this.c = c;
	}
	public int getResultado() {
		return resultado;
	}
	public void setResultado(int resultado) {
		this.resultado = resultado;
	}
	
	
	
	
}
