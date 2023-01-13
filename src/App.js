import Banner from "./sections/banner";
import Layout from "./components/layout"
import Qualities from "./sections/qualities";
import Products from "./sections/products"
import Testimonial from "./sections/testimonial";

function App() {
  return (
    <Layout>
      <Banner />
      <Products/>
      <Testimonial/>
      <Qualities/>
    </Layout>
  );
}

export default App;
