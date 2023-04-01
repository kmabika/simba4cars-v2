import { Inter } from 'next/font/google'
import { PageWrap } from '@/layouts'
import { Text } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageWrap>
      <Text>Landing Page</Text>
    </PageWrap>
  )
}
