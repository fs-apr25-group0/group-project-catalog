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
    <section>
      <dl>
        {Object.entries(techSpecs).map(([spec, value]) => (
          <div key={spec}>
            <dt>{spec}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
