import Image from "next/image";
import Logo from "@/assets/logo-blue.png";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="z-20 flex w-screen items-center justify-between bg-sky-50 px-28 py-4">
      <Image src={Logo} alt="Clement's Notes" width={100} height={50} />
      <div className="flex gap-4">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm text-gray-700/90 outline-none transition-colors duration-300 hover:bg-blue-700/10"
              aria-label="Update dimensions"
            >
              Use Cases
              <ChevronDownIcon />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="w-[260px] rounded-lg bg-slate-900 p-5 text-sm text-zinc-200"
              sideOffset={10}
            >
              <div className="flex flex-col gap-2.5">
                <div>Revising & Studying</div>
                <div>Tests</div>
                <div>Practicing</div>
                <div>Getting ahead</div>
              </div>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm text-gray-700/90 outline-none transition-colors duration-300 hover:bg-blue-700/10"
          aria-label="Update dimensions"
        >
          Members
        </button>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm text-gray-700/90 outline-none transition-colors duration-300 hover:bg-blue-700/10"
              aria-label="Update dimensions"
            >
              Resources
              <ChevronDownIcon />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="w-[260px] rounded-lg bg-slate-900 p-5 text-sm text-zinc-200"
              sideOffset={10}
            >
              <div className="flex flex-col gap-2.5">
                <div>Finance</div>
                <div>Accounting</div>
                <div>Statistics</div>
                <div>Marketing</div>
              </div>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-900 px-4 text-sm text-white outline-none transition-colors duration-300 hover:bg-blue-500"
          aria-label="Update dimensions"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
