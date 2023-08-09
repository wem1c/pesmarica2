import Skeleton from "../components/Skeleton";
import Alert from "../components/Alert";

const FetchingStates = ({
	queryResult,
	queryData,
	skeletonLength,
	variantLatest,
}) => {
	if (queryResult.isLoading || queryResult.isRefetching) {
		return <Skeleton length={skeletonLength} variantLatest={variantLatest} />;
	}

	if (queryResult.isError) {
		return <Alert variant="error" message={queryResult.error.message} />;
	}

	if (queryResult.isSuccess && !queryResult.isRefetching && !queryData.length) {
		return <Alert variant="info" message="Sorry, no results found." />;
	}

	return null;
};

export default FetchingStates;
