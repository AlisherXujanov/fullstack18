import Heading from "../components/Heading";
import Test from "../components/Test";
import "./style.scss"

function Trending() {
    return (
        <div className="trending-page-wrapper">
            <Heading>Trending</Heading>


            <div className="box">
                <Test />
            </div>
        </div>
    );
}

export default Trending;