import { Request } from "express";

export default interface customRequest extends Request{
    listquery?: string,
    query : {
        [key: string]: any
    }
}