import { Component } from '@angular/core';
import gql from 'graphql-tag';
import { userComponentFragment } from './user/user.component';
import { Apollo } from 'apollo-angular';
import {
  AppComponentQuery_users,
  AppComponentQuery
} from './__generated__/AppComponentQuery';

export const AppComponentGQL = gql`
  query AppComponentQuery {
    users {
      ...UserComponentFragment
    }
  }
  ${userComponentFragment}
`;

export const AddUserMutation = gql`
  mutation AddUser($name: String!) {
    addUser(name: $name) {
      name
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  private users: AppComponentQuery_users[] = [];

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery<AppComponentQuery>({
        query: AppComponentGQL
      })
      .valueChanges.subscribe(result => {
        this.users = result.data.users;
      });
  }
}
