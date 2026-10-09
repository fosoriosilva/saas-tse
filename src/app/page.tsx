import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
          <h1 className="text-5xl font-bold text-black dark:text-zinc-50">
            Francisco&apos;s Portfolio
          </h1>
          <Image
            src="/favicon.ico"
            alt="Francisco"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
