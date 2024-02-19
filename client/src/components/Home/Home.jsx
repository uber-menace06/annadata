import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-46">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-yellow-100 ring-1 ring-white/20 hover:ring-white/30">
              Announcing our next FoodCard distribution.{" "}
              <Link to="/" class="font-semibold text-green-200">
                <span class="absolute inset-0" aria-hidden="true"></span>Read
                more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-yellow-100 sm:text-6xl">
              A zero hunger initiative
            </h1>
            <p class="mt-6 text-lg leading-7 text-green-600">
              Every Contribution Nourishes Tomorrow
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                class="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-100 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contribute
              </Link>
              <Link
                to="/learnmore"
                class="text-sm font-semibold leading-6 text-yellow-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
