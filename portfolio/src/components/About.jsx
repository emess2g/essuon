import React from "react";
import img from "../assets/img.jpg";
import vertifiedBadge from "../assets/verified-badge.webp";

const About = () => {
  return (
    <section className="mt-8 flex flex-col gap-2 ">
      <div className="">
        <img
          className="shrink-0 w-[20%] rounded-[50%] xs:w-[10%]"
          src={img}
          alt=""
        />
      </div>

      <article className="flex flex-col gap-4 t text-muted-foreground text-md">
        <p className=" xs:text-white/85 font-semibold">
          Hey, <span className="font-semibold text-[#1a58b7]">Essuon</span>{" "}
          Here! 👋
          <br />
          I'm a Front-end Developer and I Create Web Development Content.
        </p>
        <p className="text-[#a1a1a1]">
          I help aspiring developers succeed in their web dev journey by sharing
          useful stuffs and lessons from my own experience.
        </p>

        <p className="text-[#a1a1a1]">
          I'm specialized in creating high quality websites and webapps that are
          not just visually appealing but also gives an awesome user experience.
        </p>

        <p className="text-[#a1a1a1]">
          Let's chat! Hit me up on the form below or in any of my socials.
        </p>
      </article>

      <div className="  mt-8 justify-center items-center  flex flex-col ">
        <form
          action="https://formbase.dev/s/dBB2b3ZULGWVSV8"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col items-center gap-4 justify-center w-full"
        >
          <div className="flex flex-col gap-4 items-cente justify-cente w-full">
            <div className="flex gap-6  xl:flex flex-col">
              <div class="space-y-2 flex-1">
                <div class="relative z-0">
                  <input
                    id=":R3llsla:-form-item"
                    class="block py-2.5 px-0 w-full text-sm text-white/90 bg-transparent border-0 border-b border-input appearance-none focus:outline-none focus:ring-0 focus:border-[#1A58B8] peer"
                    placeholder=""
                    aria-describedby=":R3llsla:-form-item-description"
                    aria-invalid="false"
                    name="name"
                    value=""
                    data-has-listeners="true"
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-muted-[#a1a1a1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1A58B8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Name
                  </label>
                </div>
              </div>

              <div class="space-y-2 flex-1">
                <div class="relative z-0">
                  <input
                    id=":R3llsla:-form-item"
                    className="block py-2.5 px-0 w-full text-sm text-white/90 bg-transparent border-0 border-b border-input appearance-none focus:outline-none focus:ring-0 focus:border-[#1A58B8] peer"
                    placeholder=""
                    aria-describedby=":R3llsla:-form-item-description"
                    aria-invalid="false"
                    name="name"
                    value=""
                    data-has-listeners="true"
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1A58B8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div class="space-y-2 flex-1">
                <div class="relative z-0">
                  <input
                    id=":R3llsla:-form-item"
                    class="block py-2.5 px-0 w-full text-sm text-white/90 bg-transparent border-0 border-b border-input appearance-none focus:outline-none focus:ring-0 focus:border-[#1A58B8] peer"
                    placeholder=""
                    aria-describedby=":R3llsla:-form-item-description"
                    aria-invalid="false"
                    name="name"
                    value=""
                    data-has-listeners="true"
                  />
                  <label
                    for="floating_standard"
                    class="absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1A58B8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Subject
                  </label>
                </div>
              </div>

              <div class="space-y-2 basis-full"><div class="relative z-0"><textarea id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-white/90 bg-transparent border-0 border-b border-input appearance-none focus:outline-none focus:ring-0 focus:border-[#1A58B8] peer resize-none h-40" name="message" placeholder="" data-has-listeners="true"></textarea><label for="floating_standard" class="absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1A58B8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Type your message here.</label></div></div>

              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#212121] text-secondary-foreground hover:bg-[#212124]/80 h-10 px-4 py-2 w-full mt-4" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default About;
