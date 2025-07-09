import { Link } from 'react-router-dom';
import './LinkBack.scss';
import { useTranslation } from '../../hooks/useTranslation';

export const LinkBack = () => {
  const { translate } = useTranslation();

  return (
    <div className="url-back">
      <div className="url-back__icon-arrow"></div>
      <Link
        to="../"
        className="small-text title-grey"
      >
        {translate('common', 'Back')}
      </Link>
    </div>
  );
};
