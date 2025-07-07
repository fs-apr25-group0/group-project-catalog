import { Link } from 'react-router-dom';

interface UrlWayProps {
  category: string | undefined;
  itemId?: string;
}

export const UrlWay: React.FC<UrlWayProps> = ({ category, itemId }) => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'.'}>{category}</Link>
      {itemId && <span>{itemId}</span>}
    </div>
  );
};
