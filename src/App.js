import React from 'react';
import Layout from "./containers/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => (
    <div>
        <Layout>
            <BurgerBuilder/>
        </Layout>
    </div>
);

export default App;