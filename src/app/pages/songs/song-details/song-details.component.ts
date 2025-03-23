import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/artist.model';

@Component({
  selector: 'app-song-details',
  standalone: true,
  imports: [],
  templateUrl: './song-details.component.html',
  styleUrl: './song-details.component.scss'
})
export class SongDetailsComponent implements OnInit {
  song?: Song;
  artist?: Artist;
  loading = true;
  error = false;

  private route = inject(ActivatedRoute);
  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.getSong(id);
  }

  getSong(id: string) {
    this.songsService.get(id).subscribe({
      next: (song: Song) => {
        this.song = song;
        this.getArtist();
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  getArtist() {
    this.artistService.get(this.song!.artist).subscribe({
      next: (artist: Artist) => {
        this.artist = artist;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }
}
