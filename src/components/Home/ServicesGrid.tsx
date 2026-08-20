import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import services from "@/data/services";

const featured = services.filter((s) =>
  [
    "car-battery-replacement",
    "battery-diagnostics-jumpstart",
    "emergency-fuel-delivery",
    "flat-tyre-replacement",
    "car-towing-recovery",
    "roadside-assistance",
    "car-recovery-dubai",
    "alternator-dynamo-repair",
  ].includes(s.slug),
);

const defaultIcon = <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z" />;

const iconBySlug: Record<string, React.ReactNode> = {
  "car-battery-replacement": <path d="M6 7h12v13H6z M9 4h6v3H9z M9 12h6 M12 9v6" />,
  "battery-diagnostics-jumpstart": <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  "emergency-fuel-delivery": <path d="M5 22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16 M3 22h12 M15 9h2l3 3v6a1 1 0 0 1-1 1h-1 M9 6v3" />,
  "flat-tyre-replacement": <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  "car-towing-recovery": <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M3 16l1.5-6c.3-1.2 1.4-2 2.6-2h5.9c1.2 0 2.3.8 2.6 2l.4 1.5 M17 11l3 1.5V16 M9 6h4" />,
  "roadside-assistance": <path d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" fill="currentColor" stroke="none" />,
  "car-recovery-dubai": <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M3 16l1.5-6c.3-1.2 1.4-2 2.6-2h5.9c1.2 0 2.3.8 2.6 2l.4 1.5 M17 11l3 1.5V16 M9 6h4" />,
  "alternator-dynamo-repair": <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z M8.5 13.5 6 22l6-3.5 6 3.5-2.5-8.5" />,
};

const ServicesGrid = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Emergency Mobile Battery Replacement in Dubai & Roadside Services"
          paragraph="Battery Near Me provides complete roadside assistance across Dubai. Our mobile units are stocked for every common emergency, not just battery replacement."
          center
        />
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group block rounded-2xl bg-white p-4 shadow-one ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-primary hover:shadow-[0_8px_30px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both] dark:bg-dark dark:shadow-three dark:ring-stroke-dark sm:p-6"
            >
              <span
                style={{ animationDelay: `${i * 200}ms` }}
                className="mb-4 flex h-10 w-10 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20 sm:h-12 sm:w-12"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary sm:h-6 sm:w-6">
                  {iconBySlug[service.slug] ?? defaultIcon}
                </svg>
              </span>
              <h3 className="mb-2 text-base font-bold text-black dark:text-white sm:mb-3 sm:text-lg">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-body-color">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14 M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
