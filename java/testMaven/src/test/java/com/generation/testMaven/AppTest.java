package com.generation.testMaven;
import org.junit.jupiter.api.*;

public class AppTest 
{
	@Test
	//para poder probar métodos hay que instanciarlos
	public void saludoTest() {
		App saludo = new App();
		Assertions.assertEquals("Hola Mundo!", saludo.saludo());
	}
	@Test
	public void saludoStaticTest() {
		Assertions.assertEquals("HOLA MUNDO!", App.saludoStatic());
	}
	
}
