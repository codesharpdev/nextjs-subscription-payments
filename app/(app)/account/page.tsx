'use client';
import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import {
  createServerSupabaseClient,
  User
} from '@supabase/auth-helpers-nextjs';

import LoadingDots from '@/components/ui/LoadingDots';
import { Button } from '@/components/ui/button';
import { useUser } from '@/utils/useUser';
import { postData } from '@/utils/helpers';
import { HeroTitle } from '@/components/hero-titile';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="border border-zinc-100 bg-white	max-w-3xl w-full p rounded-md m-auto my-8 shadow-md">
      <div className="px-5 py-4">
        <h3 className="text-2xl mb-1 font-medium text-zinc-700">{title}</h3>
        <p className="text-zinc-500">{description}</p>
        {children}
      </div>
      <div className="border-t border-zinc-100 bg-zinc-50 p-4 text-zinc-500 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}

export const generateStaticParams = async (ctx: any) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};

export default function Account({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return ( 
    <section className="mb-32">
    <HeroTitle title='Account' description='We partnered with Stripe for a simplified billing.' />
      <div className="p-4">
        <Card
          title="Your Plan"
          description={
            subscription
              ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
              : ''
          }
          footer={
            <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center">
              <p className="pb-4 sm:pb-0">
                Manage your subscription on Stripe.
              </p>
              <Button
                variant="default"
                loading={loading}
                disabled={loading || !subscription}
                onClick={redirectToCustomerPortal}
              >
                Open customer portal
              </Button>
            </div>
          }
        >
          <div className="text-xl mt-8 mb-4 font-semibold ">
            {isLoading ? (
              <div className="h-12 mb-6">
                <LoadingDots />
              </div>
            ) : subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Link href="/">Choose your plan</Link>
            )}
          </div>
        </Card>
        <Card
          title="Your Name"
          description="Please enter your full name, or a display name you are comfortable with."
          footer={<p>Please use 64 characters at maximum.</p>}
        >
          <div className="text-xl mt-8 mb-4 font-semibold ">
            {userDetails ? (
              `${
                userDetails.full_name ??
                `${userDetails.first_name} ${userDetails.last_name}`
              }`
            ) : (
              <div className="h-8 mb-6">
                <LoadingDots />
              </div>
            )}
          </div>
        </Card>
        <Card
          title="Your Email"
          description="Please enter the email address you want to use to login."
          footer={<p>We will email you to verify the change.</p>}
        >
          <p className="text-xl mt-8 mb-4 font-semibold ">
            {user ? user.email : undefined}
          </p>
        </Card>
      </div>
    </section>
  );
}