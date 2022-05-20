package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		//ctrl + barra espaciadora
		
		//List - Array
		//picoparentesis
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("Maria");
		miArray.add(2,"Celina");
		
		System.out.println("\tList --- miArray");
		System.out.println(miArray.size());
	

		String elemento = miArray.remove(1);
		
		System.out.println(miArray);
		
		System.out.println(miArray.size());//length numero total de elementos
		System.out.println(elemento);	
		
		imprimir(miArray);
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num2 instanceof Integer);
		System.out.println(num2.getClass().getSimpleName());	
	
		List<Integer> miArray2 = new ArrayList<Integer>();
		
		miArray2.add(3);
		miArray2.add(3);
		miArray2.add(3);
		miArray2.add(13121213);
		miArray2.add(4);
		
		System.out.println("\tList --- miArray2");
		imprimir(miArray2);
		
		/*
		 * long ==> long
		 * double ==> Double
		 * int ==> Integer
		 * Boolean ===> Boolean
		 * 
		 * valor primitivo vs valores compuestos o valores referenciados 
		 *  metodos en valor compuesto o referenciado
		 * 
		 * List<int> miArray2 = new ArrayList<int>();
	
		 * 
		 * */
		
		System.out.println("\t Set -- HashSet");
		Set<String> miSet = new HashSet<String>();

		//no acepta elementos duplicados
		//no los guarda en un orden especifico
		//la coleccion que funciona mas rapido
		
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		
		imprimir(miSet);
		
		miSet.remove("Lupe");
		System.out.println(miSet);
		imprimir(miSet);
		System.out.println(miSet.contains("Juan"));

		System.out.println("\t Map -- HashMap");
		
		//Map -- HashMap -- Indice
		//<key/llave, value/valor>
		
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 2", 50);
		
		System.out.println(miMap);
		System.out.println(miMap.values());//todos los valores
		System.out.println(miMap.keySet());//todas las llaves
		
		System.out.println(miMap.get("Valor 1"));
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
	}
	
	public static void imprimir (Collection coleccion) {
		for(Object elemento : coleccion ){
			System.out.println("Elemento = " + elemento);	
		}
	}
	
}
