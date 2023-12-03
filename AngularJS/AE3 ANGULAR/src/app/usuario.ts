//Creamos el modelo de usuario, el cual tiene un email y un password como propiedades.
export class Usuario {

    //PROPIEDADES
    email: string;
    password: string;


    //CONSTRUCTOR
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
