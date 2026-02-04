import ClientFaqs from '@/components/main-ui-components/clientPage/clientFaqs/clientFaqs'
import ClientsSection from '@/components/main-ui-components/clientPage/clientSection'
import CtaBannerClient from '@/components/main-ui-components/clientPage/CTAbanner/CtaBanner'


export default function page() {
  return(

  <>
  <ClientsSection/>
  
  <ClientFaqs  />
  <CtaBannerClient/>
  </>
  )
}
