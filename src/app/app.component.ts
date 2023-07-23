import { Component } from '@angular/core';
import { IRepos } from './repos.interface';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public repos: IRepos[] = [];

  constructor(
    private requestService: RequestService
  ) {}

  carregar() {
    this.requestService.getRepos()
        .subscribe((response: any[]) => {
          this.repos = response.map(r => {
            return {
              full_name: r.full_name,
              html_url: r.html_url
            }
          });
        });
  }
}
