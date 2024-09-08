import React from 'react';
import { useParams } from 'react-router-dom';

interface Case {
  id: string;
  title: string;
  description: string;
}

interface CaseDetailViewProps {
  cases: Case[];
}

const CaseDetailView: React.FC<CaseDetailViewProps> = ({ cases }) => {
  const { caseId } = useParams<{ caseId: string }>();
  const caseItem = cases.find(c => c.id === caseId);

  return caseItem ? (
    <div>
      <h2>{caseItem.title}</h2>
      <p>{caseItem.description}</p>
      {/* Include TimelineView component here */}
    </div>
  ) : (
    <p>Case not found.</p>
  );
};

export default CaseDetailView;
