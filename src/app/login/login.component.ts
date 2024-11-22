import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '', // Correo electrónico
    password: '', // Contraseña
  };

  constructor(private authService: AuthService, private router: Router) {}

  // Método para iniciar sesión
  login() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Guardar el token en localStorage
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']); // Redirigir al dashboard después del login
      },
      (error: any) => {
        alert('Correo o contraseña incorrectos.'); // Mostrar mensaje de error
        console.error(error);
      }
    );
  }
}
