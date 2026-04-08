import { Component, signal } from '@angular/core';
import { LoginCredentials } from '@org/auth';
import { email, form, required } from '@angular/forms/signals';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';


interface CreateLoginForm extends LoginCredentials {}

@Component({
  selector: 'component',
  imports: [
    InputTextModule,
    RouterLink
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-indigo-700 px-4 py-12">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-slate-900">Welcome to Hekok</h1>
          <p class="text-slate-600 mt-2">Sign in to access your dashboard</p>
        </div>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-5" novalidate>
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <input 
              pInputText 
              [field]="form.email" 

              class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-900 placeholder-slate-400"
              placeholder="you@company.com">
            @if (form.get('email')?.touched && form.get('email')?.errors?.['required']) {
              <p class="mt-1 text-sm text-red-600">Email is required</p>
            } @else if (form.get('email')?.touched && form.get('email')?.errors?.['email']) {
              <p class="mt-1 text-sm text-red-600">Enter a valid email</p>
            }
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <div class="relative">
              <input formControlName="password" [type]="showPassword() ? 'text' : 'password'" autocomplete="current-password"
                class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-900 placeholder-slate-400 pr-12">
              <button type="button" (click)="showPassword.update(v => !v)" 
                class="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700 transition" aria-label="Toggle password visibility">
                {{ showPassword() ? '🙈' : '👁️' }}
              </button>
            </div>
            @if (form.get('password')?.touched && form.get('password')?.errors?.['required']) {
              <p class="mt-1 text-sm text-red-600">Password is required</p>
            } @else if (form.get('password')?.touched && form.get('password')?.errors?.['minlength']) {
              <p class="mt-1 text-sm text-red-600">Min 6 characters</p>
            }
          </div>

          <!-- Error Banner -->
          @if (error()) {
            <div class="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
              <span>⚠️</span> {{ error() }}
            </div>
          }

          <!-- Submit -->
          <button type="submit" [disabled]="form.invalid || isLoading()"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2 shadow-sm">
            @if (isLoading()) {
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Signing in...
            } @else {
              Sign In
            }
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-slate-600">
          Forgot password? 
          <a routerLink="/forgot-password" class="text-blue-600 hover:text-blue-700 font-medium hover:underline">Reset it</a>
        </p>
      </div>
    </div>

  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {


  readonly loginData=signal<CreateLoginForm>({
    email:'',
    password:''
  }); 

  readonly form=form(this.loginData,(root)=>{
    required(root.password,{message:"Le mot de passe est requis"});
    required(root.email,{message:"Le mail est requis"});
    email(root.email,{message:"L'email n'est pas valide"});
    //
  });
}
