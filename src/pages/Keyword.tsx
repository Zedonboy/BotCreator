import InfoCards from "../components/InfoCards";

function KeywordFullPage() {
  return (
    <div className="flex flex-col items-center px-2 py-8 md:py-32 md:px-16">
      <section className="w-1/2 mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </section>
    </div>
  );
}

function KeywordSubPage() {
  return (
      <section className="w-full mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <InfoCards desc="Organic Keyword"/>
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </section>
  );
}

export { KeywordFullPage, KeywordSubPage };
