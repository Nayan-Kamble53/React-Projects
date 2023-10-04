import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full bg-slate-600 h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className="bg-slate-900 text-white rounded-lg uppercase w-11/12 text-center mt-[30px] ml-[15px] py-2 px-10 text-4xl font-bold ">
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
