"use server";

import { appendOrdinalSuffix } from "@/ui/converters";
import { getVisits, loadProducts } from "./actions";

async function getData() {
  return {
    visits: await getVisits(),
  };
}

export default async function Home() {
  const { visits } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Visits */}
      <section className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          This is your&nbsp;
          <code className="font-bold">{appendOrdinalSuffix(visits)}&nbsp;</code>
          visit.&nbsp;
          <a
            href="https://redis.io/learn/develop/node/nodecrashcourse/sessionstorage?utm_source=redis-node-starter&utm_campaign=redis-node-starter"
            className="group px-2 transition-colors text-[#DCFF1E] rounded-[5px] text-sm active:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            See how we know{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
        </p>
      </section>
      {/* /Visits */}

      {/* Welcome */}
      <section className="flex w-full flex-col gap-6 pt-5 md:gap-0 font-mono">
        <div className="mb-8 px-0">
          <h1 className="capitalize text-6xl text-center">Welcome</h1>
          <p className="text-xl text-center">
            Get started with Redis and Node.js in seconds
          </p>
          <p className="text-center mt-2">
            To get started, see the Redis code in&nbsp;
            <code className="font-mono font-bold">src/lib/redis</code>
          </p>
        </div>
      </section>
      {/* /Welcome */}

      {/* Sample Data */}
      <section className="py-12 contain-layout">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="mx-auto flex w-100 flex-col items-center gap-8 text-center">
            <h2 className="capitalize text-5xl font-sans text-display-xs sm:text-display-lg text-white">
              Try some sample data
            </h2>
            <p className="text-xl text-center font-mono">
              Click a button to load sample data, then open{" "}
              <a
                href="https://redis.io/insight?utm_source=redis-node-starter&utm_campaign=redis-node-starter#insight-form"
                className="text-[#DCFF1E] active:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redis Insight
              </a>{" "}
              to view the data
            </p>
            <div className="grid lg:grid-cols-4">
              <form action={loadProducts} className="px-2 py-4">
                <button className="inline-flex items-center justify-center gap-2 text-center transition-colors w-full h-11 whitespace-nowrap font-normal font-mono bg-[#DCFF1E] text-[#091A23] rounded-[5px] border border-[#5C707A] px-8 py-[14px] text-sm active:bg-[#163341] active:text-white sm:w-fit">
                  Load products
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* /Sample Data */}

      {/* Resources */}
      <section className="py-12 contain-layout">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="mx-auto flex w-100 flex-col items-center gap-8 text-center">
            <h2 className="capitalize text-5xl font-sans text-display-xs sm:text-display-lg text-white">
              Learn More
            </h2>
            <p className="text-xl text-center font-mono">
              Click on the links below to learn about Redis
            </p>

            <div className="pt-10 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left font-mono">
              <a
                href="https://redis.io/docs/latest?utm_source=redis-node-starter&utm_campaign=redis-node-starter"
                className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-[#DCFF1E] active:text-white mb-3 text-2xl">
                  Docs{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn about Redis products, features, and commands.
                </p>
              </a>

              <a
                href="https://redis.io/learn?utm_source=redis-node-starter&utm_campaign=redis-node-starter"
                className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-[#DCFF1E] active:text-white mb-3 text-2xl">
                  Learn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Read tutorials, quick starts, and how-to guides for Redis.
                </p>
              </a>

              <a
                href="https://redis.io/demo-center?utm_source=redis-node-starter&utm_campaign=redis-node-starter"
                className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-[#DCFF1E] active:text-white mb-3 text-2xl">
                  Demo Center{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Watch short, technical videos about Redis products and
                  features.
                </p>
              </a>

              <a
                href="https://redis.io/insight?utm_source=redis-node-starter&utm_campaign=redis-node-starter#insight-form"
                className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-[#DCFF1E] active:text-white mb-3 text-2xl">
                  Redis Insight{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  Query and visualize Redis data, perform bulk operations,
                  monitor performance, and troubleshoot performance issues.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* /Resources */}

      {/* Try Free */}
      <section className="py-12 contain-layout">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="mx-auto flex w-100 flex-col items-center gap-8 text-center">
            <h2 className="capitalize text-5xl font-sans text-display-xs sm:text-display-lg text-white">
              Build with Redis Cloud
            </h2>
            <p className="text-[26px] font-sans text-white"></p>
            <a
              className="inline-flex items-center justify-center gap-2 text-center transition-colors w-full h-11 whitespace-nowrap font-normal font-mono bg-[#DCFF1E] text-[#091A23] rounded-[5px] border border-[#5C707A] px-8 py-[14px] text-sm active:bg-[#163341] active:text-white sm:w-fit"
              rel="noreferrer noopener"
              target="_blank"
              href="https://redis.io/try-free/"
            >
              Try for free
            </a>
          </div>
        </div>
      </section>
      {/* /Try Free */}
    </main>
  );
}
