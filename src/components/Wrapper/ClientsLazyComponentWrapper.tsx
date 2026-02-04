"use client";
import dynamic from "next/dynamic";

const GetStartedDialog = dynamic(() => import("@/components/reusablesComponents/GetStartedDialog/GetStartedDialog"), {
    loading : () => <p>Loading...</p>,
    ssr: false,
});
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics/GoogleAnalytics"), {
  ssr: false,
});

export default function ClientLazyComponentsWrapper() {
  return (
    <>
      <GetStartedDialog />
      <GoogleAnalytics />
   
    </>
  );
}
