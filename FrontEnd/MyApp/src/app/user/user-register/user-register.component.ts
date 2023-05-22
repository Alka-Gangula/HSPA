import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  userSubmitted!: boolean;
  user!: User;
  registerationForm!: FormGroup;
  constructor(private fb:FormBuilder,private userService:UserService,private alertifyService:AlertifyService){}
  ngOnInit() {
    // this.registerationForm=new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.passwordMatchingValidator);
    this.createRegistrationForm();

  }
  createRegistrationForm(){
    this.registerationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(5)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };
  userData():User{
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }

  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }
  onSubmit(){
    this.userSubmitted=true;
    console.log(this.registerationForm.value);
    if(this.registerationForm.valid){
      //this.user=Object.assign(this.user,this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted=false;
      this.alertifyService.success('You have succesfully registered...');
    }else{
      this.alertifyService.error('Please enter valid details...');
    }
  }

}


