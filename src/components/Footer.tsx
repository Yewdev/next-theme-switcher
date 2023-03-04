import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Coded by */}
      <div className="group absolute  bottom-0 flex items-end gap-1 rounded-t-xl bg-black/50 py-3 px-6 text-sm tracking-wide text-white/70  duration-1000 hover:bg-black hover:text-white hover:shadow-[0_0_30px_0px_#6bffe6] lg:px-8 lg:py-4">
        <span className="border-b border-transparent text-xs duration-500 lg:text-sm">
          Coded by
        </span>
        <Link
          className="border-b border-transparent text-xs font-bold duration-500 hover:border-[#6bffe6] group-hover:text-[#6bffe6] lg:text-sm"
          target={"_blank"}
          href={"https://github.com/Yewdev"}
        >
          Yewdev
        </Link>
      </div>
    </>
  );
}
