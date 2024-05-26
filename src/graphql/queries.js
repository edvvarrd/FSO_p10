import { gql } from '@apollo/client';
import { REPOSITORY_ITEM_BASE, REPOSITORY_REVIEW_BASE } from './fragments';

export const GET_REPOSITORIES = gql`
	${REPOSITORY_ITEM_BASE}
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
			edges {
				node {
					...RepositoryItemBase
				}
				cursor
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
			}
		}
	}
`;

export const ME = gql`
	${REPOSITORY_REVIEW_BASE}
	query Me($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...RepositoryReviewBase
					}
				}
			}
		}
	}
`;

export const GET_REPOSITORY = gql`
	${REPOSITORY_ITEM_BASE}
	${REPOSITORY_REVIEW_BASE}
	query Repository($id: ID!, $first: Int, $after: String) {
		repository(id: $id) {
			...RepositoryItemBase
			url
			reviews(first: $first, after: $after) {
				edges {
					cursor
					node {
						...RepositoryReviewBase
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
`;
