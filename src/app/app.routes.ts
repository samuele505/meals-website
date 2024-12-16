import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchesComponent} from './components/searches/searches.component';
import { SearchComponent } from './components/search/search.component';
import { RandomComponent } from './components/random/random.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'searches', component: SearchesComponent},
    { path: 'meal/search', component: SearchComponent},
    { path: 'meal/random', component: RandomComponent}
];
