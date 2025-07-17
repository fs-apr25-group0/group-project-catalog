import { useEffect, useState } from 'react';
import './HelpDefenders.scss';
import { getOrganizationsWithJarInfo } from '../../api/fetchOrganizations';
import type { OrganizationFull } from '../../types/OrganizationsFull/OrganizationsFull';
import { useTranslationState } from '../../stateManagers/languageState';
import { useThemeState } from '../../stateManagers/themeState';

export const HelpDefenders = () => {
  const [organizations, setOrganizations] = useState<OrganizationFull[]>([]);
  const { translate } = useTranslationState();
  const { theme } = useThemeState();

  useEffect(() => {
    getOrganizationsWithJarInfo().then((data) => {
      console.log(data);
      setOrganizations(data);
    });
  }, []);

  return (
    <section className={`section-helper section-helper--${theme}`}>
      <h1>{translate('They need help from you!')}</h1>
      {organizations.map((fund) => {
        const raised = Math.floor(fund.balance / 100);
        const goal = Math.floor(fund.goal / 100);
        const percent = Math.min(Math.round((raised / goal) * 100), 100);

        return (
          <div
            key={fund.id}
            className={`fund fund--${theme}`}
          >
            <img
              src={fund.img}
              alt={fund.name}
              className="fund__img"
            />
            <div className="fund__content">
              <h2>{fund.name}</h2>
              <p>{fund.description}</p>
              <div className="fund__stats">
                <p>
                  <strong>Raised:</strong> {raised.toLocaleString()} ₴
                </p>
                <p>
                  <strong>Goal:</strong> {goal.toLocaleString()} ₴
                </p>
                <p>
                  <strong>Progress:</strong> {percent}%
                </p>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <a
                href={`https://send.monobank.ua/jar/${fund.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="donate-button"
              >
                Donate
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};
