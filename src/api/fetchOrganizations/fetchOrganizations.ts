import type { Organization } from '../../types/organization';
import type { OrganizationFull } from '../../types/OrganizationsFull/OrganizationsFull';

const localAPI = '/api/organizations.json';
const monobankAPI = 'https://send.monobank.ua/api/merchant/jar/';
// https://api.monobank.ua/bank/jar

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getOrganizationsWithJarInfo = async (): Promise<
  OrganizationFull[]
> => {
  const response = await fetch(localAPI);
  const organizations: Organization[] = await response.json();

  const result: OrganizationFull[] = [];

  for (const organization of organizations) {
    const jarId = organization.id;

    try {
      const res = await fetch(`${monobankAPI}${jarId}`);

      const monoData = await res.json();

      result.push({
        ...organization,
        ...monoData,
      });
    } catch (error) {
      console.log(error);
    }

    await delay(1000);
  }

  return result;
};
