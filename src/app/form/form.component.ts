import { Component, OnInit } from '@angular/core';
import { ListYoutubeService } from '../list-youtube.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  termoDeBusca: string;

  constructor(private youtubeAPI: ListYoutubeService) { }

  ngOnInit() {
  }

  buscaTermo() {
    
    this.youtubeAPI.getToken().subscribe(
      data => {
        console.log('Retorno da API: ', data);
      },
      err => {
        console.log(err);
        alert('Deu erro!')
      }
    );

    /*
    this.youtubeAPI.getYoutube(this.termoDeBusca).subscribe(
      data => {
        console.log('Retorno da API: ', data);
      },
      err => {
        console.log(err);
        alert('Deu erro!')
      }
    );
    */

  }

}
