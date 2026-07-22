type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}
