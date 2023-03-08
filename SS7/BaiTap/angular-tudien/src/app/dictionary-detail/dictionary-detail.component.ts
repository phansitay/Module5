import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DictionaryServiceService} from '../servicce/dictionary-service.service';
import {Iword} from '../model/iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  iwords: Iword[] | undefined;
  constructor(private _router: Router,
              private _dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.iwords=this._dictionaryService.iwords;
  }

}
