import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  songs?: Song[];
  private songsService = inject(SongsService);

  ngOnInit() {
    this.songsService.getAll().subscribe((songs) => {
      this.songs = songs;
    });
  }
}
