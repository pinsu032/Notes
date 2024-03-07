import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "sentence"
})
export class SentencePipe implements PipeTransform{
    transform(value:any) {
        let firsChar = value.charAt(0);
        let restChar = value.substring(1);
        let sentence = firsChar.toUpperCase() + restChar.toLowerCase();
        return sentence;
    }
    
}