import Banner from "./Banner";
import CustomerReviews from "./CustomerReviews";
import FAQ from "./FAQ";
import LatestBlog from "./LatestBlog";
import OurPolicies from "./OurPolicies";
import ProductSection from "./ProductSection";


const Home = () => {
    return (
        <div className="space-y-10 mb-10 dark:bg-black ">
            <Banner></Banner>
            <ProductSection></ProductSection>
            <LatestBlog></LatestBlog>
            <OurPolicies></OurPolicies>
            <CustomerReviews></CustomerReviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;