import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 public user:any=[];
 public formSubmited = false;
 public submit=false;
 public update=true;
 public id: any;
 public message={
  USER_ADDED:'User Added Successfully',
  USER_UPDATED:'Updated Successfully',
  USER_DELETED:'Deleted Successfully',
  UNABLE_TO_ADD:'Unable to add User',
  UNABLE_TO_UPDATE:'Unable to Update',
}

 
form = this.fb.group({
    id:[''],
    first_name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phone_number:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    country:['',[Validators.required]],
  })

  constructor(private http: HttpClient,private fb:FormBuilder,private toastr: ToastrService) { }
  
  // add user
  createUser() {
    this.formSubmited = true;
    if (this.form.invalid) {
      this.showToast(this.message.UNABLE_TO_ADD, 2);
      return;
    }

    return this.http.post('https://niftyfiftytraders.com/api/user',this.form.value).subscribe(
      (res) => {
        this.getUser();
       console.log(res);
       this.showToast(this.message.USER_ADDED, 1);
       this.formSubmited = false;
       this.form.reset()
    },
       (error) => {
         console.clear();
         console.log('Error occurred on API call');
         console.log(error);
       }
       
     )
         
   }
   // get all user
  public getUser() {
    return this.http.get<any>('https://niftyfiftytraders.com/api/user').subscribe(
    (res) => {
      this.user=res.data;
     console.log(res)
      },
     (error) => {
       console.clear();
       console.log('Error occurred on API call');
       console.log(error);
     }
   )
 }

// get single detail to reactive form
 public select(data:any) {
  this.submit=true;
  this.update=false;
  this.form.patchValue({
    id:data.id,
    first_name:data.first_name,
    last_name:data.last_name,
    email:data.email,
    phone_number:data.phone_number,
    password:data.password,
    city:data.city,
    state:data.state,
    country:data.country,
    
     })
 }

// update user
public updateUser() {
  this.formSubmited = true;
  if (this.form.invalid) {
    this.showToast(this.message.UNABLE_TO_UPDATE, 2);
    return;
  }

  return this.http.put<any>('https://niftyfiftytraders.com/api/user',this.form.value).subscribe(
  (res) => {
    this.getUser();
   console.log(res);
   this.showToast(this.message.USER_UPDATED, 1);
   this.submit=false;
   this.update=true;
   this.formSubmited = false;
this.form.reset();
},(error)=>{
  console.log(error)
})
}
confirmation(data: any) {
  this.id = data.id
}


// delete user
public deleteUser() {
return this.http.delete(`https://niftyfiftytraders.com/api/user/${this.id}`).subscribe(
(res) => {
  this.getUser();
  console.log(res);
  this.showToast(this.message.USER_DELETED, 1);
  this.form.reset();
},(error)=>{
 console.log(error)
})
}

get f() { 
  return this.form.controls; 
}


showToast(message: any,n = 1){
  if (n==1){
    this.toastr.success(message);
  } else {
    this.toastr.error(message);
  }
}

  ngOnInit(): void {
      this.getUser()
  }
   

}
