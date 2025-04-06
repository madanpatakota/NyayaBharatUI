import { Routes } from '@angular/router';
import { TestdataComponent } from './features/testdata/testdata.component';

export const routes: Routes = [
    { path: '', component: TestdataComponent },
    { path: '**', redirectTo: '' }
];
