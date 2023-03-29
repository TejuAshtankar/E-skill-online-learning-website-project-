import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
function _window():any{
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AuthpaymentService {
get nativeWindow():any{
  return _window();
}

constructor(private httpService:HttpClient){}

//end
}
