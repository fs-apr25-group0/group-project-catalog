import cn from 'classnames';
import { getNumbers } from '../../utils/paginationHelper';
import type { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  amountProduct: number;
  perPage: number;
  currentPage: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  amountProduct,
  perPage,
  currentPage,
  onPageChange,
}) => {
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
      <li className={cn('page-item', { disabled: currentPage === 1 })}>
        <a
          href="#"
          aria-disabled={currentPage === 1}
          onClick={handlePageBefore}
        >
          «
        </a>
      </li>
      {getNumbers(1, pageAmount).map((pageLink) => (
        <li key={pageLink}>
          <a
            href="#"
            onClick={handlePageClick(pageLink)}
          >
            {pageLink}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={handlePageNext}
        >
          »
        </a>
      </li>
    </ul>
  );
};
