import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  constructor(private http: HttpClient) {}

  downloadFile() {
    this.http.get('https://1drv.ms/b/c/ecd2ef8085fecd92/IQQ9TArMrNjdQ5p5i4crOaIRAc6xsBWsr4kX34FBhNvoJKY', { responseType: 'blob' })
    .subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Resume.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
