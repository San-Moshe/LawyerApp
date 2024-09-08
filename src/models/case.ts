export interface Case {
    id: string;
    title: string;
    description?: string; // Optional field
    status: 'open' | 'closed' | 'pending'; // Example statuses
    createdAt: string; // ISO Date string
    updatedAt?: string; // Optional ISO Date string
  }

export interface NewCaseInput {
    title: string;
  }
  