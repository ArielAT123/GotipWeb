interface SectionTitleProps {
    text: string;
  }
  
  const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => (
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{text}</h2>
  )
  
  export default SectionTitle
  