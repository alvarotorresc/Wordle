const validWords = attempt => {
    if (attempt === "") {
        console.log(attempt);
        alert("No puedes dejar el campo vacio!");
        return false;
    }
    if (attempt.length > 5) {
        alert("La palabra no puede tener mas de 5 letras!");
        return false;
    }
    if (attempt.length < 5) {
        alert("La palabra no puede tener menos de 5 letras!");
        return false;
    }
    return true;
}