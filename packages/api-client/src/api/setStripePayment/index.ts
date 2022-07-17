import { CustomQuery } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Context } from '../../types';
import { NO_CACHE_FETCH_POLICY } from '../../helpers';

const setStripePayment = async (
  context: Context,
  customQuery?: CustomQuery
) => {
  const request = await context.client.mutate({
    mutation: gql`
      mutation {
        createStripePaymentIntent
      }
    `,
    fetchPolicy: NO_CACHE_FETCH_POLICY,
  });
  return request.data;
};
export default setStripePayment;
