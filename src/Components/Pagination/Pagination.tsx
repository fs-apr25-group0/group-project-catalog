import './Pagination.scss';
import cn from 'classnames';
import { getNumbers } from '../../utils/paginationHelper';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { useThemeState } from '../../stateManagers/themeState';

interface PaginationProps {
  amountProduct: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  amountProduct,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const { theme } = useThemeState();
  const pageAmount = Math.ceil(amountProduct / perPage);

  const handlePageClick = (page: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    onPageChange(page);
  };

  const handlePageBefore = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageNext = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentPage < pageAmount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <ButtonArrow
          direction="left"
          onClick={handlePageBefore}
          disabled={currentPage === 1}
        />
      </li>

      {getNumbers(1, pageAmount).map((pageLink) => (
        <li
          key={pageLink}
          className="pagination__item"
        >
          <button
            className={cn(
              'pagination__number',
              `pagination__number--${theme}`,
              {
                [`pagination__number--active--${theme}`]:
                  currentPage === pageLink,
              },
            )}
            onClick={handlePageClick(pageLink)}
          >
            {pageLink}
          </button>
        </li>
      ))}

      <li className="pagination__item">
        <ButtonArrow
          direction="right"
          onClick={handlePageNext}
          disabled={currentPage === pageAmount}
        />
      </li>
    </ul>
  );
};
