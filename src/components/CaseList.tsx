import React from 'react';
import { Link } from 'react-router-dom';

interface CaseItem {
  id: string;
  title: string;
}

interface CaseListProps {
  cases: CaseItem[];
}

const CaseList: React.FC<CaseListProps> = ({ cases }) => (
  <ul>
    {cases.map(caseItem => (
      <li key={caseItem.id}>
        <Link to={`/cases/${caseItem.id}`}>{caseItem.title}</Link>
      </li>
    ))}
  </ul>
);

export default CaseList;
