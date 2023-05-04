import React from 'react';
import { ProjectsContainer } from '../../containers';
import { db } from '../../utils/firebase';
import { Layout } from '@/components';

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center gradient-bg-services py-20 px-10">
        <ProjectsContainer db={db} />
      </div>
    </Layout>
  );
}
