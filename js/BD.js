/*class BaseDatos {
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
  
}*/

function Correr () {

}

/*var conn = SQL.connect( { Driver: "SQLite", Database: "C:\\Users\\franke\\Desktop\\squish.db"} );
 
var result = conn.query("SELECT id, forename, surname, email, phone FROM addressbook;");

if(result.isValid == false) {
test.log("Result is not valid, maybe no entries in database?")
} else {
test.log("Result is valid, entries in database?")
/*while (result.isValid) {
// do something with the result
var id = result.value(0)
var forename = result.value(1)
var surname = result.value(2)
var email = result.value(3)
var phone = result.value(4)
//test.log(id + forename + surname + email + phone)
addEntry(forename, surname, email, phone)
result.toNext();
}
//test.log("added " + id + " entries in the addressbook application")*/

