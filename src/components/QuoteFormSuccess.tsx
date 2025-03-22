
import { CheckCircle } from 'lucide-react';

interface QuoteFormSuccessProps {
  compact?: boolean;
}

const QuoteFormSuccess = ({ compact = false }: QuoteFormSuccessProps) => {
  // Classes condicionais com base no modo compacto
  const containerClasses = compact
    ? "bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
    : "bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center";
    
  const iconSize = compact ? 36 : 48;
  const titleClasses = compact
    ? "text-xl font-bold text-white mb-2"
    : "text-2xl font-bold text-white mb-2";
    
  const textClasses = compact
    ? "text-gray-300 text-sm"
    : "text-gray-300";

  return (
    <div className={containerClasses}>
      <CheckCircle className="mx-auto mb-4 text-green-400" size={iconSize} />
      <h3 className={titleClasses}>Solicitação Enviada!</h3>
      <p className={textClasses}>
        Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.
      </p>
    </div>
  );
};

export default QuoteFormSuccess;
