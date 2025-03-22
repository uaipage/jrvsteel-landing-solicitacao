
import QuoteFormCompact from './QuoteFormCompact';
import QuoteFormStandard from './QuoteFormStandard';

interface QuoteFormProps {
  compact?: boolean;
}

const QuoteForm = ({ compact = false }: QuoteFormProps) => {
  return compact ? <QuoteFormCompact /> : <QuoteFormStandard />;
};

export default QuoteForm;
