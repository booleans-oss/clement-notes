import Image from "next/image";
import Logo from "@/assets/logo-blue.png";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className="bg-sky-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsCollapsed((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={classNames(
                  "h-6 w-6",
                  isCollapsed ? "block" : "hidden"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={classNames(
                  "h-6 w-6",
                  isCollapsed ? "hidden" : "block"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image src={Logo} alt="Clement's Notes" width={100} height={50} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
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
              </div>
            </div>
          </div>

          <button
            className="cursor-pointer items-center justify-center rounded-full bg-blue-900 px-4 py-2 text-sm text-white outline-none transition-colors duration-300 hover:bg-blue-500"
            aria-label="Update dimensions"
          >
            Log in
          </button>
        </div>
      </div>

      <div
        className={classNames(isCollapsed ? "hidden" : "block", "sm:hidden")}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
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
        </div>
      </div>
    </nav>
  );
}
