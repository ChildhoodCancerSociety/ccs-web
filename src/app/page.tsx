import { SkewGrid } from "@/atoms";

const Home: React.FC = () => (
  <div className="overflow-hidden">
    <SkewGrid />
    <div className="container">
      <div className="grid h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] md:grid-cols-[12px_50%_36px_1fr_36px] md:grid-rows-[10%_1fr_30%]">
        <div className="col-start-2 row-start-2 rounded-md bg-primary-600/10 shadow-md shadow-primary-600/20 ring-1 ring-inset ring-primary-200 backdrop-blur-sm" />
        <div className="col-start-4 row-start-2 self-center">
          <h1
            className="text-2xl font-extrabold text-green-800 md:text-5xl"
            style={{ letterSpacing: "1.4px" }}
          >
            Childhood Cancer Society
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
