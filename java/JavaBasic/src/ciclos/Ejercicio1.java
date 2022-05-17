package ciclos;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Ejercicio1 {

	public static void main(String[] args) {
		//Adivina el número

		//Escribe un programa en Java que te pida introducir un número y lo compare con otro número que puede ser aleatorio o establecido por tí.
		//Mientras que el número no sea igual al establecido como base, el programa se seguirá ejecutando.
		//Una vez que ambos números sean iguales, el programa se detendrá y mostrará lo siguiente en consola:

		//"Felicidades, adivinaste el número."


				
				int numBase = 9;
				String numEntrada = "";
				
				do {
					numEntrada = JOptionPane.showInputDialog("Introduce un numero");
					
				}	while (numBase != Integer.parseInt(numEntrada));
				
				System.out.println("Felicidades, adivinaste el número.");

			
			
	}

}
