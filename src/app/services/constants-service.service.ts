import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsServiceService {

  constructor() { }



  public static get_url() { return 'http://localhost:8000/'}
}
