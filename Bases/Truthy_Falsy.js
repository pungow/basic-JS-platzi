//Boolean nos devuelve False:
Boolean();
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");


//Boolean nos devuelve True:
Boolean(1);       //número diferente de cero (0)
Boolean("a");     //caracter o espacio en blanco en un string
Boolean(true);
Boolean([]);      //array vacio
Boolean({});      //objeto vacío
Boolean(function () { }); //Cualquier función
