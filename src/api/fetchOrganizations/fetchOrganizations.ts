import type { Organization } from '../../types/organization';
import type { OrganizationFull } from '../../types/OrganizationsFull/OrganizationsFull';

const localAPI = '/api/organizations.json';

const extJarIdAPI = 'http://localhost:4000/mono/extJarId';
const jarInfoAPI = 'https://api.monobank.ua/bank/jar/';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getExtJarId(clientId: string): Promise<string> {
  const body = {
    c: 'hello',
    clientId,
    Pc: 'random',
  };

  const response = await fetch(extJarIdAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to get extJarId for clientId: ${clientId}`);
  }

  const data = await response.json();
  return data.extJarId;
}

async function getJarInfo(extJarId: string) {
  const res = await fetch(`${jarInfoAPI}${extJarId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to get jar info for extJarId: ${extJarId}`);
  }

  return res.json();
}

export const getOrganizationsWithJarInfo = async (): Promise<
  OrganizationFull[]
> => {
  const response = await fetch(localAPI);
  const organizations: Organization[] = await response.json();

  const result: OrganizationFull[] = [];

  for (const organization of organizations) {
    const clientId = organization.id;

    try {
      const extJarId = await getExtJarId(clientId);
      const monoData = await getJarInfo(extJarId);

      result.push({
        ...organization,
        extJarId,
        description: monoData.description,
        goal: monoData.goal,
        balance: monoData.balance ?? monoData.amount ?? 0,
        currency: +monoData.currency,
      });
    } catch (error) {
      console.warn(`Failed to fetch data for ${organization.name}:`, error);
    }

    await delay(100);
  }

  return result;
};
