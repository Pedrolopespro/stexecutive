import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://stexecutive.com.br/",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
