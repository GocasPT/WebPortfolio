import ProgressBar from "@ramonak/react-progress-bar";
import "./Card.css"

interface CardBarProps {
    value: number;
}  

// TODO: Complete the html structure
// TODO: Add styling
export const CardBar = ({ value } : CardBarProps) => {
    return (
        <div className="bar">
            <p>Skill: </p>
            <ProgressBar completed={value} maxCompleted={10} isLabelVisible={false} />
            <p>{value}</p>
        </div>
    );
};
  