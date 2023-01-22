import Head from "next/head";
import TabbedPage from "../structure/tabbed-page";

const AboutPageOld: React.FC = function FC() {
  return (
    <>
      <Head>
        <title />
      </Head>
      <main>
        <div>
          test 1
        </div>
      </main>
    </>
  );
};

const AboutPageNew: React.FC = function FC() {
  return (
    <>
      <Head>
        <title />
      </Head>
      <main>
        <div>
          test 2
        </div>
      </main>
    </>
  );
};

const AboutPage: React.FC = function FC() {
  return (<TabbedPage components={[{ name: "Old", Component: AboutPageOld }, { name: "New", Component: AboutPageNew }]} />);
};

export default AboutPage;
