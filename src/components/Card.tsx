export default function Card() {
  return (
    <>
      <div className="mx-[20vw]  flex w-fit flex-col items-center justify-center gap-4 rounded-xl border-t-8 border-neutral-700 bg-white px-4 py-6  dark:border-neutral-100 dark:bg-neutral-700  sm:w-[22rem]">
        <h1 className="text-lg font-bold text-black dark:text-white">
          Heading
        </h1>
        <p className="text-sm text-black/80 dark:text-white/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          nostrum odit.
        </p>
        <div className="flex justify-center gap-2">
          <div className="h-5 w-5 rounded-full bg-red-500 dark:bg-red-400"></div>
          <div className="h-5 w-5 rounded-full bg-green-500 dark:bg-green-400"></div>
          <div className="h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
        </div>
      </div>
    </>
  );
}
