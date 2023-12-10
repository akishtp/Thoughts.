import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akish T P",
};

export default function AboutPage() {
  return (
    <div>
      <div className="text-2xl">hosting some of my ideas online</div>
      <div className="text-4xl">Built using</div>
      <div className="text-4xl">My socials</div>
      <div className="text-4xl">makishtp (at) gmail (dot) com</div>
    </div>
  );
}
