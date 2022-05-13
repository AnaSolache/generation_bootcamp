import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		/*Escribe una aplicación que calcule el indice de masa corporal.

		y que lance un mensaje según lo siguiente:
		
		Si tiene un IMC entre 18.5 y 25:
		"Your weigh ratio is good"
		
		si es menor de 18.5 o mayor de 25:
		"Your health is not good"
		
		peso (kg) / [estatura (m)]2

		 * 
		 * */
		
		Scanner escaner = new Scanner(System.in);
		
		System.out.print("Escribe tu peso(kg):");
		float peso = escaner.nextFloat();
		
		System.out.print("Escribe tu estatura (m):");
		float estatura = escaner.nextFloat();
		
		float indice = (peso/(estatura*estatura));
		System.out.print("Tu indice de masa corporal es:" + indice);
		
		if(indice < 25 && indice >= 18.5){
			System.out.print("Your weigh ratio is good");
			
		}else if(indice > 25 || indice < 18.5 ){
			System.out.print("Your health is not good");
		};
		
		

		
		
	}

}
