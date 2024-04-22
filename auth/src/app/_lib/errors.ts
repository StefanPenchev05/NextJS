export class validationError extends Error{
    constructor(message: string){
        super(message);
        this.message = message;
        this.cause = "validationError"
    }
}

export class ApiError extends Error{

    status: string;
    component?: string;

    constructor(status:string, message: string){
        super(message);
        this.name = "ApiError";
        this.message = message;
        this.status = status;
    }
}