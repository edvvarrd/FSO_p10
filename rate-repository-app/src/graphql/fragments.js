import { gql } from '@apollo/client';

export const REPOSITORY_LIST_ITEM = gql`
	fragment RepositoryListItem on RepositoryEdge {
		node {
			description
			fullName
			id
			language
			ownerAvatarUrl
			forksCount
			ratingAverage
			reviewCount
			stargazersCount
		}
	}
`;
