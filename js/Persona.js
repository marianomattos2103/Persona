class Persona {
  constructor (Nombre, Apellido, Estado) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
	this.Estado = Estado;
	
  }
  // Getter
  get   VisualizarPersona  ()   {
     return this.NombrePersona();
   }
  // Método
  NombrePersona () {
    return this.Nombre + " " + this.Apellido + " " + this.Estado ;
  }
  
  Correr () {
    this.Estado = "Tired";
  }
  
  Dormir () {
    this.Estado = "Rest";
  }
  
}