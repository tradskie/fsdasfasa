const headerTL = gsap.timeline();
headerTL
  .from(".header-content .header-desc", {
    opacity: 0,
    y: 300,
    duration: 1,
  })
  .from(".header-content .button", { opacity: 0, duration: 0.7 }, ">");

const reserveTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".widget-20",
  },
});
reserveTL
  .from(".widget-20", {
    opacity: 0,
    y: 100,
    duration: 0.7,
  })
  .from(".widget-20 .reserve", { opacity: 0, y: -20, duration: 0.4 }, ">")
  .from(".widget-20 .balance-desc", { opacity: 0, x: -20, duration: 0.4 }, ">")
  .from(
    ".swiper-slide-active",
    {
      opacity: 0,
      y: 100,
      duration: 0.5,
    },
    ">"
  )
  .from(
    ".swiper-slide-next",
    {
      stagger: 0.3,
      opacity: 0,
      duration: 0.4,
      onComplete: function () {
        document
          .querySelector(".swiper-slide-next")
          .style.removeProperty("opacity");
      },
    },
    ">"
  )
  .from(
    ".swiper-button-next, .swiper-button-prev, .swiper-pagination",
    {
      opacity: 0,
      duration: 0.3,
    },
    ">"
  );

const dividentsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".widget-4",
  },
});

dividentsTL
  .from(".meta-advise", { opacity: 0, y: -30, duration: 0.4 })
  .from(".widget-4", { opacity: 0, y: 100, duration: 0.4 }, ">")
  .from(".widget-4 h4", { opacity: 0, y: 100, duration: 0.4 }, ">")
  .from(
    ".widget-4 .dividents-desc, .widget-4 .my-totals, .widget-4 .referal-desc",
    { opacity: 0, y: 100, duration: 0.4 },
    ">"
  );

const investmentsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".widget-2",
    start: "top center",
  },
});

investmentsTL
  .from(".widget-2 .col-lg-6:nth-child(1)", {
    opacity: 0,
    x: -80,
    y: 80,
    duration: 0.7,
  })
  .from(
    ".widget-2 .col-lg-6:nth-child(2)",
    {
      opacity: 0,
      x: 80,
      y: -80,
      duration: 0.7,
    },
    "<"
  );

const benefitsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".widget-1",
    start: "top center-=100px",
  },
});

benefitsTL
  .from(".widget-1 h2", { opacity: 0, y: 100, duration: 0.4 })
  .from(
    ".widget-1 .benefits-box",
    { opacity: 0, x: -150, duration: 0.4, stagger: 0.3 },
    ">"
  );

const faqTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".widget-7",
    start: "top center-=100px",
  },
});

faqTL
  .from(".widget-7 h2", { opacity: 0, y: 100, duration: 0.4 })
  .from(".widget-7 .rising-elm", { scale: 0, stagger: 0.1, duration: 0.4 });
