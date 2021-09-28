/* eslint-disable @typescript-eslint/no-unused-vars */
import { Context } from '@vue-storefront/core';
import { PaymentProvider } from '@vue-storefront/odoo-api/src/types';
import { usePaymentFactory, UsePaymentFactoryParams} from '../../factories/usePaymentFactory';

const factoryParams: UsePaymentFactoryParams<PaymentProvider, any> = {
  getPaymentProviderList: async (context: Context): Promise<PaymentProvider[]> => {

    const { paymentAcquirers }: { paymentAcquirers: PaymentProvider[] } = await context.$odoo.api.paymentLoadProviders();

    return paymentAcquirers;
  }
};

export default usePaymentFactory<PaymentProvider>(factoryParams);