import { IResponse } from "./IResponse";

export class Response implements IResponse {
    succeeded: boolean = false;
    message: string = "";
    data: any;
    errors: any
}