import EducatiobList from "@/data/EducationList.json"

// TODO: Complete the html structure
// TODO: Add styling
export const Education = () => {
  return (
    <div>
      <h2 className="title">Education</h2>

      {EducatiobList.map((item) => {
        return (
          <div key={item.name} className="text">
            <p>{item.name} ({item.acronym})</p>
            <p>{item.educationLevel} - {item.educationAres}</p>
            <p>{item.yearsStart} to {item.yearEnd}</p>
          </div>
        )
      })}
    </div>
  );
};
