
import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Test } from '../../models/test.entity';
import { Observable } from 'rxjs/Observable';
import { map, take , catchError} from 'rxjs/operators';

@Injectable()
export  class TestService {
    private BASE_URL = 'http://localhost:9090/api/test/findall';

    constructor(private http: Http) {}

  /*  findall(): Observable<Test[]> {

         return this.http.get(this.BASE_URL + 'findall')
         .map((res: any) => {
             return res.json();
         })
         .catch((error: any) => {
             return Observable.throw(new Error(error.status));
            });
    }
*/


findall() {
    return this.http.get(this.BASE_URL)
        .pipe(map((response: Response) => {
            const TestsGot = response.json().obj;


            console.log(TestsGot);

            const obtainedTests: Test[] = [];

        for (const ttest of TestsGot) {
            obtainedTests.push(new Test(ttest.test));
        }

        return obtainedTests;
        }), catchError((err: Response) => observableThrowError(err.json())
        ));

}

}
