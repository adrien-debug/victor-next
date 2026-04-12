import Image from "next/image";

interface VisionCardProps {
  image: string;
  label: string;
  title: string;
  description: string;
}

export default function VisionCard({
  image,
  label,
  title,
  description,
}: VisionCardProps) {
  return (
    <article className="vision-card reveal">
      <Image
        src={image}
        alt={`${title} environment`}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 33vw"
        className="vision-card-image"
        quality={85}
        priority={false}
      />
      <div className="overlay" aria-hidden="true" />
      <div className="card-body">
        <span className="mono card-label">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
