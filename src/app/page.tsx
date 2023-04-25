const swag = "[repeat(23,minmax(0,1fr))]";
const Home: React.FC = () => (
  <>
    <div
      className={`grid grid-cols-6 grid-rows-${swag} -skew-y-[12deg] absolute -top-20 left-0 right-0 bottom-0 bg-green-200 -z-10`}
    >
      <div className="bg-green-950" />
      <div className="row-start-6 col-start-5 bg-green-300 scale-110 rounded-sm" />
      <div className="row-start-4 col-start-3 bg-green-600 scale-75 rounded-sm" />
      <div className="rounded-sm row-start-7 col-start-1 translate-x-5 bg-green-400" />
      <div className="rounded-sm row-start-[10] col-start-4 bg-green-100 scale-x-150" />
      <div className="rounded-sm row-start-[16] col-start-3 bg-green-800" />
      <div className="rounded-sm row-start-[17] col-start-6 bg-green-700 scale-x-75" />
      <div className="rounded-sm row-start-[21] col-span-full bg-green-100/60" />
      <div className="rounded-sm row-start-[22] col-span-full bg-green-50/60" />
      <div className="rounded-sm row-start-[23] col-span-full bg-green-50/80" />
    </div>
    <div className="container">
      <div className="grid h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] md:grid-rows-[10%_1fr_30%] md:grid-cols-[12px_50%_24px_1fr_12px]">
        <div className="row-start-2 col-start-2 bg-green-600/10 backdrop-blur-sm ring-1 ring-inset ring-green-200 rounded-md shadow-md shadow-green-600/20" />
      </div>
    </div>
  </>
);

export default Home;
