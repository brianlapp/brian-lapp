
type TestimonialCardProps = {
  quote: string;
  author: string;
  company: string;
};

const TestimonialCard = ({
  quote,
  author,
  company
}: TestimonialCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <p className="text-gray-600 italic mb-4">{quote}</p>
    <div className="flex items-center gap-2">
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
