const stats = [
  {
    value: "300+",
    label: "Engineers Mentored",
  },
  {
    value: "50+",
    label: "Live Industry Projects",
  },
  {
    value: "95%",
    label: "Placement Assistance",
  },
  {
    value: "20+",
    label: "Corporate Partners",
  },
];

function StatsSection() {
  return (
    <div className="stats">
      <div className="container">
        <div className="statgrid">
          {stats.map((item, index) => (
            <div key={index} className="stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
