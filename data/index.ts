import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Transforming Businesses Through Technology Solutions",
    description: "Specializing in scalable e-commerce, ERP, and digital financial systems",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "3+ Years Building Enterprise Solutions",
    description: "From marketplaces to digital cooperatives",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Full-Stack Expertise",
    description: "Next.js, React, Node.js, Express, NestJS, React Native",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Proven Track Record",
    description: "Managed systems serving 100,000+ users",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building For Scale",
    description: "Specialized in high-performance applications",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Transform Your Business?",
    description: "Let's build something amazing together",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Hayumarket - Digital Product Marketplace",
    des: "A high-performance marketplace for digital products with 98 PageSpeed score and perfect SEO optimization. Serving thousands of users with seamless experience.",
    img: "/hayumarket-placeholder.svg",
  },
  {
    id: 2,
    title: "Digital Cooperative System",
    des: "Comprehensive cooperative management system including POS, accounting, digital product management, and savings & loans modules. Currently serving 20+ cooperatives.",
    img: "/cooperative-placeholder.svg",
  },
  {
    id: 3,
    title: "Irma E-commerce Ecosystem",
    des: "An integrated e-commerce system including web view app, seller center dashboard, and product management platform. Managing over 100,000 retail users efficiently.",
    img: "/irma-placeholder.svg",
  },
  {
    id: 4,
    title: "VOffice Branch Management",
    des: "Internal system for managing office bookings, branch operations, and CRM. Streamlined operations across multiple locations with improved user experience.",
    img: "/voffice-placeholder.svg",
  },
  {
    id: 5,
    title: "Alola Travel Platform",
    des: "Online travel agent platform enabling hotel and flight bookings with seamless user experience and efficient booking management.",
    img: "/alola-placeholder.svg",
  },
  {
    id: 6,
    title: "L-DX ERP System",
    des: "Specialized ERP system for fashion retail companies, streamlining inventory, sales, and operations management.",
    img: "/ldx-placeholder.svg",
  },
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName} played a crucial role in transforming our cooperative's digital infrastructure. His ability to understand our business needs and implement complex solutions was impressive. The digital cooperative system he built has significantly improved our operational efficiency.`,
    name: "Made Dharma",
    title: "Lorem Ipsum"
  },
  {
    quote: `Working with ${links.ownerName} on our e-commerce platform was exceptional. He improved our website performance dramatically, achieving a 98 PageSpeed score. His technical expertise and commitment to quality helped us serve our customers better.`,
    name: "Sarah Lin",
    title: "Lorem Ipsum"
  },
  {
    quote: `${links.ownerName}'s expertise in building scalable systems is remarkable. He helped us develop a robust branch management system that streamlined our operations across multiple locations. His solutions are always well-architected and future-proof.`,
    name: "David Chen",
    title: "Lorem Ipsum"
  },
  {
    quote: `The POS and inventory management system ${links.ownerName} developed for us has been a game-changer. His attention to detail and understanding of business processes helped create a solution that perfectly fits our needs.`,
    name: "Putu Wijaya",
    title: "Lorem Ipsum"
  },
  {
    quote: `${links.ownerName} consistently delivered high-quality solutions for our travel platform. His technical skills combined with business acumen made him an invaluable partner in our development projects. The system he built has been robust and scalable.`,
    name: "Amanda Wong",
    title: "Lorem Ipsum"
  },
 ] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "vOffice",
    desc: "Developed internal system for office booking management and CRM. Successfully resolved critical bugs and implemented branch location management features.",
    className: "md:col-span-2",
    thumbnail: "/experience-icons.svg",
  },
  {
    id: 2,
    title: "PT Aviana Sinar Abadi",
    desc: "Led development of multiple enterprise solutions including Hayumarket, Digital Cooperative System, and various e-commerce platforms. Improved performance metrics and managed systems serving 100,000+ users.",
    className: "md:col-span-2",
    thumbnail: "/experience-icons.svg", 
  },
  {
    id: 3,
    title: "Vizir Technologies",
    desc: "Contributed to the development of a low-code framework, enabling rapid application development and simplified business solution creation.",
    className: "md:col-span-2",
    thumbnail: "/experience-icons.svg",
  },
  {
    id: 4,
    title: "Keda Tech",
    desc: "Developed L-DX ERP system specialized for fashion retail companies, implementing comprehensive inventory and sales management solutions.",
    className: "md:col-span-2",
    thumbnail: "/experience-icons.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/neuthos",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/galang-ardian-b24b0a1b9/",
  },
  {
    name: "Whatsapp",
    img: "/wa.svg",
    link: "https://wa.me/089676133003",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
