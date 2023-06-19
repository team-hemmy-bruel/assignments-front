import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthBdl } from 'src/app/services/bdl/auth.bdl';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = "";
  password = "";
  loading = false;

  constructor(private titleService: Title, private authBdl: AuthBdl
    , private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle(`Assignments Management | Login`);

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

    this.authBdl.login(this.email, this.password).subscribe(
      (success) => {
        if (success) {
          // Login was successful
          console.log('Login successful');
        } else {
          // Login failed
          console.log('Login failed');
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
