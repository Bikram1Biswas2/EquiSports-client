import Banner from "./Banner";
import LatestBlog from "./LatestBlog";
import OurPolicies from "./OurPolicies";
import ProductSection from "./ProductSection";


const Home = () => {
    return (
        <div className="space-y-10 mb-10">
            <Banner></Banner>
            <ProductSection></ProductSection>
            <LatestBlog></LatestBlog>
            <OurPolicies></OurPolicies>
        </div>
    );
};

export default Home;