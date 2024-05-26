import { gql } from '@apollo/client';

export const REPOSITORY_ITEM_BASE = gql`
	fragment RepositoryItemBase on Repository {
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
`;

export const REPOSITORY_REVIEW_BASE = gql`
	fragment RepositoryReviewBase on Review {
		id
		text
		rating
		createdAt
		user {
			id
			username
		}
		repositoryId
	}
`;
