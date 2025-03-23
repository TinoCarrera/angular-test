import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-song-add',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './song-add.component.html',
  styleUrl: './song-add.component.scss'
})
export class SongAddComponent {
}
