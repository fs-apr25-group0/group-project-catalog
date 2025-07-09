import { Link } from 'react-router-dom';
import './LinkBack.scss';

export const LinkBack = () => {
  return (
    <div className="url-back">
      <div className="url-back__icon-arrow"></div>
      <Link
        to="../"
        className="small-text title-grey"
      >
        Back
      </Link>
    </div>
  );
};
