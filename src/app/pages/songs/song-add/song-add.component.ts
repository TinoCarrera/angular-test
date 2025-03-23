import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { Artist } from '../../../models/artist.model';
import { ArtistsService } from '../../../services/artists.service';

@Component({
  selector: 'app-song-add',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './song-add.component.html',
  styleUrl: './song-add.component.scss'
})
export class SongAddComponent implements OnInit {
  songId?: string | null;
  song?: Song;
  artists: Artist[] = [];

  private route = inject(ActivatedRoute);
  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    if (this.songId) {
      this.getSong();
    }
    this.getArtists();
  }

  getSong() {
    this.songsService.get(this.songId!).subscribe({
      next: (song: Song) => {
        this.song = song;
      },
    });
  }

  getArtists() {
    this.artistService.getAll().subscribe({
      next: (artists: Artist[]) => {
        this.artists = artists;
      },
    });
  }
}
