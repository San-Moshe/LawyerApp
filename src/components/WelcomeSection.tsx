import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../core-ui/PageContainer';

const WelcomeSection: React.FC = () => {
  return (
    <PageContainer title="Welcome to Legal Practice Manager">
      <Typography variant="body1">
        Manage your clients, track billing, and keep track of important legal tasks efficiently with our intuitive platform.
      </Typography>
    </PageContainer>
  );
};

export default WelcomeSection;
