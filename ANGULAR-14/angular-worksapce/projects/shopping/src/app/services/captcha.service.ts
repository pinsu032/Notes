import { Injectable } from "@angular/core";

@Injectable()
export class CaptchaService{

    public generateCode(){
        let a = Math.random() * 10;
        let b = Math.random() * 10;
        let c = Math.random() * 10;
        let d = Math.random() * 10;
        let e = Math.random() * 10;
        let f = Math.random() * 10;
 
        let code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`;
        return code;
    }
}