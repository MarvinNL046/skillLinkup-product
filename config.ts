import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "SkillLinkup",
  // REQUIRED: a short description of your app for SEO tags
  appDescription: "Connect with skilled professionals and grow your network. Find mentors, collaborators, and opportunities to level up your career.",
  // REQUIRED (no https://, not trailing slash at the end, just the naked domain)
  domainName: "skilllinkup.com",
  crisp: {
    // Crisp website ID
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        name: "Basic",
        description: "Perfect for getting started",
        price: 9,
        priceAnchor: 19,
        features: [
          {
            name: "Connect with professionals",
          },
          { name: "Basic profile" },
          { name: "Message credits" },
          { name: "Community access" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        isFeatured: true,
        name: "Pro",
        description: "Best for active networkers",
        price: 29,
        priceAnchor: 49,
        features: [
          {
            name: "Everything in Basic",
          },
          { name: "Advanced profile" },
          { name: "Unlimited messages" },
          { name: "Priority support" },
          { name: "Featured listing" },
          { name: "Analytics dashboard" },
        ],
      },
    ],
  },
  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    subdomain: "mail",
    fromNoReply: `SkillLinkup <noreply@mail.skilllinkup.com>`,
    fromAdmin: `Support at SkillLinkup <support@mail.skilllinkup.com>`,
    supportEmail: "support@skilllinkup.com",
    forwardRepliesTo: "support@skilllinkup.com",
  },
  colors: {
    // The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode)
    theme: "light",
    // This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..)
    main: themes["light"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successful login
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;