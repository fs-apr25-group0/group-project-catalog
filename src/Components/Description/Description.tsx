import { useTranslation } from '../../hooks/useTranslation';
import type { Gadget } from '../../types/gadgets';
import './Description.scss';

interface DescriptionProps {
  gadget: Gadget | null;
}

export const Description: React.FC<DescriptionProps> = ({ gadget }) => {
  const { translate } = useTranslation();

  return (
    <section className="description-block">
      {gadget?.description.map(({ title, text }, index) => (
        <article key={index}>
          <h4 className="description-block__title">
            {translate('titleSection', title)}
          </h4>

          {text.map((paragraph, i) => (
            <p
              className="description-block__text body-text"
              key={i}
            >
              {translate('titleText', paragraph)}
            </p>
          ))}
        </article>
      ))}
    </section>
  );
};
