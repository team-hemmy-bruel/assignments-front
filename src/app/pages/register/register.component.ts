import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthBdl } from 'src/app/services/bdl/auth.bdl';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";
  confirmPassword = "";
  username = "";
  status = "";
  loading = false;

  constructor(private titleService: Title, private authBdl: AuthBdl
    , private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle(`Assignments Management | Register`);

    if(this.storageService.getToken()){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy() {
  }

  onSubmit(event: any) {
    this.loading = true;
    if (this.email === "") return;
    if (this.password === "") return;
    if (this.username === "") return;
    if (this.status === "") return;

    this.authBdl.register(this.email, this.password, this.username, this.status).subscribe(
      (success) => {
        if (success) {
          // Register was successful
          console.log('Register successful');
        } else {
          // Register failed
          console.log('Register failed');
        }

        this.loading = false; // Hide the loading spinner
      },
      (error) => {
        console.error(error);
        this.loading = false; // Hide the loading spinner
      }
    );
  }

}
