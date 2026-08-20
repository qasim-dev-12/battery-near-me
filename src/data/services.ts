export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  features: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  pricing?: { item: string; price: string }[];
  whyChooseUsTitle?: string;
  whyChooseUs?: string[];
  whyChooseUsIntro?: string;
  whyChooseUsClosing?: string;
  introSection?: { title: string; paragraph: string };
  whyEssential?: { title: string; intro: string; causes?: string[]; closing?: string };
  getStarted?: { title?: string; intro: string; steps: { title: string; text: string }[] };
  whoNeedsIt?: { title: string; intro: string; list?: string[]; safetyNote?: string };
  beyondJumpstart?: { title: string; intro: string; services: string[]; closing?: string };
  whyPartner?: { title: string; intro: string; points?: string[]; closing?: string };
  vehicleTypes?: { title: string; intro: string; list: string[] };
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string }[] };
  costFactorsTitle?: string;
  costFactorsParagraph?: string;
  costFactors?: string[];
  costFactorsDetailed?: { icon: string; title: string; description: string; image?: string }[];
  pricingTitle?: string;
  pricingNote?: string;
  pricingIntro?: { title: string; paragraphs: string[] };
  testimonials?: { name: string; area: string; quote: string }[];
  showBrands?: boolean;
  showAreas?: boolean;
  heroImage?: string;
};

const services: Service[] = [
  {
    slug: "car-battery-replacement",
    heroImage: "/images/about/battery-rep (2).png",
    title: "Car Battery Replacement",
    description:
      "Fast on-site car battery replacement with genuine, warrantied batteries delivered and fitted at your home, office, or roadside location.",
    intro:
      "Need an online or emergency car battery replacement in Dubai? We deliver and install genuine Amaron, Varta, and Bosch batteries at your location in 30-45 minutes or less, 24/7.",
    features: [
      "Free delivery & installation at your location",
      "Genuine Amaron, Varta, and Bosch batteries with full warranty",
      "30-45 minute average response time across Dubai",
      "Free battery and alternator diagnostics before replacement",
      "Transparent pricing with no hidden charges",
      "Old battery collected and recycled per UAE environmental standards",
    ],
    steps: [
      "Call or book online with your location and vehicle details",
      "Share your live location via WhatsApp or the booking form",
      "Technician arrives within 30-45 minutes and diagnoses first",
      "Genuine battery fitted on the spot with warranty documentation",
    ],
    faqs: [
      { q: "How long does it take to replace a car battery?", a: "Our technicians arrive within 30-45 minutes and replace the battery on-site in under 15 minutes." },
      { q: "Are your batteries genuine and do they come with warranty?", a: "Yes — all batteries come with 12, 18, or 24 month warranty and 1 time free replacement." },
      { q: "Is there a charge for on-site diagnostics?", a: "No call-out fee. Diagnostics are free if you proceed with a replacement." },
      { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
    ],
  },
  {
    slug: "battery-diagnostics-jumpstart",
    heroImage: "/images/about/jumpstart.png",
    title:
      "Car Jumpstart Service in Dubai – Fast, Safe & On-Demand jumpstart packages start at just AED 99",
    description:
      "Full battery health diagnostics and emergency jumpstart service to get your car running again in minutes.",
    intro:
      "A Car Jumpstart Service is one of the fastest roadside helping services that can start your vehicle in case it dies. It charges the engine with external energy and helps you get back on the road without having to change the battery. It is necessary when your auto does not start because of a damaged or low battery.\n\nBattery Near Me will assist in car jumpstarting services across all locations in Dubai quickly and safely. All it takes is one call to have your car back to life and yourself back on the road. You can safely rely on us.",
    whyEssential: {
      title: "Why Is a Car Jumpstart Essential?",
      intro:
        "A dead battery can strike anytime, especially during the hot Dubai summers or after long hours of vehicle inactivity. A jumpstart is often the quickest and most effective solution to restart your engine without the need for a full battery replacement.",
      causes: [
        "Leaving headlights or cabin lights on",
        "Long periods of vehicle inactivity",
        "Extreme weather conditions",
        "Faulty alternator (yes, we check that too!)",
        "Corroded battery terminals",
      ],
      closing:
        "Ignoring a dead battery could leave you stranded in unsafe locations or miss important commitments. That's why our fast and reliable jumpstart service is essential — so you're never left waiting.",
    },
    getStarted: {
      title: "Get Started in 3 Easy Steps",
      intro: "You don't need an app or wait for hours. Getting help is as easy as:",
      steps: [
        { title: "Call or Contact Us", text: "Reach out to our hotline or WhatsApp for instant service." },
        { title: "Share Your Location", text: "Tell us where you are in Dubai — home, mall, office, or roadside." },
        { title: "Sit Back and Relax", text: "Our technician will be on the way with all the tools needed to jumpstart your car." },
      ],
    },
    whoNeedsIt: {
      title: "Who Needs a Jumpstart? Is It Safe?",
      intro: "Anyone driving a car, SUV, van, or even a luxury vehicle can face a dead battery — it's more common than you think.",
      list: ["Daily commuters", "Rideshare drivers", "Tourists using rental cars", "Fleet vehicles", "Car owners with aging batteries"],
      safetyNote: "And yes — it's completely safe when done professionally. Our team follows all the necessary steps to avoid short circuits or damage to your electrical components.",
    },
    beyondJumpstart: {
      title: "Beyond Jumpstarts – Complete Battery Support",
      intro: "A jumpstart might not be enough if your battery is damaged or your alternator isn't charging properly. That's why Battery Near Me offers more than just jumpstarting:",
      services: [
        "Car Battery Replacement – On-site installation with premium brands.",
        "Car Alternator Repair – Faulty alternators are common culprits for dead batteries.",
        "Emergency Fuel Delivery – Ran out of fuel? We bring it to you.",
        "Flat Tire Assistance – Quick repair or replacement on the spot.",
        "Battery Diagnostics – Digital reports and performance checks.",
      ],
      closing: "We're not just a jumpstart service — we're your complete vehicle rescue partner in Dubai.",
    },
    whyPartner: {
      title: "Why Battery Near Me Dubai is Your Go-To Jumpstart Partner",
      intro: "In a city like Dubai, every minute counts. Whether you're heading to a meeting, airport, or just out for errands, a dead battery can disrupt your day.\n\nWith Battery Near Me, you're guaranteed:",
      points: [
        "24/7 Emergency Service",
        "Trained, friendly technicians",
        "Fast arrival times",
        "Accurate diagnostics",
        "Affordable pricing",
        "Full vehicle support beyond jumpstarts",
      ],
      closing: "Our commitment is to keep you moving, safely and reliably — anytime, anywhere.",
    },
    features: [
      "24/7 availability, including weekends and holidays",
      "30-minute average response time",
      "Professional-grade equipment for zero-damage jumpstarts",
      "Free battery and alternator health check included",
      "Transparent pricing with no hidden charges",
    ],
    steps: [
      "Arrival and Assessment — We reach your location, inspect the battery, and check for visible damage or leakage.",
      "Safety Setup — Our technicians use insulated cables and professional-grade power sources to prevent any sparks or short circuits.",
      "Battery Jumpstart — We connect your battery with the jump pack and carefully bring it to life.",
      "System Check — Post-jumpstart, we check alternator health and battery performance to ensure everything's working.",
      "Customer Guidance — If we detect a failing battery or alternator, we advise you on the next steps — repair or replacement, at your convenience.",
    ],
    faqs: [
      { q: "What is the response time?", a: "Generally 30-45 minutes depending on traffic and location." },
      { q: "Is the jumpstart process safe for my car?", a: "Yes, the professional process is safe and follows manufacturer guidelines." },
      { q: "What if my car won't start after the jumpstart?", a: "We run diagnostic testing to identify the root cause and recommend further service if needed." },
      { q: "Is a membership required?", a: "No — it's a pay-as-you-go service available the moment you call." },
      { q: "Are you available at night or on holidays?", a: "Yes, 24/7, 365 days a year." },
    ],
    pricingIntro: {
      title: "Affordable Jumpstart Packages – No Surprises",
      paragraphs: [
        "We believe in transparent, competitive pricing for all our services. Our jumpstart packages start at just AED 99, depending on the vehicle and location.",
        "You won't be overcharged or upsold — just honest help when you need it most.",
      ],
    },
    pricing: [
      { item: "Standard jumpstart", price: "From AED 99" },
      { item: "Budget call-out", price: "AED 80-100" },
      { item: "Night / weekend / holiday call-out", price: "AED 200+" },
      { item: "Alternator check or electrical diagnosis add-on", price: "Added to the line price" },
    ],
    whyChooseUsTitle: "Why Choose Battery Near Me's Car Jumpstart Service?",
    whyChooseUsIntro:
      "There are plenty of car service providers in Dubai — but Battery Near Me stands out because we specialize in immediate roadside support, especially jumpstarts.",
    whyChooseUs: [
      "24/7 Availability – Anytime, any day, including weekends and holidays.",
      "30-Minute Response – We reach you fast and get you moving even faster.",
      "Experienced Technicians – No guesswork, just expert service.",
      "Safe Jumpstart Process – We use professional-grade equipment to ensure zero damage.",
      "Battery Health Check – We inspect your battery and alternator to diagnose deeper issues.",
      "Transparent Pricing – No hidden charges, no surprises.",
    ],
    whyChooseUsClosing:
      "Our goal is simple: to make sure you're never left stuck because of a dead battery.",
    costFactorsTitle: "What Affects the Cost of a Car Jumpstart Service in Dubai?",
    costFactorsParagraph:
      "When it comes to jumpstarting a vehicle, pricing isn't always one-size-fits-all. Several key factors influence how much you'll pay for a car jumpstart service in Dubai:",
    costFactorsDetailed: [
      {
        icon: "location",
        title: "Site of the Breakdown",
        description:
          "Your car can stall in a busy place or outside the city center, such as Downtown Dubai, JLT, and Business Bay, and extra traveling will attract extra charges. The more the technician must travel, the higher the service cost may be.",
        image: "/images/about/site of breakdown.png",
      },
      {
        icon: "clock",
        title: "Service Time (Day or Night)",
        description:
          "The late-night or weekend, or holiday emergency jumpstart call might have surge pricing. The reason is that many of the providers are open 24/7, but they charge an extra cost when their services are off-peak.",
        image: "/images/about/day-or-night.png",
      },
      {
        icon: "car",
        title: "Vehicle Type",
        description:
          "The overall price might be affected by the fact that bigger vehicles like the SUV, 4x4, or luxurious vehicles might need specialized equipment or a more powerful capacity booster.",
        image: "/images/about/vehicle-type.png",
      },
      {
        icon: "battery",
        title: "Battery Condition",
        description:
          "In the event of a dead battery or one that cannot be rejuvenated at all, it is possible that a jump start alone is not a cure. Where this occurs, a replacement of the battery may be suggested by the technician, which will end up requiring extra cash.",
        image: "/images/about/battery-condition.png",
      },
      {
        icon: "building",
        title: "Service Provider",
        description:
          "Different organizations propose various levels of prices depending on the brand popularity and technician experience, as well as some extras (e.g., warranty, diagnostics free of charge, after-repair services). Budget services can begin at AED 80-100, and the top end of the spectrum of emergency services can reach AED 200 and above, depending on the situation.",
      },
      {
        icon: "wrench",
        title: "Additional Services",
        description:
          "In case your car requires additional service that may include an alternator check, electrical diagnosis, and other minor mechanical work, these items can be added to the standard line jumpstart price.",
      },
    ],
    testimonials: [
      { name: "Khalid", area: "Downtown Dubai", quote: "Called late at night when my car wouldn't start at the mall. They arrived in about 25 minutes and got me moving again — quick and professional." },
      { name: "Sara", area: "Dubai Marina", quote: "Reliable and reasonably priced. The technician also checked my alternator and flagged it needed replacing soon — appreciated the honesty." },
      { name: "Omar", area: "Dubai Sports City", quote: "Best jumpstart experience I've had in Dubai. Pricing was upfront and the team was friendly throughout." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "tyre-replacement",
    heroImage: "/images/about/tyre replacement.png",
    title: "Tyre Replacement Dubai – We Reach You in 30-45 Minutes",
    description:
      "On-site tyre replacement with a wide range of tyre brands and sizes, fitted at your location.",
    intro:
      "Flat tyre change in Dubai, starting from AED 99, in just 30 minutes. We fit a new tyre or your spare at your location — home, work, or the roadside — no towing needed.\n\nOur mobile tyre fitment vans carry a wide range of brands and sizes, so whether you need a single tyre swapped or a full set replaced, Battery Near Me handles it on-site, 24/7.",
    introSection: {
      title: "Mobile Tyre Replacement, Wherever You Are",
      paragraph:
        "Worn out, damaged, or blown tyres don't have to mean a trip to the workshop. Our technicians arrive within 30-45 minutes anywhere in Dubai, carrying a stock of common tyre sizes and brands, and fit a new tyre or your spare on the spot — so you can get back on the road safely without towing.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "While we're at your location, we can also take care of:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "New tyre or spare fitted, balanced, and pressure-checked on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Breakdowns and minor issues handled wherever you're parked or stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and installed if your battery also needs replacing." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick health checks on tyres, battery, and alternator while on-site." },
      ],
    },
    getStarted: {
      title: "How Our Tyre Replacement Works",
      intro: "Getting a new tyre fitted is simple:",
      steps: [
        { title: "Call or Book Online", text: "Share your location, vehicle, and tyre size." },
        { title: "We Dispatch Immediately", text: "A mobile tyre van reaches you in 30-45 minutes." },
        { title: "Tyre Fitted On-Site", text: "We mount, balance, and check pressure on the spot." },
        { title: "Drive Away Safely", text: "You're back on the road — no towing required." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "Our mobile units are equipped to handle:",
      list: [
        "Sedans, SUVs, and 4x4s",
        "Commercial vans and light trucks",
        "Standard and run-flat tyres",
        "Battery jumpstart and replacement add-ons",
        "Emergency fuel delivery if needed",
        "Towing assistance for serious issues",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whatever you drive, we carry the right tyre options and tools to get it done properly the first time.",
      points: [
        "Wide stock of tyre brands and sizes carried on every van",
        "Technicians trained across vehicle classes, from sedans to 4x4s",
        "Honest guidance — repair when possible, replace when necessary",
        "Service backed by warranty on fitment and workmanship",
      ],
    },
    whyChooseUsTitle: "Why Choose Battery Near Me?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for tyre replacement:",
    whyChooseUs: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    costFactors: [
      "Tyre brand and size selected",
      "Number of tyres being replaced",
      "Vehicle type — sedan, SUV, 4x4, or commercial",
      "Time of call-out — standard hours vs night/holiday",
    ],
    pricingNote: "Tyre replacement starts from AED 99 — we confirm exact pricing for your tyre size and brand before starting.",
    features: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call Battery Near Me or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    faqs: [
      { q: "What's the response time?", a: "Average of 30-45 minutes across Dubai, available 24/7 including weekends and holidays." },
      { q: "What vehicle types are served?", a: "Commercial vehicles, 4x4s, SUVs, sedans, and standard or run-flat tyres." },
      { q: "What if I have no spare tyre?", a: "Our mobile units stock quality replacement options to fit your vehicle and budget." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "Do you replace more than one tyre at a time?", a: "Yes, our vans carry stock for full-set replacements, not just single tyres." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "flat-tyre-replacement",
    heroImage: "/images/about/flat-tyre-rep.png",
    title: "Flat Tyre Change Service in Dubai – starts from AED 99, in just 30 minutes",
    description:
      "Quick flat tyre replacement service that gets you back on the road safely with minimal downtime.",
    intro:
      "Flat Tyre Change Service is an emergency roadside assistance service that assists in fitting a new tyre or patching a punctured tyre to your vehicle on the spot - at your home or work, or on the road. It provides quick, convenient, and professional assistance without periodically bringing your vehicle to the workshop on a tow truck.\n\nThe issue of a flat tyre can be devastating at the most inconvenient time, when you are going to work, regular family outing, or in the middle of a busy road. We realize how stressful and hazardous this situation may be at Battery Near Me Dubai. This is what drives us to provide a quick tyre replacement service throughout Dubai, so that you can feel safe and go on the road immediately.\n\nWhether tyre change in Dubai, flat tyre service, or professional mobile tyre fitting anywhere, any time, we still find the time and place to help you.",
    introSection: {
      title: "What Is Our Flat Tyre Change Service?",
      paragraph:
        "Our flat tyre service is designed to get you moving again without the hassle of towing your vehicle. Whether your tyre is punctured, worn out, or completely deflated, our trained team will inspect the damage thoroughly, replace the tyre with your spare or a new one if needed, check wheel alignment if applicable, ensure proper air pressure and safety standards, and offer you tyre purchase options if your spare is missing or unusable. We also assist customers who have lost wheel nuts, damaged rims, or require emergency flat tire help in parking garages or basements.",
    },
    whyEssential: {
      title: "Our Mobile Tyre Fitment Van – A Garage On Wheels",
      intro: "Our mobile tyre fitment vans are fully loaded with:",
      causes: ["Tyre mounting and balancing machines", "Air compressors", "Torque wrenches", "Spare tyres and branded replacements", "Puncture repair kits", "Tyre inflators"],
      closing: "This mobile setup allows us to handle most tyre issues on-site—be it at home, office, roadside, parking garage, or desert track.",
    },
    whyChooseUsTitle: "Why Choose Battery Near Me's Tyre Change Service?",
    whyChooseUsIntro: "When it comes to mobile tyre services, not all companies are created equal. Here's why Battery Near Me stands out as your trusted tyre change partner in Dubai:",
    whyChooseUs: [
      "24/7 Availability – Flat tyre at 2 AM? We're ready.",
      "Mobile Tyre Fitment Vans – We come equipped to handle all types of tyre changes on the spot.",
      "Fast Response Time – Typically at your location in 30 minutes or less.",
      "Transparent Pricing – No hidden charges, ever.",
      "Expert Technicians – We handle cars, SUVs, 4x4s, and even commercial vehicles.",
      "Citywide Coverage – From Downtown Dubai to JLT, JVC, and beyond.",
    ],
    getStarted: {
      title: "How Our Tyre Change Service in Dubai Works",
      intro: "Here's how simple it is to get your tyre changed with Battery Near Me:",
      steps: [
        { title: "Call or Book Online", text: "Reach out to us with your location and vehicle details." },
        { title: "We Dispatch Immediately", text: "Our mobile tyre van will arrive within 30-45 minutes." },
        { title: "Quick Tyre Change On Spot", text: "We'll replace the flat, secure the wheel, and check your tyre pressure." },
        { title: "Get Back on the Road", text: "You're ready to drive again, stress-free." },
      ],
    },
    whyPartner: {
      title: "What You Can Expect from Our Flat Tyre Service in Dubai",
      intro: "Here's what sets our service apart:",
      points: [
        "Speed & Reliability – Our average response time is under 40 minutes.",
        "Professionalism – Clean, trained, uniformed technicians.",
        "Quality Tyres – Choose from top brands like Bridgestone, Michelin, Dunlop, and Pirelli.",
        "Affordable Rates – Competitive and fair pricing with upfront quotes.",
      ],
      closing: "Customer First Approach – We believe in doing the job once and doing it right.",
    },
    whoNeedsIt: {
      title: "Why Flat Tyre Service Matters in Dubai",
      intro: "Driving with a flat or underinflated tyre is risky and can damage your wheel or suspension. Quick tyre change ensures:",
      list: ["Safety for you and others", "Better fuel efficiency", "Extended tyre lifespan", "Smooth ride comfort", "Peace of mind"],
      safetyNote: "In a Hurry to have Flat Tyre Services in Dubai? A flat tyre should not be a hitch. Depending on where you are, such as at home, on the highway, or even in the parking lot, Battery Near Me Dubai can conveniently bring the service of a seasoned tyre changer to meet you wherever you are. Call us now or fill out our quick service form to get help within minutes.",
    },
    beyondJumpstart: {
      title: "Roadside Assistance For Flat Tyres – Always Ready",
      intro: "At Battery Near Me, we don't just change tyres—we offer full roadside assistance in Dubai. No need to wait hours or get stuck in the heat—our team responds fast and gets the job done right.",
      services: ["Flat Tyre Replacement", "Puncture Repair", "Jumpstart Services", "Battery Replacement", "Towing Services", "Fuel Delivery"],
    },
    features: [
      "Thorough inspection of the damage",
      "Tyre replacement with your spare or a new one if needed",
      "Wheel alignment check where applicable",
      "Proper air pressure and safety standards ensured",
      "Help with lost wheel nuts, damaged rims, and tricky locations",
      "Citywide coverage, 24/7",
    ],
    steps: [
      "Call Battery Near Me or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    costFactorsTitle: "Pricing Factors – What Affects Tyre Change Cost in Dubai?",
    costFactorsParagraph: "Several variables affect the cost of your tyre change service:",
    costFactors: [
      "Type of vehicle (sedan, SUV, 4x4, etc.)",
      "Number of tyres to be replaced",
      "Brand and size of tyres",
      "Emergency vs scheduled service",
      "Location (standard roadside or hard-to-access areas)",
    ],
    pricingNote: "On average, tyre change services start from AED 99, and can go higher depending on tyre replacement requirements.",
    faqs: [
      { q: "What can I do when I have a flat tyre in Dubai?", a: "Call or book Battery Near Me online and our mobile team will reach your location to fit a new tyre or your spare on the spot." },
      { q: "What is the response time of your mobile team?", a: "Typically 30-45 minutes anywhere in Dubai, 24/7." },
      { q: "Do you offer tyre changing services at night or on weekends?", a: "Yes, we're available 24/7 including nights, weekends, and public holidays." },
      { q: "Do you repair any kind of tyres and vehicles?", a: "We handle sedans, SUVs, 4x4s, and commercial vehicles, with both standard and run-flat tyres." },
      { q: "What happens when I do not have a spare tyre?", a: "Our mobile units carry replacement tyre options so we can still get you moving." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "How can I book a tyre change service?", a: "Call us directly, use the website form, or message us on WhatsApp for 24/7 service." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "new-battery-dubai",
    heroImage: "/images/about/new battery.png",
    title: "New Car Battery Dubai — Buy & Install Genuine Batteries On-Site",
    description:
      "Buy a brand-new genuine car battery in Dubai and get it installed at your doorstep in 20–30 minutes. Amaron, Varta, Bosch & more.",
    intro:
      "Looking to buy a new car battery in Dubai? Battery Near Me delivers and fits genuine Amaron, Varta, Bosch, ACDelco, Energizer, and Solite batteries straight to your location — home, office, or roadside — within 20–30 minutes.\n\nEvery new battery comes with a full manufacturer warranty of up to 24 months and free on-site installation. No hidden fees, no hassle. Just a fresh battery and you're back on the road.",
    introSection: {
      title: "The Easiest Way to Get a New Battery in Dubai",
      paragraph:
        "Skip the workshop. Our certified technicians bring the battery to you, test your electrical system, fit the new unit, and hand you the warranty card — all in one visit.",
    },
    getStarted: {
      title: "Get a New Battery in 3 Easy Steps",
      intro: "Fast, transparent, and stress-free.",
      steps: [
        { title: "Call or Book Online", text: "Tell us your car make, model, and location. We'll recommend the right battery instantly." },
        { title: "We Deliver & Install", text: "A technician arrives within 20–30 minutes with your battery and all required tools." },
        { title: "Drive Away", text: "Battery fitted, warranty documented, old unit recycled. You're good to go." },
      ],
    },
    whyEssential: {
      title: "Why Buy a New Battery Instead of Recharging?",
      intro: "Recharging only delays the inevitable. A battery that has lost its capacity cannot hold charge reliably — especially in Dubai's extreme heat.",
      causes: [
        "Battery older than 2–3 years",
        "Slow engine cranking or hard starts",
        "Frequent need for jump starts",
        "Battery warning light on dashboard",
        "Swollen or leaking battery case",
      ],
      closing: "A new battery is cheaper than a breakdown — and cheaper than towing fees.",
    },
    features: [
      "Genuine Amaron, Varta, Bosch, ACDelco, Energizer, and Solite batteries in stock",
      "Free delivery and on-site installation across Dubai",
      "Up to 24-month manufacturer warranty with 1 free replacement",
      "Free electrical system health check with every new battery",
      "Old battery collected and recycled — zero hassle for you",
      "Transparent pricing — no surprises",
    ],
    steps: [
      "Call or WhatsApp with your vehicle details and location",
      "Technician dispatched with the right battery within minutes",
      "Electrical system tested before installation",
      "New battery fitted and warranty card issued on the spot",
    ],
    vehicleTypes: {
      title: "We Supply New Batteries for All Vehicles",
      intro: "From everyday sedans to heavy-duty trucks and luxury vehicles.",
      list: [
        "Sedans and hatchbacks",
        "SUVs and crossovers",
        "Luxury: BMW, Mercedes, Audi, Porsche, Land Rover",
        "Pickup trucks and commercial vans",
        "Motorcycles and scooters",
        "Hybrid vehicles (auxiliary battery)",
      ],
    },
    serviceHighlights: {
      title: "What's Included With Every New Battery",
      items: [
        { icon: "battery", title: "Genuine Brand Battery", description: "Only OEM-grade Amaron, Varta, Bosch, ACDelco, Energizer, and Solite batteries — no clones or refurbished units." },
        { icon: "wrench", title: "Professional Installation", description: "Certified technician fits the battery correctly, resets the BMS if required, and checks terminal connections." },
        { icon: "clock", title: "20–30 Min Delivery", description: "We reach your location across Dubai in 20–30 minutes, any time of day or night." },
        { icon: "building", title: "Warranty Card Issued", description: "You receive a physical warranty card on the spot — valid for up to 24 months with 1 free replacement." },
      ],
    },
    costFactorsTitle: "What Affects New Battery Price in Dubai?",
    costFactorsParagraph: "Battery prices vary based on brand, capacity, and vehicle type. We always quote upfront.",
    costFactorsDetailed: [
      { icon: "car", title: "Vehicle Make & Model", description: "European luxury vehicles often require higher-capacity batteries than standard sedans." },
      { icon: "battery", title: "Battery Brand & Capacity", description: "Amaron and Bosch premium ranges cost more but last longer in Dubai's heat." },
      { icon: "wrench", title: "BMS Reset Required", description: "Some vehicles (BMW, Mercedes) require a battery management system reset — we handle this on-site." },
      { icon: "building", title: "Warranty Duration", description: "12, 18, or 24-month warranty options are available at different price points." },
    ],
    pricing: [
      { item: "Standard sedan battery (Amaron / ACDelco)", price: "AED 350–550" },
      { item: "SUV / premium battery (Varta / Bosch)", price: "AED 550–850" },
      { item: "Luxury vehicle battery (BMW / Mercedes)", price: "AED 750–1,200" },
      { item: "Delivery & installation", price: "FREE" },
      { item: "BMS reset (if required)", price: "AED 50" },
    ],
    pricingNote: "All prices include VAT. Final quote confirmed before work begins.",
    whyChooseUsTitle: "Why Buy Your New Battery From Battery Near Me?",
    whyChooseUsIntro: "We're Dubai's most trusted on-site battery supplier:",
    whyChooseUs: [
      "20–30 minute delivery across all Dubai areas",
      "100% genuine batteries — manufacturer warranty included",
      "500+ Google reviews — rated 4.9 stars",
      "Certified technicians for all vehicle types",
      "24/7 availability including weekends and holidays",
      "Old battery recycled responsibly at no extra charge",
    ],
    testimonials: [
      { name: "Khalid", area: "Jumeirah", quote: "Ordered a new Varta battery online at midnight. Technician arrived in 25 minutes and installed it perfectly. Incredible service!" },
      { name: "Priya", area: "Dubai Marina", quote: "My BMW needed a specific battery. Battery Near Me had it in stock and reset the BMS on-site. Very professional." },
      { name: "Omar", area: "Business Bay", quote: "Cheapest genuine Amaron I found in Dubai with free installation. Couldn't ask for more." },
    ],
    showBrands: true,
    showAreas: true,
    faqs: [
      { q: "How quickly can you deliver a new battery in Dubai?", a: "We deliver and install within 20–30 minutes anywhere in Dubai, 24/7." },
      { q: "Are your batteries original?", a: "Yes — all batteries are 100% genuine with manufacturer warranty. We never sell refurbished or cloned units." },
      { q: "Is installation free?", a: "Yes, delivery and installation are always free." },
      { q: "Can you replace a battery at night or on weekends?", a: "Yes — we operate 24/7, 365 days a year including UAE public holidays." },
      { q: "What warranty do new batteries come with?", a: "12, 18, or 24 months depending on the battery model, with 1 free replacement included." },
    ],
  },
  {
    slug: "change-battery-dubai",
    heroImage: "/images/about/battery-change.png",
    title: "Car Battery Change Dubai — Fast On-Site Replacement Service",
    description:
      "Professional car battery change service in Dubai. Old battery swapped for a new genuine unit at your location in 20–30 minutes.",
    intro:
      "Need to change your car battery in Dubai? Battery Near Me makes it effortless. Our certified technicians come to you — wherever you are — swap out the old battery for a certified genuine replacement, and have you back on the road in 20–30 minutes.\n\nWhether your battery is completely dead or just ageing, we handle the full change on-site with no workshop visit needed. Available 24/7 across all Dubai areas.",
    introSection: {
      title: "Same-Day Car Battery Change, Anywhere in Dubai",
      paragraph:
        "No need to push your car to a garage. We bring the right battery to your exact location, perform a full system check, change the battery, and document the warranty — all at your doorstep.",
    },
    getStarted: {
      title: "Change Your Battery in 3 Simple Steps",
      intro: "Quick, hassle-free, and transparent.",
      steps: [
        { title: "Contact Us", text: "Call or WhatsApp with your location and vehicle make/model." },
        { title: "Technician Arrives", text: "We reach you in 20–30 minutes with the correct replacement battery." },
        { title: "Battery Changed", text: "Old battery removed, new unit installed and tested, warranty issued." },
      ],
    },
    whyEssential: {
      title: "Signs You Need a Battery Change Now",
      intro: "Ignoring a failing battery can leave you stranded. Watch for these warning signs:",
      causes: [
        "Engine cranks slowly or struggles to start",
        "Battery warning light on the dashboard",
        "Electrical accessories behaving erratically",
        "Battery older than 2–3 years in Dubai's climate",
        "Frequent jump starts needed",
        "Swollen, corroded, or leaking battery case",
      ],
      closing: "Act before it dies completely — a timely change is always cheaper than emergency recovery.",
    },
    features: [
      "Complete battery change with genuine Amaron, Varta, Bosch, ACDelco, Energizer, or Solite units",
      "On-site service — no towing, no workshop visit",
      "Free alternator and charging system check with every change",
      "Up to 24-month warranty with 1 free replacement",
      "Old battery disposed of responsibly per UAE regulations",
      "24/7 availability across all Dubai areas",
    ],
    steps: [
      "Call or book online — share your vehicle details and location",
      "Technician arrives within 20–30 minutes with the right battery",
      "Old battery removed and electrical system checked",
      "New battery fitted, terminals secured, system tested",
    ],
    vehicleTypes: {
      title: "We Change Batteries for Every Vehicle Type",
      intro: "Our technicians are trained to handle all makes and models.",
      list: [
        "Sedans, hatchbacks, and crossovers",
        "SUVs and 4x4 vehicles",
        "Luxury and European cars (BMW, Mercedes, Audi, Porsche)",
        "Japanese and Korean vehicles (Toyota, Nissan, Hyundai, Kia)",
        "Pickup trucks and commercial vehicles",
        "Motorcycles and light commercial vans",
      ],
    },
    serviceHighlights: {
      title: "Everything Included in Our Battery Change Service",
      items: [
        { icon: "wrench", title: "Full Battery Swap", description: "Old battery removed safely, new genuine battery installed with correct torque specs and terminal protection." },
        { icon: "battery", title: "System Health Check", description: "We test the alternator, charging voltage, and starter motor before and after the change — at no extra cost." },
        { icon: "clock", title: "20–30 Min Response", description: "Fast deployment across Dubai — from Downtown to Deira, JBR to Al Quoz." },
        { icon: "building", title: "Warranty Documentation", description: "Physical warranty card issued on-site. Valid 12–24 months with 1 free replacement." },
      ],
    },
    costFactorsTitle: "What Affects the Battery Change Cost in Dubai?",
    costFactorsParagraph: "We always give you a fixed quote before starting. No surprises.",
    costFactorsDetailed: [
      { icon: "car", title: "Vehicle Type", description: "Larger engines and European vehicles may require higher-capacity, higher-cost batteries." },
      { icon: "battery", title: "Battery Brand", description: "Amaron, Bosch Silver, and Varta Blue Dynamic are the most popular mid-range options." },
      { icon: "wrench", title: "Additional Services", description: "BMS reset for BMW/Mercedes or terminal replacement may add a small fee." },
      { icon: "clock", title: "Time of Service", description: "Standard rates apply 24/7 — no premium for late-night or weekend calls." },
    ],
    pricing: [
      { item: "Economy battery change (ACDelco / Solite)", price: "AED 299–400" },
      { item: "Mid-range battery change (Amaron / Varta)", price: "AED 400–600" },
      { item: "Premium battery change (Bosch / Varta AGM)", price: "AED 600–1,000" },
      { item: "Luxury vehicle surcharge", price: "+AED 100" },
      { item: "Delivery & on-site installation", price: "FREE" },
    ],
    pricingNote: "Prices include VAT. Quote confirmed before work begins — no hidden fees.",
    whyChooseUsTitle: "Why Choose Battery Near Me for Your Battery Change?",
    whyChooseUsIntro: "Dubai drivers trust us because:",
    whyChooseUs: [
      "Arrive in 20–30 minutes anywhere in Dubai",
      "Only genuine, warranted batteries — never used or cloned",
      "500+ five-star Google reviews",
      "Trained for all vehicle brands including luxury and hybrid",
      "Full transparency — quote upfront, no surprises",
      "24/7 service with no extra charge for nights or weekends",
    ],
    testimonials: [
      { name: "Ahmed", area: "Al Barsha", quote: "My car wouldn't start in the morning. Battery Near Me arrived in 22 minutes and changed the battery on my driveway. Amazing!" },
      { name: "Sara", area: "Jumeirah Lakes Towers", quote: "They changed my Corolla battery in the parking garage at my office. Quick, tidy, and great value." },
      { name: "Faisal", area: "Dubai Silicon Oasis", quote: "Changed a Bosch battery in my Land Cruiser. Technician also checked the alternator — very thorough and professional." },
    ],
    showBrands: true,
    showAreas: true,
    faqs: [
      { q: "How long does a battery change take on-site?", a: "The physical swap takes 10–15 minutes. Total time including diagnostics is around 20–30 minutes." },
      { q: "Do I need to come to a workshop?", a: "No — we come to you at home, office, mall parking, or roadside anywhere in Dubai." },
      { q: "What brands do you carry for battery changes?", a: "Amaron, Varta, Bosch, ACDelco, and Energizer — all genuine with manufacturer warranty." },
      { q: "Is the old battery taken away?", a: "Yes, we collect and recycle the old battery at no extra charge, in line with UAE environmental regulations." },
      { q: "Do you change batteries for electric or hybrid cars?", a: "We service the 12V auxiliary battery in hybrids and EVs. For traction battery issues, please contact us for a specialist referral." },
    ],
  },
];

export default services;
