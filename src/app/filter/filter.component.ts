import { Component , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
@Input() all: number = 0;
@Input() free:number = 0;
@Input() premium:number = 0;


defaultRadiobutton : string = 'All';


//custom event
@Output()
selectedRadiobutton: EventEmitter<string> = new EventEmitter<string>();

onRadioButtonChange(){
  this.selectedRadiobutton.emit(this.defaultRadiobutton);
  console.log(this.defaultRadiobutton)
}



}


