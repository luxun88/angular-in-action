import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'rrz-number-input',
    templateUrl: './rrz-number-input.component.html'
})
export class RrzNumberInputComponent implements OnInit{
    @Input() max: string;
    @Input() min: string;
    @Input() step: number = 1;

    @ViewChild('myInput') myinput: any;

    @Input() errorMessage:any = 'The parameter should be entered correctly.';

    public ngOnInit(): void {
        this.myinput.style=this.getStyle(this.myinput.value);
    }
    public generatePlaceHolder(): string {
        return `[${this.min}, ${this.max}]`;
    }
 
    public onKeyUp(myinput: any): any {
        myinput.style=this.getStyle(myinput.value);
    }

    private getStyle(value: string): string {
        if(this.isValid(value)) {
            return 'border: 1px solid lightgray;outline: none;height: 22px;width: 100%;';
        } else {
            return 'border: 1px solid red;outline: none;height: 22px;width: 100%;';
        }
    }

    private isValid(value: string): boolean {
        return this.isEmpty(value) || (parseFloat(value) >= parseFloat(this.min) && parseFloat(value) <= parseFloat(this.max));
    }

    private isEmpty(value: any): boolean {
        return value === undefined || value === ''; 
    }
}