import { useTranslation } from '../../hooks/useTranslation';
import type { Gadget } from '../../types/gadgets';

interface DescriptionProps {
  gadget: Gadget | null;
}

export const Description: React.FC<DescriptionProps> = ({ gadget }) => {
  const { translate } = useTranslation();

  return (
    <section>
      {gadget?.description.map(({ title, text }, index) => (
        <article key={index}>
          <h2>{translate('titleSection', title)}</h2>

          {text.map((paragraph, i) => (
            <p key={i}>{translate('titleText', paragraph)}</p>
          ))}
        </article>
      ))}
    </section>
  );
};
