import { Component, OnInit } from '@angular/core';
import {Iword} from '../model/iword';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DictionaryServiceService} from '../servicce/dictionary-service.service';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  iwords: Iword[] | undefined;

  wordForm: FormGroup;
  constructor(private _router: Router,
              private _dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.iwords = this._dictionaryService.iwords;
  }

}
