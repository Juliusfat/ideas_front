import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../../environments/environment';

const uri = environment.api_graphql;

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [],
    declarations: []
})
export class GraphqlModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink
      ) {
        // create Apollo
        apollo.create({
          link: httpLink.create({ uri }),
          cache: new InMemoryCache(),
        });
      }
}
