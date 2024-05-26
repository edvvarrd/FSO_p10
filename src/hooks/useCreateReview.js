import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const useCreateReview = () => {
	const client = useApolloClient();
	const navigate = useNavigate();
	const [mutate, result] = useMutation(CREATE_REVIEW, {
		onCompleted: data => {
			client.resetStore();
			navigate(`/repository/${data.createReview.repositoryId}`);
		},
	});

	const createReview = async ({ ownerName, repositoryName, rating, text }) => {
		const result = await mutate({ variables: { review: { ownerName, repositoryName, rating, text } } });
		return result;
	};

	return [createReview, result];
};

export default useCreateReview;
