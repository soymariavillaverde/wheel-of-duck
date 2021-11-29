export function repeatName(name, list) {
    let checkName = list.find(element => element == name)
    if (checkName != null) {
            alert("Ese nombre " + checkName + " ya está incluido")
            return true
    }
    return false
}

// si los valores de checkname coinciden => la primera condicion del if se cumple [diferente de null (diferente de no coincidir = coinciden], es decir, se cumple) 
//si checkname es null no hay duplicado