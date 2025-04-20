import { GetServerSideProps } from 'next';
import { SmartPhoneDetailsResponse } from '../../src/domain/projec';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { apiSmartPhone } from '../../src/services/apiSmartPhone';
import { SmartPhoneDetails } from '../../src/views/SmartPhoneDetails';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const path = Array.isArray(context?.params?.id)
    ? context.params.id[0]
    : context?.params?.id ?? '';

  const smartPhoneData = await apiSmartPhone.fetchSmartPhoneDataDetails({
    path,
  });

  const smartPhoneDataResponse = queryClient.setQueryData(
    ['smartphoneData-detail'],
    smartPhoneData
  );

  // Extract only the queries part of the dehydrated state
  const dehydratedState = dehydrate(queryClient);
  const filteredData = dehydratedState.queries.map((query) => query.state.data);

  return {
    props: {
      smartphoneDetail: filteredData[0],
    },
  };
};

const SmartphoneDetails = (data: {
  smartphoneDetail: SmartPhoneDetailsResponse;
}) => {
  console.log(data.smartphoneDetail);
  return <SmartPhoneDetails data={data.smartphoneDetail} />;
};
export default SmartphoneDetails;
