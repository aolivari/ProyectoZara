import { SmartPhoneData } from '../domain/projec';

interface FetchSmartPhoneData {
  path: string;
  search: string | undefined;
}

export const fetchSmartPhoneData = async ({
  path,
  search,
}: FetchSmartPhoneData): Promise<SmartPhoneData[]> => {
  const apiURL = new URL(process.env.NEXT_PUBLIC_API_URL ?? '');

  apiURL.pathname = path;
  apiURL.searchParams.set('limit', '20'); // Limitar a 20 resultados por defecto
  if (search !== undefined) {
    apiURL.searchParams.set('search', search);
  }
  try {
    const response = await fetch(apiURL.href, {
      // Cambiado para usar directamente NEXT_PUBLIC_API_URL
      headers: {
        accept: 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY as string, // Reemplaza con tu token si es necesario
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
