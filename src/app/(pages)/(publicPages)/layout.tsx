import Footer from "@/components/main-ui-components/Footer/Footer";
import Header from "@/components/main-ui-components/Header/Header";

import { PropsWithChildren } from "react";


const layout = ({children}:PropsWithChildren) => {
     
    return(
        <>
 
    <Header />
        {children}
    
        <Footer/>
        </>
    )
}

export default layout;