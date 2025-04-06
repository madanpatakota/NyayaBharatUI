import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testdata } from '../models/testdata.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TestdataService {
    private baseUrl = `${environment.apiUrl}/Testdata`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Testdata[]> {
        console.log("Calling API:", `${environment.apiUrl}/Testdata`);
        return this.http.get<Testdata[]>(this.baseUrl);
    }
}

//Testdata -
//https://localhost:7185/api/Testdata
//https://localhost:7185/api/Testdata
