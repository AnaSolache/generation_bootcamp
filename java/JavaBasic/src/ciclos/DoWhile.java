package ciclos;

import javax.swing.JOptionPane;

public class DoWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String clave = "Pedro";
		
		String comparacion = "";
		
		do {
			
			comparacion = JOptionPane.showInputDialog("Introduce la contraseņa, por favor");

			if(clave.equals(comparacion) == false) {
				System.out.println("La contraseņa es incorrecta");
			}
			
			} while (clave.equals(comparacion) == false); 
			
			System.out.println("La contraseņa es correcta");
			
		
		
		
	
		
		
	}

}
