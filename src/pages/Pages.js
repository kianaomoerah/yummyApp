import Home from "./Home"
import Cuisine from "./Cuisine";
import { Route, Routes } from 'react-router-dom';

const Pages = () => {

    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine" element={ <Cuisine />}/>
            </Routes>
        // </BrowserRouter>
    )
}

export default Pages;