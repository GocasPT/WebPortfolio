interface BtnTextProps {
    text: string;
}	

export const BtnText = ({ text }: BtnTextProps) => {
    return (
        <p className="btn-text">{text}</p>
    )
};