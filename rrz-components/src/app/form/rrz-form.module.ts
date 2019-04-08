import { NgModule } from "@angular/core";
import { RrzNumberInputComponent } from "./number-input/rrz-number-input.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [RrzNumberInputComponent],
    imports: [CommonModule],
    exports: [RrzNumberInputComponent]
})
export class RrzFormModule {

}