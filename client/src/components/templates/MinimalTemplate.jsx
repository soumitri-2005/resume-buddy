const MinimalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="template-div max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
      {/* Header */}
      <header className="mb-3">
        <h1 className="text-3xl font-thin mb-1 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-[13.3px] text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
          {data.personal_info?.linkedin && (
            <span className="break-all">{data.personal_info.linkedin}</span>
          )}
          {data.personal_info?.website && (
            <span className="break-all">{data.personal_info.website}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-4">
          <p className="text-gray-700 leading-snug text-justify whitespace-pre-wrap break-words overflow-x-hidden text-[13.3px]">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-sm uppercase tracking-widest mb-1 font-medium"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-2">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-0">
                  <h3 className="text-sm font-medium">{exp.position}</h3>
                  <span className="text-[13.3px] text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 text-[13.3px] mb-1">{exp.company}</p>
                {exp.description && (
                  <div className="text-gray-700 leading-snug text-justify whitespace-pre-line break-words overflow-x-hidden text-[13.3px]">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-sm uppercase tracking-widest mb-1 font-medium"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-2">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 justify-between items-baseline"
              >
                <h3 className="text-sm font-medium">{proj.name}</h3>
                <p className="text-justify text-sm text-zinc-700 leading-snug space-y-1 break-all whitespace-pre-wrap overflow-x-hidden text-[13.3px]">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-sm uppercase tracking-widest mb-1 font-medium"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline text-sm">
                <div>
                  <h3 className="font-medium leading-snug whitespace-pre-wrap break-words overflow-x-hidden">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 leading-snug whitespace-pre-wrap break-words overflow-x-hidden">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-[13.3px] text-gray-500">GPA: {edu.gpa}</p>
                  )}
                </div>
                <span className="text-[13.3px] text-gray-500">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2
            className="text-sm uppercase tracking-widest mb-1 font-medium"
            style={{ color: accentColor }}
          >
            Skills
          </h2>
          <div className="text-gray-700 text-[13.3px]">{data.skills.join(" • ")}</div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
