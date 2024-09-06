"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export default function Featuredtype() {
  return (
    <div className="p-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED DESIGNS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Class
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Branding and Identity Design",
    description:
      "Creating visual elements that define a brand, including logos, color schemes, typography, and overall style.",
    link: "/",
  },
  {
    title: "Print Design",
    description:
      " Designing physical materials such as brochures, business cards, posters, flyers, and packaging.",
    link: "/",
  },
  {
    title: "Advertising Design",
    description:
      "Developing visuals for promotional materials, including digital ads, billboards, social media campaigns, and email marketing.",
    link: "/",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/",
  },
  {
    title: "Editorial Design",
    description:
      "Designing layouts for print and digital publications, such as magazines and books.",
    link: "/",
  },
  {
    title: "Motion Graphics",
    description:
      "Creating animated visuals for videos, films, and multimedia presentations.",
    link: "/",
  },
];
