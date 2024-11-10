import Link from "next/link";
import { Metadata } from "next";
import { getSEOTags } from "@/libs/seo";

export const metadata: Metadata = getSEOTags({
  title: "Authentication Error",
  canonicalUrlRelative: "/auth/error"
});

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-8 text-center">
        <div>
          <h1 className="text-2xl font-bold">Authentication Error</h1>
          <p className="text-base-content/60 mt-2">
            There was an error signing you in.
          </p>
        </div>

        <Link href="/auth/signin" className="btn btn-primary w-full">
          Try Again
        </Link>
      </div>
    </main>
  );
}