class Nodo {
  constructor (TR, TD) {
    this.TR = TR;
    this.TD = TD;
	
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