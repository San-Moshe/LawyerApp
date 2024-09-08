import axios from 'axios';
import { Case, NewCaseInput } from '../models/case';

// Fetch cases
export const fetchCases = async (): Promise<Case[]> => {
  const { data } = await axios.get<Case[]>('/api/cases');
  return data;
};

// Add a new case
export const addCase = async (caseItem: NewCaseInput): Promise<Case> => {
  const { data } = await axios.post<Case>('/api/cases', caseItem);
  return data;
};
