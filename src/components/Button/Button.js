import { LoadMoreButton } from './Button.styled';

export const LoadMore = ({ handleLoad }) => {
  return (
    <LoadMoreButton type="button" onClick={handleLoad}>
      Load more
    </LoadMoreButton>
  );
};