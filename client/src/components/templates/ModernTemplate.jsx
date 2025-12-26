import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="template-div max-w-4xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header
        className="p-8 pb-6 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-3xl font-light mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[13px]">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-3" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-3" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-3" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              href={data.personal_info?.linkedin}
              className="flex items-center gap-2"
            >
              <Linkedin className="size-3" />
              <span className="break-all text-[13px]">
                {data.personal_info.linkedin.split("https://www.")[1]
                  ? data.personal_info.linkedin.split("https://www.")[1]
                  : data.personal_info.linkedin}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              href={data.personal_info?.website}
              className="flex items-center gap-2"
            >
              <Globe className="size-3" />
              <span className="break-all text-[13px]">
                {data.personal_info.website.split("https://")[1]
                  ? data.personal_info.website.split("https://")[1]
                  : data.personal_info.website}
              </span>
            </a>
          )}
        </div>
      </header>

      <div className="p-8 pt-4">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-3">
            <h2 className="text-[17px] font-light mb-2 pb-1 border-b border-gray-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-justify leading-snug whitespace-pre-wrap break-words overflow-x-hidden text-[13px]">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-3">
            <h2 className="text-[17px] font-light mb-2 pb-1 border-b border-gray-200">
              Experience
            </h2>

            <div className="space-y-2 relative">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="pl-6 border-l border-gray-200"
                >

                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        {exp.position}
                      </h2>
                      <p
                        className="font-medium text-[13px]"
                        style={{ color: accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-[12px] text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-gray-700 text-justify leading-snug text-[13px] mt-2 whitespace-pre-line break-words">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-3">
            <h2 className="text-[17px] font-light mb-2 pb-1 border-b border-gray-200">
              Projects
            </h2>

            <div className="space-y-3">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l border-gray-200"
                  style={{ borderLeftColor: accentColor }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[13px] font-semibold text-gray-900">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  {p.description && (
                    <div className="text-gray-700 leading-relaxed text-[13px] mt-1 text-justify space-y-1 break-all  overflow-x-hidden">
                      {p.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-row gap-8">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="w-[50%]">
              <h2 className="text-[17px] font-light mb-2 pb-1 border-b border-gray-200">
                Education
              </h2>

              <div className="space-y-2">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 leading-snug whitespace-pre-wrap break-words overflow-x-hidden text-[13px]">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p
                      style={{ color: accentColor }}
                      className="leading-snug whitespace-pre-wrap break-words overflow-x-hidden text-[13px]"
                    >
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center text-[13px] text-gray-600">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="w-[50%]">
              <h2 className="text-[17px] font-light mb-2 pb-1 border-b border-gray-200">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[13px] text-white rounded-full"
                    style={{ backgroundColor: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
