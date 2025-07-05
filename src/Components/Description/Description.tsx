import type { Gadget } from '../../types/gadgets';

interface DescriptionProps {
  gadget: Gadget | null;
}

export const Description: React.FC<DescriptionProps> = ({ gadget }) => {
  return (
    <div>
      {gadget?.description.map(({ title, text }, index) => (
        <div key={index}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};
