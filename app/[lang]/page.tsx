import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "./_components/navbar";
import HeroContent from "./_components/hero-content";
import Stats from "./_components/stats";
import About from "./_components/about";
import Reviews from "./_components/reviews";
import Modalities from "./_components/modalities";
import Facilities from "./_components/facilities";
import KOTeam from "./_components/ko-team";
import Schedule from "./_components/schedule";
import Pricing from "./_components/pricing";
import FAQ from "./_components/faq";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import TrialBar from "./_components/trial-bar";

export default async function GymPage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main className="pb-16 sm:pb-0">
        <HeroContent dict={dict.heroContent} />
        <Stats dict={dict.stats} lang={lang} />
        <About dict={dict.about} />
        <Reviews dict={dict.reviews} />
        <Modalities dict={dict.modalities} />
        <Facilities dict={dict.facilities} />
        <KOTeam dict={dict.koTeam} />
        <Schedule dict={dict.schedule} />
        <Pricing dict={dict.pricing} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
      <TrialBar dict={dict.trialBar} />
    </>
  );
}
