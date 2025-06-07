interface PageBannerProps {
  title: string;
  bgImage: string;
}

export default function PageBanner({ title, bgImage }: PageBannerProps) {
  return (
    <div
      className="relative w-full min-h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <h1 className="relative z-10 text-6xl text-white font-anton uppercase">
        {title}
      </h1>
    </div>
  );
}