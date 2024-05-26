import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useDeleteReview = () => {
	const client = useApolloClient();
	const [mutate] = useMutation(DELETE_REVIEW, { onCompleted: () => client.resetStore() });

	const deleteReview = async ({ deleteReviewId }) => {
		await mutate({ variables: { deleteReviewId } });
	};

	return [deleteReview];
};

export default useDeleteReview;
