package com.pokemon;

public class Charmander extends Pokemon implements TipoFuego, TipoVolador{

	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id,edad,nivel,nombre,evolucion);
	}
	
	
	@Override
	public void lanzallamas() {
		System.out.println(" usó lanzallamas");
		
	}

	@Override
	public void araniar() {
		System.out.println(" usó araniar");
	}

	@Override
	public void volar() {
		System.out.println(" volando");
		
	}


	@Override
	public void saludar(String mensaje) {
		System.out.println(mensaje = "Holi que hace");
		
	}
	
	

}
