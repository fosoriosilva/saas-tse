type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-wide text-blue-600 uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
