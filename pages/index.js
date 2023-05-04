import { Inter } from 'next/font/google'
import { Layout } from '@/components'
import { CardContainer } from '../containers/card';
import { ProfilePicContainer } from '../containers/profilePic';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen items-center justify-around md:flex-row gradient-bg-services">
        <CardContainer />
        <ProfilePicContainer />
      </div>
    </Layout>
  )
}
