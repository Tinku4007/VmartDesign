import Layout from '../layout/DashboardLayout';

const HomeLayout = (WrappedComponent) => {
    const HomeLayouts = (props) => (
        <Layout>
            <WrappedComponent {...props} />
        </Layout>
    );
    return HomeLayouts;
};

export default HomeLayout;