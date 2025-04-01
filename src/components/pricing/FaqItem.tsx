
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-medium">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

export default FaqItem;
