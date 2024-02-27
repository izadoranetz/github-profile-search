import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title: string = 'Buscador do Github';
  username: string = '';
  userInfo: any;
  userRepos: any[] = [];

  ngOnInit(): void {
    this.getUserInfo('izadoranetz');
    this.getUserRepos('izadoranetz');
  }

  constructor(private githubService: GithubService) {}

  search(): void {
    if (this.username.trim() !== '') { // Verifica se o nome de usuário não está vazio
      this.getUserInfo(this.username);
      this.getUserRepos(this.username);
    } else {
      console.log('Por favor, insira um nome de usuário.');
    }
  }

  getUserInfo(username: string): void {
    this.githubService.getUser(username).subscribe(
      (data) => {
        this.userInfo = data; // Armazena as informações do usuário
      },
      (error) => {
        console.error('Erro ao buscar informações do usuário:', error);
      }
    );
  }

  getUserRepos(username: string): void {
    this.githubService.getUserRepos(username).subscribe(
      (data) => {
        this.userRepos = data; // Armazena os repositórios do usuário
      },
      (error) => {
        console.error('Erro ao buscar os repositórios do usuário:', error);
      }
    );
  }
}
