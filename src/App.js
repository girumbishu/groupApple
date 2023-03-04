import React from "react";
import "./Resources/css/bootstrap.css";
import "./index.css";
import Header from "./Components/Header/Header";
import "./Components/Header/Header.css";
import Alert from "./Components/Alert/Alert";
import "./Components/Alert/Alert.css";
import FirstHighlight from "./Components/FirstHighlight/FirstHighlight";
import "./Components/FirstHighlight/FirstHighlight.css";
import SecondHighlight from "./Components/SecondHighlight/SecondHighlight";
import "./Components/SecondHighlight/SecondHighlight.css";
import ThirdHighlight from "./Components/ThirdHighlightWrapper/ThirdHighlight";
import "./Components/ThirdHighlightWrapper/thirdHighlight.css";
import FourthHighlight from "./Components/FourthHighlightWrapper/FourthHighlight";
import "./Components/FourthHighlightWrapper/fourthHighlight.css";
import FifthHighlight from "./Components/FifthHighlightWrapper/FifthHighlight";
import "./Components/FifthHighlightWrapper/fifthHighlight.css";
import SixthHighlight from "./Components/SixthHighlightWrapper/SixthHighlight";
import "./Components/SixthHighlightWrapper/sixthHighlight.css";
import Footer from "./Components/Footer/Footer";
import "./Components/Footer/footer.css";

function App() {
    return (
        <div>
            <Header />
            <Alert />
            <FirstHighlight />
            <SecondHighlight />
            <ThirdHighlight />
            <FourthHighlight />
            <FifthHighlight />
            <SixthHighlight />
            <Footer />
        </div>
    );
}

export default App;
