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

  private route = inject(ActivatedRoute);
  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.songsService.get(id).subscribe((song) => {
      this.song = song;
      this.getArtist();
    });
  }

  getArtist() {
    this.artistService.get(this.song!.artist).subscribe((artist: Artist) => {
      this.artist = artist;
    });
  }
}
