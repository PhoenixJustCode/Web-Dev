import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  loading: boolean = true;
  originalTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum(id);
  }

  fetchAlbum(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.originalTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching album:', err);
        this.loading = false;
      },
    });
  }

  saveTitle(): void {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe({
        next: (updated) => {
          alert('Album title updated successfully (simulated)!');
          this.originalTitle = updated.title;
        },
        error: (err) => {
          console.error('Error updating album:', err);
          alert('Failed to update album.');
        },
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
