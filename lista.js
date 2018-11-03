var MAX_ELEM_LIST=5; //El máximo de elementos que puede meter son 5
//Lo pongo como variable global
//Entiendo que el usuario me mete del 1-5 
function create(){
    var list=[];
    for(var i=0; i<MAX_ELEM_LIST; i++){ //Inicializo con un for porque no se cuantos elementos va a meter el usu
        list[i]=Number.NaN;
    }
    return list;
}
function isEmpty(list){
    var isEmpty=false;
    if(isNaN(list[0])){ //Miro si el primer puesto está vacio, 
                        //si lo está no hay elementos en el array por lo tanto está vacio entero
        isEmpty=true;
    }
    return isEmpty;
}
function isFull(list){
    var isFull=false;
    if(!isNaN(list[MAX_ELEM_LIST-1])){ //Si el ultimo puesto no está vacio, es porque está llena entera.
        isFull=true;
    }
    return isFull;
}
function size(list){
    var length=0;
    while (length<MAX_ELEM_LIST && !isNaN(list[length])){ //Comprueblo los elementos que están rellenos, pero no
                                                        // pueden ser más que el máximo de elementos.
        length++;
    }
    return length;
}
function add(list, elem){
    var elem= parseInt(elem); //Lo convierto en un entero, el elemento que me han pasado
    if (isNaN(elem)) { //Compruebo que no esté vacio.
        throw "El elemento no es un número";
    }
    if(!isFull(list)){ //Si la lista está llena no puedo meter el nuevo elemento
        list[size(list)]=elem;// lo meto en el último hueco que hay vacio, que lo compruebo con el método size
    }else{
        throw "La lista está llena";
    }
    return size(list); 
}
function addAt(list, elem,index){
    var elem= parseInt(elem); //Lo convierto en un entero, el elemento que me han pasado
    if (isNaN(elem)) { //Compruebo que no esté vacio.
        throw "El elemento no es un número";
    }
    if(isFull(list)){ //Si la lista está llena no puedo meter el nuevo elemento
        throw "La lista está llena";
    }
    if(index<MAX_ELEM_LIST){
        list[index-1]=elem; //
    }else{
        throw "El índice es mayor que el tamaño máximo de la lista";
    }
    return size(list);
}
function get(list, index){
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    return list[index-1];
}
function toString(list){
    var str = "";
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i=0; i<length-1;i++){
            str = str + list[i] + " - ";
        } 		 		
        str = str + list[i]; 		
    } 	
    return str;
}
function testlist(){
    var list = create ();
    console.log("Está vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));
    console.log("Está llena: " + isFull(list));
    console.log(add(list, 5));
    console.log("Está vacía: " + isEmpty(list));
    console.log(addAt(list, 3,3));
} 
window.onload = testlist;
