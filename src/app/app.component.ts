import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from './service/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
   myForm:FormGroup;
   submitted = false;

   constructor(public fb:FormBuilder,private configService : ConfigService){}

  ngOnInit(){
    this.myForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      emailId : ['',Validators.required,Validators.email],
      phone:['',Validators.required],
      dob:['',Validators.required],
      incomeSource: ['',Validators.required],
      uploadDrivingLiecnce : ['',Validators.required],
      expiryDate:['',Validators.required],
      isOFACE : [false,Validators.required],
      isLegimate : [false,Validators.required]
    })
  }

  onSubmit(form : any) {
    this.configService.createArticle(this.myForm.value).subscribe((resp)=>{
      console.log(resp);
    });
  }
}
