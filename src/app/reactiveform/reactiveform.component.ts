import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { freeApiService } from '../service/freeapi.service';
// import { freeApiService} from './service/freeapi.service';
@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit { 


// definiing the formgroup
form = new FormGroup ({
// we want to define our form inputs i.e the 4 form controls
firstName : new FormControl ( '', Validators.required),
lastName : new FormControl ( '', Validators.required),
email : new FormControl ( '', [Validators.required, Validators.email]),
password : new FormControl ( '', [Validators.required, Validators.minLength(6)])
})


spin=false;
// form=true;
load = ( )=> {
this.spin= true;
setTimeout(()=>{
this.spin=false;
// this.form=false;

},3000)
}
  constructor (private freeapi: freeApiService ) { }

 x:any;
  ngOnInit( ){ }

 onSubmit(){

     this.x =  (JSON.stringify(this.form.value));
    }
}

