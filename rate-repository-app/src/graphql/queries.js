import { gql } from '@apollo/client';
import { REPOSITORY_LIST_ITEM } from './fragments';

export const GET_REPOSITORIES = gql`
	${REPOSITORY_LIST_ITEM}
	query Repositories {
		repositories {
			edges {
				...RepositoryListItem
			}
		}
	}
`;

export const ME = gql`
	query Me {
		me {
			username
			id
		}
	}
`;
