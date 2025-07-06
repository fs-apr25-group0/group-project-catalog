import type { Gadget } from '../../types/gadgets';
import { helperToCreateTechSpecs } from '../../utils/helperToCreateTechSpecs';

interface TechSpecsProps {
  gadget: Gadget | null;
}

export const TechSpecs: React.FC<TechSpecsProps> = ({ gadget }) => {
  if (!gadget) {
    return null;
  }

  const techSpecs = helperToCreateTechSpecs(gadget);

  return (
    <>
      {Object.entries(techSpecs).map(([spec, value]) => (
        <div key={spec}>
          <span>{spec}</span>
          <span>{value}</span>
        </div>
      ))}
    </>
  );
};
