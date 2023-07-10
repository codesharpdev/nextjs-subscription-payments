import { GetStaticPropsResult } from 'next';

import Pricing from '@/components/Pricing';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { Product } from '@/types';

interface Props {
  products: Product[];
}

export default async function PricingPage() {
  const products = await getActiveProductsWithPrices();
  revalidate: 60;
  return <Pricing products={products} />;
}
