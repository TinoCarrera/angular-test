import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { RouterLink } from '@angular/router';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/artist.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  songs: Song[] = [];
  artists: Artist[] = [];

  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);

  ngOnInit() {
    this.getArtists();
  }

  getSongs() {
    this.songsService.getAll().subscribe((songs: Song[]) => {
      this.songs = songs;
    });
  }

  getArtists() {
    this.artistService.getAll().subscribe((artists: Artist[]) => {
      this.artists = artists;
      this.getSongs();
    });
  }

  getArtist(id: number): Artist {
    return this.artists.find((artist) => artist.id == id)!;
  }
}
