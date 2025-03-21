import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  songs?: Song[];

  private songsService = inject(SongsService);

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.songsService.getAll().subscribe((songs: Song[]) => {
      this.songs = songs;
    });
  }
}
