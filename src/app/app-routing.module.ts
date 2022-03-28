import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { HomeComponent } from './home/home.component';
import { MagasinComponent } from './magasin/magasin.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { NewCathegorieComponent } from './new-cathegorie/new-cathegorie.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children:[
      { path: '', redirectTo: 'article-list', pathMatch: 'full' },
      {
        path: 'article-list', // child route path
        component: ArticleListComponent, // child route component that the router renders
      },
      {
        path: 'new-article',
        component: NewArticleComponent
      },
      {
        path: 'new-cathegorie',
        component: NewCathegorieComponent
      }
    ]
 },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'magasin', component: MagasinComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'entreprises', component: EntreprisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
