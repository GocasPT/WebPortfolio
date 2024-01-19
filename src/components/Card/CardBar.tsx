import ProgressBar from "@ramonak/react-progress-bar";

interface CardBarProps {
    value: number;
}  

export const CardBar = ({ value } : CardBarProps) => {
    return (
        <div className="card-bar">
            <p>Skill: </p>
            <ProgressBar completed={value} maxCompleted={10} isLabelVisible={false}/>
            <p>{value}</p>
        </div>
    );
};
  