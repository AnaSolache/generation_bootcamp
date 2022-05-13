import java.util.Scanner;

public class ControlDeFlujos {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("¿Cual es tu edad?");
		int edad = sc.nextInt();

		
		if(edad>=18){
			if(edad > 50) {
			System.out.println("Eres mayor un adulto mayor");
			}else {
				System.out.println("Eres mayor de edad");
			}
			}else {
			System.out.println("Eres menor de edad");
			}
		
		String mensaje = (edad>=18)?("Eres mayor de edad x2"): ("Eres menor de edadx2");
		System.out.println(mensaje);
	
		System.out.print("En que dia estamos:");
		sc.nextLine();
		String dia =(sc.nextLine()).toLowerCase();
		sc.close();
		
		switch(dia){
		
		case "lunes":
			System.out.println("5 minutos mas");
			break;
		case "martes":
			System.out.println("o te cases ni te embarques");
			break;
		case "miercoles":
			System.out.println("Ombligo de la semana");
			break;
		case "juves":
			System.out.println("Viernes chiquito");
			break;
		case "viernes":
			System.out.println("Chelas");
			break;
		default:
			System.out.println("Ingrsa un dato correcto");
		}
		
		
		
		}
		
	}

