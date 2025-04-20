import { SmartPhoneData, SmartPhoneDetailsResponse } from '../domain/projec';

interface FetchSmartPhoneData {
  path: string;
  search?: string | undefined;
}

const baseUrl = new URL(process.env.NEXT_PUBLIC_API_URL ?? '');
const token = process.env.NEXT_PUBLIC_API_KEY as string;

export const apiSmartPhone = {
  fetchSmartPhoneDataList: async ({
    path,
    search,
  }: FetchSmartPhoneData): Promise<SmartPhoneData[]> => {
    baseUrl.pathname = path;
    baseUrl.searchParams.set('limit', '20'); // Limit to 20 results by default

    if (search !== undefined) {
      baseUrl.searchParams.set('search', search);
    }
    try {
      const response = await fetch(baseUrl.href, {
        headers: {
          accept: 'application/json',
          'x-api-key': token,
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchSmartPhoneDataDetails: async ({
    path,
  }: FetchSmartPhoneData): Promise<SmartPhoneDetailsResponse> => {
    baseUrl.pathname = `products/${path}`;

    try {
      const response = await fetch(baseUrl.href, {
        headers: {
          accept: 'application/json',
          'x-api-key': token,
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  },
};
