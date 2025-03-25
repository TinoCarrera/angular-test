import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/artist.model';
import { Company } from '../../../models/company.model';
import { CompaniesService } from '../../../services/companies.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-song-details',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './song-details.component.html',
  styleUrl: './song-details.component.scss'
})
export class SongDetailsComponent implements OnInit {
  song?: Song;
  artist?: Artist;
  company?: Company;
  loading = true;
  error = false;

  private route = inject(ActivatedRoute);
  private songsService = inject(SongsService);
  private artistService = inject(ArtistsService);
  private companiesService = inject(CompaniesService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.getSong(id);
  }

  getSong(id: string) {
    this.songsService.get(id).subscribe({
      next: (song: Song) => {
        this.song = song;
        this.getArtist();
        this.getCompany();
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

  getCompany() {
    this.companiesService.getAll({ 'songs[0]': this.song!.id }).subscribe({
      next: (companies: Company[]) => {
        if (companies.length === 0 || companies[0].songs.length === 0) {
          this.loading = false;
          return;
        }

        this.company = companies[0];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      }
    });
  }
}
