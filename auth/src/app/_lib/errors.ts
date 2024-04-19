export class validationError extends Error{
    constructor(message: string){
        super(message);
        this.message = message;
        this.cause = "validationError"
    }
}