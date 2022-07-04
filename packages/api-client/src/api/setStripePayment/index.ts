import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const setStripePayment = async (
  context: Context,
  customQuery?: CustomQuery
) => {
  console.log('setStripePayment called');
  const request = await context.client.mutate({
    mutation: gql`
      mutation {
        createStripePaymentIntent
      }
    `,
    fetchPolicy: NO_CACHE_FETCH_POLICY,
  });
  console.log('request.data: ', request.data);
  return request.data;
};
export default setStripePayment;
