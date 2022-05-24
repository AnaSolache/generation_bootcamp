package com.pokemon;

public class TipoPlanta extends Pokemon{

	private int numeroHojas;
	
	//constructor
	public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
		super(id,edad,nivel,nombre,evolucion);
		this.numeroHojas = numeroHojas;
		//con super se hace referencia al constructor de la clase padre
	}
	
	
	public int getNumeroHojas() {
		return numeroHojas;
	}


	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}

	//metodo abstracto
	
	public void saludar(String mensaje) {
		System.out.println(mensaje);
		
		
	}

	
	
	//métodos
	public void paralizar() {
		System.out.println(getNombre() + " paraliza");
	}
	public void envenenar() {
		System.out.println(getNombre() + " envenena");
	}
	
	public void atacar() {
		System.out.println(getNombre() + " está atacando");
	}





}
