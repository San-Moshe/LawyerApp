import React from 'react';

interface PageContainerProps {
  title?: string; // The title is optional
  children: React.ReactNode; // The children prop is required and can be any valid React node
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mx-4 my-6 min-h-[calc(100vh-64px)]">
    {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
    <div>
      {children}
    </div>
  </div>
);

export default PageContainer;
