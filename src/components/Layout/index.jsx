import Footer from "../Footer";
import Header from "../Header";
import { PageWrapper, GlobalStyles, PageContainer } from "./styled";


const Layout = ({ children }) => {
    return (
        <PageWrapper>
            <GlobalStyles />
            <Header />
            <PageContainer>
                { children }
            </PageContainer>
            <Footer />
        </PageWrapper>
    );
};

export default Layout;