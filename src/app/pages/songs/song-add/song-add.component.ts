import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Artist } from '../../../models/artist.model';
import { ArtistsService } from '../../../services/artists.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-song-add',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './song-add.component.html',
  styleUrl: './song-add.component.scss'
})
export class SongAddComponent implements OnInit {
  artists: Artist[] = [];

  private artistService = inject(ArtistsService);

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getAll().subscribe({
      next: (artists: Artist[]) => {
        this.artists = artists;
      },
    });
  }
}
