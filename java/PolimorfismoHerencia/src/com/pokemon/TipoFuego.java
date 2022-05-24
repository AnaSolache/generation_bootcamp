package com.pokemon;

public class TipoFuego extends Pokemon {
	private int temperatura;
	private String colorFuego;
	
	//constructor
	public TipoFuego(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int temperatura, String colorFuego) {
		super(id,edad,nivel,nombre,evolucion);
		this.temperatura = temperatura;
		this.colorFuego = colorFuego;
	}

	public int getTemperatura() {
		return temperatura;
	}

	public void setTemperatura(int temperatura) {
		this.temperatura = temperatura;
	}

	public String getColorFuego() {
		return colorFuego;
	}

	public void setColorFuego(String colorFuego) {
		this.colorFuego = colorFuego;
	}

	@Override
	public void saludar(String mensaje) {
		// TODO Auto-generated method stub
		
	}
	
	
}
