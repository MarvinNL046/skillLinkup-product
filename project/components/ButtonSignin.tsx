"use client";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import config from "@/config";

const ButtonSignin = ({
  text = "Get started",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`
      }
    });

    if (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <button
      className={`btn ${extraStyle ? extraStyle : ""}`}
      onClick={handleSignIn}
    >
      {text}
    </button>
  );
};

export default ButtonSignin;