import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout({children}) {
    return ( 
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};
export default Layout;