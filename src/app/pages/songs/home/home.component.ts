import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private songsService = inject(SongsService);

  ngOnInit() {
    this.songsService.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
