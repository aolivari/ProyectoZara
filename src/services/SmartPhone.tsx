import { SmartPhoneData } from '../domain/projec';

interface FetchSmartPhoneData {
  path: string;
}

export const fetchSmartPhoneData = async ({
  path,
}: FetchSmartPhoneData): Promise<SmartPhoneData[]> => {
  const apiURL = new URL(process.env.NEXT_PUBLIC_API_URL ?? '');

  apiURL.pathname = path;

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
