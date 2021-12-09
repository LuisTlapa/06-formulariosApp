import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector:'[customMin][ngModel]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting:CustomMinDirective,
        multi: true
    }]
})

export class CustomMinDirective{
    @Input()minimo!: number;

    constructor(){
        console.log('Directicva', this.minimo);
        
    }
    
    validate(control: FormControl){
        const inputValue = control.value;
        
        return (inputValue < this.minimo)
            ?{'custonMin': true}
            : null;
        
    }
}