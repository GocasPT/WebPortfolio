import EducatiobList from "@/data/EducationList.json"

// TODO: Complete the html structure
// TODO: Add styling
export const Education = () => {
  return (
    <div>
      <h1 className="title">Education</h1>

      {EducatiobList.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.educationAres}</p>
            <p>{item.yearsStart} to {item.yearEnd}</p>
          </div>
        )
      })}
    </div>
  );
};
