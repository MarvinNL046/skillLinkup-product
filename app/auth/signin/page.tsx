import { Metadata } from "next";
import { getSEOTags } from "@/libs/seo";
import ButtonSignin from "@/components/ButtonSignin";

export const metadata: Metadata = getSEOTags({
  title: "Sign In",
  canonicalUrlRelative: "/auth/signin"
});

export default function SignIn() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-8 text-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-base-content/60 mt-2">
            Sign in to access your account
          </p>
        </div>

        <ButtonSignin text="Sign in with Google" extraStyle="w-full" />
      </div>
    </main>
  );
}