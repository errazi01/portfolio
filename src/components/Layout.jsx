import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>

        </div>
    );
};

export default Layout;
