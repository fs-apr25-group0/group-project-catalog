import { Link } from 'react-router-dom';
import './UrlWay.scss';
import cn from 'classnames';

interface UrlWayProps {
  category: string | undefined;
  itemId?: string;
}

export const UrlWay: React.FC<UrlWayProps> = ({ category, itemId }) => {
  return (
    <div className="url-way">
      <Link to={'/'}>
        <div className="url-way__icon-home"></div>
      </Link>
      <div className="url-way__icon-arrow"></div>
      {itemId ?
        <Link
          to={'..'}
          className={cn('small-text')}
        >
          {category}
        </Link>
      : <Link
          to={'.'}
          className={cn('small-text', 'title-grey')}
        >
          {category}
        </Link>
      }

      {itemId && (
        <>
          <div className="url-way__icon-arrow"></div>
          <span className="small-text title-grey">{itemId}</span>
        </>
      )}
    </div>
  );
};
