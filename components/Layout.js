import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
    margin: 0,
    padding: 0
    

};

const Layout = props => (
    <div>
        <Head>
            <title>Jacob Hoffman</title>
            <style>{'body { background-color: rgb(39, 42, 43); margin: 0}'}</style>
        </Head>
        <div style={layoutStyle}>
            <Header />
        
        {props.children}
        </div>
    </div>
);

export default Layout;