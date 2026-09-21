function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="head reveal">

      <div>
        <div className="eyebrow">
          {eyebrow}
        </div>

        <h2>
          {title}
        </h2>
      </div>

      <p>
        {description}
      </p>

    </div>
  );
}

export default SectionHeader;