import { Component, OnInit } from "@angular/core";
import { CaptchaService } from "../../services/captcha.service";

@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{

    constructor(private captcha: CaptchaService){

    }
    ngOnInit(){
        this.code = this.captcha.generateCode();
    }
    title = "User Login";
    public code:string = '';

    public newCode(){
        this.code = this.captcha.generateCode();
    }
}