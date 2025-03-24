import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { RouterLink } from '@angular/router';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/artist.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  songs: Song[] = [];
  artists: Artist[] = [];
  loading = true;
  error = false;

  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);

  ngOnInit() {
    this.getArtists();
  }

  getSongs() {
    this.songsService.getAll().subscribe({
      next: (songs: Song[]) => {
        this.songs = songs;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  getArtists() {
    this.artistService.getAll().subscribe({
      next: (artists: Artist[]) => {
        this.artists = artists;
        this.getSongs();
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  getArtist(id: number): Artist {
    return this.artists.find((artist) => artist.id == id)!;
  }
}
