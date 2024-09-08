import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Typography, TextField } from '@mui/material';
import PageContainer from '../core-ui/PageContainer';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCases, addCase } from '../services/caseService';
import { Case, NewCaseInput } from '../models/case';


const CaseManagement: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: cases, isLoading, error } = useQuery<Case[], Error>({
    queryKey: ['cases'],
    queryFn: fetchCases,
  });
  
  const mutation = useMutation({
    mutationFn: (newCase: NewCaseInput) => addCase(newCase),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cases'] });
    },
  });

  const [newCase, setNewCase] = useState<string>('');

  const handleAddCase = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newCase.trim()) {
      mutation.mutate({ title: newCase });
      setNewCase('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCase(event.target.value);
  };

  return (
    <PageContainer title="Case Management">
      <Typography variant="h6" gutterBottom>
        Manage and track your cases here.
      </Typography>

      <form onSubmit={handleAddCase} className="mb-4">
        <TextField
          label="New Case Title"
          variant="outlined"
          value={newCase}
          onChange={handleInputChange}
          required
          className="mr-2"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Case
        </Button>
      </form>

      {isLoading ? (
        <Typography>Loading cases...</Typography>
      ) : error ? (
        <Typography>Error loading cases</Typography>
      ) : (
        <ul>
          {cases?.map(caseItem => (
            <li key={caseItem.id}>{caseItem.title}</li>
          ))}
        </ul>
      )}
    </PageContainer>
  );
};

export default CaseManagement;
