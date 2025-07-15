import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletonProductCard.scss';

export const SkeletonProductCard = () => {
  return (
    <div className="skeletonCard">
      <Skeleton
        height={196}
        width={208}
      />

      <Skeleton
        width={208}
        height={20}
        count={2}
      />
      <Skeleton
        width={208}
        height={35}
      />

      <hr className="skeletonCard__divider" />

      <Skeleton
        height={10}
        width={208}
        count={3}
      />

      <div className="skeletonCard__button">
        <Skeleton
          height={40}
          width={160}
          style={{ borderRadius: 48 }}
        />
        <Skeleton
          height={40}
          width={40}
          style={{ borderRadius: 48 }}
        />
      </div>
    </div>
  );
};
