package ciclos;

import javax.swing.JOptionPane;

public class CicloWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		String clave = "Pedro";
		
		String comparacion = "";
		
		while(clave.equals(comparacion) == false) {
			
			comparacion = JOptionPane.showInputDialog("Introduce la contrase�a, por favor");
			
			if(clave.equals(comparacion)==false) {
				System.out.println("La contrase�a es incorrecta");
			}
		}
		
		System.out.println("La contrase�a es correcta");
		
		
	}

}
