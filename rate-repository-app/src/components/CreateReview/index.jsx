import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewForm from '../CreateReview/CreateReviewForm';
import { useNavigate } from 'react-router-native';

const CreateReview = () => {
	const [createReview] = useCreateReview();

	const onSubmit = async data => {
		const { ownerName, repositoryName, rating, text } = data;

		try {
			await createReview({ ownerName, repositoryName, rating: parseInt(rating), text });
		} catch (e) {
			console.error(e.message);
		}
	};
	return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
