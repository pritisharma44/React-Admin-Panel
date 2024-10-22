import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './component/layouts/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add more routes for other pages like Users, Settings */}
                </Routes>
            </Layout>
        </Router>
        
    );
}

export default App;