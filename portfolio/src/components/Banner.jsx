import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-8">
      <div class="rounded-lg  bg-[#191615] text-card-[#212124] shadow-sm">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="text-2xl font-semibold leading-none tracking-tight">
            Empower your Web Dev Journey
          </h3>
          <p class="text-sm text-[#a1a1a1]">
            Join my page where developers getting tips, strategies, and resources that
            would help you succeed in your web dev journey.
          </p>
        </div>
        <div class="flex items-center p-6 pt-0">
          <Link to='https://x.com/emessCodes' className="flex  xs:flex-row gap-2 w-full">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#1D6CE1] text-primary-foreground hover:bg-[#1D6CE1]/90 h-10 px-4 py-2 xl:w-full">
             X(formerly Twitter) Join @emesscode
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
