import { Component, OnInit } from '@angular/core';
import { CardService } from '@stt-nx-workspace/stt-common';

interface PostCardResult {
  succeed: boolean;
  error: string;
  cardCode: string;
}

@Component({
  selector: 'stt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  uploadText = 'Upload file';
  uploading = false;
  results: PostCardResult[];

  constructor(private cardService: CardService) {}

  ngOnInit() {}

  onFileChanged(event) {
    this.uploadText = 'PLEASE WAIT...';
    this.uploading = true;
    const selectedFile: File = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);

    const upload = this.cardService.bulkInsert(uploadData);

    upload.subscribe((response: any) => {
      if (response.body) {
        this.uploadText = 'Done';
        if (response.body) {
          this.results = <PostCardResult[]>response.body;
        }
      } else {
        console.log(response);
      }
    });
  }
}
