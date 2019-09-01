import React from 'react';
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => (
    <div>
        <Layout>
            <BurgerBuilder/>
        </Layout>
    </div>
);

export default App;