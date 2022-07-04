<template>
  <div>
    <p>{{ elementsOptions }}</p>
    <stripe-element-payment
      ref="paymentRef"
      :pk="publishableKey"
      :elements-options="elementsOptions"
      :confirm-params="confirmParams"
    />
    <button @click="pay">Pay Now</button>
  </div>
</template>

<script>
import { StripeElementPayment } from '@vue-stripe/vue-stripe';

export default {
  components: {
    StripeElementPayment,
  },
  name: 'Stripe',
  setup(props, context) {
    const publishableKey = context.root.$route.query.publishableKey;
    const elementsOptions = {
      appearance: {}, // appearance options
      clientSecret: context.root.$route.query.stripePaymentIntent,
    };
    const confirmParams = {
      return_url: 'http://localhost:3001/checkout/thank-you',
    };

    return {
      publishableKey,
      elementsOptions,
      confirmParams
    };
  },
  methods: {
    pay () {
      this.$refs.paymentRef.submit();
    },
  },
};
</script>

<style lang="scss" scoped></style>
