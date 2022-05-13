import java.util.Scanner;

public class Calculador {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		
		System.out.println("Introduce el numero de la operacion a realizar");

		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");
		int operacion = sc.nextInt();
		
		System.out.println("Introduce dos numeros");
		System.out.println("1:");
		float num1 = sc.nextFloat();
		System.out.println("2:");
		float num2 = sc.nextFloat();
		sc.close();
		

		
		switch(operacion) {
		case 1:
			float res1 = num1 + num2;
			System.out.println("El resultado de la operacion es:");
			System.out.println(res1);
			break;
			
		case 2:
			float res2 = num1 - num2;
			System.out.println("El resultado de la operacion es:");
			System.out.println(res2);
			break;
			
		case 3:
			float res3 = num1 * num2;
			System.out.println("El resultado de la operacion es:");
			System.out.println(res3);
			break;
			
		case 4:
			float res4 = num1 / num2;
			System.out.println("El resultado de la operacion es:");
			System.out.println(res4);
			break;
			
		default:
			System.out.println("Ingresa el numero correctamente");
			
		
		}
	}

}
