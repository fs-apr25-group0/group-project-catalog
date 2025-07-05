import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Gadget } from '../../types/gadgets';
import { Description } from '../../Components/Description';
import { helperToFindProductsByCategory } from '../../utils/helperToFindProductsByCategory';
import { TechSpecs } from '../../Components/TechSpecs/TechSpecs';

export const ProductInfoPage = () => {
  const { category, itemId } = useParams();
  const [loading, setLoading] = useState(true);
  const [gadget, setGadget] = useState<Gadget | null>(null);

  useEffect(() => {
    if (!category || !itemId) {
      setLoading(false);
      return;
    }

    helperToFindProductsByCategory(category)
      .then((gadgets) => {
        const foundGadget = gadgets.find((gadget) => gadget.id === itemId);
        setGadget(foundGadget ?? null);
      })
      .finally(() => setLoading(false));
  }, [category, itemId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to="../">Back</Link>

      <h1>{`${gadget?.name}`}</h1>

      <div>
        <h2 style={{ color: 'green' }}>HERE MUST BE PICTURE BLOCK</h2>
      </div>

      <div>
        <div>
          <h2>About</h2>

          <Description gadget={gadget} />
        </div>

        <div>
          <h2>Tech specs</h2>
          <TechSpecs gadget={gadget} />
        </div>
      </div>

      <h2 style={{ color: 'red' }}>
        Here must be list with (You may also like)
      </h2>
    </>
  );
};
