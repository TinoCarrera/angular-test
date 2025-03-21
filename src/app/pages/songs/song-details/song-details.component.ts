import { Component, inject, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../models/song.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-details',
  standalone: true,
  imports: [],
  templateUrl: './song-details.component.html',
  styleUrl: './song-details.component.scss'
})
export class SongDetailsComponent implements OnInit {
  song?: Song;

  private route = inject(ActivatedRoute);
  private songsService = inject(SongsService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.songsService.get(id).subscribe((song) => {
      this.song = song;
    });
  }
}
