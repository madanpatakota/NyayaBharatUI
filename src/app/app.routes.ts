import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TestdataComponent } from './features/testdata/testdata.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: TestdataComponent }, // Your default landing page
            // Add more child routes here
        ]
    },
    { path: '**', redirectTo: '' }
];
