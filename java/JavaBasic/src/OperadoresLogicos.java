import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		// single line
		
		/*
		 * a comment multiple line
		 * */

		// operators asignacion
		
		int num = 12;
		num = 45;
		num = Integer.parseInt("4");
		
		System.out.println(num);
		
		//operadores de comparacion
		
		int num1, num2;
		num1 = 10;
		num2 = 20;
		
		System.out.println("num1: " + num1);
		System.out.println("num2: " + num2);
		
		//operador de comparacion
		System.out.println(num1 == num2);
		
		//.equals()
		System.out.println(Objects.equals(num1, num2));
		
		
		// <,>, >= ,<=
		int num3, num4;
		num3 = 15;
		num4 = 20;
		
		System.out.println(num3 < num4);
		
		if (num3 < num4) {
			System.out.println("Numero 3 es menor");
		}else {
			System.out.println("Numero 3 es mayor");
		}
		
		
		//operadores logicos !=
		
		System.out.println(num3 != num4);
		
		System.out.println(true && true);
		
		System.out.println(false || false);
		
		System.out.println(!true && true);
		
		System.out.println(!(false && true));
		
		
	}

}
