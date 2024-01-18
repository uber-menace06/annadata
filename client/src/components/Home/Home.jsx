import React from "react";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div>
      <div class="bg-black">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="#">
                <span class="sr-only">Annadata</span>
                <img class="h-20" src={logo} alt="" />
              </a>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
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
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="#" class="text-sm font-semibold leading-6 text-white">
                Nearby KIOSKs
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">
                Leaderboard
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">
                FoodCard
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-white">
                Login to Contribute <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Annadata Food Kiosk</span>
                  <img class="h-8 w-auto" src={logo} alt="" />
                </a>
                <button
                  type="button"
                  class="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
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
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Nearby KIOSKs
                    </a>
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Leaderboard
                    </a>
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      FoodCard
                    </a>
                  </div>
                  <div class="py-6">
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Login to Contribute
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next FoodCard distribution.{" "}
                <a href="#" class="font-semibold text-indigo-600">
                  <span class="absolute inset-0" aria-hidden="true"></span>Read
                  more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                A zero hunger initiative
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolorum expedita impedit tempora eaque dignissimos placeat
                quibusdam, voluptas minus consectetur!
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contribute
                </a>
                <a href="#" class="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="container mx-auto flex justify-center mt-8 space-x-8">
          <div class="bg-white rounded-lg shadow-md p-6 w-72">
            <h2 class="text-xl font-semibold mb-4">Contributor</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <img
                  src="contributor-step1.jpg"
                  alt="Step 1"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Sign up for an account.</p>
              </div>
              <div class="flex items-center">
                <img
                  src="contributor-step2.jpg"
                  alt="Step 2"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Find nearby food kiosk and register to donate.</p>
              </div>
              <div class="flex items-center">
                <img
                  src="contributor-step3.jpg"
                  alt="Step 3"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Order the pickup.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 w-72">
            <h2 class="text-xl font-semibold mb-4">Beneficiary</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <img
                  src="beneficiary-step1.jpg"
                  alt="Step 1"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Apply for FoodCard.</p>
              </div>
              <div class="flex items-center">
                <img
                  src="beneficiary-step2.jpg"
                  alt="Step 2"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Verification process.</p>
              </div>
              <div class="flex items-center">
                <img
                  src="beneficiary-step3.jpg"
                  alt="Step 3"
                  class="w-10 h-10 rounded-full mr-4"
                />
                <p>Receive FoodCard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
