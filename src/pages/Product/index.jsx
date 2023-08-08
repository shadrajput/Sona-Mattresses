import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";



function Company() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/Product" element={<ProductList />} />
                    {/* <Route path="/CompanyFormModal" element={<CompanyFormModal />} />
                    <Route path="/CompanyDetails/:id" element={<CompanyDetails />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Company