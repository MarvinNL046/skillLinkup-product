import { Metadata } from "next";
import { getSEOTags } from "@/libs/seo";

export const metadata: Metadata = getSEOTags({
  title: "Verify Email",
  canonicalUrlRelative: "/auth/verify"
});

export default function VerifyRequest() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-8 text-center">
        <div>
          <h1 className="text-2xl font-bold">Check your email</h1>
          <p className="text-base-content/60 mt-2">
            A sign in link has been sent to your email address.
          </p>
        </div>
      </div>
    </main>
  );
}