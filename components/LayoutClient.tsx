"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Crisp } from "crisp-sdk-web";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

const CrispChat = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    if (config?.crisp?.id) {
      Crisp.configure(config.crisp.id);

      if (
        config.crisp.onlyShowOnRoutes &&
        !config.crisp.onlyShowOnRoutes?.includes(pathname)
      ) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    }
  }, [pathname]);

  return null;
};

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <Tooltip
        id="tooltip"
        className="z-[60] !opacity-100 max-w-sm shadow-lg"
      />
      <CrispChat />
    </>
  );
};

export default ClientLayout;