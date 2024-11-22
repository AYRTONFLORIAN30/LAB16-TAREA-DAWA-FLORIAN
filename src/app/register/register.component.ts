import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    name: '', // Nombre del usuario
    email: '', // Correo electrónico
    password: '', // Contraseña
  };

  constructor(private authService: AuthService, private router: Router) {}

  // Método para registrar usuarios
  register() {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/login']); // Redirigir al login después del registro
      },
      (error: any) => {
        alert('Error al registrar el usuario.'); // Mostrar mensaje de error
        console.error(error);
      }
    );
  }
}
