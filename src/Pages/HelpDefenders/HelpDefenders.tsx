import { useEffect } from 'react';
import './HelpDefenders.scss';
import { getOrganizationsWithJarInfo } from '../../api/fetchOrganizations';
import type { OrganizationFull } from '../../types/OrganizationsFull/OrganizationsFull';

export const HelpDefenders = () => {
  useEffect(() => {
    getOrganizationsWithJarInfo().then((data) => console.log(data));
  }, []);

  const fakeOrganizations: OrganizationFull[] = [
    {
      id: '1',
      name: 'Battalion HROZA',
      img: 'img/organizations/hroza-logo.png',
      description: 'Support for Battalion HROZA with equipment and gear.',
      goal: 1000000,
      balance: 580000,
      currency: 980,
    },
    {
      id: '2',
      name: '92 Brigade',
      img: 'img/organizations/92-logo.png',
      description: 'Help the 92 Brigade with drones and tactical support.',
      goal: 750000,
      balance: 512300,
      currency: 980,
    },
    {
      id: '3',
      name: 'Serhiy Prytula Foundation',
      img: 'img/organizations/prytyla-found.png',
      description: 'Fund drones and communication systems for defenders.',
      goal: 2000000,
      balance: 1875400,
      currency: 980,
    },
  ];

  return (
    <section className="section-helper">
      <h1>They need help from you!</h1>

      {fakeOrganizations.map((fund) => {
        const percent = Math.min(
          Math.round((fund.balance / fund.goal) * 100),
          100,
        );

        return (
          <div
            key={fund.id}
            className="fund"
          >
            <img
              src={fund.img}
              alt={fund.name}
              className="fund__img"
            />
            <div className="fund__content">
              <h2>{fund.name}</h2>
              <p>{fund.description}</p>
              <p>
                Raised: <strong>{fund.balance.toLocaleString()}₴</strong> /{' '}
                {fund.goal.toLocaleString()}₴ ({percent}%)
              </p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
