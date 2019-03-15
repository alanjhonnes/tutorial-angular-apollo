import { Component, OnInit, Input } from '@angular/core';
import gql from 'graphql-tag';
import { UserComponentFragment } from './__generated__/UserComponentFragment';

export const userComponentFragment = gql`
  fragment UserComponentFragment on User {
    name
  }
`;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserComponentFragment;

  constructor() {}

  ngOnInit() {}
}
