package com.pokemon;

public class Main {

	public static void main(String[] args) {
		//
		//Pokemon chikorita = new Pokemon (152,1,20,"Chikorita",false);
		
		//Utilizando metodos de instanciar 
		//chikorita.atacar();
		//chikorita.comer();
		//chikorita.dormir();
		
		//no se puede instanciar de una clase abstracta ni de una interfaz
		//pero se puede implementar en otra clase
		
		TipoPlanta chikorita2 = new TipoPlanta(152,1,20,"Chikorita2",false,1);
		
		chikorita2.envenenar();
		chikorita2.comer();
		chikorita2.envenenar();
		chikorita2.atacar();
		
		Chikorita chikorita3 = new Chikorita (152,1,20,"Chikorita3", false,1,8);
		chikorita3.comer();
		chikorita3.envenenar();
		chikorita3.atacar();
	
		Charmander charmander = new Charmander(152,1,20,"Chikorita2",false);
	
		charmander.comer();
		charmander.atacar();
		
		charmander.volar();
		charmander.lanzallamas();
		
		
	}

}
